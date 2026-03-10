import BannerSection from '../Home/BannerSection'
import HeroSection from '../../components/HeroSection';
import CategoryCards from '../../components/CategoryCards';
import FeaturedSection from './FeaturedSection';

const Home = () => {

    return (
        <>
        <HeroSection />
        <CategoryCards />
        <BannerSection />
        <FeaturedSection />
        </>
    )
}

export default Home;