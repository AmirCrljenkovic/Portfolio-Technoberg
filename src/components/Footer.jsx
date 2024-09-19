import icoon from "../img/icon.png";
import logo from "../img/logo1.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
                {/* Logo on the left */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Company Logo" className="h-12" />
                </div>


                <div className="text-center md:text-left">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Techoberg. All rights reserved.
                    </p>
                </div>


                <div className="flex space-x-6">

                    <a
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={icoon} alt="Website" className="h-10 w-10" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={icoon} alt="LinkedIn" className="h-10 w-10" />
                    </a>

                    <a
                        href="https://www.facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-200 ease-in-out"
                    >
                        <img src={icoon} alt="Facebook" className="h-10 w-10" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;