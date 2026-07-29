import styled from "styled-components";
import Button from "../Button"

export const Card = styled.div`
    width: 290px;
    height: 100%;
    position: relative;

`
export const HoverOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 1rem;

    background: rgba(226, 226, 226, 0.3);

    opacity: 0;
    transform: translateY(100%);
    transition: all 0.5s ease;
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;

    &:hover ${HoverOverlay} {
        opacity: 1;
        transform: translateY(0);
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
        height: 100%;
        object-fit: cover;
`

export const Title = styled.span`
    display: block;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
`

export const Value = styled.span`
    font-size: 1rem;
    font-weight: bold;
`

export const Icon = styled.div`
    position: absolute;
    top: 12px; /* TOP, LEFT E TRANSLATE CENTRALIZA O TEXT DENTRO DO BANNER*/
    right: 12px;
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
    margin-bottom: 0.5rem;
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
    width: 95%;
    padding: 4px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #000;
    margin-top: 0.2rem;
    margin-bottom:0.5rem;
    font-size: 16px;
    font-weight: 400;

    text-align: center;
    cursor: pointer;
`

export const FullWidthButton = styled(Button)`
    width: 95%;
`;