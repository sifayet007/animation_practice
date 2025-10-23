'use client'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'


const RevealLink = () => {
    return (
        <section className='grid h-screen place-items-center gap-2 bg-green-300 px-8 text-black'>
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
            <FlipLink href="#">Behance</FlipLink>
            <FlipLink href="#">Dribbble</FlipLink>
        </section>
    )
}

export default RevealLink

const DURATION = 0.25
const STAGGER = 0.025

const FlipLink = ({ children, href }: { children: string, href: string }) => {
    return (
        <div className=''>

            <motion.a
                initial="initial"
                whileHover="hovered"


                className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl tracking-tight leading-32 lg:text-9xl bg-white' href={href}>




                <div

                >
                    {children.split("").map((l, i) => {
                        return (<motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,

                            }}
                            key={i} className='inline-block '>{l}
                        </motion.span>)
                    })}
                </div>
                <div
                    className='absolute inset-0'

                >
                    {children.split("").map((l, i) => {
                        return (<motion.span
                            className='inline-block'
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            key={i} >{l}</motion.span>)
                    })}
                </div>
            </motion.a>
        </div>
    )
}
