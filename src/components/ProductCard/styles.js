import styled from "styled-components";

export const Card = styled.div`
    width: 290px;
    height: 100%;
    position: relative;
    overflow: visible;

    .container {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    }
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`

export const ProductImage = styled.img`
        width: 100%;
        height: 400px;
        object-fit: cover;
`

export const Title = styled.span`
    display: block;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
`

export const Value = styled.span`
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: bold;
`

export const Icon = styled.div`
    position: absolute;
    top: 1rem; /* TOP, LEFT E TRANSLATE CENTRALIZA O TEXT DENTRO DO BANNER*/
    left: 16rem;
    z-index: 2;
    cursor: pointer;
`

export const HeartFilled = styled.svg`
    width: 20px;
    height: 20px;
    cursor:pointer;
    color: red;
    transition: transform 0.2s ease, color 0.2s ease;

    path {
    fill: currentColor;
  }

    animation: pop 0.3s ease;

    @keyframes pop {
        0% { transform: scale(1);}
        50% { transform: scale(1.3);}
        100% { transform: scale(1);}
    }
`

export const HeartOutline = styled.svg`
    width: 20px;
    height: 20px;
    cursor:pointer;
    color: grey;
    transition: transform 0.2s ease, color 0.2s ease;

    path {
    fill: currentColor;
  }
`

export const ColorContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 1.2rem;
    justify-content: center;
`

export const ColorOption = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({color }) => color };
    cursor: pointer;

    border: ${({ color }) =>
    color === "white" ? "1px solid #999" : "1px solid #ddd"};

    outline: ${({ isSelected }) => 
    isSelected ? "1px solid #333" : "none"};
`

export const Select = styled.select`
    padding: 8px;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid #000;
    margin-top: 1.2rem;
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
`