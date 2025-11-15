"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Reveal from "../animation/Reveal";

import featuredImg1 from "@/assets/image/2nWXrWvPxxMHSpsOkNYf8KjzP7Q.avif";
import featuredImg2 from "@/assets/image/nTU7b0ZAdWdlqCI4mQ4tGTPpDs.avif";
import featuredImg3 from "@/assets/image/w08JBQPFYIq2vr4OfcD9W6vxEug.avif";
import featuredImg4 from "@/assets/image/qbjsnnvP9w7UaA2syp36oUe8OSo.avif";

const FeaturedProjects = () => {
    const images = [featuredImg1, featuredImg2, featuredImg3, featuredImg4];
    const container = useRef(null);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    return (
        <section className="main-container flex flex-col justify-center">
            {/* Heading */}
            <div className="space-y-4 max-w-[500px] mb-10">
                <Reveal width="fit-content">
                    <h1 className="text-5xl text-white font-bold uppercase">
                        Featured Projects
                    </h1>
                </Reveal>

                <Reveal width="100%">
                    <p className="text-lg text-white">
                        These selected projects reflect my passion for blending strategy
                        with creativity — solving real problems through thoughtful design
                        and impactful storytelling.
                    </p>
                </Reveal>
            </div>

            {/* Scroll Parallax Cards */}
            <div ref={container} className="relative">
                {images.map((image, index) => {
                    const start = index * 0.2;
                    const end = start + 0.8;

                    const scale = useTransform(scrollYProgress, [start, end], [1.3, 1]);
                    const y = useTransform(scrollYProgress, [start, end], ["10vh", "-20vh"]);

                    return (
                        <motion.div
                            key={index}
                            style={{ scale, y, }}
                            className="sticky top-20 h-[100vh] flex justify-center items-center"
                        >
                            <motion.div
                                className="relative w-[90%] rounded-2xl overflow-hidden shadow-2xl border border-white "
                            >
                        <Image
                            src={image}
                            alt={`Featured Project ${index + 1}`}
                                    quality={100}
                                    className="w-full h-[400px] object-cover rounded-2xl"
                                />

                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedProjects;
