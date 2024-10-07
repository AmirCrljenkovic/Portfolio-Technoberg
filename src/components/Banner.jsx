import React from "react";
import LogoRood from "../img/Rood-liggend.png";

const Banner = () => {
    return (
        <div
            className="relative w-screen h-16 overflow-hidden dark:bg-[#222831]"
            style={{
                background: 'linear-gradient(to right, #F3911B, #E6215A)',
                transform: 'rotate(-5deg)',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                left: '50%',
                position: 'relative',
            }}
        >
            <div className="absolute w-full h-full flex items-center justify-center">
                <div className="flex space-x-8">

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
