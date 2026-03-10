
import { useEffect, useRef, useState } from "react"
import { Card, CategoryCard, CategoryGrid } from "./styles"
import promo from '../../assets/card-promo.webp'
import masculino from '../../assets/card-masculino.webp'
import feminino from '../../assets/card-feminino.webp'
import acessorios from '../../assets/card-acessorios.webp'
import calcados from '../../assets/card-calcados.jpeg'


const CategoryCards = () => {
    const gridRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.3 }
        )

        if (gridRef.current) observer.observe(gridRef.current)
        return () => observer.disconnect()
    }, [])


    return (
        <div className="container">
            <Card>
                <CategoryGrid ref={gridRef} className={visible ? "visible" : ""}>
                    <CategoryCard $bg={promo} style={{ transitionDelay: "0s" }}>
                        <h3>PROMO</h3>
                    </CategoryCard>
                    <CategoryCard $bg={masculino} style={{ transitionDelay: "0.1s" }}>
                        <h3>MASCULINO</h3>
                    </CategoryCard>
                    <CategoryCard $bg={feminino} style={{ transitionDelay: "0.2s" }}>
                        <h3>FEMININO</h3>
                    </CategoryCard>
                    <CategoryCard $bg={acessorios} style={{ transitionDelay: "0.3s" }}>
                        <h3>ACESSÓRIOS</h3>
                    </CategoryCard>
                    <CategoryCard $bg={calcados} style={{ transitionDelay: "0.4s" }}>
                        <h3>CALÇADOS</h3>
                    </CategoryCard>
                </CategoryGrid>
            </Card>
        </div>
    )
}

export default CategoryCards