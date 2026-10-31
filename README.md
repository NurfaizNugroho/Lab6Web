# Web1Lab6: Laporan Praktikum 6 - DOM dan Event Handling JavaScript[cite: 1]

Repositori ini berisi hasil pengerjaan Praktikum 6 mata kuliah Pemrograman Web mengenai pengenalan manipulasi DOM (*Document Object Model*) dan *Event Handling* di JavaScript, meliputi pemilihan elemen HTML, penanganan berbagai *event* (`click`, `input`, `change`, `submit`), penggunaan `classList`, validasi formulir interaktif, aplikasi To-Do List, hingga eksperimen mandiri[cite: 1].

## Data Mahasiswa[cite: 1]
- **Nama:** Nurfaiz Pradibto Nugroho
- **NIM:** 312510172
- **Program Studi / Semester:** Teknik Informatika / 3
- **Kelas:** I253C
- **Mata Kuliah:** Pemrograman Web
- **Dosen Pengampu:** Agung Nugroho, S.Kom., M.Kom.
- **Hari / Tanggal:** Sabtu, 31 Oktober 2026 (Pertemuan 7 - Online)
- **Instansi:** Universitas Pelita Bangsa

---

## Langkah-langkah Praktikum

Berikut adalah alur pengerjaan Praktikum 6 beserta rincian kode dan tautan gambar bukti hasil praktikum:

### 1. Persiapan dan Struktur Dasar HTML/JS
- Mempersiapkan text editor (Visual Studio Code), membuat folder kerja `lab6_dom_event`, serta menyiapkan file `index.html`, `style.css`, dan `script.js`

![Kode HTML Dasar dan Struktur Awal](/images/img-1.png)

### 2. Manipulasi Konten Teks DOM Berdasarkan ID
- Memilih elemen HTML berdasarkan atribut ID menggunakan `document.getElementById()` lalu mengubah konten teksnya menggunakan properti `textContent`

![Kode JavaScript Seleksi Elemen dan Ubah Teks](/images/img-2.png)
![Tampilan Halaman Awal Modifikasi DOM](/images/img-3.png)
![Kode JavaScript Ubah Teks Pesan](/images/img-4.png)
![Tampilan Halaman Setelah Teks Pesan Diubah](/images/img-5.png)

### 3. Penanganan Event Klik Tombol (`addEventListener`)
- Menambahkan *event listener* berjenis `"click"` pada elemen tombol untuk merespons tindakan pengguna secara dinamis

![Kode Script Penambahan Event Listener Klik](/images/img-6.png)
![Tampilan Halaman Saat Tombol Telah Diklik](/images/img-7.png)

### 4. Pengubahan Gaya CSS Dinamis dengan `classList.toggle()`
- Menambahkan kelas aturan CSS `.highlight` dan `.teks-besar` pada berkas `style.css` lalu menerapkannya melalui `classList.toggle()`

![Kode Aturan CSS Highlight dan Teks Besar](/images/img-8.png)
![Kode Script Toggle ClassList pada Tombol Gaya](/images/img-9.png)
![Kode Penambahan Elemen HTML untuk Fitur Ubah Gaya](/images/img-11.png)
![Tampilan Halaman Hasil Perubahan Gaya Teks](/images/img-10.png)

### 5. Penggunaan `classList.add()` dan `classList.remove()`
- Mempraktikkan penambahan dan penghapusan kelas gaya CSS secara eksplisit menggunakan method `classList.add()` dan `classList.remove()`

![Kode HTML Tombol Tambah dan Hapus Gaya](/images/img-11.png)
![Kode Script classList.add dan classList.remove](/images/img-15.png)
![Tampilan Halaman Menggunakan classList.add dan classList.remove](/images/img-13.png)

### 6. Penghitung Karakter Input Real-Time (`event input`)
- Membuat input teks nama dengan batasan maksimal karakter dan indikator penghitung dinamis yang diperbarui secara langsung saat pengguna mengetik

![Kode HTML Section Input Nama dan Penghitung Karakter](/images/img-16.png)
![Kode Script Event Listener Input Karakter](/images/img-17.png)
![Tampilan Saat Pengguna Mengetik Nama](/images/img-18.png)
![Tampilan Saat Input Nama Dihapus](/images/img-19.png)
![Tampilan Saat Pengguna Menempelkan (Paste) Teks](/images/img-20.png)

