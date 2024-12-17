import React from "react";

const About = () => {
  return (
    <div className="relative h-auto md:h-screen w-full flex flex-col md:flex-row bg-red">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 h-48 md:h-full">
        <img
          src="/image/me.png"
          alt="Me and My Cat"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Right Section: Text Box */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-red px-4 md:px-0">
        <div className="text-center p-8 rounded-lg">
          <h1 className="font-merriweather text-3xl md:text-4xl font-bold text-background mb-4">
            Hi, I'm Clara
          </h1>
          <p className="font-firacode text-lg md:text-xl text-background">
            —computer scientist by day, artist by night, and full-time ambassador of creativity. 
            I’m a seeker of problems, a creator of solutions, and a firm believer that tech 
            should be accessible, inclusive, and fun. The future needs everyone at the table 
            to tackle the biggest engineering challenges, and I’m here to help make that happen. 
            Before you scroll, here’s a challenge for you: What’s one way you can make an impact 
            on your community?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
