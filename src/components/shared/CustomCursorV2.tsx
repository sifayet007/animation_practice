"use client";
import React, { useEffect, useRef, useState } from "react";

type CursorProps = {
    size?: number;
};

const CustomCursorV2: React.FC<CursorProps> = ({ size = 50 }) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState("white");
    const [scale, setScale] = useState(1);

    // Smooth cursor movement using lerp
    const animate = () => {
        setCursorPos(prev => ({
            x: prev.x + (mousePos.x - prev.x) * 0.15,
            y: prev.y + (mousePos.y - prev.y) * 0.15,
        }));
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [mousePos]);

    // Track mouse
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    // Scroll section detection
    useEffect(() => {
        const handleScroll = () => {
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

    // Hover effect on interactive elements
    useEffect(() => {
        const interactiveEls = document.querySelectorAll("a, button, .hover-cursor");

        const handleMouseEnter = () => setScale(1.8);
        const handleMouseLeave = () => setScale(1);

        interactiveEls.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            interactiveEls.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            style={{
                position: "fixed",
                left: cursorPos.x,
                top: cursorPos.y,
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: color,
                pointerEvents: "none",
                transform: `translate(-50%, -50%) scale(${scale})`,
                mixBlendMode: "difference",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
            }}
        >
            {/* Optional inner text or icon */}
            <span>👆</span>
        </div>
    );
};

export default CustomCursorV2;
