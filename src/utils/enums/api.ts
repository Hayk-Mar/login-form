const BASE_API = "https://auth-qa.qencode.com/v1/auth";

export enum ApiEndpoints {
    Login = `${BASE_API}/login`,
    RefreshToken = `${BASE_API}/refresh-token`,
    ForgotPassword = `${BASE_API}/password-reset`,
    ResetPassword = `${BASE_API}/password-set`,
}

export enum RequestMessages {
    Error = "Something went wrong"
}