# Tugas Basic REST API dengan Express.js

## Deskripsi

Pada tugas ini mahasiswa diminta membuat **REST API sederhana** menggunakan Node.js dan Express.js dengan menggunakan **data dummy (array)** tanpa database.

Mahasiswa akan mempelajari konsep dasar:

- Server Node.js
- Routing pada Express
- HTTP Method (GET, POST, PUT, DELETE)
- Response JSON
- Parameter pada URL

---

# Ketentuan Umum

1. Gunakan Node.js dan Express.js
2. Tidak menggunakan database
3. Data disimpan dalam array (data dummy)
4. Server berjalan pada port **3000**
5. Project harus bisa dijalankan dengan:

```
npm install
node app.js
```

Struktur project minimal:

```
project-folder
│
├── app.js
├── package.json
└── README.md
```

---

# Data Dummy Awal

Gunakan data berikut sebagai data awal.

```javascript
let students = [
  { id: 1, nama: "Andi", jurusan: "Informatika" },
  { id: 2, nama: "Budi", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Citra", jurusan: "Teknik Komputer" },
];
```

Mahasiswa boleh menambahkan data lain.

---

# Endpoint yang Harus Dibuat

## 1. Home Endpoint

```
GET /
```

Response:

```
API Mahasiswa berjalan
```

---

## 2. GET Semua Mahasiswa

```
GET /students
```

Menampilkan semua data mahasiswa.

---

## 3. GET Mahasiswa Berdasarkan ID

```
GET /students/:id
```

Contoh:

```
/students/1
```

Jika data tidak ada tampilkan:

```
Mahasiswa tidak ditemukan
```

---

## 4. POST Tambah Mahasiswa

```
POST /students
```

Body JSON:

```json
{
  "nama": "Dewi",
  "jurusan": "Informatika"
}
```

Mahasiswa harus menambahkan data baru ke array.

---

## 5. PUT Update Mahasiswa

```
PUT /students/:id
```

Contoh:

```
PUT /students/1
```

Body JSON:

```json
{
  "nama": "Andi Update",
  "jurusan": "Informatika"
}
```

Data mahasiswa dengan id tersebut harus diperbarui.

---

## 6. DELETE Mahasiswa

```
DELETE /students/:id
```

Contoh:

```
DELETE /students/2
```

Mahasiswa dengan id tersebut harus dihapus dari array.

---

# Contoh Response

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

# Penilaian

| Kriteria        | Nilai |
| --------------- | ----- |
| Server berjalan | 15    |
| Endpoint GET    | 20    |
| Endpoint POST   | 20    |
| Endpoint PUT    | 20    |
| Endpoint DELETE | 20    |
| Kerapihan kode  | 5     |

Total: **100**

---

# Cara Pengumpulan

1. Upload project ke GitHub
2. Pastikan project bisa dijalankan
3. Kirim link repository
