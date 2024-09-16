import React, { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Technoberg</h1>
                <nav className="space-x-4">
                    <a href="#home" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    <a href="https://www.technoberg.nl/contact/" target="_blank" className="hover:text-gray-400">Contact</a>
                </nav>
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 bg-gray-800 dark:bg-gray-300 text-white dark:text-black rounded"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </header>
    );
};

export default Header;
