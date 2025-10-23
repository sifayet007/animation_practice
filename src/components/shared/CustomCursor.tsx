"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState("rad");

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    // Section detection by scroll position
    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("hero");
            const dark = document.getElementById("dark");

            const scrollY = window.scrollY + window.innerHeight / 2;

            if (dark && scrollY >= dark.offsetTop) {
                setColor("black");
            } else {
                setColor("white");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // <div
        //     style={{
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",
        //         position: "fixed",
        //         left: position.x,
        //         top: position.y,
        //         width: "50px",
        //         height: "50px",
        //         borderRadius: "50%",
        //         backgroundColor: color,
        //         pointerEvents: "none",
        //         transform: "translate(-50%, -50%)",
        //         mixBlendMode: "difference",
        //         transition: "background-color 0.3s ease",
        //         zIndex: 9999,
        //     }}>Hello!</div>
        <div className="w-3 h-3 bg-secondary">

        </div>

    );
};

export default CustomCursor;
