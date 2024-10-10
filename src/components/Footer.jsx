import icoon from "../img/icon.png";
import facebookIcon from "../img/facebook.png"
import linkedinIcon from "../img/linkedin.png"
import logoLight from "../img/Rood-liggend.png";
import logoDark from "../img/Wit-liggend.png";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#1c1e21] text-gray-800 dark:text-gray-400 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">

                <div className="flex-shrink-0">
                    <img
                        src={logoLight}
                        alt="Company Logo"
                        className="h-12 dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="Company Logo"
                        className="h-12 hidden dark:block"
                    />
                </div>

                <div className="text-center md:text-left">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Technoberg. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={icoon} alt="Website" className="h-10 w-10" />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/technoberg/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="h-10 w-10" />
                    </a>

                    <a
                        href="https://www.facebook.com/technoberg/?locale=nl_NL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={facebookIcon} alt="Facebook" className="h-10 w-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
