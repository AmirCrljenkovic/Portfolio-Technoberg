import React from "react";
import LogoRood from "../img/Rood-liggend.png";
import backgroundImage from "../img/gradient-icons.png";
import "../components/banner/banner.css"; 

const Banner = () => {
    return (
        <div
            className="banner-container relative w-screen h-16 overflow-hidden dark:bg-[#222831]"
            style={{
                transform: 'rotate(-5deg)',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                left: '50%',
                position: 'relative',
            }}
        >
            
            <div
                className="banner-background absolute w-full h-full"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-x',
                }}
            ></div>

            
            <div className="banner-logos absolute w-full h-full flex items-center justify-center overflow-hidden">
                <div className="logo-track flex space-x-8">
                    
                    {[...Array(10)].map((_, index) => (
                        <img key={index} src={LogoRood} alt="Logo" className="h-12 logo-animation" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
