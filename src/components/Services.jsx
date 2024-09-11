
import React from "react";

const services = [
    { title: "Python", description: "We offer robust Python development services for web, data science, and automation.", link: "/service/python" },
    { title: "JavaScript", description: "Experienced in JavaScript for dynamic and interactive web applications.", link: "/service/javascript" },
    { title: "React", description: "React development for modern and responsive user interfaces.", link: "/service/react" },
    { title: "Node.js", description: "Server-side development using Node.js for scalable applications.", link: "/service/nodejs" },
    { title: "HTML5", description: "Expert HTML5 development for semantic and accessible web content.", link: "/service/html5" },
    { title: "CSS3", description: "Advanced CSS3 for visually appealing and responsive designs.", link: "/service/css3" },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Onze Diensten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <a href={service.link} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Lees Meer</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
