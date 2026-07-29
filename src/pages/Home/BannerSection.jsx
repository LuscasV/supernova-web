import { useEffect, useRef, useState } from 'react'
import banner from '../../assets/section-image.jpg'
import { Banner, Text } from './styles'

const BannerSection = () => {
    const bannerRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // 👈 para de observar depois da primeira vez
                }
            },
            { threshold: 0.3 }
        );

        if (bannerRef.current) observer.observe(bannerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Banner
            ref={bannerRef} className={visible ? "visible" : ""}
        >
            <img src={banner} alt="banner" />
            <Text>A MELHOR LOJA DE ROUPAS</Text>
        </Banner>
    )
}

export default BannerSection