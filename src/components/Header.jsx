import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

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
                <h1 className="text-2xl font-bold">Technoberg</h1>
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
                        Client Reviews
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
                <button
                    onClick={toggleDarkMode}
                    className={`ml-4 p-2 rounded ${darkMode ? 'bg-[#31363F] text-white' : 'bg-gray-800 text-white'}`}
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </header>
    );
};

export default Header;
