'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function UnderLinedText({ text, link }) {
    const underlineRef = useRef(null);
    const linkRef = useRef(null);
    const timeline = useRef(null);

    useEffect(() => {
        const underline = underlineRef.current;

        timeline.current = gsap.timeline({ paused: true });

        timeline.current.fromTo(
            underline,
            { width: '0%', left: '0%' },
            { width: '100%', duration: 0.5 }
        );

        const handleMouseEnter = () => {
            timeline.current.play();
        };

        const handleMouseLeave = () => {
            timeline.current.reverse();
        };

        const linkElement = linkRef.current;
        linkElement.addEventListener('mouseenter', handleMouseEnter);
        linkElement.addEventListener('mouseleave', handleMouseLeave);
    }, []);

    return (
        <Link href={link} ref={linkRef} className="relative block js-work-link">
            <span>{text}</span>
            <span
                ref={underlineRef}
                className="underline block absolute bottom-0 left-0 w-0 h-0.5 bg-[#4D3D30]"
            ></span>
        </Link>
    );
}
