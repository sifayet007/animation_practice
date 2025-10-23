"use client";
import React from "react";
import ClientCard from "../card/ClientCard";
import StatsData from "../card/StatsDataCard";
import Reveal from "../animation/Reveal"; // ✅ তোমার Reveal component import

const testimonials = [
    {
        id: 1,
        name: "John Harris",
        role: "Marketing Director",
        text: "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
        avatar: "/assets/john-harris.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Lee",
        role: "Product Manager",
        text: "He took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
        avatar: "/assets/michael-lee.jpg",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "CEO",
        text: "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.",
        avatar: "/assets/sarah-johnson.jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "Laura Bennett",
        role: "Small Business Owner",
        text: "As a small business owner, I appreciated how stress-free Duncan made the process.",
        avatar: "/assets/laura-bennett.jpg",
        rating: 5,
    },
];

const statsData = [
    {
        bgColor: "bg-secondary",
        textColor: "text-gray-900",
        description: "My work helped clients grow their revenue by 200%",
        value: "200%",
        label: "Growth",
    },
    {
        bgColor: "bg-white",
        textColor: "text-gray-900",
        description: "I've worked with 50+ happy clients",
        value: "98%",
        label: "Satisfaction Rate",
        subTextColor: "text-gray-500",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-900 text-white px-6 md:px-16">
            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-12">
                <Reveal width="fit-content">
                    <h2 className="text-4xl font-bold mb-4">WHAT MY CLIENTS SAY</h2>
                </Reveal>

                <Reveal width="100%">
                    <p className="text-gray-400">
                        Here's what my clients have shared about their experiences working
                        with me. Their trust and satisfaction motivate me to continue
                        delivering designs that make an impact.
                    </p>
                </Reveal>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                <ClientCard testimonial={testimonials[0]} />
                <ClientCard testimonial={testimonials[1]} />
                <StatsData data={statsData[1]} />
                <StatsData data={statsData[0]} />
                <ClientCard testimonial={testimonials[2]} />
                <ClientCard testimonial={testimonials[3]} />
            </div>
        </section>
    );
};

export default Testimonials;
