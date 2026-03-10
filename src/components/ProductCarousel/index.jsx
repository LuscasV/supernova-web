import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import ProductCard from '../ProductCard'
import { Section } from './styles'


const ProductCarousel = ({ products}) => {
    return (
        <Section className='container'>
            <div>
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={3}
        navigation
        >
        {products?.map((product) => (
            <SwiperSlide key={product.id}>
                <ProductCard product={product} />
            </SwiperSlide>
        ))}
        </Swiper>
            </div>
        </Section>
    )
}

export default ProductCarousel