'use client';

import styles from './style.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
    {
        title: "Home",
        href: "/",
        src: "/assets/images/chair.jpg"
    },
    {
        title: "Shop",
        href: "/shop",
        src: "/assets/images/furniture.jpg"
    },
    {
        title: "About Us",
        href: "/about",
        src: "/assets/images/furniture.jpg"
    },
    {
        title: "Contact",
        href: "/contact",
        src: "/assets/images/furniture.jpg"
    }
]

export default function Index() {
    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
    const pathname = usePathname();

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body
                        links={links}
                        selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink}
                        pathname={pathname}
                    />
                    <Footer />
                </div>
                <Image src={links[selectedLink.index].src} selectedLink={selectedLink} />
            </div>
        </motion.div>
    )
}