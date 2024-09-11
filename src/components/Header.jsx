import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Technoberg</h1>
                <nav className="space-x-4">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
