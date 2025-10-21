
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

import clientLogo1 from "@/assets/marquee/client-logo-1.png";
import clientLogo2 from "@/assets/marquee/client-logo-2.png";
import clientLogo3 from "@/assets/marquee/client-logo-3.png";
import clientLogo4 from "@/assets/marquee/client-logo-4.png";
import clientLogo5 from "@/assets/marquee/client-logo-5.png";
import clientLogo6 from "@/assets/marquee/client-logo-6.png";
import clientLogo7 from "@/assets/marquee/client-logo-7.png";
import clientLogo8 from "@/assets/marquee/client-logo-8.png";
import clientLogo9 from "@/assets/marquee/client-logo-9.png";
import clientLogo10 from "@/assets/marquee/client-logo-10.png";
import clientLogo11 from "@/assets/marquee/client-logo-11.png";
import clientLogo12 from "@/assets/marquee/client-logo-12.png";
import clientLogo13 from "@/assets/marquee/client-logo-13.png";
import clientLogo14 from "@/assets/marquee/client-logo-14.png";
import clientLogo15 from "@/assets/marquee/client-logo-15.png";
import clientLogo16 from "@/assets/marquee/client-logo-16.png";
import clientLogo17 from "@/assets/marquee/client-logo-17.png";

const logos = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
];

const Marquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (marqueeRef.current) {
            setWidth(marqueeRef.current.scrollWidth / 2);
        }
    }, []);

    return (
        <section className="relative w-full max-w-[1280px] mx-auto overflow-hidden bg-white py-8">
            <motion.div
                ref={marqueeRef}
                className="flex"
                animate={{ x: [-0, -width] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex-shrink-0 px-6">
                        <Image
                            src={logo}
                            alt={`Client Logo ${index + 1}`}
                            width={120}
                            height={120}
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Marquee;
