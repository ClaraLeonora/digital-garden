import React from 'react'

const Play = () => {
    return (
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src="/image/cat-play-two.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }} /* Adjust as needed */
        />
      </div>
    );
  };
  
  export default Play;
  