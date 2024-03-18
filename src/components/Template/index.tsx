import { FC, PropsWithChildren } from "react";
import { TemplateProps } from "types/sign.type";
import logo from "assets/images/Logo.svg";
import { StyledTemplate } from "./style";
import { SignWithApps } from "components/SignWithApps";

const Template: FC<PropsWithChildren<TemplateProps>> = ({
    title,
    isLogo = true,
    signWithApps, // this can be reused in signUp page
    children,
}) => {
    return (
        <StyledTemplate>
            <div className="template-wrapper">
                {isLogo && (
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                )}
                <h1>{title}</h1>
                {signWithApps && <SignWithApps />}
            </div>
            <div>{children}</div>
        </StyledTemplate>
    );
};

export default Template;
