import * as S from "./styles"


import camiseta from "../../assets/camiseta.jpg"
import blusa from "../../assets/blusa.jpg"

import camisetas from "../../assets/CategoriesMale/camisetasCategory.jpg"
import camisas from "../../assets/CategoriesMale/camisasCategory.jpg"
import jaquetas from "../../assets/CategoriesMale/JaquetasCategory.jpg"
import bermudas from "../../assets/CategoriesMale/bermudaCategory.jpg"
import calcas from "../../assets/CategoriesMale/calcasCategory.jpg"
import acessorios from "../../assets/CategoriesMale/acessoriosCategory.jpg"
import moletons from "../../assets/CategoriesMale/moletonsCategory.jpg"
import ProductCard from "../../components/ProductCard"

const Wishlist = () => {

    const products = [
        { id: 1, image: camiseta ,name: "Camiseta Básica", price: 50.69 },
        { id: 2, image: blusa ,name: "Camiseta Preta", price: 59.90 },
        { id: 3, image: camiseta ,name: "Camiseta Vermelha", price: 45.00 },
        { id: 4, image: blusa, name: "Camiseta Azul", price: 65.00 },
        { id: 5, image: camiseta ,name: "Camiseta Básica", price: 50.69 },
        { id: 6, image: blusa ,name: "Camiseta Preta", price: 59.90 },
        { id: 7, image: camiseta ,name: "Camiseta Vermelha", price: 45.00 },
        { id: 8, image: blusa, name: "Camiseta Azul", price: 65.00 },
    ]

    return (
        <S.WishPage className="container">
        <p>página inicial {">"} minha conta {">"} <strong>favoritos</strong></p>
            <div className="wish-header">
                <svg viewBox="0 0 1024.00 1024.00" fill="#000000" class="icon" version="1.1" width="35" height="35"
                    xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="15.36"><g id="SVGRepo_bgCarrier" 
                    stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" 
                    stroke="#CCCCCC" stroke-width="10.24"></g><g id="SVGRepo_iconCarrier">
                    <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="">
                    </path></g></svg>

                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"><path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" 
                    fill="#000000"></path></g>
                    </svg>
                <h1>meus favoritos (6)</h1>
            </div>
            <S.Line />

            <S.ProductsGrid>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </S.ProductsGrid>
        </S.WishPage>
    )
}

export default Wishlist