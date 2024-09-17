import React, { useState } from "react";
import icoon from "../img/icon.png"; 

const services = [
    { title: "Python", description: "We offer robust Python development services for web, data science, and automation." },
    { title: "JavaScript", description: "Experienced in JavaScript for dynamic and interactive web applications." },
    { title: "React", description: "React development for modern and responsive user interfaces." },
    { title: "Node.js", description: "Server-side development using Node.js for scalable applications." },
    { title: "HTML5", description: "Expert HTML5 development for semantic and accessible web content." },
    { title: "CSS3", description: "Advanced CSS3 for visually appealing and responsive designs." },
];

const Services = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    const handleShowPopup = (service) => {
        setCurrentService(service);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setCurrentService(null);
    };

    return (
        <section id="services" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Onze Diensten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <button 
                                onClick={() => handleShowPopup(service)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Meer info
                            </button>
                        </div>
                    ))}
                </div>
                {isPopupVisible && currentService && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg relative w-full max-w-md max-h-screen-lg flex flex-col items-center">
                            <button 
                                onClick={handleClosePopup}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                &times;
                            </button>
                            <img src={icoon} alt="Service Icon" className="w-24 h-24 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">{currentService.title}</h3>
                            <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-xs text-center">
                                <p className="text-gray-800 text-base">{currentService.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
