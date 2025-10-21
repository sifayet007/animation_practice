"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "UI/UX DESIGN",
        description:
            "I design intuitive user experiences and modern interfaces that make products easy and enjoyable to use.",
    },
    {
        id: 2,
        title: "GRAPHIC DESIGN",
        description:
            "Creating strong visuals and creative layouts to make your brand stand out with clarity and impact.",
    },
    {
        id: 3,
        title: "WEB DESIGN",
        description:
            "Designing responsive and aesthetic websites that tell your brand story and drive engagement.",
    },
    {
        id: 4,
        title: "BRANDING",
        description:
            "Building cohesive brand identities that reflect your values and connect emotionally with your audience.",
    },
];

export default function WhatICanDo() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleOpen = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className=" text-white py-20 px-6 main-container">
            <div className="max-w-2xl ">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center mb-4 tracking-wide">
                    What I Can Do For You
                </h2>
                <p className="text-center text-gray-300 mb-12 leading-relaxed">
                    As a digital designer, I am a visual storyteller, crafting experiences
                    that connect deeply and spark creativity.
                </p>

                {/* Accordion */}
                <div className="space-y-4">
                    {services.map((service) => (
                        <div key={service.id} className="border-b border-gray-700">
                            <button
                                onClick={() => toggleOpen(service.id)}
                                className="w-full flex justify-between items-center py-4 text-left"
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
                            </button>

                            <AnimatePresence initial={false}>
                                {openId === service.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-400 pb-4 pl-6 pr-2 text-base leading-relaxed">
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
