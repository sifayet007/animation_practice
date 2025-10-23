'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import frontImg from '@/assets/image/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.webp';
import Reveal from '../animation/Reveal';

const HeroV2 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Base transforms
    const rawY = useTransform(scrollY, [0, 1280], [0, 1280]);
    const rawX = useTransform(scrollY, [0, 400], [0, 400]);
    const rawRotateY = useTransform(scrollY, [0, 1280], [0, 360]);

    // ✅ Smooth scroll effect using spring
    const y = useSpring(rawY, { stiffness: 80, damping: 20 });
    const x = useSpring(rawX, { stiffness: 80, damping: 20 });
    const rotateY = useSpring(rawRotateY, { stiffness: 60, damping: 20 });

    return (
        <section
            ref={ref}
            className="max-w-[1320px] mx-auto h-[100vh] flex items-center gap-x-5 justify-center py-40"
        >
            {/* Left Text */}
            <motion.div
                // initial={{ x: '-100%', opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
                <Reveal width="100%">
                    <span className="text-3xl uppercase text-white font-semibold">  Nazrul Islam Raihan</span>
                </Reveal>
                <Reveal width="100%">
                    <h2 className="text-7xl font-bold uppercase text-white">digital</h2>
                </Reveal>
            </motion.div>

            {/* Smooth Flip Image */}
            <div className="relative w-[350px] h-[480px]" style={{ perspective: 1500 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{
                        y,
                        x,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                    className="relative w-full h-full"
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                        <Image
                            src={frontImg}
                            alt="Front Page"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 backface-hidden"
                        style={{ transform: 'rotateY(180deg)' }}
                    >
                        <Image
                            src={frontImg}
                            alt="Back Page"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Right Text */}
            <motion.div
                // initial={{ x: '100%', opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
                <Reveal width="100%">
                    <h2 className="text-7xl text-end text-white font-bold uppercase">designer</h2>
                </Reveal>
                <Reveal width="100%">
                    <p className="text-end text-2xl text-white">
                    Senior UI UX Designer - Lead, Web & <br /> Mobile App Design Specialist
                </p>
                </Reveal>
            </motion.div>
        </section>
    );
};

export default HeroV2;
