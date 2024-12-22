import React from 'react';

const Yarn = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="/image/divine-yarn.png"
        alt="A ball of yarn sits at the center of the screen, illuminated by a dramatic beam of light, giving it a comically divine appearance."
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }} /* Adjust as needed */
      />

      {/* Responsive Text Column */}
      <div className="absolute bottom-0 md:top-0 md:right-0 h-auto md:h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 w-full md:w-1/3 text-background bg-black/50">
        <h1 className="font-merriweather text-[clamp(2rem,4vw,4rem)] font-bold mb-4">
          I&apos;ll Find a Solution Worth Unraveling.
        </h1>
      </div>
    </div>
  );
};

export default Yarn;
