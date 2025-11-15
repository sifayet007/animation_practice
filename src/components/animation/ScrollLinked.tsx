'use client'
import { motion, useScroll } from 'framer-motion';
import React from 'react';
motion

const ScrollLinked = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            style={
                {
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                    zIndex: 1000,
                    pointerEvents: "none"

                }
            }>

        </motion.div>
    );
};

export default ScrollLinked;