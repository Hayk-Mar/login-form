import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userAuthState } from "store/userAuth";
import {
    ForgotPassTypes,
    LoginTypes,
    ResetPassTypes,
    UserAuthTypes,
} from "types/sign.type";
import { ApiEndpoints } from "utils/enums/api";
import { send } from "utils/helpers/requests";
import { saveCredentials } from "utils/helpers/auth";

export const useAuth = () => {
    const setUserAuth = useSetRecoilState(userAuthState);

    const refreshToken = async (userAuth: UserAuthTypes) => {
        if (!userAuth) return;

        const { refresh_token } = userAuth;

        const result = await send(() =>
            axios.post(ApiEndpoints.RefreshToken, {
                refresh_token: refresh_token,
            })
        );

        if (result.hasError) {
            return result;
        }

        const data = saveCredentials(result);
        setUserAuth(data);
        return data;
    };

    const loginAccount = async ({ email, password }: LoginTypes) => {
        const result = await send(() =>
            axios.post(ApiEndpoints.Login, {
                email,
                password,
            })
        );

        if (result.hasError) {
            return result;
        }

        const data = saveCredentials(result);
        setUserAuth(data);
        return data;
    };

    const forgotPassword = async ({ email }: ForgotPassTypes) => {
        const result = await send(() =>
            axios.post(ApiEndpoints.ForgotPassword, {
                email,
                redirect_url: `${window.location.origin}/reset-password`,
            })
        );

        if (result.hasError) {
            return result;
        }

        return result;
    };

    const resetPassword = async ({
        password,
        confirmPassword,
        secret,
        token,
    }: ResetPassTypes) => {
        const result = await send(() =>
            axios.post(ApiEndpoints.ResetPassword, {
                password,
                confirmPassword,
                secret,
                token,
            })
        );

        if (result.hasError) {
            return result;
        }

        return result;
    };

    const logout = () => {
        localStorage.removeItem("userAuth");
        setUserAuth(null);
    }

    return {
        loginAccount,
        refreshToken,
        forgotPassword,
        resetPassword,
        logout
    };
};
