function badRequest(message) {
    const err = new Error(message);
    err.status = 400;
    return err;
}

// Min 8 caracteres, 1 mayúscula, 1 dígito y 1 caracter especial ( # $ % & * @ )
export function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#$%&*@]).{8,}$/;
    if (typeof password !== 'string' || !regex.test(password)) {
        throw badRequest(
            'La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 dígito y 1 caracter especial (# $ % & * @)'
        );
    }
}

export function validateBirthdate(birthdate) {
    const date = new Date(birthdate);
    if (isNaN(date.getTime())) {
        throw badRequest('La fecha de nacimiento no es válida');
    }
    if (date > new Date()) {
        throw badRequest('La fecha de nacimiento no puede ser futura');
    }
}

export function calculateAge(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}