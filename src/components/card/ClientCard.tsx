import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Reveal from '../animation/Reveal';
interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    avatar: StaticImageData | string;
    rating: number;
}

const ClientCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div

            className="bg-gray-800 p-8 rounded-lg flex flex-col justify-between"
        >
            <div className="mb-4">
                <Reveal width="fit-content">
                    <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-400 mr-1" />
                        ))}
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <p className="text-gray-400">{testimonial.text}</p>
                </Reveal>
            </div>
            <div className="flex items-center mt-4">
                <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                />

                <div>
                    <Reveal width="fit-content">
                        <p className="text-white font-semibold">{testimonial.name}</p>
                    </Reveal>
                    <Reveal width="fit-content">
                        <p className="text-gray-400">{testimonial.role}</p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default ClientCard;