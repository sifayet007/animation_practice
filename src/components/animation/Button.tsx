'use client'
import { motion } from "framer-motion"
import { useState } from "react"

export default function AnimationButton() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="toggle-container w-16 h-10 rounded-full  bg-white cursor-pointer flex items-center p-2"
            style={{

                justifyContent: "flex-" + (isOn ? "start" : "end"),


            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="h-[24px] w-[24px] bg-blue-500 rounded-full"

                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}



