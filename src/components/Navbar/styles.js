import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;

    background: ${({ scrolled, searchOpen }) => (scrolled || searchOpen ? "#fff" : "transparent")};
    transition: background 0.3s ease;
`

export const NavContainer = styled.nav`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo a {
        font-family: "Jersey 10", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
        text-decoration: none;
        color: ${({ scrolled, searchOpen }) => 
        (scrolled || searchOpen ? "#000" : "#ffffff")};
    }

    .menu {
        display: flex;
        gap: 2rem;
        font-size: 2rem;

        opacity: ${({ searchOpen}) => (searchOpen ? 0 : 1)};
        visibility: ${({ searchOpen }) => (searchOpen ? "hidden" : "visible")};

        transition: opacity 0.2s ease;
    }

    .menu li a {
        font-family: "Jersey 10", sans-serif;
        font-weight: 400;
    }

    .icons {
        display: flex;
        gap: 1.5rem;
    }

    svg {
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: 2rem;
    }

    a {
        color: ${({ scrolled, searchOpen }) => 
        (scrolled || searchOpen ? "#000" : "#ffffff")};
        text-decoration: none;
        font-weight: 500;
    }
`

export const Search = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    svg {
        cursor: pointer;
        z-index: 2;
    }
`

export const SearchInput = styled.input`
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);

    width: ${({ open }) => (open ? "720px" : "0px")};
    opacity: ${({ open }) => (open ? "1" : "0")};

    height: 22px;

    padding: 0 10px;

    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    color: #000;
    font-size: 18px;
    font-family: "Roboto", sans-serif;

    outline: none;

    transition: all 0.3s ease;
`

export const MegaMenu = styled.div`
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1280px;
    height: 300px;

    background: white;
    border-top: 1px solid #ccc;
    z-index: 999;

    box-shadow: 0 4px 10px rgba(0,0,0,0.08);

    animation: fadeDown 0.25s ease;

    @keyframes fadeDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .mega-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 2rem;
    }

    .menu-grid {
        display: grid;
        grid-template-columns: repeat(4, auto );
        gap: 2rem 6rem;
    }

    .menu-grid a {
        font-size: 0.9rem;
        color: #000;
        text-decoration: none;
        font-family: "Roboto Condensed", sans-serif;
        transition: opacity 0.2s ease;
    }

    .menu-grid a:hover {
        opacity: 0.6;
    }

    .empty-cell {
        visibility: hidden;
    }

    .strong {
        font-weight: bold;
    }

    .menu-image {
        width: 400px;
        height: 230px;
        flex-shrink: 0;
    }

    .menu-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`

export const CartMenu = styled.div`
    position: absolute;
    top: 80px;
    left: 79%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 16px;

    background: white;
    z-index: 999;

    box-shadow: 0 4px 10px rgba(0,0,0,0.08);

    animation: fadeDown 0.25s ease;

    @keyframes fadeDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .cart-item {
        display: flex;
        gap: 18px;
    }

    .cart-item img {
    width: 80px;
    height: 80px;
    }
    
    .cart-info {
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        gap: 4px;
        min-width: 0;

        strong {
            font-size: 0.9rem;
        }
    }
    
    .name {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .details {
        display: flex;
        flex-direction: column;
        margin: 4px 0 4px 0;

        span {
            font-size: 0.9rem;
            color: #ccc;
        }
    }

    .cart-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .divider {
        height: 1px;
        background-color: #ccc;
    }

    .cart-subtotal {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
    }

    .go-cart {
        text-align: center;
        font-size: rem;
        color: #000;
    }
`

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,0.6);

    z-index: 999;

    opacity: 0;
    animation: fadeOverlay .3s ease forwards;

    @keyframes fadeOverlay {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`

export const LoginModal = styled.div`
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);

    width: 100%;
    max-width: 400px;
    height: auto;
    padding: 24px;

    background-color: #fff;
    z-index: 1000;

    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: 4px;

    opacity: 0;
    animation: fadeIn 0.50s ease forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    h1 {
        margin-bottom: 1.5rem;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: end;

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

export const ForgotPassword = styled(Link)`
    font-size: 12px;
    color: ${colors.black};
    font-weight: bold;
    text-decoration: underline;
    align-self: flex-end;
    margin-bottom: 1.5rem;
`

export const InputGroup = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
    
    label {
        position: absolute;
        top: -8px;
        left: 16px;

        background: ${colors.white};
        padding: 0 6px;

        font-size: 12px;

        z-index: 1;
    }

    label.error {
        color : ${colors.red}
    }

`

export const ButtonsDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    margin-top: 12px;

    button {
        flex: 1;
    }
`