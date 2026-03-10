import { Hero, Subtitle } from "./styles"
import men from "../../assets/hero-image.png"


const HeroSection = () => {

    return (
        <>
        <Hero className="hero">
        <img src={men} alt="" />
        </Hero>
        <Subtitle>pix: ganhe 10% off nos pagamentos com pix</Subtitle>
        </>
    )
}

export default HeroSection