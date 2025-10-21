"use client";
import Link from "next/link";
import React from "react";

type FlipLinkButtonProps = {
    href?: string;
    text?: string;
    hoverText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export default function FlipLinkButton({
    href,
    text = "Learn More",
    hoverText = "Explore",
    leftIcon,
    rightIcon,
    className = "",
    onClick,
}: FlipLinkButtonProps) {
    const BaseContent = (
        <div
            className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] 
      transform group-hover:-translate-y-[48%] group-hover:rotate-x-6 
      [transform-style:preserve-3d]"
        >
            {/* Default state */}
            <span className="md:h-12 h-10 flex items-center justify-center gap-2 pointer-events-none transition-transform duration-500 whitespace-nowrap">
                {leftIcon && <span className="flex items-center">{leftIcon}</span>}
                <span>{text}</span>
                {rightIcon && <span className="flex items-center">{rightIcon}</span>}
            </span>

            {/* Hover state */}
            <span className="md:h-12 h-10 flex items-center justify-center gap-2 pointer-events-none transition-transform duration-500 whitespace-nowrap">
                {leftIcon && <span className="flex items-center">{leftIcon}</span>}
                <span>{hoverText}</span>
                {rightIcon && <span className="flex items-center">{rightIcon}</span>}
            </span>
        </div>
    );

    const baseClasses = `
    group relative inline-block overflow-hidden md:h-12 h-10 px-6 
    bg-[#333333] text-white rounded-md [perspective:600px] ${className}
  `;

    return href ? (
        <Link href={href} className={baseClasses}>
            {BaseContent}
        </Link>
    ) : (
        <button onClick={onClick} className={baseClasses}>
            {BaseContent}
        </button>
    );
}
