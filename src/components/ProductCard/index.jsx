import * as S from "./styles"
import Button from "../Button"

import camiseta from "../../assets/camiseta.jpg"
import heart from "../../assets/heart.svg"
import heartFilled from "../../assets/heart-bold.svg"
import { useState } from "react"

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(null)
    const [isFavorite, setIsFavorite] = useState(false)
    
    const colors = ["white", "black", "red"]
    
    return (
        <S.Card>
            <S.ImageWrapper>
            <S.ProductImage src={product.image} alt="Camiseta" />
            <S.Icon onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? (
                    <S.HeartFilled
                    viewBox="-5 -241 587 525">
                    <path d="M290-170c61-61 160-61 221 0s61 160 0 221L288 274 66 51C5-10 5-109 66-170s160-61 221 0l2 1 1-1z" />
                    </S.HeartFilled>
                ) : (
                    <S.HeartOutline viewBox="-10 -206 524 452">
                        <path d="M144-160C84-160 36-112 36-52c0 33 13 64 36 87l155 155c6 6 15 10 25 10s19-4 26-10L432 35c23-23 36-54 36-87 0-60-48-108-108-108-39 0-74 21-93 52-3 6-9 9-15 9s-12-3-15-9c-19-31-54-52-93-52zM0-52c0-79 65-144 144-144 43 0 82 19 108 49 26-30 65-49 108-49 80 0 144 65 144 144 0 42-17 83-46 112L303 215c-14 13-32 21-51 21s-37-8-51-21L47 60C17 31 0-10 0-52z" />
                    </S.HeartOutline>
                )}
            </S.Icon>
            
            <S.HoverOverlay>
                <S.FullWidthButton variant="secondary" size="sm">Adicionar ao carrinho</S.FullWidthButton>
                <S.Select>
                <option value="P">tamanho</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                </S.Select>
            </S.HoverOverlay>
            </S.ImageWrapper>

            <S.CardContainer>
            <S.Title>{product.name}</S.Title>
            <S.Value>R$ {product.price}</S.Value>
            <S.ColorContainer>
                {colors.map((color, index) => (
                    <S.ColorOption 
                    key={index}
                    color={color}
                    isSelected={selectedColor === color}
                    onClick={() => setSelectedColor(color)}
                    />
                ))}
            </S.ColorContainer>
            </S.CardContainer>
            
            
        </S.Card>
    )
}

export default ProductCard