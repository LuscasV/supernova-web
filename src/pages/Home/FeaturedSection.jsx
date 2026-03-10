import ProductCarousel from "../../components/ProductCarousel";
import { Div, Title } from "./styles";

const products = [
    { id: 1, name: "Camiseta Básica", price: 50.69 },
    { id: 2, name: "Camiseta Preta", price: 59.90 },
    { id: 3, name: "Camiseta Vermelha", price: 45.00 },
    { id: 4, name: "Camiseta Azul", price: 65.00 }
  ]

  
const FeaturedSection = () => {
    return (
        <>
        <Div className="container">
            <Title>Produtos em Destaque</Title>
        </Div>
        <ProductCarousel products={products} />
        </>

    )
}

export default FeaturedSection