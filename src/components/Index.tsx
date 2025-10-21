"use client"
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

const Index = () => {
    const [show, setShow] = useState(true);
    const ref = useRef(null);

    const { scrollY } = useScroll();
    const isInView = useInView(ref, { margin: "-100% 0px" });
    // const y = useTransform(scrollY, [0, 500], [0, 700]);
    // const opacity = useTransform(scrollYProgress, [0, 500], [1, 0]);
    // const scale = useTransform(scrollYProgress, [0, 500], [1, 5]);
    const y = useTransform(scrollY, [600, 500], [0, 700]); // 0→500px scroll → 0→300px move
    const scale = useTransform(scrollY, [600, 500], [1, 0.5]); // shrink
    const opacity = useTransform(scrollY, [600, 500], [1, 0]); // fade
    return (
        <div className='h-screen '>
            <motion.button
                drag
                dragConstraints={{ left: 30, right: 30, top: 30, bottom: 30 }}
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb", color: "black", }}
                onClick={() => setShow(!show)}
                className='py-1 text-sm px-5 bg-black rounded-[10px] text-white'
            >
                !Open
            </motion.button>

            <div className='flex gap-x-5 h-screen items-start'>
                {show && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ rotate: 360, opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className='w-40 h-40 bg-red-500'
                    />
                )}

                {
                    isInView && <motion.div
                        ref={ref}
                        style={{ y, scale, opacity }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        exit={{}}
                        className='w-40 h-40 bg-green-500'
                    />
                }
                <motion.div

                    ref={ref}
                    style={{ y, scale, opacity }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    exit={{}}
                    className='w-40 h-40 bg-green-500'
                />
            </div>

            <div className='mt-5 flex gap-x-5 items-center'>
                <motion.div className='w-full h-[400px] bg-red-500'></motion.div>
                <motion.div className='w-full h-[400px] bg-red-500'></motion.div>
            </div>
        </div>
    );
};

export default Index;
