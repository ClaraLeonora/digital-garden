import React from 'react';

const Stack = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <picture>
        {/* iPad Portrait Mode */}
        <source
          srcSet="/image/mobile-stack.png"
          media="(max-width: 1024px) and (orientation: portrait)"
        />
        {/* Default (including iPad Landscape Mode) */}
        <source
          srcSet="/image/tech-stack.png"
          media="(orientation: landscape)"
        />
        {/* Fallback Image */}
        <img
          src="/image/tech-stack.png"
          alt="My tech stack: Java, Python, C, Javascript, React, Tailwindcss, Next.js, Eclipse, VS Code, Github."
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
        />
      </picture>

      {/* Text Column */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-auto bg-black/50 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
        <h1 className="font-merriweather text-[clamp(2rem,6vw,4rem)] font-bold leading-tight text-center text-black-100">
          My Tech Stack
        </h1>
      </div>
    </div>
  );
};

export default Stack;
