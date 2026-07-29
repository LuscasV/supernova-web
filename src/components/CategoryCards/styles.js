import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    margin-top: 4rem;
    border-radius:12px;

    .container {
    max-width: 1280px;
    margin: 0 auto;
    }
`

export const CategoryCard = styled.div`
    width: 230px;
    height: 230px;

    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    border-radius: 16px;
    overflow: hidden;
    cursor:pointer;

    opacity: 0;
    transform: translateX(-300px);
    transition: all 0.6s ease-out;

    h3 {
        background-color: #fff;
        padding: 0.3rem 0.9rem;
        border-radius:12px;
        font-size:1.3rem;
        z-index: 1;
    }
`


export const CategoryGrid = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    &.visible ${CategoryCard} {
    opacity: 1;
    transform: translateX(0);
  }
`