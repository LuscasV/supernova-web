import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #ffffff;
    color: #000;
    padding: 60px 40px 20px;
    margin-top: 36px;

`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 30px;

    max-width: 1200px;
    margin: 0 auto;
`

export const Mission = styled.div`
    h3 {
        margin-bottom: 16px;
        font-family: "Jersey 10", sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
    }

    p {
        line-height: 1.3;
        font-size: 0.9rem;
    }
`

export const Column = styled.div`
    p {
        font-family: "Jersey 10", sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
    }
    h3 {
        font-family: "Jersey 10", sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        margin-bottom: 16px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        font-size: 0.9rem;
        margin-bottom: 8px;
        cursor: pointer;
    }

    img {
        margin-top: 20px;
    }
`

export const Social = styled.div`
    margin-top: 30px;
`

export const Icons = styled.div`
    display: flex;

    p {
        margin-bottom: 10px;
    }

    img {
        margin-right: 4px;
    }
`

export const Bandeiras = styled.span`
    margin-top: 20px;
`

export const Copy = styled.div`
    text-align: center;
    margin-top: 40px;
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    opacity: 0.7;
`