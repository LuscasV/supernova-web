import styled, {css} from "styled-components";
import { colors } from "../../styles"

export const variants = {
    primary: css`
        background-color: ${colors.black};
        color: ${colors.white};
    `,
    secondary: css`
        background-color: ${colors.white};
        color: ${colors.black};
        border: 1px solid ${colors.black};
    `
};

export const sizes = {
    sm: css`
        padding: 4px;
        font-size: 1rem;
    `,
    md: css`
        padding: 8px 14px;
        font-size: 1.2rem;
    `,
    lg: css`
        padding: 14px 20px;
        font-size: 1.4rem;
    `
}

export const BaseButton = styled.button`
    border: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    cursor: pointer;
    text-decoration: none;

    ${({ variant = "primary" }) => variants[variant]}
    ${({ size = "md" }) => sizes[size]}

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.98);
    }
`