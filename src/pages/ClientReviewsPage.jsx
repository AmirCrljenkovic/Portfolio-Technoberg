import React, { useState } from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroReviews";
import Footer from "../components/Footer";
import logo from "../img/logo1.png";

const ClientReviewsPage = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    {
      companyName: "Tech Innovations",
      business: "We specialize in AI-driven solutions for businesses.",
      logo: logo,
      review: "Excellent service and innovative solutions. Highly recommended!",
      stars: 5,
    },
    {
      companyName: "Creative Minds",
      business: "A design agency providing creative branding services.",
      logo: logo,
      review: "Creative Minds exceeded our expectations with their branding services.",
      stars: 4,
    },
    {
      companyName: "BuildPro",
      business: "We offer construction and renovation services.",
      logo: logo,
      review: "Professional team and top-notch work. Our office renovation was a success.",
      stars: 5,
    },
    {
      companyName: "GreenTech Solutions",
      business: "We provide sustainable energy solutions for homes and businesses.",
      logo: logo,
      review: "Our solar panel installation was fast and efficient. Great experience!",
      stars: 5,
    },
  ];

  const openModal = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroImage text="Client Reviews" />

      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold">Our Clients' Feedback</h1>
      </div>

      <div className="flex-grow px-4 lg:px-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out p-4 transform hover:scale-105"
              style={{ minHeight: '300px' }}
            >
              <div className="flex justify-between items-start w-full">
                {/* Left Section: Company Name and Business Description */}
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {review.companyName}
                  </h2>
                  <p className="text-sm mt-2 text-gray-600 leading-relaxed">
                    {review.business}
                  </p>
                </div>

                {/* Right Section: Company Logo */}
                <img
                  src={review.logo}
                  alt={`${review.companyName} logo`}
                  className="h-12 w-24 object-contain"
                />
              </div>

              {/* Review Button */}
              <button
                onClick={() => openModal(review)}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-[#F3911B] to-[#E6215A] text-white rounded-full hover:from-[#E6215A] hover:to-[#F3911B] transition-all duration-1000 ease-in-out"
              >
                View Review
              </button>



            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying review */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-4xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedReview.companyName}</h2>

            <div className="flex items-center mb-4">
              {Array(selectedReview.stars)
                .fill()
                .map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
                ))}
            </div>

            <p className="text-lg text-gray-700 mb-6">{selectedReview.review}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ClientReviewsPage;
