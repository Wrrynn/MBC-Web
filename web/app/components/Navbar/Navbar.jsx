'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header
            className={styles.navbar}
            style={{
                top: visible ? '0' : '-100px',
                transition: 'top 0.3s ease-in-out',
            }}
        >
            <div>
                <Image src="/img/MBC-Icon.png" alt="MBC Lab Logo" width={200} height={50} />
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#beranda"><strong>Beranda</strong></a></li>
                <li><a href="#informasi"><strong>Informasi</strong></a></li>
                <li><a href="#divisi"><strong>Divisi</strong></a></li>
                <li><a href="#kontak"><strong>Kontak</strong></a></li>
                <Link href="/devPage"><strong>Developer</strong></Link>
            </ul>
        </header>
    );
}
