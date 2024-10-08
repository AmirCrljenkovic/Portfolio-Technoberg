import React from "react";
import LogoRood from "../img/Rood-liggend.png";
import backgroundImage from "../img/gradient-icons.png"; 

const Banner = () => {
    return (
        <div
            className="relative w-screen h-16 overflow-hidden dark:bg-[#222831]"
            style={{
                transform: 'rotate(-5deg)',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                left: '50%',
                position: 'relative',
            }}
        >
            
            <div
                className="absolute w-full h-full"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat-x',
                    animation: 'scroll-background 15s linear infinite', 
                }}
            ></div>

            
            <div className="absolute w-full h-full flex items-center justify-center">
                <div className="flex space-x-8 animate-scroll">
                    <img src={LogoRood} alt="Logo" className="h-12" />
                    <img src={LogoRood} alt="Logo" className="h-12" />
                    <img src={LogoRood} alt="Logo" className="h-12" />
                    <img src={LogoRood} alt="Logo" className="h-12" />
                    <img src={LogoRood} alt="Logo" className="h-12" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
