import React from "react";
import heroImage from "../img/gradient.webp";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welkom bij het Techoberg Development Team
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Wij bouwen de toekomst met code!
                </p>
                <a
                    href="#about"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg inline-block"
                >
                    Ontdek Meer
                </a>
            </div>
        </section>
    );
};

export default Hero;
