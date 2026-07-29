import * as S from "./styles"

import tiktok from "../../assets/tiktok.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"
import bandeiras from "../../assets/bandeiras.png"

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.FooterGrid>
                <S.Mission>
                    <h3>nossa missão</h3>
                    <p>A Supernova nasceu para impulsionar a 
                    evolução da indústria <br /> da moda.  
                    Aprendemos, inovamos e 
                    melhoramos constantemente, <br /> 
                    para criar um mundo onde todos são 
                    a subir a barra <br /> e buscar excelência.</p>
                    
                    <S.Social>
                        <p>nos siga nas redes sociais</p>

                <S.Icons>
                    <span><img src={instagram} alt="instagram" /></span>
                    <span><img src={tiktok} alt="tiktok" /></span>
                    <span><img src={youtube} alt="youtube" /></span>
                    <span><img src={facebook} alt="facebook" /></span>
                </S.Icons>
                    </S.Social>
                    </S.Mission>
            

            <S.Column>
                <h3>departamentos</h3>
                <ul>
                    <li>promos</li>
                    <li>masculino</li>
                    <li>feminino</li>
                    <li>acessórios</li>
                    <li>calçados</li>
                    <li>promos</li>
                </ul>
            </S.Column>

            <S.Column>
                <h3>sobre nós</h3>
                <ul>
                    <li>quem somos</li>
                    <li>lojas</li>
                </ul>
            </S.Column>

            <S.Column>
                <p>formas de pagamento</p>

                <span><img src={bandeiras} alt="" /></span>
            </S.Column>
            </S.FooterGrid>

            

            <S.Copy>Supernova © 2026. TODOS OS DIREITOS RESERVADOS.</S.Copy>


        </S.FooterContainer>
    )
}

export default Footer