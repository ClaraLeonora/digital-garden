"use client";
import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import {
  IconDownload,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconMail,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <section className="font-firacode flex flex-col items-center min-h-screen bg-red-500 text-black-100 px-4">
      {/* Title positioned towards the top */}
      <h1 className="font-merriweather text-6xl font-bold mt-32 mb-14 text-center">
        Contact Me
      </h1>

      {/* Buttons Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Download Resume Button */}
        <ButtonsCard className="h-48 w-full flex items-center justify-center">
          <a
            href="/pdf/Resume.pdf"
            download
            className="h-full w-full flex flex-col items-center justify-center gap-4 text-background"
            aria-label="Download my resume in PDF format."
          >
            <IconDownload size={48} />
            <span className="text-xl font-semibold text-center">Download my Resume</span>
          </a>
        </ButtonsCard>

        {/* Email Button */}
        <ButtonsCard className="h-48 w-full flex items-center justify-center">
          <a
            href="mailto:dgdimarc@ncsu.edu"
            className="h-full w-full flex flex-col items-center justify-center gap-4 text-background"
            aria-label="Send me an email."
          >
            <IconMail size={48} />
            <span className="text-xl font-semibold text-center">
              Let&apos;s grab a coffee - Email Me
            </span>
          </a>
        </ButtonsCard>

        {/* LinkedIn Button */}
        <ButtonsCard className="h-48 w-full flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/claraleonora/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center gap-4 text-background"
            aria-label="Connect with me on LinkedIn (opens in a new tab)"
          >
            <IconBrandLinkedin size={48} />
            <span className="text-xl font-semibold text-center">Connect with me on LinkedIn</span>
          </a>
        </ButtonsCard>

        {/* Pinterest Button */}
        <ButtonsCard className="h-48 w-full flex items-center justify-center">
          <a
            href="https://pin.it/3CsrK1uoW"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex flex-col items-center justify-center gap-4 text-background"
            aria-label="Check out my Pinterest board for some nice art (opens in a new tab)"
          >
            <IconBrandPinterest size={48} />
            <span className="text-xl font-semibold text-center">Enjoy some nice Art</span>
          </a>
        </ButtonsCard>
      </div>
    </section>
  );
};

export default Contact;
