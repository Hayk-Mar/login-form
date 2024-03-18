import { FormEvent, useRef, useState } from "react";
import { PassedToFormValidationType } from "types/sign.type";
import { validator } from "utils/helpers/validation";

function useForm<T>(validation?: PassedToFormValidationType<Partial<T>>) {
    const form = useRef<T | object>({});
    const [errors, setErrors] = useState<Partial<T>>({});

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        form.current = { ...form.current, [name]: value };
    };

    const handleError = (name: keyof T, error: string) => {
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit =
        (callback: Function) => (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            let errorDetected = false;

            for (const key in validation) {
                const hasError = validator(
                    validation[key],
                    form.current[key as keyof (T | {})] || ""
                );

                if (hasError) {
                    errorDetected = true;
                    handleError(key, hasError);
                } else {
                    handleError(key, "");
                }
            }

            if (errorDetected) return;
            callback(form.current);
        };

    const register = (name: keyof T) => {
        return {
            onChange,
            name,
        };
    };

    return {
        handleSubmit,
        register,
        handleError,
        errors,
    };
}

export default useForm;
