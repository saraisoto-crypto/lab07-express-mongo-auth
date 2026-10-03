import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/UserRepository.js';
import roleRepository from '../repositories/RoleRepository.js';
import { validatePassword, validateBirthdate } from '../utils/validators.js';

class AuthService {
    async signUp({ email, password, name, lastName, phoneNumber, birthdate, url_profile, address }) {
        const existing = await userRepository.findByEmail(email);
        if (existing) {
            const err = new Error('El email ya se encuentra en uso');
            err.status = 400;
            throw err;
        }

        // Validar antes de encriptar
        validatePassword(password);
        validateBirthdate(birthdate);

        // Lógica para encriptar el password
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS ?? '10', 10);
        const hashed = await bcrypt.hash(password, saltRounds);

        // El registro público siempre asigna el rol "user"
        let roleDoc = await roleRepository.findByName('user');
        if (!roleDoc) roleDoc = await roleRepository.create({ name: 'user' });

        const user = await userRepository.create({
            email,
            password: hashed,
            name,
            lastName,
            phoneNumber,
            birthdate,
            url_profile,
            address,
            roles: [roleDoc._id]
        });

        return {
            id: user._id,
            email: user.email,
            name: user.name,
            lastName: user.lastName
        };
    }

    async signIn({ email, password }) {
        const user = await userRepository.findByEmail(email);
        if (!user) {
            const err = new Error('Credenciales inválidas');
            err.status = 401;
            throw err;
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            const err = new Error('Credenciales inválidas');
            err.status = 401;
            throw err;
        }

        const token = jwt.sign(
            {
                sub: user._id,
                roles: user.roles.map(r => r.name)
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || '1h'
            }
        );

        return { token };
    }
}

export default new AuthService();