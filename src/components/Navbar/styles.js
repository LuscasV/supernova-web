import styled from 'styled-components'

export const NavWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;

    background: ${({ scrolled, searchOpen }) => (scrolled || searchOpen ? "#000" : "transparent")};
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

        opacity: ${({ searchOpen}) => (searchOpen ? 0 : 1)};
        visibility: ${({ searchOpen }) => (searchOpen ? "hidden" : "visible")};

        transition: opacity 0.2s ease;
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
    border-bottom: 1px solid white;
    background: transparent;
    color: white;
    font-size: 18px;
    font-family: "Roboto", sans-serif;

    outline: none;

    transition: all 0.3s ease;
`