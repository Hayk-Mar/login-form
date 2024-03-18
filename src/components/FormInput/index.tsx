import { FC } from "react";
import { FormInputProps } from "types/sign.type";
import { StyledFormInput } from "./style";
import { Input, PasswordInput } from "./InputControl";

export const FormInput: FC<FormInputProps> = ({ label, ...props }) => {
    const RenderInput = props.type === "password" ? PasswordInput : Input;

    return (
        <StyledFormInput className="input-wrapper">
            {label && <label htmlFor={props.name}>{label}</label>}
            <RenderInput {...props} />
            {props.error && <small className="input-error">{props.error}</small>}
        </StyledFormInput>
    );
};
