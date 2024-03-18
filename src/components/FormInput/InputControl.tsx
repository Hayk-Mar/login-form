import { FormInputProps } from "types/sign.type";
import { StyledPasswordInput } from "./style";
import { EyeIcon } from "icons/Eye";
import { useState } from "react";

export const Input = (props: FormInputProps) => <input {...props} />;

export const PasswordInput = ({ type, ...props }: FormInputProps) => {
    const [inputType, setInputType] = useState<string>(type);

    const handleTypeChange = () => {
        const types = {
            text: "password",
            password: "text",
        };

        setInputType((prev) => types[prev as keyof typeof types]);
    };

    return (
        <StyledPasswordInput>
            <input id={props.name} {...props} type={inputType} />
            <span onClick={handleTypeChange}>
                <EyeIcon />
            </span>
        </StyledPasswordInput>
    );
};
