import styled from 'styled-components'

export const NavWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;

    background: ${({ scrolled }) => (scrolled ? "#000" : "transparent")};
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
        font-size: 2.5rem;
        text-decoration: none;
        color: #fff;
    }

    .menu {
        display: flex;
        gap: 2rem;
        font-size: 2rem;
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
        color: #fff;
        text-decoration: none;
        font-weight: 500;
    }
`