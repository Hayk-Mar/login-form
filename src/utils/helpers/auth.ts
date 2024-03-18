import { UserAuthTypes } from "types/sign.type";

export const saveCredentials = (result: UserAuthTypes) => {
    const data = {
        refresh_token: result.refresh_token,
        refresh_token_expire: result.refresh_token_expire,
        access_token: result.access_token,
        token_expire: result.token_expire,
    };

    window.localStorage.setItem("userAuth", JSON.stringify(data));
    return data;
}