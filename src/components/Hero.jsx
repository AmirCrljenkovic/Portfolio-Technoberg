import React from "react";
import heroImage from "../img/gradient.webp";
import cloudImage from "../img/cloud-bg-home.png"; 
import cloudImageDark from "../img/cloud-bg-home-dark.png"; 

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            
            <div className="absolute inset-0 bg-black opacity-25 z-0"></div>

            
            <div className="absolute bottom-0 left-0 w-full h-[50vh] z-10"> 
                <img 
                    src={cloudImage} 
                    alt="Cloud" 
                    className="w-full h-full object-cover dark:hidden" 
                />
                
                <img 
                    src={cloudImageDark} 
                    alt="Cloud Dark" 
                    className="w-full h-full object-cover hidden dark:block" 
                />
            </div>

            
            <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
                    Welkom bij het Techoberg Development Team
                </h1>
                <p className="text-lg md:text-xl mb-6 dark:text-white">
                    Wij bouwen de toekomst met code!
                </p>
                <a
                    href="#about"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-block dark:bg-[#222831] dark:text-white dark:hover:bg-gray-800"
                >
                    Ontdek Meer
                </a>
            </div>
        </section>
    );
};

export default Hero;
