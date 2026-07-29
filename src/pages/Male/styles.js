import styled from "styled-components";


export const MaleSection = styled.div`
    .container {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 2rem;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
`

export const TopBanner = styled.div`
    background-color: #000;
    margin-top: 100px;
    padding: 6px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`

export const ProductsToolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        font-size: 1.2rem;
    }

    .count {
        color: #737373;
    }
`

export const ToolbarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    select {
        border: none;
        outline: none;
        background-color: transparent;
        appearance: none;
        font-size: 1.2rem;
        padding: 3px;
        cursor: pointer;
    }
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
`

export const Category = styled.div`
    border-radius: 50%;
    display: grid;
    grid-template-columns: repeat(7, auto);
    gap: 28px;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
`

export const CategoryCard = styled.div`
    margin: 12px 0 12px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    overflow: hidden;
    cursor:pointer;

    h3 {
        background-color: #fff;
        padding: 0.1rem 0.4rem;
        border-radius:12px;
        font-size:0.9rem;
        z-index: 1;
        font-weight: bold;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-bottom: 5px;
    }
`

export const Title = styled.h4`
    text-align: center;
    font-size: 32px;
    margin: 32px 0;
`