### 7. Validasi Form Pendaftaran dan Pencegahan Event Default
- Membuat formulir pendaftaran (Nama, Email, Usia) dengan validasi input berbasis percabangan serta menghentikan aksi bawaan browser menggunakan `event.preventDefault()`

![Kode HTML Form Pendaftaran Lengkap](/images/img-21.png)
![Kode Script Validasi Form Pendaftaran dan Kondisional](/images/img-22.png)
![Tampilan Validasi - Jika Semua Kolom Kosong](/images/img-23.png)
![Tampilan Validasi - Jika Kolom Nama Kosong](/images/img-24.png)
![Tampilan Validasi - Jika Format Email Tidak Valid](/images/img-25.png)
![Tampilan Validasi - Jika Usia di Bawah 17 Tahun](/images/img-26.png)
![Tampilan Validasi - Jika Semua Data Terisi Benar](/images/img-27.png)

### 8. Aplikasi Sederhana Daftar Tugas (To-Do List)
- Membangun aplikasi daftar tugas dinamis menggunakan `document.createElement()`, penambahan elemen `<li>`, serta fitur penanda status selesai (*line-through*)

![Kode HTML Section Daftar Tugas](/images/img-28.png)
![Kode CSS Pengaturan Tampilan Tugas Selesai](/images/img-29.png)
![Kode Script Pembuatan Elemen Tugas dan Toggle Selesai](/images/img-30.png)
![Tampilan Antarmuka Saat Menambahkan Tugas Baru](/images/img-32.png)
![Tampilan Antarmuka Saat Tugas Ditandai Selesai](/images/img-31.png)

### 9. Pengembangan Halaman Pendaftaran Workshop Interaktif
- Mengembangkan halaman formulir pendaftaran workshop dengan minimal tiga fungsi interaktif (penghitung karakter, validasi data, pesan sukses/error dinamis, serta ringkasan pendaftaran)

![Tampilan Lengkap Form Pendaftaran Workshop](/images/img-33.png)
![Tampilan Fitur Penghitung Karakter pada Catatan Alasan](/images/img-34.png)
![Tampilan Pesan Sukses Berwarna Hijau](/images/img-35.png)
![Tampilan Pesan Kesalahan Berwarna Merah](/images/img-36.png)
![Tampilan Kondisi Tombol Reset Formulir](/images/img-37.png)
![Tampilan Ringkasan Hasil Pendaftaran Workshop](/images/img-37.png)

---

## Eksperimen Mandiri

### 1. Tombol Hapus Item pada To-Do List
- Menambahkan tombol hapus fungsional ke dalam komponen tugas untuk menghapus elemen `<li>` secara spesifik dari DOM menggunakan method `item.remove()`

![Kode Script Event Listener Tombol Hapus Item Tugas](/images/img-38.png)
![Tampilan To-Do List Dilengkapi Tombol Hapus](/images/img-39.png)

### 2. Validasi Panjang Minimal Karakter Nama
- Memodifikasi aturan validasi formulir agar kolom nama lengkap wajib diisi minimal tiga karakter (`nama.length < 3`)

![Kode Script Validasi Panjang Karakter Nama Minimal 3](/images/img-40.png)
![Tampilan Pesan Error Saat Nama Kurang dari Tiga Karakter](/images/img-41.png)

### 3. Event Change pada Dropdown Sesi Workshop
- Menambahkan *event listener* bertipe `"change"` pada elemen pilihan sesi workshop `<select>` guna mendeteksi perubahan pilihan dan memperbarui teks informasi secara langsung

![Kode HTML Elemen Dropdown Sesi Workshop](/images/img-42.png)
![Kode Script Penanganan Event Change Dropdown Sesi](/images/img-43.png)
![Tampilan Antarmuka Pilihan Dropdown Sesi Workshop](/images/img-41.png)

### 4. Toggle Sembunyikan dan Tampilkan Paragraf
- Membuat kelas CSS `.sembunyi { display: none; }` dan tombol interaktif untuk menyembunyikan serta menampilkan kembali elemen paragraf secara dinamis

