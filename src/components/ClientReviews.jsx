import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../img/gradient.webp";

const reviews = [
    { text: "Techoberg's expertise helped us launch our app faster and more efficiently.", company: "Company A" },
    { text: "Professional and reliable team, exceeded our expectations!", company: "Company B" },
    { text: "Highly recommend Techoberg for any development needs.", company: "Company C" },
];

const ClientReviews = () => {
    const [clientCount, setClientCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [isInView, setIsInView] = useState(false);


    useEffect(() => {
        if (isInView) {
            const targetClientCount = 30;
            const targetProjectCount = 50;

            let clientCountCurrent = 0;
            let projectCountCurrent = 0;

            // Client Count Animation
            const clientInterval = setInterval(() => {
                clientCountCurrent += 1;
                setClientCount(clientCountCurrent);

                if (clientCountCurrent >= targetClientCount) {
                    clearInterval(clientInterval);
                }
            }, 50);


            const projectInterval = setInterval(() => {
                projectCountCurrent += 1;
                setProjectCount(projectCountCurrent);

                if (projectCountCurrent >= targetProjectCount) {
                    clearInterval(projectInterval);
                }
            }, 50);
        }
    }, [isInView]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const section = document.getElementById("client-reviews");
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="client-reviews" className="relative bg-gray-100 py-12">
            <div className="relative">
                <img src={heroImage} alt="Hero" className="w-full object-cover h-[600px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>


                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <h2 className="text-3xl font-bold">Tevreden klanten door heel Nederland</h2>
                </div>


                <div className="absolute top-[40%] left-1/4 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-2xl font-semibold">Client Count</h3>
                    <p className="text-5xl font-bold mt-1">{clientCount}+</p>
                </div>

                <div className="absolute top-[40%] right-1/4 transform translate-x-1/2 text-white text-center">
                    <h3 className="text-2xl font-semibold">Projects Count</h3>
                    <p className="text-5xl font-bold mt-1">{projectCount}+</p>
                </div>


                <div className="absolute bottom-0 w-full flex flex-col justify-center items-center pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <p className="text-gray-800 mb-4">"{review.text}"</p>
                                <span className="text-sm text-gray-500">- {review.company}</span>
                            </div>
                        ))}
                    </div>


                    <div className="mt-12">
                        <Link to="/Reviews">
                            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                                View All Reviews
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
