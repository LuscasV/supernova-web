import styled from "styled-components";
import { colors } from "../../styles";

export const WishPage = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 6rem 2rem;

    

    p {
        margin: 0 0 2rem 0;
        font-size: 0.8rem;
    }

    .wish-header {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        h1 {
            font-size: 1.5rem;
        }
    }
`

export const Line = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;

    border: 1px solid #ccc;
    opacity: 30%;
    width: 100%;

`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
`