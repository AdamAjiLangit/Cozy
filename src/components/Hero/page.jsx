'use client';

import { react, useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiaCartPlusSolid } from "react-icons/lia";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { splitTextIntoSpans } from "@/lib/splitTextIntoSpan";
import { AnimateButton } from "@/lib/animateButton";
import AnimatedButton from "../ui/animatedButton";

export default function Hero({ isPreloaderComplete }) {
    const { data, isLoading, error } =
        useFetch('https://api.escuelajs.co/api/v1/products/?categoryId=3');
    const discount = 0.09;
    const buttonRef = useRef(null);
    const heroCopyRef = useRef(null);

    const getDiscountPrice = (price) => {
        return (price - price * discount).toFixed(2);
    }

    useEffect(() => {
        gsap.set("#ball", { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo("#ball", "x", { duration: 0, ease: "power3" }),
            yTo = gsap.quickTo("#ball", "y", { duration: 0, ease: "power3" });

        window.addEventListener("mousemove", e => {
            // xTo(e.pageX);
            // yTo(e.pageY);
            xTo(e.clientX);
            yTo(e.clientY);
        });
    }, []);

    useEffect(() => {
        if (isPreloaderComplete) {
            splitTextIntoSpans('#hero-copy h1');
            splitTextIntoSpans('#hero-text p');
            gsap.to('.hero img', {
                scale: 1,
                ease: 'power3.inOut',
                duration: 2,
            });

            gsap.to("#hero-copy", {
                opacity: 1,
                ease: 'power3.inOut',
            });

            gsap.to('#hero-copy h1 span', {
                top: '0',
                stagger: 0.1,
                opacity: 1,
                ease: 'power3.inOut',
                duration: 2,
            });

            gsap.to("#hero-text", {
                opacity: 1,
                ease: 'power3.inOut',
            });

            gsap.to('#hero-text p span', {
                top: '0',
                opacity: 1,
                stagger: 0.02,
                ease: 'power3.inOut',
                duration: 2,
            });

            gsap.to(buttonRef.current, {
                opacity: 1,
                ease: 'power3.inOut',
                duration: 2,
            });
        }
    }, [isPreloaderComplete]);

    // if (isLoading) return <div className="w-full h-full justify-center items-center">Loading...</div>;
    // if (error) return <div className="w-full h-full justify-center items-center">Error: {error.message}</div>;

    return (
        <>
            <div className={styles.ball} id="ball"></div>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <img src="/assets/images/furniture.jpg" alt="Images" />
                </div>

                <div className={`opacity-0 ${styles.heroCopy}`} id="hero-copy">
                    <Label>
                        <h1 ref={heroCopyRef}>Cozy</h1>
                    </Label>
                </div>

                <div className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={`opacity-0 ${styles.heroText}`} id="hero-text">
                            <Label>
                                <p>ADD ELEGANCE AND CHARM TO YOUR</p>
                                <p>SPACE WITH FURNITURE THAT</p>
                                <p>EXPRESSES YOUR INDIVIDUALITY</p>
                            </Label>
                        </div>
                        {/* <a href="#" className={`${styles.button} ${styles.buttonStroke}`} data-block="button">
                            <span className={styles.buttonFlair}></span>
                            <span className={styles.buttonLabel}>Explore Collection</span>
                        </a> */}
                        <div ref={buttonRef} className="opacity-0">
                            <AnimatedButton text="Cool" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 overflow-x-hidden">
                {data.map((product) => {
                    return (
                        <div div key={product} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >

                            <div className="p-10">
                                <img src={product.images}
                                    alt="Product"
                                    className="w-72 h-72 object-contain rounded-t-xl"
                                />
                            </div>
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">${getDiscountPrice(product.price)}</p>
                                    </del>
                                </div>
                                <div className="flex items-center">
                                    <Button className="w-1/2 bg-textPrimary hover:bg-black">Buy Now</Button>
                                    <LiaCartPlusSolid className="text-2xl ml-auto cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section> */}
        </>
    )
}
