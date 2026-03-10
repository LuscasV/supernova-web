import styled from "styled-components";

export const Section = styled.section`
    margin-top: 2rem;
    margin-bottom: 3rem;
    max-width: 1280px;

    .swiper-button-next,
    .swiper-button-prev {
        color: grey;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    
    /* tamanho das setas do carousel */
    .swiper {
        --swiper-navigation-size: 30px;
    }
`