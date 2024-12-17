"use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { IconDownload, IconBrandLinkedin, IconBrandPinterest, IconMail } from "@tabler/icons-react";

const Contact = () => {
  return (
    <section className="font-firacode flex flex-col items-center min-h-screen bg-red-500 text-black-100 px-4">
      {/* Title positioned towards the top */}
      <h1 className="font-merriweather text-6xl font-bold mt-32 mb-14 text-center">Contact Me</h1>

      {/* Buttons Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Download Resume Button */}
        <ButtonsCard className="h-48 w-full">
          <a
            href="/pdf/Resume.pdf" // Path to your resume in the public folder
            download
            className="flex flex-col items-center justify-center gap-4 text-black dark:text-background"
          >
            <IconDownload size={48} />
            <span className="text-xl font-semibold">Download my Resume</span>
          </a>
        </ButtonsCard>

        {/* Email Button */}
        <ButtonsCard className="h-48 w-full">
          <a
            href="mailto:dgdimarc@ncsu.edu"
            className="flex flex-col items-center justify-center gap-4 text-black dark:text-background"
          >
            <IconMail size={48} />
            <span className="text-xl font-semibold">Let’s stay in touch–email</span>
          </a>
        </ButtonsCard>

        {/* LinkedIn Button */}
        <ButtonsCard className="h-48 w-full">
          <a
            href="https://www.linkedin.com/in/claraleonora/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 text-black dark:text-background"
          >
            <IconBrandLinkedin size={48} />
            <span className="text-xl font-semibold">Let’s connect on LinkedIn</span>
          </a>
        </ButtonsCard>

        {/* Pinterest Button */}
        <ButtonsCard className="h-48 w-full">
          <a
            href="https://pin.it/3CsrK1uoW" // Replace with your Pinterest profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-4 text-black dark:text-background"
          >
            <IconBrandPinterest size={48} />
            <span className="text-xl font-semibold">Discover my favorite artworks</span>
          </a>
        </ButtonsCard>

      </div>
    </section>
  );
};

export default Contact;