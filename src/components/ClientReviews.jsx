
import React from "react";
import heroImage from "../img/gradient.webp";

const reviews = [
    { text: "Techoberg's expertise helped us launch our app faster and more efficiently.", company: "Company A" },
    { text: "Professional and reliable team, exceeded our expectations!", company: "Company B" },
    { text: "Highly recommend Techoberg for any development needs.", company: "Company C" },
];

const ClientReviews = () => {
    return (
        <section id="client-reviews" className="relative bg-gray-100 py-12">

            <div className="relative">
                <img src={heroImage} alt="Hero" className="w-full object-cover h-[600px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>


                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <h2 className="text-3xl font-bold">Tevreden klanten door heel Nederland</h2>
                </div>


                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-2xl font-semibold">Client Count</h3>
                    <p className="text-5xl font-bold mt-2">40+</p>
                </div>

                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 text-white text-center">
                    <h3 className="text-2xl font-semibold">Projects Count</h3>
                    <p className="text-5xl font-bold mt-2">40+</p>
                </div>

                <div className="absolute bottom-0 w-full flex justify-center items-center pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <p className="text-gray-800 mb-4">"{review.text}"</p>
                                <span className="text-sm text-gray-500">- {review.company}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
