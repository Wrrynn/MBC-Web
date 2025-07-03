import styles from './DevPage.module.css';
import Link from 'next/link';

export default function DevPage() {
    return (
        <div>
            <Link href='/' className={styles.backLink}>← Back</Link>
            <h1 className={styles.title}>Developer Page</h1>
            <h1>Credits</h1>
            <h2>I Made Dwi Wiryawan Raditya</h2>
            <h2>103012300142</h2>
            <h2>S1 Informatika - 2023</h2>
            <h1>Teknis</h1>
            <h1>Referesi</h1>
            <p>Selamat datang di halaman Developer.</p>
        </div>
    );
}
