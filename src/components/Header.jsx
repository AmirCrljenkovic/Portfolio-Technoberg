import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import LightLogo from '../img/Wit-liggend.png';
import DarkLogo from '../img/Rood-liggend.png';


import SunIcon from '../img/sun.png';  
import MoonIcon from '../img/moon.png'; 

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

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

    const goToHomeAndScroll = (section) => {
        navigate("/", { state: { scrollTo: section } });
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-100 dark:bg-darkbg text-black dark:text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                
                
                <img
                    src={darkMode ? LightLogo : DarkLogo}
                    alt="Technoberg Logo"
                    className="h-10 w-auto"
                />
                
                <nav className="space-x-4">
                    <button
                        onClick={() => goToHomeAndScroll("home")}
                        className="hover:text-gray-400 cursor-pointer"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("about")}
                        className="hover:text-gray-400 cursor-pointer"
                    >
                        About
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("projects")}
                        className="hover:text-gray-400 cursor-pointer"
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("client-reviews")}
                        className="hover:text-gray-400 cursor-pointer"
                    >
                        Reviews
                    </button>

                    <a
                        href="https://www.technoberg.nl/contact/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        Contact
                    </a>
                </nav>

               
                <div
                    onClick={toggleDarkMode}
                    className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-[#31363F] rounded-full p-1 cursor-pointer transition-colors duration-300"
                >
                    
                    <img
                        src={SunIcon}
                        alt="Light Mode"
                        className={`absolute h-4 w-4 transition-opacity duration-300 left-1 ${darkMode ? 'opacity-100' : 'opacity-50'}`}
                    />

                   
                    <img
                        src={MoonIcon}
                        alt="Dark Mode"
                        className={`absolute h-4 w-4 transition-opacity duration-300 right-1 ${darkMode ? 'opacity-50' : 'opacity-100'}`}
                    />

                   
                    <div
                        className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : ''}`}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
