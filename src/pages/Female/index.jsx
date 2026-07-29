import * as S from "./styles"

import male from "../../assets/male.png"
import ProductCard from "../../components/ProductCard"

import camiseta from "../../assets/camiseta.jpg"
import blusa from "../../assets/blusa.jpg"

import blusas from "../../assets/CategoriesFemale/blusasCategory.jpg"
import jaquetas from "../../assets/CategoriesFemale/jaquetaCategory.jpg"
import moletons from "../../assets/CategoriesFemale/moletomCategory.jpg"
import vestidos from "../../assets/CategoriesFemale/vestidosCategory.jpg"
import shorts from "../../assets/CategoriesFemale/shortsCategory.jpg"
import saias from "../../assets/CategoriesFemale/saiasCategory.jpg"
import acessorios from "../../assets/CategoriesFemale/acessoriosCategory.jpg"
import femininoBanner from '../../assets/femininoBanner.webp'

const Female = () => {

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

        <p className="container">página inicial {">"} <strong>feminino</strong> </p>
        
        <img src={femininoBanner} alt="" />

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
                <img src={blusas} alt="" />
                <h3>Blusas</h3>
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
                <img src={vestidos} alt="" />
                <h3>Vestidos</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={shorts} alt="" />
                <h3>shorts</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={saias} alt="" />
                <h3>Saias</h3>
            </S.CategoryCard>
            <S.CategoryCard>
                <img src={acessorios} alt="" />
                <h3>Acessórios</h3>
            </S.CategoryCard>
        </S.Category>

        <S.Title className="container">roupas femininas</S.Title>
        

        <S.ProductsGrid className="container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} /> 
            ))}
        </S.ProductsGrid>
        </S.MaleSection>
    )
}

export default Female