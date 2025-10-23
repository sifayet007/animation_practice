"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TransitionsLink from "../animation/TransitionsLink";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 10) {
        setShowMain(false);
      } else {
        setShowMain(true);
      }
      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth layout transition for morphing
  const layoutTransition: any = {
    type: " ",
    stiffness: 120,
    damping: 18,
  };

  return (
    <motion.nav
      layout
      transition={layoutTransition}
      className="bg-black/90 p-2 max-w-fit mx-auto flex items-center justify-between rounded-full fixed left-1/2 -translate-x-1/2 top-5 shadow-lg z-50 backdrop-blur-md space-x-5"
    >
      {/* Logo */}
      <motion.div
        layout
        transition={layoutTransition}
        className="w-[40px] h-[40px] bg-cyan-700 rounded-full"
      />

      {/* Center Section */}
      <motion.div
        layout
        transition={layoutTransition}
        className="flex-1 flex justify-center items-center overflow-hidden"
      >
        <motion.div
          layout
          transition={layoutTransition}
          className="flex items-center"
        >
          {showMain ? (
            <motion.div
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-5"
            >
              <div className="flex text-white/80 gap-x-6 font-medium">
                {navItems.map((item) => (
                  <TransitionsLink key={item.name} href={item.path}>
                    {item.name}
                  </TransitionsLink>
                ))}
              </div>
              <TransitionsLink href="/contact">
              <button className="bg-white py-2 px-6 rounded-full text-black/80 font-medium hover:bg-gray-100 transition">
                Contact
                </button></TransitionsLink> 
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white font-semibold text-lg flex items-center gap-x-2"
            >
              Available for Work
              <div className="w-[8px] h-[8px] bg-green-500 rounded-full flex justify-center items-center">
                <motion.div
                  layout
                  className="w-[10px] h-[10px] bg-green-500 rounded-full animate-ping"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