![Kode CSS Aturan Kelas Sembunyi / Display None](/images/img-44.png)
![Kode Script Toggle Sembunyikan dan Tampilkan Paragraf](/images/img-45.png)
![Tampilan Saat Paragraf Ditampilkan Kembali](/images/img-46.png)
![Tampilan Saat Paragraf Disembunyikan](/images/img-47.png)

---

## Analisis Masalah: Penempatan Script Tanpa Atribut `defer` di dalam `<head>`

- **Kemungkinan Masalah yang Muncul:** Terdapat pesan kesalahan (*error*) pada konsol peramban seperti `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`
- **Analisis Penyebab:** Peramban membaca dokumen HTML secara sinkron dari atas ke bawah. Apabila tag `<script>` diletakkan di dalam `<head>` tanpa atribut `defer`, berkas JavaScript akan dieksekusi sebelum elemen-elemen di dalam `<body>` selesai dimuat. Akibatnya, perintah seperti `document.getElementById()` mengembalikan nilai `null` karena elemen target belum terbentuk di DOM

---

## Pertanyaan dan Jawaban

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**
   - **Pengertian:** DOM (*Document Object Model*) adalah antarmuka pemrograman yang merepresentasikan dokumen HTML/XML dalam bentuk struktur pohon (*tree structure*) sehingga dapat diakses dan dimanipulasi oleh bahasa pemrograman seperti JavaScript
   - **Manfaat:** Memungkinkan JavaScript untuk membaca, mengubah, menambah, atau menghapus elemen HTML, atribut, dan gaya CSS secara dinamis serta merespons interaksi pengguna (*event handling*) tanpa perlu memuat ulang (*reload*) halaman

2. **Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**
   - `getElementById(id)`: Mencari dan mengambil satu elemen unik berdasarkan nilai atribut ID
   - `querySelector(selector)`: Mengambil elemen pertama yang cocok dengan pemilih CSS tertentu (ID, kelas, atau tag)
   - `querySelectorAll(selector)`: Mengambil seluruh elemen yang cocok dengan pemilih CSS dalam bentuk daftar objek (*NodeList*)

3. **Apa fungsi `addEventListener()` dan sebutkan tiga contoh event!**
   - **Fungsi:** Mendaftarkan fungsi penangan (*event handler*) pada suatu elemen agar mendengarkan dan merespons tindakan atau kejadian spesifik
   - **Tiga Contoh Event:** `"click"`, `"input"` (atau `"change"`), dan `"submit"`

4. **Mengapa `event.preventDefault()` digunakan pada event submit form?**
   - Berfungsi untuk mencegah tindakan bawaan browser (*default action*) berupa pemuatan ulang halaman (*reload*) atau pengiriman data langsung ke server, sehingga data dapat divalidasi secara lokal terlebih dahulu

5. **Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**
   - **Sisi Penggunaan:** `textContent` digunakan untuk mengambil/mengubah teks murni tanpa memproses tag HTML, sedangkan `innerHTML` memproses teks beserta struktur tag HTML di dalamnya
   - **Sisi Keamanan:** `textContent` lebih aman karena memperlakukan semua input sebagai teks biasa (mencegah celah *Cross-Site Scripting* / XSS), sementara `innerHTML` rentan terhadap eksploitasi XSS jika bersumber dari masukan pengguna secara langsung

6. **Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**
   - Method ini memeriksa keberadaan kelas CSS: jika belum ada maka akan ditambahkan (*add*), dan jika sudah ada maka akan dihapus (*remove*). Sangat membantu untuk membuat efek saklar (*switch*) secara instan seperti mode gelap atau dropdown menu

7. **Sebutkan minimal tiga skenario pengujian validasi form!**
   - **Skenario Input Kosong:** Menguji form saat dikirimkan tanpa mengisi field wajib untuk memastikan pesan error muncul
   - **Skenario Format Data Tidak Valid:** Menguji input email tanpa karakter `@` atau titik untuk memastikan regex mendeteksi kesalahan
   - **Skenario Batas Nilai / Karakter:** Menguji input angka di luar rentang atau panjang karakter kurang dari batas minimum