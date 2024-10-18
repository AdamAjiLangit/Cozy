'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './not-found.module.css';
import Rounded from '@/common/RoundedButton'
import Magnetic from '@/common/Magetic';

export default function Custom404() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            "#page-not-found span, #logo",
            {
                y: 200,
                skewY: 10,
                opacity: 0,
            },
            {
                y: 40,
                skewY: 5,
                opacity: 1,
                duration: .8,
                stagger: 0.1,
            })
        tl.fromTo(
            "#home-btn",
            {
                scale: 0,
                duration: .5,
                stagger: {
                    amount: .6
                }
            },
            {
                scale: 1,
                duration: .5,
                stagger: {
                    amount: .6
                }
            },
            "-=.4");
    }, []);

    return (
        <>
            <div className='bg-primary overflow-hidden'>
                {/* <div className={styles.logo} id='logo'>
                    Cozy
                </div> */}
                <div className={styles.pageContainer}>
                    <div className={styles.pageNotFound} id='page-not-found'>
                        <span>PAGE</span>
                        <span>
                            <div className={styles.span404}>404</div>
                            NOT
                        </span>
                        <span>FOUND</span>
                    </div>
                </div>
                <div className={styles.homeBtn} id='home-btn'>
                    <a href="/">
                        <button>
                            Take me home
                        </button>
                    </a>
                </div>
            </div >
        </>
    )
}
