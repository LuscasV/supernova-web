import ProductCarousel from "../../components/ProductCarousel";
import { Div, Title } from "./styles";
import camiseta from "../../assets/camiseta.jpg"
import blusa from "../../assets/blusa.jpg"

const products = [
    { id: 1, image: camiseta ,name: "Camiseta Básica", price: 50.69 },
    { id: 2, image: blusa ,name: "Camiseta Preta", price: 59.90 },
    { id: 3, image: camiseta , name: "Camiseta Vermelha", price: 45.00 },
    { id: 4, image: blusa, name: "Camiseta Azul", price: 65.00 }
  ]

  
const FeaturedSection = () => {
    return (
        <>
        <Div className="container">
            <Title>Produtos em Destaque</Title>
            <ProductCarousel products={products} />
        </Div>
        </>

    )
}

export default FeaturedSection