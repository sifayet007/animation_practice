// components/AboutMe.tsx
"use client";

import React from "react";
import { FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const AboutMe: React.FC = () => {
    return (
        <section className="text-white py-16 main-container">
            <div className="max-w-2xl ">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-4">ABOUT ME</h2>

                {/* Intro Text */}
                <p className="text-gray-300 mb-12">
                    Hi, I'm <span className="text-green-400">Duncan</span> — a digital
                    designer and Framer developer passionate about crafting meaningful
                    and impactful digital experiences.
                </p>

                {/* Stats */}
                <div className="flex flex-col md:flex-row gap-x-10 mb-12">
                    <div className="flex-1 ">
                        <p className="text-4xl font-bold text-green-400">12</p>
                        <p className="text-gray-300">Years of Experience</p>
                    </div>
                    <div className="flex-1 ">
                        <p className="text-4xl font-bold text-green-400">270</p>
                        <p className="text-gray-300">Completed Projects</p>
                    </div>
                    <div className="flex-1 ">
                        <p className="text-4xl font-bold text-green-400">50+</p>
                        <p className="text-gray-300">Clients on Worldwide</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col md:flex-row gap-x-10 mb-8 text-gray-300">
                    <div className="mb-4 md:mb-0">
                        <p className="font-semibold">Call Today :</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                        <p className="font-semibold">Email :</p>
                        <p>designer@example.com</p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mb-12 text-green-400 text-2xl">
                    <AiOutlineTwitter className="hover:text-white transition" />
                    <FaInstagram className="hover:text-white transition" />
                    <FaBehance className="hover:text-white transition" />
                    <FaDribbble className="hover:text-white transition" />
                </div>

                {/* Button */}
                <button className="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition">
                    MY STORY
                </button>
            </div>
        </section>
    );
};

export default AboutMe;
