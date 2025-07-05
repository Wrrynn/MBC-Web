# Website MBC Lab - Next.js + Vercel

Ini adalah proyek website MBC Lab yang dibangun menggunakan [Next.js](https://nextjs.org/) dan di-deploy menggunakan [Vercel](https://vercel.com/).

---
```
Struktur Proyek

├── .next/ # Direktori build otomatis oleh Next.js
├── app/ # Folder utama aplikasi
│ ├── api/ # API routes menggunakan Next.js API
│ ├── components/ # Komponen UI reusable
│ ├── devPage/ # Halaman atau komponen untuk identitas developer
│ ├── fonts/ # File font kustom
│ ├── favicon.ico # Ikon website
│ ├── globals.css # Styling global
│ ├── layout.js # Layout utama aplikasi
│ ├── page.js # Entry point halaman utama
│ ├── page.module.css # Styling modular untuk halaman
├── node_modules/ # Dependensi node
├── public/ # Aset publik (gambar, file statis, dll)
├── .gitignore # File untuk mengecualikan file dari Git
├── jsconfig.json # Konfigurasi path dan IntelliSense untuk JavaScript
├── next.config.mjs # Konfigurasi Next.js
├── package-lock.json # Lockfile npm
├── package.json # Informasi proyek dan dependensi
└── README.md # Dokumentasi proyek
```

## Instalasi Lokal

Ikuti langkah berikut untuk menjalankan proyek secara lokal:

1. **Clone repositori:**

   ```bash
   git clone https://github.com/username/mbc-lab-web.git
   cd mbc-lab-web
   ```

2. **Install Dependensi:**

```bash
npm install
```

3. **Jalankan Server:** 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Buka aplikasi**
buka [http://localhost:3000](http://localhost:3000) dengan browser untuk menampilkan hasil.


## Deployment
Deployment dilakukan dengan menggunakan vercel dengan bantuan GitHub, pastikan:
- File next.config.mjs telah dikonfigurasi dengan benar untuk kebutuhan produksi.
- Semua aset statis ada di folder public/.

## Vercel:
Cara melakukan deploy dengan vercel yaitu:
1. push project ke GitHub
2. Login ke [vercel](https://vercel.com/) menggunakan akun GitHub
3. Impor repository yang ingin di deploy dan sesuaikan konfigurasi 

## Konfigurasi SSL (HTTPS) di Vercel
Dengan melakukan deploy proyek ke vercel maka Vercel akan otomatis mengkonfigurasi SSL/TLS untuk domain tersebut.

## Back-End
Proyek ini menggunakan API route Next.js untuk menangani form kontak yang dikirim dari frontend.
File API terdapat di:
```bash
app/api/kontak/route.js
```

Cara Kerja:
1. API Menerima request POST dari form kontak.
2. API Mengecek apakah nama, email, dan pesan terisi.
3. Jika valid, data akan disimpan (sementara) dengan console.log(...)

## Author
I Made Dwi Wiryawan Raditya<br>
103012300142<br>
Informatika(2023)
---