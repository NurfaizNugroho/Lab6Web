const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Saya hari ini sedang belajar JavaScript DOM.";

const tombol = document.getElementById("tombolAksi");

// Menangkap elemen berdasarkan ID
const tombolGaya = document.getElementById("tombolGaya");
const tombolTambah = document.getElementById("tombolTambah");
const tombolHapus = document.getElementById("tombolHapus");
const teksGaya = document.getElementById("teksGaya");

// 1. Menggunakan classList.toggle()
tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// 2. Menggunakan classList.add()
tombolTambah.addEventListener("click", function () {
    teksGaya.classList.add("highlight");
    teksGaya.classList.add("teks-besar");
});

// 3. Menggunakan classList.remove()
tombolHapus.addEventListener("click", function () {
    teksGaya.classList.remove("highlight");
    teksGaya.classList.remove("teks-besar");
});

// [Poin 4] Menyamarkan/menampilkan paragraf dengan class CSS
const teksSembunyi = document.getElementById("teksSembunyi");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
    teksSembunyi.classList.toggle("sembunyi");
    if (teksSembunyi.classList.contains("sembunyi")) {
        tombolSembunyi.textContent = "Tampilkan Paragraf";
    } else {
        tombolSembunyi.textContent = "Sembunyikan Paragraf";
    }
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// [Poin 3] Event change pada dropdown sesi workshop
const sesiSelect = document.getElementById("sesi");
const pesanSesi = document.getElementById("pesanSesi");

sesiSelect.addEventListener("change", function () {
    const sesiDipilih = sesiSelect.value;
    if (sesiDipilih !== "") {
        pesanSesi.textContent = "Sesi terpilih: " + sesiDipilih;
    } else {
        pesanSesi.textContent = "Sesi terpilih: -";
    }
});

// Form Validation
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    // [Poin 2] Validasi agar nama minimal terdiri dari 3 karakter
    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (nama.length < 3) {
        pesanForm.textContent = "Nama harus minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
        pesanSesi.textContent = "Sesi terpilih: -";
    }
});

// To-do List Section
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    
    // [Poin 1] Membuat tombol Hapus untuk setiap item To-do List
    const hapus = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.style.marginLeft = "5px";

    // Event listener untuk tandai selesai
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    // [Poin 1] Event listener tombol hapus item dari list
    hapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});
