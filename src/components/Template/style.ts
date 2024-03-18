import { styled } from "styled-components";

export const StyledTemplate = styled.div`
    padding-top: 15vh;
    max-width: 400px;
    margin: auto;

    @media screen and (max-width: 400px) {
        max-width: 350px;
    }

    .template-wrapper {
        margin-bottom: 30px;

        .logo {
            text-align: center;
            margin-bottom: 80px;

            img {
                width: 180px;
            }
        }

        h1 {
            font-size: 30px;
            font-weight: 700;
            line-height: 39px;
            text-align: center;
            color: var(--title-color);
        }
    }
`;
