"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
];

const Header = () => {
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

    return (
        <motion.nav
            layout
            transition={{
                layout: {
                    duration: 0.5,
                    ease: [0.45, 0, 0.55, 1], // smoother cubic bezier
                },
            }}
            className="bg-black/90 p-2 max-w-fit mx-auto flex items-center justify-between rounded-full fixed left-1/2 -translate-x-1/2 top-5 shadow-lg z-50 backdrop-blur-md space-x-5 transition-all"
        >
            {/* Logo */}
            <motion.div layout className="w-[40px] h-[40px] bg-cyan-700 rounded-full" />

            {/* Center Section (Smooth Swap) */}
            <motion.div
                layout
                transition={{
                    layout: {
                        duration: 0.5,
                        ease: [0.45, 0, 0.55, 1],
                    },
                }}
                className="flex-1 flex justify-center items-center overflow-hidden space-x-5"
            >
                <AnimatePresence mode="wait">
                    {showMain ? (
                        <motion.div
                            key="navLinks"
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex items-center space-x-5"
                        >
                            <motion.div
                                layout
                                className="flex text-white/80 gap-x-6 font-medium"
                            >
                                {navItems.map((item) => (
                                    <Link key={item.name} href={item.path}>
                                        {item.name}
                                    </Link>
                                ))}
                            </motion.div>
                            <motion.button
                                layout
                                transition={{
                                    layout: {
                                        duration: 0.5,
                                        ease: [0.45, 0, 0.55, 1],
                                    },
                                }}
                                className="bg-white py-2 px-6 rounded-full text-black/80 font-medium hover:bg-gray-100 transition"
                            >
                                Contact
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div

                            key="available"
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-white font-semibold text-lg flex items-center gap-x-2 mr-2"
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
                </AnimatePresence>
            </motion.div>
        </motion.nav>
    );
};

export default Header;
