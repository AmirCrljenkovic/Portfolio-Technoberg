import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
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
                
                <div className="bg-white dark:bg-[#222831]"> 
                    <Banner /> 
                </div>
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
