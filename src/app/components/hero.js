"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 

export default function App({title,image}) {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  // Effect hook to add and remove the scroll event listener
  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (

    <div className="font-inter antialiased">
      
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[60vh] md:h-[60vh] lg:h-[80vh] w-full flex items-center justify-center overflow-hidden"
      >
        
        {/* --- Background Image with Parallax --- */}
      
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(/assets/${image})`,
            transform: `translateY(${offsetY * 0.5}px)`
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* --- Foreground Content --- */}
   
        <div className="relative z-10 text-center p-4">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

 
      
    </div>
  );
}