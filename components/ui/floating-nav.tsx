"use client";
import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
  containerRef,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>; // Allow null
}) => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }} // Always visible
        animate={{ y: 0, opacity: 1 }} // Always visible
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-navbar shadow-lg z-[5000] px-8 py-2 items-center justify-between space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className="font-firacode relative text-black-100 items-center flex space-x-1 hover:text-purple"
          >
            <span className="block">{navItem.icon}</span>
            <span className="hidden sm:block text-lg">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
