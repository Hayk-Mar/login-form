import { FormInput } from "components/FormInput";
import Template from "components/Template";
import useForm from "hooks/useForm";
import { ForgotPassTypes } from "types/sign.type";
import { StyledForgotPass } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "services/useAuth";
import classNames from "classnames";
import { errorMessage, successMessage } from "utils/helpers/toast";

const ForgotPass = () => {
    const forgotPassValidation = {
        email: {
            required: true,
            email: true,
        },
    }
    const { register, handleSubmit, errors } = useForm<ForgotPassTypes>(forgotPassValidation);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const { forgotPassword } = useAuth();

    const submit = async (data: ForgotPassTypes) => {
        setLoading(true);
        const result = await forgotPassword(data);
        setLoading(false);

        if (result.hasError) {
            return errorMessage(result.message);
        }
        
        successMessage(result.detail);
        navigate("/login");
    };

    return (
        <StyledForgotPass>
            <Template title="Forgot Password?">
                <form onSubmit={handleSubmit(submit)}>
                    <FormInput
                        placeholder="Enter your email"
                        type="email"
                        error={errors?.email}
                        {...register("email")}
                    />
                    <button
                        className={classNames("btn submit-btn", {
                            "btn-loading": loading,
                        })}
                        disabled={loading}
                    >
                        Send
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className={classNames("btn", {
                            skeleton: loading,
                        })}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                </form>
            </Template>
        </StyledForgotPass>
    );
};

export default ForgotPass;
