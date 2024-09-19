import React from "react";
import project1 from "../assets/project1.jpg";

const AllProjects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Detailed description of Project 1.",
            image: project1,
        },
        {
            title: "Project 2",
            description: "Detailed description of Project 2.",
            image: project1,
        },
        {
            title: "Project 3",
            description: "Detailed description of Project 3.",
            image: project1,
        },
        {
            title: "Project 4",
            description: "Detailed description of Project 4.",
            image: project1,
        },
    ];

    return (
        <section id="all-projects" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    All Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;