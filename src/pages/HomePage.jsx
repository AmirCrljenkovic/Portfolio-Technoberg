import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Banner from "../components/Banner"
import Team from "../components/Team";
import MissionVision from "../components/MissionVision";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ClientReviews from "../components/ClientReviews";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Header />
                <Hero />
                <About />
                <Banner />
                <Team />
                <MissionVision />
                <Projects />
                <Services />
                <ClientReviews />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
