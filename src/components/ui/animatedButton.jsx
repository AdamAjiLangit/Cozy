'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function AnimatedButton() {
    const circleContainerRef = useRef(null);
    const innerRef = useRef(null);
    const textRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        const inner = innerRef.current;

        tl.current.from(inner, {
            duration: 0.3,
            x: -(inner.offsetWidth - circleContainerRef.current.offsetWidth),
            ease: "power1.out",
        });

        tl.current.to(inner, {
            duration: 0.3,
            x: 0,
            ease: "power1.out",
            paused: true,
        });

    }, []);

    const handleMouseEnter = () => {
        tl.current.play(0);
    };

    const handleMouseLeave = () => {
        tl.current.play(0);
    };

    return (
        <Link
            href="/shop"
            className="rounded-3xl w-fit p-2 flex items-center justify-center bg-transparent border hover:bg-transparent gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex items-center justify-start overflow-hidden">
                <div className="flex items-center justify-center uppercase text-primary font-ribes text-[1.2vw]">
                    Explore Collection
                </div>
            </div>
            <div
                ref={circleContainerRef}
                className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-start overflow-hidden"
            >
                <div ref={innerRef} className="flex items-center">
                    <div className="min-w-[30px] h-[30px] flex items-center justify-center">
                        <ArrowIcon />
                    </div>
                    <div className="min-w-[30px] h-[30px] flex items-center justify-center">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
        </Link>
    );
}

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        width="50%"
        height="50%"
    >
        <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
