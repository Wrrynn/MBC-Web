'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className={styles.logo}>
                <Image src="/img/MBC-Icon.png" alt="MBC Lab Logo" width={200} height={50} />
            </div>

            {/* Toggle Menu Button */}
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                <Image
                    src={menuOpen ? "/img/x.png" : "/img/menu.png"}
                    alt="Menu Icon"
                    width={30}
                    height={30}
                />
            </div>

            {/* Navigation Links */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#beranda"><strong>Beranda</strong></a></li>
                <li><a href="#informasi"><strong>Informasi</strong></a></li>
                <li><a href="#divisi"><strong>Divisi</strong></a></li>
                <li><a href="#kontak"><strong>Kontak</strong></a></li>
                <li><Link href="/devPage"><strong>Developer</strong></Link></li>
            </ul>
        </header>
    );
}
