import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import heroImage from "../img/gradient-icons.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    { text: "Techoberg's expertise helped us launch our app faster and more efficiently.", company: "Company A" },
    { text: "Professional and reliable team, exceeded our expectations!", company: "Company B" },
    { text: "Highly recommend Techoberg for any development needs.", company: "Company C" },
    { text: "They turned our vision into a reality.", company: "Company D" },
    { text: "Exceptional quality and attention to detail.", company: "Company E" },
    { text: "Our go-to partner for all development needs.", company: "Company F" },
    { text: "The best tech team we've worked with!", company: "Company G" },
    { text: "They consistently deliver top-notch work.", company: "Company H" },
    { text: "Highly recommend for their professionalism.", company: "Company I" },
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

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            // Responsive Slider settings.
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 800, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 785, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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

                    <div className="relative z-10 w-full flex flex-col justify-center items-center pb-8 px-4 mt-8">
                        <Slider {...sliderSettings} className="w-full max-w-screen-lg mx-auto px-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="px-2">
                                    <div
                                        className="bg-white dark:bg-[#222831] p-4 rounded-lg shadow-md text-center transition-transform duration-300 mb-4 md:mb-0"
                                        style={{ maxWidth: "100%", minWidth: "100%", height: "200px" }}
                                    >
                                        <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 mb-2 md:mb-4">"{review.text}"</p>
                                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">- {review.company}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
