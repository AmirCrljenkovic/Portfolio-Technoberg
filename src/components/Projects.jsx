import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.jpg";


const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const projects = [
        {
            title: "Project 1",
            description: "A brief description of Project 1.",
            image: project1,
        },
        {
            title: "Project 2",
            description: "A brief description of Project 2.",
            image: project1,
        },
        {
            title: "Project 3",
            description: "A brief description of Project 3.",
            image: project1,
        },
        {
            title: "Project 4",
            description: "A brief description of Project 4.",
            image: project1,
        },
    ];

    return (
        <section id="projects" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Onze Projecten
                </h2>
                <div className="max-w-4xl mx-auto">
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="p-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="text-center mt-8">
                    <Link
                        to="/projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                    >
                        See All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
