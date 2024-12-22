import React from "react";

const About = () => {
  return (
    <div className="relative h-auto w-full flex flex-col md:flex-row bg-red">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 h-48 md:h-full landscape:h-screen portrait:h-auto">
        <img
          src="/image/pose.png"
          alt="Whimsical doodle-style illustration of Clara standing next to her orange cat in a playful stretching pose."
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Right Section: Text Box */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-red px-4 md:px-0 portrait:py-8 landscape:p-16">
        <div className="text-center p-4 md:p-8 rounded-lg">
          <h1 className="font-merriweather text-3xl md:text-4xl font-bold text-background mb-4">
            Hi, I&apos;m Clara
          </h1>
          <p className="font-firacode text-base md:text-lg lg:text-xl text-background leading-relaxed">
            —computer scientist by day, artist by night, and full-time ambassador of creativity.
            I am a seeker of problems, a creator of solutions, and a firm believer that tech
            should be accessible, inclusive, and fun. The future needs everyone at the table
            to tackle the biggest engineering challenges, and I am here to help make that happen.
            Before you scroll, here is a challenge for you: What is one way you can make an impact
            on your community?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
