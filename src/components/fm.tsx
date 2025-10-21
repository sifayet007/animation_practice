'use client'
import { motion } from 'framer-motion';
import * as React from 'react';

export const Fm = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold uppercase '>Framer Motion</h1>
            <motion.div className='w-[200px] h-[200px] bg-orange-400'>

            </motion.div>
        </div>
    )
}
