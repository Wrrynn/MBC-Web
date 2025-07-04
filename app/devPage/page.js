import styles from './DevPage.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function DevPage() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.back}>Back</Link>
                <Image src="/img/MBC-Icon.png" alt="MBC Lab Logo" width={120} height={40} />
            </nav>

            <main className={styles.content}>
                <section>
                    <h1>Credits</h1>
                    <h2>I Made Dwi Wiryawan Raditya</h2>
                    <h2>103012300142</h2>
                    <h2>S1 Informatika - 2023</h2>
                </section>

                <section>
                    <h1>Teknis</h1>
                    <h2>Palette</h2>
                    <div className={styles.palette}>
                        <div style={{ background: '#4E80EE' }}>#4E80EE</div>
                        <div style={{ background: '#E63946' }}>#E63946</div>
                        <div style={{ background: '#0A0A0A' }}>#0A0A0A</div>
                        <div style={{ background: '#ffffff', color: '#000' }}>#ffffff</div>
                    </div>
                </section>

                <section>
                    <h1>Referensi</h1>
                    <p>
                        <a
                            href="https://reactbits.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            https://reactbits.dev/
                        </a>
                        <a
                            href="https://www.w3schools.com/cssref/pr_class_display.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            https://www.w3schools.com/cssref/pr_class_display.php
                        </a>
                    </p>
                </section>

                <section>
                    <h1>Connect with Me</h1>
                    <div className={styles.socials}>
                        <a href="mailto:dwiwiryawan05dk@gmail.com?subject=Halo%20dari%20Website&body=Halo%2C%20saya%20ingin%20bertanya..." target="_blank" rel="noopener noreferrer">
                            <Image src="/img/mail.png" alt="mail" width={40} height={32} />
                        </a>
                        <a href="https://github.com/Wrrynn/MBC-Web" target="_blank" rel="noopener noreferrer">
                            <Image src="/img/git.png" alt="git" width={40} height={40} />
                        </a>
                        <a href="https://www.instagram.com/wrrynn/" target="_blank" rel="noopener noreferrer">
                            <Image src="/img/ig.png" alt="Instagram" width={40} height={40} />
                        </a>
                        <a href="https://www.linkedin.com/in/i-made-dwi-wiryawan-raditya/" target="_blank" rel="noopener noreferrer">
                            <Image src="/img/li.png" alt="LinkedIn" width={40} height={40} />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
