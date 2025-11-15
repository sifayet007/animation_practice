'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React from 'react';

const HeroV4 = () => {
    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, 'change', (val) => { })


    return (
        <div className='h-screen flex justify-center items-center'>
            <motion.div
                className="w-[600px] h-[500px] bg-blue-500 rounded-2xl "></motion.div>
        </div>
    );
};

export default HeroV4;