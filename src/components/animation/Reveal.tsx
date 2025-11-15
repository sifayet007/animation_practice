
import { motion } from "framer-motion";
import { JSX, useRef } from "react";

interface RevealProps {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    className?: string;
}

const Reveal = ({ children, width = "fit-content", className }: RevealProps) => {
    const ref = useRef(null);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                position: "relative",
                width,
                overflow: "hidden"
            }}
        >

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{
                    position: "relative",
                    zIndex: 50,
                }}
            >
                {children}
            </motion.div>


            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: 4,          
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#D0ff71",
                    zIndex: 20,       
                }}
            />
        </div>
    );
};

export default Reveal;
