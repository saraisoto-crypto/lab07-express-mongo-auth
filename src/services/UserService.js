import mongoose from 'mongoose';
import userRepository from '../repositories/UserRepository.js';
import { validateBirthdate, calculateAge } from '../utils/validators.js';

// Nunca devolvemos el password
function toDTO(user) {
    return {
        id: user._id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        birthdate: user.birthdate,
        age: user.birthdate ? calculateAge(user.birthdate) : null,
        url_profile: user.url_profile,
        address: user.address,
        roles: user.roles.map(r => r.name),
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}

function httpError(message, status) {
    const err = new Error(message);
    err.status = status;
    return err;
}

class UserService {
    async getAll() {
        const users = await userRepository.getAll();
        return users.map(toDTO);
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw httpError('Id de usuario no válido', 400);
        }
        const user = await userRepository.findById(id);
        if (!user) throw httpError('Usuario no encontrado', 404);
        return toDTO(user);
    }

    async updateMe(id, data) {
        // Solo se pueden editar estos campos (email y roles no)
        const allowed = ['name', 'lastName', 'phoneNumber', 'birthdate', 'url_profile', 'address'];
        const updates = {};
        for (const field of allowed) {
            if (data[field] !== undefined) updates[field] = data[field];
        }

        if (Object.keys(updates).length === 0) {
            throw httpError('No hay datos para actualizar', 400);
        }

        for (const field of ['name', 'lastName', 'phoneNumber']) {
            if (field in updates && !String(updates[field]).trim()) {
                throw httpError(`El campo ${field} no puede estar vacío`, 400);
            }
        }

        if ('birthdate' in updates) validateBirthdate(updates.birthdate);

        const user = await userRepository.update(id, updates);
        if (!user) throw httpError('Usuario no encontrado', 404);
        return toDTO(user);
    }
}

export default new UserService();