# ujian-online-smp-albanna

Sistem ujian online untuk SMP Al-Banna Denpasar (Vue 3 + Supabase, tanpa build step — semua halaman jalan langsung dari HTML statis).

## Struktur folder

```
ujian-online-smp-albanna/
├─ index.html              # landing / dashboard menu
├─ README.md
├─ assets/
│  ├─ images/               # logo.png, kop.png, atas.png
│  └─ docs/
│     └─ cover_soal.docx
├─ css/
│  ├─ base.css              # reset & style umum lintas halaman
│  ├─ layout.css            # style struktural khusus per halaman
│  └─ print.css             # placeholder (belum ada kebutuhan cetak)
├─ js/
│  ├─ config.js             # kredensial Supabase (URL + anon key)
│  ├─ supabaseClient.js     # inisialisasi client `db` global
│  └─ pages/                # (belum diisi, lihat "Status migrasi")
├─ pages/
│  ├─ admin.html
│  ├─ guru.html
│  ├─ siswa.html
│  ├─ input.html
│  ├─ soal.html
│  ├─ jawaban.html
│  ├─ remidi.html
│  ├─ absen-ujian.html
│  ├─ administrasi.html
│  └─ perencanaan.html
└─ sql/
   ├─ schema.sql             # placeholder, lihat isi file
   └─ policies.sql           # placeholder, lihat isi file
```

## Setup

1. Isi `js/config.js` dengan `SUPABASE_URL` dan `SUPABASE_ANON_KEY` project Supabase Anda.
2. Pastikan Row Level Security (RLS) aktif di semua tabel (lihat catatan di `sql/policies.sql`).
3. Buka `index.html` langsung di browser, atau serve lewat static hosting apa pun (GitHub Pages, Netlify, dsb) — tidak ada proses build.

## Status migrasi struktur (dari versi flat sebelumnya)

Proyek ini awalnya berupa file HTML lepas (tanpa folder) dengan CSS dan JS ditulis inline di tiap file. Yang sudah dirapikan:

- Semua halaman dipindah ke `pages/`, aset ke `assets/`, path & link antar halaman sudah disesuaikan.
- Konfigurasi Supabase (URL + anon key) yang sebelumnya di-hardcode berulang di 8+ file, sekarang disatukan di `js/config.js` + `js/supabaseClient.js`.
- Semua `<style>` inline dipindah ke `css/base.css` (style umum) dan `css/layout.css` (style khusus per halaman, class-nya sudah dipastikan tidak saling bentrok antar halaman).
- **Belum dilakukan**: memecah logic Vue tiap halaman (yang masih inline di `<script>` masing-masing file) ke `js/pages/*.js`, serta membuat `js/auth.js`, `js/storage.js`, `js/utils.js` terpisah. Ini sengaja ditunda karena menyangkut business logic ujian & nilai yang dipakai ±400 siswa — perlu dipecah & diuji satu halaman demi satu halaman, bukan sekaligus, supaya tidak ada regresi.
- `sql/schema.sql` dan `sql/policies.sql` berisi catatan hasil pembacaan kode (daftar nama tabel yang dipanggil), bukan hasil export resmi dari Supabase — perlu dilengkapi manual.

## Catatan keamanan

Dua halaman (`input.html`, `siswa.html`) sebelumnya menyimpan Supabase anon key asli (bukan placeholder `XXXX`/`eyJ...` seperti 8 halaman lain). Sekarang sudah disatukan lewat `js/config.js` dengan nilai placeholder — isi ulang dengan key asli Anda sebelum dipakai, dan pastikan RLS tabel sudah benar sebelum repo ini di-push ke GitHub publik.
