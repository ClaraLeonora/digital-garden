import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect'

const Watching = () => {
    const words = [
      { text: 'Tangled' },
      { text: 'Code?' },
    ];
  
    return (
      <div className="relative h-screen w-full mt-[30vh]"> {/* Push section down 30% */}
        {/* Fullscreen Background Image */}
        <img
          src="/image/cat-peak.png"
          alt="A close-up of an orange cat peeking their face over a ledge with curious eyes, as if intently observing something."
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Centered Typewriter Effect */}
        <div className="font-firacode relative z-10 flex items-top justify-center h-full">
          <TypewriterEffect words={words} />
        </div>
      </div>
    );
  };
  
  export default Watching;
  
  
  