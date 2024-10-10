import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-white py-12 dark:bg-[#222831]">
            <div className="container mx-auto px-4">
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center dark:text-white">
                    About Us
                </h2>
    
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6 dark:text-gray-300">
                    We are a team of passionate developers dedicated to building high-quality software solutions.
                    Our expertise ranges from web development to mobile app development and everything in between.
                </p>

                <div className="flex justify-center">
                    <img
                        src="https://via.placeholder.com/200"
                        alt="Team Photo"
                        className="rounded-full shadow-lg dark:shadow-gray-800"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
