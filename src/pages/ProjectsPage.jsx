import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import Hero from "../components/HeroProjects";
import Footer from "../components/Footer";
import ContactRedirect from "../components/ContactRedirect";
import client from "../CMS/contentfulClient";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({ content_type: "projects" });
        const formattedProjects = response.items.map((item) => {
          const { title, languages, description, idea, website, images, functions } = item.fields;
          console.log("Fetched project:", item.fields); // Log the project data
          return {
            title,
            languages,
            description,
            idea,
            website,
            functions,
            images: images ? images.map((img) => img.fields.file.url) : [],
          };
        });
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    
    fetchProjects();
  }, []);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,           
    autoplaySpeed: 3000,      
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-[#222831]">
      <Header />
      <Hero />
      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold dark:text-white">Projects</h1>
      </div>
      <div className="flex-grow px-4 lg:px-20 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#31363F] rounded-lg shadow-lg p-4 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="rounded-t-lg w-full object-cover h-40"
              />
              <p className="text-sm mt-2 text-[#F2911C] font-semibold">{project.languages}</p>
              <h2 className="text-xl font-bold text-black dark:text-white mt-2">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white dark:bg-[#31363F] rounded-lg p-8 relative w-full max-w-4xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black dark:text-white text-4xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Slider {...sliderSettings} className="w-full mb-6">
                {(selectedProject.images || []).map((img, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="rounded-lg w-full max-h-[70vh] object-contain"
                    />
                  </div>
                ))}
              </Slider>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">{selectedProject.title}</h2>
              <p className="text-lg text-[#F2911C] font-semibold mb-2">{selectedProject.languages}</p>
              <p className="text-xl mb-6 text-black dark:text-white">{selectedProject.description}</p>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Het Idee:</h3>
              <p className="text-lg mb-6 text-black dark:text-white">
                {selectedProject.idea}
              </p>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Functies:</h3>
              {Array.isArray(selectedProject.functions) ? (
                <ul className="mb-6 text-lg text-black dark:text-white space-y-2">
                  {selectedProject.functions.map((func, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#F2911C]">•</span>
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-6 text-lg text-black dark:text-white">
                  {selectedProject.functions}
                </p>
              )}

              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F2911C] text-white px-6 py-2 rounded-lg text-xl hover:bg-[#E05A00] transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}

      <ContactRedirect />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
