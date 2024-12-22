"use client";
import React from "react";
import { ParallaxScroll } from "./ui/parallax-scroll"; // Adjust the path if needed

const Orange = () => {
  // Array of Orange! Each object contains src and alt properties
  const images = [
    { src: "/image/orangecute.png", alt: "A photo of the orange cat peacefully curled up on a cozy circular pillow." },
    { src: "/image/orange-leer.png", alt: "A photo of the orange cat curiously peering down from atop the kitchen cabinets, surveying the scene below." },
    { src: "/image/orange-sleepy.png", alt: "A photo of the orange cat peacefully sleeping in someone's arms" },
    { src: "/image/orange-friendly.png", alt: "A photo of the orange cat saying hello to a black cat. How friendly." },
    { src: "/image/orange-eepy.png", alt: "A photo of an orange cat sleeping soundly, with their face gently tucked into their paws." },
    { src: "/image/orange-yawn.png", alt: "A photo of the orange cat mid-yawn, humorously missing two whiskers due to an unexpected mishap with clippers at the vet." },
    { src: "/image/orange-fight.png", alt: "A photo of the orange cat playfully interacting with a black cat, both making amusing and expressive faces." },
    { src: "/image/orange-music.png", alt: "A photo of the orange cat perched on top of a large speaker, seemingly enjoying the sounds of classical music." },
    { src: "/image/orange-keyboard.png", alt: "A photo of an orange cat playfully posing as a software engineer, with both paws stretched toward a keyboard, ready to 'code'." },
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
