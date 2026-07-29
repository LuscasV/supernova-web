import styled, { keyframes } from 'styled-components'


export const Banner = styled.section`
    width: 100%;
    height: 750px;
    overflow: hidden;
    margin-top: 80px;

    position: relative; /* CAPTURA O TEXT DENTRO DO BANNER */
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`

export const Text = styled.span`
    position: absolute;
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-size: 5rem;
    color: #fff;
    top: 50%; /* TOP, LEFT E TRANSLATE CENTRALIZA O TEXT DENTRO DO BANNER*/
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0 0 4px rgba(0,0,0, 6);

    
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`

export const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 1rem;
`