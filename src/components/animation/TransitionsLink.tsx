'use client';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface TransitionsLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


const TransitionsLink: React.FC<TransitionsLinkProps> = ({ children, href, ...props }) => {

    const router = useRouter()
    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(300); // Duration of the transition
        router.push(href);
        await sleep(300); // Duration of the transition
        body?.classList.remove("page-transition");
    }

    return (
        <Link
            onClick={handleTransition}
            href={href} {...props}>
            {children}
        </Link>
    );
};

export default TransitionsLink;
