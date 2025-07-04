'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Aurora from "./components/Aurora/Aurora";
import FuzzyCus from "./components/FuzzyCus/FuzzyCus";
import Orb from "./components/Orb/Orb";
import StarBorder from "./components/StarBorder/StarBorder";
import Balatro from "./components/Balatro/Balatro";
import ShinyText from "./components/ShinyText/ShinyText";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Beranda Section */}
        <section className={styles.halaman} id="beranda">
          <div className={styles.orb}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={false}
              hue={0}
              forceHoverState={true}
            />
          </div>
          <div className={styles.beranda} id="jembatan-glitch">
            <div className={styles.fuzz}>
            <FuzzyCus
              baseIntensity={0.3}
              hoverIntensity={0.3}
              enableHover={true}
            />
            </div>
            <p className={styles.hashtags}>#GoGoMBC #WeAttack #WeProtect</p>
            <p className={styles.desc}>
              MBC Laboratory merupakan sebuah Pusat Riset Teknologi dan Konsultan
              yang berfokus pada pengembangan solusi di bidang
              <strong> Cybersecurity</strong>, <strong> Big Data Analytics</strong>, <strong> Game
                Technology</strong>, dan <strong> Geographic Information Systems (GIS)</strong>.
            </p>
          </div>
        </section>

        {/* Informasi Section */}
        <section className={styles.halaman} id="informasi">
          <div className={styles.tentang}>
            <div className={styles.tentTitle}>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Tentang Kami
            </ScrollFloat>
            </div>
            <p className={styles.tentDesc}>
              MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory,
              merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM).
              Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia.
              Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi
              untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam tiga bidang utamanya.
            </p>


            <div className={styles.vimi}>
              <div className={styles.visi}>
                <StarBorder
                  as="text"
                  className="custom-class"
                  color="cyan"
                  speed="30s"
                >
                  <h3>Visi</h3>
                  <p>
                    Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia Application,
                    Big Data, dan Cybersecurity. Mendorong riset berdampak dan mematangkan skill
                    asisten agar siap bersaing di industri.
                  </p>
                  <p className={styles.quote}>“Inspirasi dari Legenda Gatot Kaca dan Kawah Candradimuka”</p>
                </StarBorder>
              </div>

              <div className={styles.misi}>
                <StarBorder
                  as="text"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  <h3>Misi</h3>
                  <ol>
                    <li>Menjadi lingkungan pembelajaran dan riset jangka panjang.</li>
                    <li>Mendukung pertumbuhan profesional dan karier.</li>
                    <li>Menjadi pusat informasi Teknologi, Multimedia, dan Softskill.</li>
                  </ol>
                  <p className={styles.quote}>“Work Life Balance bukan berarti melakukan sesuatu secara singkat namun efektif”</p>
                </StarBorder>
              </div>
            </div>
          </div>
        </section>

        {/* Divisi Section */}
        <section className={styles.halaman} id="divisi">
          <div className={styles.divisi}>
            <div className={styles.divisiTitle}>
              <div style={{ marginTop: '4rem' }}>
                <DecryptedText
                  text="Divisi"
                  speed={100}
                  maxIterations={20}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ
                              1234567890
                              ~@#$%^&*()_-+="
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                />
              </div>
            </div>
            <div className={styles.dvsGrid}>
              <div className={styles.dvsItem}>
                <div className={styles.background}>
                  <Balatro
                    isRotate={false}
                    mouseInteraction={true}
                    pixelFilter={700}
                  />
                </div>

                <div className={styles.card}>
                  <Image src="/img/cyber-security.png" alt="Cybersecurity" width={100} height={100} />
                  <h3>Cybersecurity</h3>
                  <p>
                    Cyber security atau keamanan siber adalah tindakan perlindungan
                    perangkat, jaringan, program, dan data dari ancaman serangan siber serta akses ilegal.
                  </p>
                </div>
              </div>

              <div className={styles.dvsItem}>
                <div className={styles.background}>
                  <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
                </div>
                <div className={styles.card}>
                  <Image src="/img/monitor.png" alt="Big Data" width={100} height={100} />
                  <h3>Big Data</h3>
                  <p>
                    Big data adalah kumpulan data yang sangat besar dan kompleks yang terdiri dari data terstruktur, semi-terstruktur, dan tidak terstruktur. Big data memiliki beberapa karakteristik, yaitu volume, kecepatan, dan variasi.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.dvsGrid}>
              <div className={styles.dvsItem}>
                <div className={styles.background}>
                  <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
                </div>
                <div className={styles.card}>
                  <Image src="/img/game-controller.png" alt="Game Technology" width={100} height={100} />
                  <h3>Game Technology</h3>
                  <p>
                    Game tech atau teknologi game adalah teknologi yang digunakan untuk mengembangkan dan memproduksi game.
                  </p>
                </div>
              </div>

              <div className={styles.dvsItem}>
                <div className={styles.background}>
                  <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
                </div>
                <div className={styles.card}>
                  <Image src="/img/dark-cloud.png" alt="GIS" width={100} height={100} />
                  <h3>Geographic Information System</h3>
                  <p>
                    Sistem Informasi Geografis (Geographic Information System atau GIS) adalah sebuah teknologi yang digunakan untuk mengumpulkan, mengelola, menganalisis, dan memvisualisasikan data berbasis lokasi atau geografis.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Kontak Section */}
        <section className={styles.halaman} id="kontak">
          <div className={styles.kontak}>
            <h2 className={styles.konTitle}>Kontak Kami</h2>
            <div className={styles.konBG}>
              <div className={styles.contactSection}>
                {/* MAP */}
                <div className={styles.mapContainer}>
                  <div className={styles.mapWrapper}>
                    <iframe
                      className={styles.map}
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3960.340972834053!2d107.628221!3d-6.969041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1751438695608!5m2!1sid!2sid"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* FORM */}
                <div className={styles.contactInfo}>
                  <h3>Hubungi Kami</h3>
                  <form className={styles.form}>
                    <input type="text" placeholder="Nama" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Pesan" />
                    <button type="submit">Kirim</button>
                  </form>

                  <div className={styles.socials}>
                    <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
                      <Image src="/img/wa.png" alt="WhatsApp" width={40} height={40} />
                    </a>
                    <a href="https://linevoom.line.me/user/_dYH8QGpqFCBt7_3T8iYwqIdq-8XKGFB9YMzQOCk" target="_blank" rel="noopener noreferrer">
                      <Image src="/img/line.png" alt="Line" width={40} height={40} />
                    </a>
                    <a href="https://www.instagram.com/mbclab/" target="_blank" rel="noopener noreferrer">
                      <Image src="/img/ig.png" alt="Instagram" width={40} height={40} />
                    </a>
                    <a href="https://www.linkedin.com/company/mbclaboratory/" target="_blank" rel="noopener noreferrer">
                      <Image src="/img/li.png" alt="LinkedIn" width={40} height={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.font}>
          <ShinyText text="We Attack, We Protect." disabled={false} speed={3} className='custom-class' />
        </div>
        <div className={styles.Aurora}>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </footer>
    </div>
  );
}
