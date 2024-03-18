import { styled } from "styled-components";

export const StyledSignWithApps = styled.div`
    .btn-container {
        display: flex;
        gap: 15px;
        margin-bottom: 30px;

        .btn {
            font-size: 14px;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    }

    .sign-or {
        border-top: 1px solid #e3e6e9;
        position: relative;

        span {
            background-color: white;
            padding: 0 10px;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #BEC5CC
        }
    }
`;
