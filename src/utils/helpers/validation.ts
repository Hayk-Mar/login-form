import { ValidationTypes } from "types/sign.type";
import { ValidationErrors } from "utils/enums/messages";
const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;


export const validator = (
    validation: ValidationTypes,
    value: string
): string => {
    if (validation.required && !value.trim()) {
        return ValidationErrors.Required;
    }

    if (validation.min && value.length < validation.min) {
        return validation.min + ValidationErrors.Length;
    }

    if (validation.email && !validEmailRegex.test(value)) {
        return ValidationErrors.Email;
    }

    return "";
};
