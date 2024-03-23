export const loginValidation = {
    email: {
        required: true,
        email: true,
    },
    password: {
        required: true,
        min: 8,
    },
}

export const forgotPassValidation = {
    email: {
        required: true,
        email: true,
    },
}

export const resetPassValidation = {
    password: {
        required: true,
        min: 8,
    },
    confirmPassword: {
        required: true,
        min: 8,
    },
}