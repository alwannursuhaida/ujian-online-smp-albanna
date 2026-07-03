// ================================================================
// KONFIGURASI SUPABASE
// ================================================================
// Isi SUPABASE_URL dan SUPABASE_ANON_KEY dengan kredensial project
// Supabase Anda. Nilai anon key aman untuk berada di sisi client
// SELAMA Row Level Security (RLS) sudah diaktifkan dengan benar di
// setiap tabel — jangan pernah menaruh service_role key di sini.
//
// CATATAN MIGRASI: sebelumnya nilai ini di-hardcode berulang di
// setiap file HTML (admin.html, guru.html, dst pakai placeholder
// 'XXXX' / 'eyJ...', tapi input.html & siswa.html ternyata memakai
// key asli yang sama persis). Sekarang semua halaman memakai satu
// sumber ini saja.
// ================================================================
window.APP_CONFIG = {
    SUPABASE_URL: 'https://XXXX.supabase.co',
    SUPABASE_ANON_KEY: 'eyJ...'
};
