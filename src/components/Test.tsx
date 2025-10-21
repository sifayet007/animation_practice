"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import frontImg from "@/assets/image/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.webp";
import backImg from "@/assets/image/istockphoto-1372138855-612x612.jpg";

const HeroV3 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // rotateY for book flip motion
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, -180]);


    return (
        <section
            ref={ref}
            className="max-w-[1320px] mx-auto h-[200vh] flex items-center justify-center bg-gray-950"
        >
            <div className="relative w-[350px] h-[480px] perspective-1500">
                <motion.div
                    style={{
                        rotateY,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                    }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    className="relative w-full h-full"
                >
                    {/* === Front Page === */}
                    <div className="absolute inset-0 backface-hidden">
                        <Image
                            src={frontImg}
                            alt="Front Page"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    {/* === Back Page === */}
                    <div
                        className="absolute inset-0 backface-hidden"
                        style={{
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <Image
                            src={backImg}
                            alt="Back Page"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>
                <div className="absolute inset-0 backface-hidden">
            </div>
            </div>
        </section>
    );
};

export default HeroV3;
