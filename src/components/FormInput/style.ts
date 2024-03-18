import { styled } from "styled-components";

export const StyledFormInput = styled.div`
    label {
        font-size: 15px;
        font-weight: 500;
        line-height: 21px;
        color: var(--dark-text-color);
        margin-bottom: 5px;
        display: inline-block;
    }

    input {
        width: 100%;
        border: var(--border-style);
        color: var(--dark-text-color);
        border-radius: var(--radius);
        padding: 12px;
        font-size: 15px;
    }
`;

export const StyledPasswordInput = styled.div`
    position: relative;
    input {
        padding-right: 40px;
    }

    span {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        line-height: 1px;
        cursor: pointer;
    }
`;
