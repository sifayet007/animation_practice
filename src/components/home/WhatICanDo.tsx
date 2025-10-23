"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import developmentImage1 from "@/assets/services/developmentImage1.jpeg";
import developmentImage2 from "@/assets/services/developmentImage2.jpeg";
import developmentImage3 from "@/assets/services/developmentImage3.jpeg";
import developmentImage4 from "@/assets/services/developmentImage4.jpeg";
import Reveal from "../animation/Reveal";

const services = [
    {
        id: 1,
        title: "UI/UX DESIGN",
        description:
            "I design intuitive user experiences and modern interfaces that make products easy and enjoyable to use.",
        image: developmentImage1,
    },
    {
        id: 2,
        title: "GRAPHIC DESIGN",
        description:
            "Creating strong visuals and creative layouts to make your brand stand out with clarity and impact.",
        image: developmentImage2,
    },
    {
        id: 3,
        title: "WEB DESIGN",
        description:
            "Designing responsive and aesthetic websites that tell your brand story and drive engagement.",
        image: developmentImage3,
    },
    {
        id: 4,
        title: "BRANDING",
        description:
            "Building cohesive brand identities that reflect your values and connect emotionally with your audience.",
        image: developmentImage4,
    },
];

export default function WhatICanDo() {
    const [openId, setOpenId] = useState<number | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const toggleOpen = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="text-white py-20 px-6 main-container">
            <div className="max-w-2xl">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-4 tracking-wide">
                    What I Can Do For You
                </h2>
                </Reveal>
                <Reveal width="100%">
                    <p className="text-center text-gray-300 mb-12 leading-relaxed">
                    As a digital designer, I am a visual storyteller, crafting experiences
                    that connect deeply and spark creativity.
                </p>
                </Reveal>

                <div className="space-y-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`border-b border-gray-700 transition-colors duration-500 ${openId === service.id ? "border-secondary border-b-2" : ""
                                }`}
                        >
                            <Reveal width="100%">
                                <motion.button
                                    onMouseEnter={() => setHoveredId(service.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                onClick={() => toggleOpen(service.id)}
                                    className={`w-full relative flex justify-between items-center py-4 text-left hover:text-secondary duration-500 ${openId === service.id ? "text-secondary" : "text-white"
                                        }`}
                            >
                                <span className="text-xl font-semibold uppercase">
                                    {service.id}. {service.title}
                                </span>

                                <motion.div
                                    animate={{ rotate: openId === service.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaChevronUp />
                                    </motion.div>

                                    {/* Hover Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={
                                            hoveredId === service.id
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0, scale: 0.5 }
                                        }
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        className="absolute right-0 top-0 w-[180px] h-[80px] rounded-md overflow-hidden z-10"
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                </motion.div>
                                </motion.button>
                            </Reveal>

                            <AnimatePresence initial={false}>
                                {openId === service.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white pb-4 pl-6 pr-2 text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
