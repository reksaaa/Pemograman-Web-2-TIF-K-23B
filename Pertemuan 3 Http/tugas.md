# Tugas Basic Express.js – Data Dummy API

## Deskripsi

Pada tugas ini mahasiswa diminta membuat API sederhana menggunakan Node.js dan Express.js dengan menggunakan data dummy (array di dalam kode).

Tujuan tugas ini adalah agar mahasiswa memahami:

- konsep dasar server
- routing pada Express
- pengiriman data JSON
- penggunaan parameter pada URL

---

## Ketentuan Umum

1. Gunakan Node.js dan framework Express.js.
2. Tidak diperbolehkan menggunakan database (gunakan data dummy berupa array).
3. Project harus dapat dijalankan dengan perintah:

```
npm install
node app.js
```

4. Server harus berjalan pada port **3000**.
5. Struktur project minimal:

```
project-folder
│
├── app.js
├── package.json
└── README.md
```

---

## Data Dummy

Gunakan data awal berikut:

```javascript
const students = [
  { id: 1, nama: "Andi", jurusan: "Informatika" },
  { id: 2, nama: "Budi", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Citra", jurusan: "Teknik Komputer" },
];
```

Mahasiswa boleh menambahkan data tambahan.

---

## Endpoint yang Harus Dibuat

### 1. Home Endpoint

```
GET /
```

Response:

```
API Mahasiswa berjalan
```

---

### 2. Menampilkan Semua Mahasiswa

```
GET /students
```

Response: menampilkan seluruh data mahasiswa dalam format JSON.

---

### 3. Menampilkan Mahasiswa Berdasarkan ID

```
GET /students/:id
```

Contoh:

```
/students/1
```

Response: menampilkan data mahasiswa sesuai id.

Jika data tidak ditemukan, tampilkan pesan:

```
Mahasiswa tidak ditemukan
```

---

## Tugas Tambahan

Buat endpoint baru:

```
GET /students/jurusan/:jurusan
```

Contoh:

```
/students/jurusan/Informatika
```

Endpoint tersebut harus menampilkan mahasiswa berdasarkan jurusan.

---

## Output yang Diharapkan

Contoh response dari endpoint:

```
GET /students
```

```json
[
  {
    "id": 1,
    "nama": "Andi",
    "jurusan": "Informatika"
  },
  {
    "id": 2,
    "nama": "Budi",
    "jurusan": "Sistem Informasi"
  }
]
```

---

## Penilaian

| Kriteria                  | Nilai |
| ------------------------- | ----- |
| Server berjalan           | 20    |
| Endpoint `/students`      | 20    |
| Endpoint `/students/:id`  | 20    |
| Endpoint tambahan jurusan | 20    |
| Kerapihan kode            | 20    |

Total Nilai: **100**

---

## Cara Pengumpulan

1. Upload project ke GitHub.
2. Pastikan project dapat dijalankan.
3. Kirimkan link repository ke LMS atau Google Classroom.

```

Jika Anda ingin, saya juga bisa buatkan **README versi lebih profesional seperti yang biasa dipakai di GitHub (lengkap dengan badge, API table, dan contoh response)** sehingga terlihat seperti **project backend sungguhan untuk mahasiswa IT.
```
