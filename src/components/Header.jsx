import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LightLogo from '../img/Wit-liggend.png';
import DarkLogo from '../img/Rood-liggend.png';
import SunIcon from '../img/sun.png';
import MoonIcon from '../img/moon.png';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-100 dark:bg-[#18191B] text-black dark:text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between md:space-x-6">

                <div className="flex-shrink-0">
                    <button
                        onClick={() => goToHomeAndScroll("home")}
                        className="focus:outline-none"
                    >
                        <img
                            src={darkMode ? LightLogo : DarkLogo}
                            alt="Technoberg Logo"
                            className="h-10 w-auto"
                        />
                    </button>
                </div>

                <nav className="hidden md:flex space-x-4 mx-auto">
                    <button
                        onClick={() => goToHomeAndScroll("home")}
                        className="hover:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
                    >
                        Home
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("about")}
                        className="hover:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
                    >
                        About
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("projects")}
                        className="hover:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => goToHomeAndScroll("client-reviews")}
                        className="hover:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
                    >
                        Reviews
                    </button>

                    <a
                        href="https://www.technoberg.nl/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 dark:hover:text-gray-300"
                    >
                        Contact
                    </a>
                </nav>

                <div className="hidden md:flex flex-shrink-0">
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

                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className="w-6 h-6 text-black dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {isMobileMenuOpen && (
                    <nav
                        className={`absolute top-16 left-0 w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-[#18191B] dark:to-[#222831] rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out p-6 md:hidden flex flex-col justify-center items-center space-y-4 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ height: 'auto' }}
                    >
                        <button
                            onClick={() => goToHomeAndScroll("home")}
                            className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline transition-all duration-300"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => goToHomeAndScroll("about")}
                            className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline transition-all duration-300"
                        >
                            About
                        </button>

                        <button
                            onClick={() => goToHomeAndScroll("projects")}
                            className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline transition-all duration-300"
                        >
                            Projects
                        </button>

                        <button
                            onClick={() => goToHomeAndScroll("client-reviews")}
                            className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline transition-all duration-300"
                        >
                            Reviews
                        </button>

                        <a
                            href="https://www.technoberg.nl/contact-us/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline transition-all duration-300"
                        >
                            Contact
                        </a>

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
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
