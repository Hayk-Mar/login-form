import { GoogleIcon } from "icons/Google";
import { StyledSignWithApps } from "./style";
import { GithubIcon } from "icons/Github";

export const SignWithApps = () => {
    const buttons = [
        {
            name: "Google",
            icon: <GoogleIcon />,
        },
        {
            name: "Github",
            icon: <GithubIcon />,
        },
    ];

    return (
        <StyledSignWithApps>
            <div className="btn-container">
                {buttons.map(({ name, icon }) => (
                    <button className="btn" key={name}>
                        {icon} {name}
                    </button>
                ))}
            </div>
            <div className="sign-or">
                <span>OR</span>
            </div>
        </StyledSignWithApps>
    );
};
