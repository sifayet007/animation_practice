"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSpotlight() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
            {/* Background text or image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white/10 select-none">
                <h1 className="text-[120px] font-extrabold uppercase tracking-widest">
                    Hidden Light
                </h1>
                <p className="text-2xl mt-4 font-light">Move your mouse to reveal</p>
            </div>

            {/* Dynamic Light Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                    background: `radial-gradient(
            200px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(255, 255, 255, 0.8),
            rgba(0, 0, 0, 0.85)
          )`,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            />

            {/* Foreground (revealed content) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-[120px] font-extrabold uppercase tracking-widest mix-blend-difference">
                    Hidden Light
                </h1>
                <p className="text-2xl mt-4 font-light mix-blend-difference">
                    Move your mouse to reveal
                </p>
            </div>
        </section>
    );
}
