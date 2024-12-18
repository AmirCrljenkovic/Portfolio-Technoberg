import React from "react";

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="pt-20 pb-20 flex flex-col justify-center bg-gray-50 dark:bg-[#18191B]"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Onze Missie en Visie
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            <strong>Onze Missie:</strong> Bij Techoberg Development Team streven we ernaar om innovatieve en
            betrouwbare softwareoplossingen te ontwikkelen die de digitale transformatie van bedrijven
            ondersteunen. Wij zetten ons in voor het leveren van hoogwaardige technologieën die groei en
            efficiëntie bevorderen.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <strong>Onze Visie:</strong> Wij zien een wereld waarin technologie mensen en bedrijven dichter
            bij elkaar brengt. Ons doel is om een leidende rol te spelen in het creëren van toegankelijke,
            duurzame en toekomstbestendige digitale oplossingen die de wereld veranderen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
