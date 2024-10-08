import React from "react";

const ContactRedirect = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Als je geïnteresseerd bent in wat je hier ziet, neem contact met ons op om te bespreken wat wij voor u kunnen betekenen.
      </h2>
      <p className="text-lg mb-6">
        We kijken er naar uit om samen te werken aan een succesvol project!
      </p>
      <a
        href="https://www.technoberg.nl/contact-us/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#F2911C] hover:bg-[#E05A00] text-white font-bold py-2 px-6 rounded-lg transition duration-300"
      >
        Neem contact op
      </a>
    </div>
  );
};

export default ContactRedirect;
