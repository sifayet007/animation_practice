'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import frontImg from '@/assets/image/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.webp';

const HeroV2 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollY, [0, 700], [0, 700]);
    const x = useTransform(scrollY, [0, 700], [0, 500]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section
            ref={ref}
            className='max-w-[1320px] mx-auto h-[100vh] flex items-center gap-x-5 justify-center py-40'>

            {/* Left Text */}
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
                <motion.h2 className="text-3xl uppercase text-white font-semibold">
                    Nazrul Islam Raihan
                </motion.h2>
                <h2 className='text-7xl font-bold uppercase text-white'>digital</h2>
            </motion.div>

            {/* Smooth Flip Image */}
            <div className='relative w-[350px] h-[480px]' style={{ perspective: 1200 }}>
                <motion.div
                    style={{
                        y,
                        x,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                    transition={{ type: "spring", stiffness: 40, damping: 30 }}
                    className='relative w-full h-full'
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
                        style={{ transform: "rotateY(180deg)" }}
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
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
                <h2 className='text-7xl text-white font-bold uppercase'>designer</h2>
                <p className='text-end text-2xl text-white'>
                    Senior UI UX Designer - Lead, Web & <br /> Mobile App Design Specialist
                </p>
            </motion.div>
        </section>
    );
};

export default HeroV2;
