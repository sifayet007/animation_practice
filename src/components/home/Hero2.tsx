'use client'
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import AnimationButton from "../animation/Button";


const Hero2 = () => {
    const texts = ["Hello", "Welcome", "Sifayet", "Framer Motion 🚀"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <section>
            <div className='h-screen w-full main-container'>

                <motion.div
                    style={{
                        position: 'relative',
                        width: "100%",
                        overflow: 'hidden'
                    }}

                    className='text-6xl text-white font-bold uppercase mt-20'><motion.p

                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate='visible'
                        transition={{ duration: 0.5, delay: 0.25 }}

                    >Hello Framer motion 👋</motion.p></motion.div>

                <div className='mt-5 flex flex-wrap gap-5 justify-center items-center'>
                    {/* fade in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>Fade in

                    </motion.div>
                    {/* slide up */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 1 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                        className='w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>Slide up

                    </motion.div>
                    {/* slide from Left? */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className='w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>Slide from left

                    </motion.div>
                    {/* slide from right */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className='w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>Slide from right

                    </motion.div>
                    {/* scale up (Zoom in) */}
                    <motion.div
                        initial={{ scale: 0.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', repeatType: 'loop' }}


                        className='w-32 h-32 bg-orange-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>scale up (zoom in)

                    </motion.div>
                    {/* rotate in */}
                    <motion.div
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.5 }}

                        className='w-32 h-32 bg-red-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>rotate in

                    </motion.div>
                    {/* bounce effect (spring) */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                        style={{
                            transformOrigin: "top center"
                        }}
                        className='w-32 h-32 bg-teal-500 rounded-lg flex justify-center items-center text-2xl font-bold text-white text-center capitalize'>bounce effect (spring)

                    </motion.div>
                    {/* combined fade + slide + rotate */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotate: -10 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                            y: { duration: 1, ease: "easeOut" },
                            rotate: { duration: 0.8, ease: "easeOut" },
                            opacity: { duration: 0.6 }
                        }}

                        className='w-32 h-32 bg-teal-500 rounded-lg flex justify-center items-center text-lg font-bold text-white text-center capitalize'>combined fade + slide + rotate

                    </motion.div>
                    <motion.div
                        animate={{ x: 200 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "mirror",


                        }}
                        className="w-16 h-16 bg-pink-500"
                    />
                    <motion.div
                        animate={{ x: 200 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="w-16 h-16 bg-teal-500"
                    />
                    <motion.div
                        animate={{ scaleX: 2 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                        className="w-16 h-16 bg-indigo-500"
                    />

                    <motion.div
                        animate={{ y: [0, -100, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className="w-10 h-10 bg-red-500 rounded-full"
                    />

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        className="w-32 h-32 bg-indigo-500 rounded-lg shadow-lg"
                    />
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                            backgroundColor: ["#4f46e5", "#6366f1", "#4f46e5"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",

                        }}
                        className="w-32 h-32 rounded-full"
                    />
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.2, 1],
                            backgroundColor: [
                                "#4f46e5",
                                "#10b981",
                                "#f59e0b",
                                "#ef4444",
                                "#4f46e5",
                            ],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        className="w-32 h-32 rounded-2xl shadow-xl"
                    />
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl text-white font-bold"
                    >
                        {texts[index]}
                    </motion.h1>


                </div>

            </div>
            <div>
                <AnimationButton />
            </div>
        </section>
    );
};

export default Hero2;