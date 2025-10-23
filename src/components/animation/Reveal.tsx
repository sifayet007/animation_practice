import { motion, useAnimation, useInView } from "framer-motion";
import { JSX, useEffect, useRef } from "react";


interface RevealProps {
    children: JSX.Element;
    width: "fit-content" | "100%";
    className?: string;
}

const Reveal = ({ children, width = "fit-content", className }: RevealProps) => {
    const ref = useRef(null)
    const isInVeiw = useInView(ref, { once: true });
    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        if (isInVeiw) {
            mainControl.start("visible");
            slideControl.start("visible");
        }

    }, [isInVeiw])

    return (
        <div
            className={className}
            ref={ref}
            style={{
                position: "relative",
                width,
                overflow: "hidden"
            }}

        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControl}

                transition={{ duration: 0.5, delay: 0.25 }}

            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControl}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    right: 0,
                    left: 0,
                    background: "#D0ff71",
                    zIndex: 20
                }}
            />
        </div>
    );
};

export default Reveal;