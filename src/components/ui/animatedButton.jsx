'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function AnimatedButton() {
    const circleContainerRef = useRef(null);
    const innerRef = useRef(null);
    const textContainerRef = useRef(null);
    const textRef = useRef(null);
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        const inner = innerRef.current;
        const text = textRef.current;
        const innerOffset = inner.offsetWidth - circleContainerRef.current.offsetWidth;
        const textOffset = text.offsetHeight - textContainerRef.current.offsetHeight;

        tl.current
            .fromTo(
                inner,
                { x: -innerOffset },
                { duration: 0.3, x: 0, ease: "power1.out" },
                "<"
            )
            .fromTo(
                text,
                { y: -textOffset },
                { duration: 0.3, y: 0, ease: "power1.out" },
                "<"
            );

    }, []);

    const handleMouseEnter = () => {
        tl.current.play();
    };

    const handleMouseLeave = () => {
        tl.current.reverse();
    };

    return (
        <Link
            href="/shop"
            className="rounded-3xl w-fit p-2 flex items-center justify-center bg-transparent border hover:bg-transparent gap-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div ref={textContainerRef} className="flex h-[30px] flex-col items-center justify-start overflow-hidden">
                <div ref={textRef} className="flex flex-col items-center ">
                    <div className="flex items-center min-h-[30px] justify-center uppercase text-primary font-ribes text-[4vw] md:text-[1.2vw]">
                        Explore Collection
                    </div>
                    <div className="flex items-center min-h-[30px] justify-center uppercase text-primary font-ribes text-[4vw] md:text-[1.2vw]">
                        Explore Collection
                    </div>
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
