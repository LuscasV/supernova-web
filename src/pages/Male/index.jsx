import * as S from "./styles"

import male from "../../assets/male.png"
import ProductCard from "../../components/ProductCard"

import camiseta from "../../assets/camiseta.jpg"
import blusa from "../../assets/blusa.jpg"

import camisetas from "../../assets/CategoriesMale/camisetasCategory.jpg"
import camisas from "../../assets/CategoriesMale/camisasCategory.jpg"
import jaquetas from "../../assets/CategoriesMale/JaquetasCategory.jpg"
import bermudas from "../../assets/CategoriesMale/bermudaCategory.jpg"
import calcas from "../../assets/CategoriesMale/calcasCategory.jpg"
import acessorios from "../../assets/CategoriesMale/acessoriosCategory.jpg"
import moletons from "../../assets/CategoriesMale/moletonsCategory.jpg"

const Male = () => {

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
        <S.MaleSection>
            <S.TopBanner>
                <p className="container">As melhores ofertas do Brasil</p>
            </S.TopBanner>

        <p className="container">página inicial {">"} <strong>masculino</strong> </p>
        
        <img src={male} alt="" />

        <S.ProductsToolbar className="container">
            <span className="count">520 produtos encontrados</span>

            <S.ToolbarRight>
                <select name="" id="">
                <option value="">novidades</option>
                <option value="">menor preço</option>
                <option value="">maior preço</option>
            </select>
            <span>filtrar</span>
            </S.ToolbarRight>
        </S.ProductsToolbar>

        <S.Category className="container">
            <S.CategoryCard>
                <img src={camisetas} alt="" />
                <h3>Camisetas</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={camisas} alt="" />
                <h3>Camisas</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={jaquetas} alt="" />
                <h3>Jaquetas</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={moletons} alt="" />
                <h3>Moletons</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={bermudas} alt="" />
                <h3>Bermudas</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={calcas} alt="" />
                <h3>Calças</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={acessorios} alt="" />
                <h3>Acessórios</h3>
            </S.CategoryCard>
        </S.Category>

        <S.Title className="container">roupas masculinas</S.Title>

        <S.ProductsGrid className="container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} /> 
            ))}
        </S.ProductsGrid>
        </S.MaleSection>
    )
}

export default Male