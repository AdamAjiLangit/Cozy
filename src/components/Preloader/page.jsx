'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import { splitTextIntoSpans } from '@/lib/splitTextIntoSpan';
import gsap from 'gsap';

export default function Preloader({ onPreloaderComplete }) {
    const [currentValue, setCurrentValue] = useState(0);
    const [showPreloader, setShowPreloader] = useState(true);
    const overlayRef = useRef(null);
    const counterRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (hasVisited) {
            setShowPreloader(false);
            onPreloaderComplete();
        } else {
            startLoader();
            localStorage.getItem('hasVisited', true);
        }
    }, []);

    function startLoader() {
        const interval = 100;
        const increment = 2;

        const timer = setInterval(() => {
            setCurrentValue((prevValue) => {
                const newValue = Math.min(prevValue + increment, 100);

                if (newValue >= 100) {
                    clearInterval(timer);
                    animateText();
                }

                return newValue;
            });
        }, interval);
    }

    function animateText() {
        splitTextIntoSpans('#logo p');

        gsap.to("#logo p", {
            opacity: 1,
        });

        gsap.to("#imgHolder img", {
            left: 0,
            stagger: 0.1,
            ease: "power4.out",
            duration: 2,
            delay: 1,
        });

        gsap.to("#imgHolder img", {
            left: "110%",
            stagger: -0.1,
            ease: "power4.out",
            duration: 1.5,
            delay: 4,
        });

        gsap.to(counterRef.current.querySelectorAll('span'), {
            top: '400px',
            stagger: 0.1,
            ease: 'power3.inOut',
            duration: 1,
        });

        gsap.to('#logo p span', {
            top: '0',
            stagger: 0.1,
            ease: 'power4.inOut',
            duration: 1,
            delay: 1,
        });

        gsap.to('#logo p span', {
            top: '500px',
            stagger: 0.1,
            ease: 'power4.inOut',
            duration: 1,
            delay: 4,
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            ease: 'power4.inOut',
            duration: 2,
            delay: 5,
            onComplete: () => {
                onPreloaderComplete();
            },
        });
    }

    useEffect(() => {
        if (currentValue === 100) {
            animateText();
        }
    }, [currentValue]);

    if (!showPreloader) return null;

    return (
        <>
            <div className={styles.overlayWrapper}>
                <div className={styles.overlay} ref={overlayRef}>
                    <div className={styles.overlayContent}>
                        <div className={styles.images}>
                            <div className={styles.imgHolder} id='imgHolder'>
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <img key={i} src="/assets/images/chair.jpg" alt={`Chair ${i}`} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.text}>
                            <div className={styles.counter}>
                                <p ref={counterRef}>
                                    {currentValue
                                        .toString()
                                        .split('')
                                        .map((char, i) => (
                                            <span key={i}>{char}</span>
                                        ))}
                                    <span>%</span>
                                </p>
                            </div>
                            <div className={styles.logo} id='logo'>
                                <p ref={logoRef}>Cozy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
