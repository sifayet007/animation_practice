"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Reveal from "../animation/Reveal"; // তোমার custom Reveal component
import featuredImg1 from "@/assets/image/2nWXrWvPxxMHSpsOkNYf8KjzP7Q.avif";
import featuredImg2 from "@/assets/image/nTU7b0ZAdWdlqCI4mQ4tGTPpDs.avif";
import featuredImg3 from "@/assets/image/w08JBQPFYIq2vr4OfcD9W6vxEug.avif";
import featuredImg4 from "@/assets/image/qbjsnnvP9w7UaA2syp36oUe8OSo.avif";

const FeaturedProjects = () => {
    const images = [featuredImg1, featuredImg2, featuredImg3, featuredImg4];

    return (
        <section className="main-container flex flex-col justify-center">
            {/* Heading + Intro */}
            <div className="space-y-4 max-w-[500px] mb-10">
                <Reveal width="fit-content">
                    <h1 className="text-5xl text-white font-bold uppercase">
                        Featured Projects
                    </h1>
                </Reveal>

                <Reveal width="100%">
                    <p className="text-lg text-white">
                        These selected projects reflect my passion for blending strategy with
                        creativity — solving real problems through thoughtful design and
                        impactful storytelling.
                    </p>
                </Reveal>
            </div>

            {/* Sticky Images */}
            <div className="h-[320vh] space-y-10">
                {images.map((image, index) => (

                    <div className="sticky top-20 h-[80vh] rounded-lg overflow-hidden border border-white">
                        <Image
                            src={image}
                            alt={`Featured Project ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
