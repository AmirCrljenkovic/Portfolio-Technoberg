import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../img/gradient-icons.png";

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
        <section id="client-reviews" className="relative bg-gray-100 dark:bg-[#222831] py-12 overflow-hidden">
            <div className="relative">
                <div
                    className="bg-cover bg-center min-h-full bg-fixed flex flex-col justify-between"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >

                    <div className="absolute inset-0 bg-black opacity-30"></div>


                    <div className="relative z-10 text-center text-white px-4 pt-6 md:pt-12">
                        <h2 className="text-xl md:text-3xl font-bold">Tevreden klanten door heel Nederland</h2>
                    </div>


                    <div className="relative z-10 flex justify-between items-center text-white px-4 py-4">
                        <div className="flex justify-between w-full space-x-4 md:space-x-0 md:flex-row md:justify-around">
                            <div className="text-center mb-4 md:mb-0">
                                <h3 className="text-sm md:text-2xl font-semibold">Client Count</h3>
                                <p className="text-2xl md:text-5xl font-bold mt-1">{clientCount}+</p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-sm md:text-2xl font-semibold">Projects Count</h3>
                                <p className="text-2xl md:text-5xl font-bold mt-1">{projectCount}+</p>
                            </div>
                        </div>
                    </div>


                    <div className="relative z-10 w-full flex flex-col justify-center items-center pb-8 px-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full max-w-screen-lg mx-auto px-4">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-[#222831] p-4 md:p-6 rounded-lg shadow-md text-center transition-colors duration-300"
                                >
                                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 mb-2 md:mb-4">"{review.text}"</p>
                                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">- {review.company}</span>
                                </div>
                            ))}
                        </div>


                        <div className="mt-6 md:mt-12">
                            <Link to="/Reviews">
                                <button className="bg-blue-500 dark:bg-[#222831] dark:hover:bg-gray-700 text-white py-2 px-4 md:py-2 md:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                                    View All Reviews
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
