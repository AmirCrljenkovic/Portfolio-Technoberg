// Banner.jsx
import React from "react";
import LogoRood from "../img/Rood-liggend.png";

const Banner = () => {
  return (
    <div 
      className="relative w-screen h-12 overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to right, #F3911B, #E6215A)', 
        transform: 'rotate(-3deg)', 
        marginLeft: '-50vw', 
        marginRight: '-50vw', 
        left: '50%', 
        position: 'relative' 
      }}
    >
      <div 
        className="absolute w-[300%] h-full flex items-center justify-start animate-scroll-tape" 
        style={{ 
          transform: 'rotate(3deg)', 
        }}
      >
        
        <img src={LogoRood} alt="Logo" className="h-10 mx-4" />
        <img src={LogoRood} alt="Logo" className="h-10 mx-4" />
        <img src={LogoRood} alt="Logo" className="h-10 mx-4" />
        <img src={LogoRood} alt="Logo" className="h-10 mx-4" />
        <img src={LogoRood} alt="Logo" className="h-10 mx-4" />
      </div>
    </div>
  );
};

export default Banner;
