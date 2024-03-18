export interface TemplateProps {
    isLogo?: boolean
    title: string
    signWithApps?: boolean
}

export type ValidationTypes = { // Written recording to our task requirements
    email?: boolean
    min?: number
    required?: boolean
}

export type PassedToFormValidationType<Type> = {
    [key in keyof Type]: ValidationTypes
}

export interface FormInputProps {
    label?: string
    placeholder?: string
    error?: string
    type: string
    name: string
}

export type LoginTypes = {
    email: string
    password: string
}

export type ForgotPassTypes = {
    email: string
}

export type ResetPassTypes = {
    password: string
    confirmPassword: string
    secret: string
    token: string
}

export type UserAuthTypes = {
    access_token: string
    token_expire: number,
    refresh_token: string
    refresh_token_expire: number
}