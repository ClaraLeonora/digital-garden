"use client"; // Add this directive

import React, { useRef } from "react";
import Yarn from "@/components/Yarn";
import { FloatingNav } from "@/components/ui/floating-nav";
import {
  PiYarnBold,
  PiPawPrintDuotone,
  PiLegoFill,
  PiAlienBold,
} from "react-icons/pi";
import Watching from "@/components/Watching";
import Play from "@/components/Play";
import Stack from "@/components/Stack";
import Resume from "@/components/Resume";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Orange from "@/components/Orange";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main
      ref={mainRef}
      className="relative bg-background flex flex-col w-full h-screen md:snap-y md:snap-mandatory overflow-y-scroll"
    >
      {/* Floating Navigation */}
      <FloatingNav
        navItems={[
          { name: "About", link: "#about", icon: <PiYarnBold />, ariaLabel: "Navigate to About section"  },
          { name: "XP", link: "#xp", icon: <PiLegoFill />, ariaLabel: "Navigate to Experience section"  },
          { name: "Contact", link: "#contact", icon: <PiAlienBold />, ariaLabel: "Navigate to Contact section"  },
          { name: "Orange", link: "#orange", icon: <PiPawPrintDuotone />, ariaLabel: "Navigate to meet the orange cat"  },
        ]}
      />

      {/* Full-Screen Sections */}
      <section className="snap-start">
        <Watching />
      </section>
      <section className="snap-start">
        <Yarn />
      </section>
      <section className="snap-start">
        <Play />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section className="snap-start">
        <Stack />
      </section>
      <section id="xp" className="snap-start">
        <Resume />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <section id="orange"   className="snap-start">
        <Orange />
      </section>
    </main>
  );
}
