import { FormInput } from "components/FormInput";
import Template from "components/Template";
import useForm from "hooks/useForm";
import { LoginTypes } from "types/sign.type";
import { StyledLoginPage } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "services/useAuth";
import { useState } from "react";
import classNames from "classnames";
import { errorMessage } from "utils/helpers/toast";

const LoginPage = () => {
    const loginValidation = {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            min: 8,
        },
    }

    const { register, handleSubmit, errors } = useForm<LoginTypes>(loginValidation);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { loginAccount } = useAuth();

    const submit = async (data: LoginTypes) => {
        setLoading(true);
        const result = await loginAccount(data);
        setLoading(false);

        if (result.hasError) {
            return errorMessage(result.message);
        }

        navigate("/", { replace: true });
    };

    return (
        <StyledLoginPage>
            <Template title="Log in to your account" signWithApps>
                <form onSubmit={handleSubmit(submit)}>
                    <FormInput
                        placeholder="Work email"
                        type="email"
                        error={errors?.email}
                        {...register("email")}
                    />
                    <div>
                        <FormInput
                            placeholder="Password"
                            type="password"
                            error={errors?.password}
                            {...register("password")}
                        />
                        <Link to="/forgot-password">Forgot your password?</Link>
                    </div>
                    <button
                        className={classNames("btn submit-btn", {
                            "btn-loading": loading,
                        })}
                        disabled={loading}
                    >
                        Log in to Qencode
                    </button>
                </form>

                <p className="sign-up-link">
                    Is your company new to Qencode? <Link to="#">Sign up</Link>
                </p>
            </Template>
        </StyledLoginPage>
    );
};

export default LoginPage;
