// ================================================================
// SUPABASE CLIENT (bersama untuk semua halaman)
// ================================================================
// Wajib dimuat SETELAH:
//   1) <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">
//   2) js/config.js
// Membuat variabel global `db` seperti sebelumnya, supaya kode Vue
// di tiap halaman (yang memakai `db.from(...)`, dst) tidak perlu diubah.
// ================================================================
(function () {
    const { createClient } = supabase;
    window.db = createClient(
        window.APP_CONFIG.SUPABASE_URL,
        window.APP_CONFIG.SUPABASE_ANON_KEY
    );
})();
