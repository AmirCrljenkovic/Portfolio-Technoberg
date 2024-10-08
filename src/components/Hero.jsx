import React from "react";
import heroImage from "../img/gradient.webp";
import cloudImage from "../img/cloud-bg-home.png";
import cloudImageDark from "../img/cloud-bg-home-dark.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center min-h-screen flex items-center"
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

            
            <div className="relative z-20 text-left text-white px-6 md:px-16 lg:px-24">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 dark:text-white">
                    Welkom bij
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
                    Technoberg Development
                </h1>
                <p className="text-lg md:text-2xl mb-8 dark:text-white">
                    Wij bouwen de toekomst met code!
                </p>

                
                <a
                    href="#about"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg dark:bg-[#222831] dark:text-white dark:hover:bg-gray-800 transition duration-300"
                    style={{ marginTop: '40px', marginBottom: '40px' }} 
                >
                    Ontdek Meer
                </a>
            </div>
        </section>
    );
};

export default Hero;
