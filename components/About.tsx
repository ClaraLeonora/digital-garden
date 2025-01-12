import React from "react";

const About = () => {
  return (
    <div className="relative h-auto w-full flex flex-col md:flex-row bg-red">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 h-48 md:h-full landscape:h-screen portrait:h-auto">
        <img
          src="/image/cat-friend.png"
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
          —computer scientist by day, artist by night, and a full-time ambassador for 
          creativity. 
          I bring ideas to life through code, art, and innovative solutions, 
          to make technology accessible, inclusive, and fun. 
          The future of engineering thrives when diverse 
          voices collaborate. I’m passionate about creating tools and opportunities 
          that amplify our unique strengths and invite everyone to contribute meaningfully. 
          Before you scroll, here’s a thought: How can you use your skills to create a 
          lasting impact in your community?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
