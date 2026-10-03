import bcrypt from 'bcrypt';
import userRepository from '../repositories/UserRepository.js';
import roleRepository from '../repositories/RoleRepository.js';

const ADMIN_EMAIL = 'admin@admin.com';
const ADMIN_PASSWORD = 'Admin#2025';

export default async function seedUsers() {
    const existing = await userRepository.findByEmail(ADMIN_EMAIL);
    if (existing) return;

    const adminRole = await roleRepository.findByName('admin');
    if (!adminRole) return;

    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS ?? '10', 10);
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);

    await userRepository.create({
        email: ADMIN_EMAIL,
        password: hashed,
        name: 'Admin',
        lastName: 'Sistema',
        phoneNumber: '999999999',
        birthdate: new Date('1990-01-01'),
        address: 'Lima, Perú',
        roles: [adminRole._id]
    });

    console.log(`Seeded admin: ${ADMIN_EMAIL}`);
}