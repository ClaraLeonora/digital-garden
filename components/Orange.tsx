"use client";
import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll"; // Adjust the path if needed

const Orange = () => {
  // Array of Orange!
  const images = [
    "/image/orangecute.png",    
    "/image/orange4.png",
    "/image/orange2.png",
    "/image/orange3.png",
    "/image/orange8.png",
    "/image/orange10.png",
    "/image/orange5.png",
    "/image/orange9.png",
    "/image/orange7.png",
  ];

  return (
    <section className="min-h-screen bg-orange text-background flex flex-col items-center justify-center">
      {/* Section Title */}
      <h1 className="font-merriweather text-4xl font-bold mb-20">Meet the Muse</h1>

      {/* Parallax Scroll Component */}
      <ParallaxScroll
        images={images} // Pass the image URLs here
        className="bg-background" // Optional: Custom background or styling
      />
    </section>
  );
};

export default Orange;
