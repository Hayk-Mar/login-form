import { atom } from "recoil";
import { UserAuthTypes } from "types/sign.type";

export const userAuthState = atom<UserAuthTypes | null>({
    key: "UserAuth",
    default: null,
});
