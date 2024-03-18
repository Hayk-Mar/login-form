import { styled } from "styled-components";

export const StyledLoginPage = styled.div`
    a {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: var(--base-color);
        text-decoration: none;
        transition: all ease-out 0.3s;

        &:hover {
            cursor: pointer;
            color: var(--base-color-hover);
        }
    }

    form {
        .input-wrapper {
            margin-bottom: 25px;

            &:last-of-type {
                margin-bottom: 0;
            }
        }
        a {
            display: block;
            margin-top: 15px;
            margin-bottom: 30px;
            text-align: right;
        }
    }

    .sign-up-link {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        margin-top: 20px;
    }
`;
