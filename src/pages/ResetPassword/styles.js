import styled from "styled-components";
import { colors } from "../../styles"

export const ResetPage = styled.div`
        
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 8rem 2rem 4rem;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    color: ${colors.black};
`

export const LoginForm = styled.form`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    margin: 2rem auto 0;

    input {
        width: 100%;
        border: 1px solid ${colors.gray};
        border-radius: 4px;
        padding: 12px;
        font-size: 1rem;
    }

    input.error {
        border: 1px solid ${colors.red}
    }

    p {
        text-align: center;
        margin: 1.3rem 0 1.3rem 0;
        font-size: 16px;
    }

    .error-message {
        color: ${colors.red};
        font-size: 12px;
        text-align: start;
    }

    .match-error {
        display: block;
        color: ${colors.red};
        font-size: 12px;
        margin: 0 0 12px;
        text-align: start;
    }
`