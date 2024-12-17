import React from 'react';

const Stack = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <picture>
        {/* Mobile Image */}
        <source
          srcSet="/image/mobile-stack.png"
          media="(max-width: 768px)" /* Switch image for smaller screens */
        />
        {/* Default Image */}
        <img
          src="/image/tech-stack.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      </picture>

      {/* Text Column */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 lg:top-8 lg:left-[61%] lg:transform-none w-auto bg-black/50 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
        <h1 className="font-merriweather text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-center text-black-100">
          My Tech Stack
        </h1>
      </div>
    </div>
  );
};

export default Stack;
