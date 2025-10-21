'use client'
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slidecontarols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slidecontarols.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden bg-black/80">


            <motion.div

                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="main-container pt-20"
            >

                <h1 className="text-6xl text-white font-bold">Hello</h1>
                <motion.h1 className="text-6xl text-white font-extrabold">
                    <span>I'm </span>
                    <span className="uppercase">sifayet ullah</span>
                </motion.h1>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: 100 }
                }}
                initial="hidden"
                animate={slidecontarols}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "red",
                    zIndex: 20
                }}
            />


        </section>
    );
};

export default Hero;
