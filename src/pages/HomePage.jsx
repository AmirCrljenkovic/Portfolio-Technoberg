import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import MissionVision from "../components/MissionVision";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ClientReviews from "../components/ClientReviews";




const HomePage = () => {
    return <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <About />
        <Team />
        <MissionVision />
        <Projects />
        <Services />
        <ClientReviews />
    </div>
}

export default HomePage