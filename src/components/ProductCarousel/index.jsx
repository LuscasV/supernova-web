import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import ProductCard from '../ProductCard'
import { Section } from './styles'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.50
        }
    }
}

const cardVariants = {
    hidden : {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.50,
            ease: "easeOut"
        }
    }
}


const ProductCarousel = ({ products}) => {
    return (
        <Section>
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            >
        <Swiper modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={3}
        navigation
        >
        {products?.map((product) => (
            <SwiperSlide key={product.id}>
                <motion.div variants={cardVariants}>
                <ProductCard product={product} />
                </motion.div>
            </SwiperSlide>
        ))}
        </Swiper>
            </motion.div>
        </Section>
    )
}

export default ProductCarousel