import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ExampleProj from "../img/ExampleProject.webp";

const projects = [
  {
    image: ExampleProj,
    languages: "HTML, CSS, JavaScript",
    title: "Project 1",
    description: "This is the first project.",
    steps: "1. Set up project structure\n2. Develop frontend with HTML/CSS\n3. Implement functionality using JavaScript.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "React, Tailwind CSS",
    title: "Project 2",
    description: "This is the second project.",
    steps: "1. Create React components\n2. Style using Tailwind CSS\n3. Add state management.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Node.js, Express",
    title: "Project 3",
    description: "This is the third project.",
    steps: "1. Set up server using Express\n2. Create APIs\n3. Integrate with frontend.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Python, Django",
    title: "Project 4",
    description: "This is the fourth project.",
    steps: "1. Set up Django project\n2. Develop models and views\n3. Create frontend templates.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Ruby on Rails",
    title: "Project 5",
    description: "This is the fifth project.",
    steps: "1. Generate Rails application\n2. Build models and controllers\n3. Implement views and routes.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Java, Spring Boot",
    title: "Project 6",
    description: "This is the sixth project.",
    steps: "1. Set up Spring Boot application\n2. Develop REST APIs\n3. Connect with frontend.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "PHP, Laravel",
    title: "Project 7",
    description: "This is the seventh project.",
    steps: "1. Create Laravel project\n2. Build controllers and models\n3. Develop views with Blade.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Vue.js, Vuex",
    title: "Project 8",
    description: "This is the eighth project.",
    steps: "1. Initialize Vue project\n2. Create components and store\n3. Implement routing.",
    website: "https://www.technoberg.nl"
  },
  {
    image: ExampleProj,
    languages: "Angular, TypeScript",
    title: "Project 9",
    description: "This is the ninth project.",
    steps: "1. Set up Angular application\n2. Develop components\n3. Add services and routing.",
    website: "https://www.technoberg.nl"
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>

      <div className="flex-grow px-4 lg:px-20 mb-12"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#E7215B] rounded-lg shadow-lg p-4 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg w-full object-cover h-40"
              />
              <p className="text-sm mt-2 text-[#F2911C] font-semibold">{project.languages}</p>
              <h2 className="text-xl font-bold text-white mt-2">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 relative w-full max-w-4xl h-full overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-4xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg w-full object-cover max-h-96 mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-[#F2911C] font-semibold mb-2">{selectedProject.languages}</p>
              <p className="text-xl mb-6">{selectedProject.description}</p>
              <h3 className="text-2xl font-bold mb-4">Steps:</h3>
              <pre className="text-lg mb-6 whitespace-pre-wrap">{selectedProject.steps}</pre>
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


      <Footer />
    </div>
  );
};

export default ProjectsPage;
