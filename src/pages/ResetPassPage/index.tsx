import { FormInput } from "components/FormInput";
import Template from "components/Template";
import useForm from "hooks/useForm";
import { ResetPassTypes } from "types/sign.type";
import { StyledResetPass } from "./style";
import { useState } from "react";
import { useAuth } from "services/useAuth";
import classNames from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";
import { errorMessage, successMessage } from "utils/helpers/toast";
import { Messages } from "utils/enums/messages";

const ResetPass = () => {
    const resetPassValidation = {
        password: {
            required: true,
            min: 8,
        },
        confirmPassword: {
            required: true,
            min: 8,
        },
    }

    const { register, handleSubmit, errors, handleError } = useForm<ResetPassTypes>(resetPassValidation);
    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const [loading, setLoading] = useState<boolean>(false);
    const { resetPassword } = useAuth();

    const submit = async (data: ResetPassTypes) => {
        const token = searchParams.get("token");
        const secret = searchParams.get("secret");

        if (data.password !== data.confirmPassword) {
            return handleError('confirmPassword', "Password mismatch");
        } else if (errors.confirmPassword) {
            handleError('confirmPassword', "");
        }

        if (!token?.trim() || !secret?.trim()) {
            return errorMessage(Messages.TokenOrSecretIsNotExist);
        }

        setLoading(true);
        const result = await resetPassword({ ...data, token, secret });
        setLoading(false);

        if (result.hasError) {
            return errorMessage(result.message);
        }

        successMessage(result.detail);
        navigate("/login");
    };

    return (
        <StyledResetPass>
            <Template title="Create new Password?">
                <form onSubmit={handleSubmit(submit)}>
                    <FormInput
                        label="Password"
                        placeholder="Password"
                        type="password"
                        error={errors?.password}
                        {...register("password")}
                    />
                    <FormInput
                        label="Confirm Password"
                        placeholder="Password"
                        type="password"
                        error={errors?.confirmPassword}
                        {...register("confirmPassword")}
                    />
                    <button
                        className={classNames("btn submit-btn", {
                            "btn-loading": loading,
                        })}
                        disabled={loading}
                    >
                        Reset Password
                    </button>
                </form>
            </Template>
        </StyledResetPass>
    );
};

export default ResetPass;
