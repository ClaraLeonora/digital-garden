"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  image,
  alt, // Add alt prop here
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  image?: string;
  alt?: string; // Define alt as a string prop
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(10deg) scale(1)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title || "Link"}
    >
      <div
        className={cn(
          "relative group/pin z-50 cursor-pointer mb-8",
          containerClassName
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl bg-orange group-hover/pin:bg-red border-[4px] border-orange group-hover/pin:border-red transition duration-700 overflow-hidden w-96 h-96"
          >
            <div className={cn("relative z-50 w-full", className)}>
              {title && (
                <h1 className="font-bold text-xl mb-2 text-black-100">
                  {title}
                </h1>
              )}
              <div className="mb-4">{children}</div>
              {image && (
                <img
                  src={image}
                  alt={alt || title || "Pin Image"} // Use alt prop or fallback to title or default text
                  className="w-full h-60 object-cover mt-auto"
                />
              )}
            </div>
          </div>
        </div>
        <PinPerspective />
      </div>
    </a>
  );
};

export const PinPerspective = () => {
  return (
    <motion.div
      className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center"></div>
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
    </motion.div>
  );
};
