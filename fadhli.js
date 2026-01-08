const syllabus = [
    { 
        t: "PENGENALAN WEB", 
        d: "Materi pengenalan web ini membahas konsep dasar World Wide Web (WWW) yang merupakan kumpulan halaman web yang saling terhubung melalui tautan hypertext dan bekerja dengan model client-server. Proses kerja web melibatkan protokol HTTP sebagai jalur komunikasi untuk mengirimkan data dari server ke browser, yang kemudian menerjemahkan kode HTML menjadi tampilan visual seperti teks, gambar, dan multimedia. Selain itu, modul menjelaskan peran penting Web Server seperti Apache dalam menyimpan dan mengelola data situs web secara aman. Sebagai dasar pembangunan halaman, HTML menggunakan sistem tag dengan struktur penulisan yang terdiri dari bagian <head> untuk informasi metadata dan <body> untuk seluruh konten utama yang diakses oleh pengguna.", 
        c: "console.log('Hello World!');", 
        f: [
            { nama: "World Wide Web", info: "Kumpulan halaman web di seluruh dunia yang saling terhubung dan dapat diakses melalui internet menggunakan browser." },
            { nama: "Cara Kerja Web", info: "Web bekerja dengan sistem client–server, di mana browser meminta data dan server mengirimkan halaman web melalui HTTP." },
            { nama: "Pengantar HTML", info: "HTML adalah bahasa dasar untuk menyusun dan menampilkan konten halaman web." },
            { nama: "Penulisan Struktur HTML", info: "Struktur HTML terdiri dari bagian <head> untuk informasi halaman and <body> untuk konten utama." }
        ] 
    },
    { 
        t: "BASIC TAG HTML", 
        d: "Materi Basic Tag HTML membahas penggunaan tag dasar HTML untuk membangun struktur halaman web serta mengatur format tampilan dokumen. Mahasiswa mempelajari fungsi elemen <head> dan <body>, jenis-jenis tag (berpasangan, tunggal, dan atribut), meta tag, serta tag format seperti paragraf, heading, garis, dan preformat. Pemahaman materi ini menjadi dasar penting dalam membuat halaman web yang terstruktur, rapi, dan mudah dibaca.", 
        c: `<h1>Basic Tag HTML</h1>
<p>Tag HTML digunakan untuk membuat judul, paragraf, dan struktur dasar halaman web.</p>`, 
        f: [
            { nama: "Tag Dasar Struktur HTML", info: "Mengatur kerangka dasar halaman." },
            { nama: "Format Dokumen HTML", info: "Mengatur tampilan judul dan paragraf." }
        ] 
    },
    { 
        t: "FORMAT TEKS DAN KARAKTER KHUSUS", 
        d: "Materi ini menyimpulkan bahwa penguasaan tag format teks seperti font, b, i, serta penggunaan subscript dan superscript sangat penting untuk mengatur estetika dan kejelasan informasi pada halaman web. Selain itu, penerapan karakter khusus melalui kode entitas memungkinkan tampilan simbol unik yang tidak ada di papan ketik, sementara fitur interaktif seperti marquee memberikan dinamika visual pada dokumen HTML. Secara keseluruhan, kombinasi elemen-elemen ini berfungsi sebagai panduan dasar dalam menciptakan konten web yang lebih informatif, profesional, dan menarik bagi pengguna.", 
        c: `<b>Tebal</b>, <i>Miring</i>, <u>Garis Bawah</u>, <s>Coret</s><br>
<font face="Arial" color="blue" size="4">Teks Kustom</font><br>

H<sub>2</sub>O | X<sup>2</sup><br>
&copy; 2025 | &reg; | &trade; | &nbsp; (Spasi)<br>

<marquee>Selamat Datang di Pertemuan 3</marquee>`, 
        f: [
            { nama: "Format Teks", info: "Mengatur gaya visual tulisan menggunakan tag seperti font untuk warna dan ukuran , b untuk menebalkan , i untuk memiringkan , serta sub dan sup untuk penulisan rumus kimia atau matematika." },
            { nama: "Karakter Khusus", info: "digunakan untuk menampilkan simbol unik (seperti ©, ®, atau spasi) melalui kode entitas HTML." }
        ] 
    },
    { 
        t: "MENAMPILKAN GAMBAR, SUARA DAN VIDEO", 
        d: "Materi ini membahas penggunaan tag Struktur Dokumen untuk membangun kerangka dasar halaman web (seperti html, head, dan body) serta tag Format Dokumen untuk mengatur tata letak konten, seperti pembuatan judul dengan tag Heading (h1) hingga (h6), pengaturan paragraf (p), hingga penggunaan garis horizontal (hr) dan baris baru (br). Fokus utamanya adalah memberikan pemahaman mengenai cara menyusun elemen-elemen teks agar dokumen web lebih terorganisir, rapi, dan mudah dibaca oleh pengguna.", 
        c: `<!DOCTYPE html>
<html>
<head>
    <title>Struktur & Format Dokumen</title>
</head>
<body>
    <h1>Judul Utama (H1)</h1>
    <h3>Sub Judul (H3)</h3>

    <p>Ini adalah contoh paragraf untuk mengatur teks agar rapi.</p>
    <hr> Baris pertama<br>Baris kedua (Pindah baris)<br>
    
    <pre>
    Teks ini akan muncul
    sesuai dengan format
    spasi yang diketikkan.
    </pre>
</body>
</html>`, 
        f: [
            { nama: "Menampilkan Gambar", info: "Menggunakan tag img dengan atribut src untuk menyisipkan foto atau ilustrasi ke dalam halaman web." },
            { nama: "Menampilkan Suara", info: "Menggunakan tag audio untuk memutar file musik atau rekaman suara secara langsung di browser." },
            { nama: "Menampilkan Video", info: "Menggunakan tag video untuk menyematkan dan memutar konten visual bergerak lengkap dengan kontrol pemutar." }
        ] 
    },
    { 
        t: "HYPERLINK", 
        d: "Materi ini membahas cara mengintegrasikan elemen multimedia untuk menciptakan halaman web yang lebih interaktif dan dinamis. Pengguna dapat menyisipkan gambar menggunakan tag img yang mendukung format seperti GIF, JPG, dan PNG dengan atribut src untuk menentukan lokasi file serta width dan height untuk mengatur ukurannya. Selain visual, materi ini juga menjelaskan penggunaan tag audio untuk memutar suara dan tag video untuk menampilkan konten film, di mana keduanya memerlukan atribut controls agar pengguna dapat mengoperasikan tombol putar, jeda, dan volume secara langsung di browser. Dengan menggabungkan elemen gambar, audio, dan video, informasi dapat disampaikan secara lebih menarik dan profesional kepada pengunjung situs.", 
        c: `<img src="foto.jpg" width="200">
<audio src="lagu.mp3" controls></audio>
<video src="film.mp4" width="200" controls></video>`, 
        f: [
            { nama: "Hyperlink", info: "Hyperlink adalah elemen HTML yang berfungsi untuk menghubungkan satu halaman ke halaman lainnya atau ke bagian tertentu dalam dokumen yang sama menggunakan tag a. Elemen ini bekerja dengan atribut href yang menyimpan alamat tujuan, baik berupa tautan internal dalam satu situs maupun tautan absolut menuju situs web eksternal lainnya. Penggunaan hyperlink mempermudah navigasi pengguna sehingga informasi di internet dapat diakses secara cepat dan saling terintegrasi hanya dengan sekali klik." }
        ]
    },
    { 
        t: "BULLET NUMBERING DAN LIST", 
        d: "Materi ini menjelaskan bahwa pembuatan daftar dalam HTML dilakukan menggunakan beberapa jenis tag list, yaitu Ordered List (ol) untuk penomoran otomatis seperti angka, huruf, atau romawi , Unordered List (ul) untuk daftar menggunakan simbol atau bullet seperti lingkaran dan kotak , serta Menu List (menu) untuk daftar item tanpa penomoran maupun simbol. Selain itu, terdapat Definition List (dl) yang berfungsi untuk menampilkan istilah beserta penjelasannya melalui tag (dt) dan (dd). Setiap item dalam daftar ol, ul, maupun menu harus menggunakan tag (li) , dan seluruh jenis list ini dapat disusun secara bertingkat atau multi-level untuk mempresentasikan data yang lebih kompleks seperti komponen sistem komputer.", 
        c: `<!DOCTYPE html>
<html>
<head>
    <title>Ringkasan Materi List</title>
</head>
<body>

    <h3>Kota Besar di Jawa (Ordered List)</h3>
    <ol type="A">
        <li>Jakarta</li> 
        <li>Bandung</li> 
        <li>Surabaya</li> 
    </ol>

    <h3>Bahasa Pemrograman (Unordered List)</h3>
    <ul type="circle">
        <li>Fortran</li> 
        <li>Java</li> 
    </ul>

    <h3>Istilah Web (Definition List)</h3>
    <dl>
        <dt>Website</dt> 
        <dd>Laman yang ditampilkan oleh browser untuk informasi.</dd> 
    </dl>

</body>
</html>`, 
        f: [
            { nama: "Numbering", info: "menggunakan tag ol untuk membuat daftar berurutan dengan penomoran otomatis seperti angka, huruf, atau romawi." },
            { nama: "Bullet", info: "menggunakan tag ul untuk membuat daftar tidak berurutan dengan simbol seperti lingkaran atau kotak." },
            { nama: "Menu List", info: "menggunakan tag menu untuk menampilkan daftar item tanpa penomoran maupun simbol peluru." },
            { nama: "Definition List", info: "menggunakan tag dl yang berfungsi khusus untuk menyajikan istilah beserta penjelasannya melalui elemen dt untuk data dan dd untuk definisi data tersebut." }
        ] 
    },
    { 
        t: "TABEL", 
        d: "Materi ini membahas penggunaan Tabel sebagai teknik esensial dalam HTML untuk mengorganisir data dan mengatur tata letak halaman agar terlihat profesional. Dengan struktur utama yang terdiri dari tag table, baris tr, judul kolom th, dan sel data td, Anda dapat menyajikan informasi secara sistematis, serta meningkatkan estetika tampilan melalui pengaturan atribut border, cellpadding, dan cellspacing. Selain itu, materi ini menonjolkan fitur canggih seperti colspan dan rowspan yang memungkinkan penggabungan beberapa kolom atau baris, memberikan fleksibilitas penuh dalam menciptakan format dokumen yang kompleks namun tetap rapi dan mudah dipahami.", 
        c: `<table border="1" cellpadding="5" cellspacing="0">
  <tr>
    <th colspan="2">Data Siswa</th> </tr>
  <tr>
    <td rowspan="2">Budi</td> <td>IPA</td>
  </tr>
  <tr>
    <td>IPS</td>
  </tr>
</table>`, 
        f: [
            { nama: "Penggabungan Kolom", info: "Digunakan untuk menyatukan beberapa kolom menjadi satu sel yang melebar ke samping." },
            { nama: "Penggabungan Baris", info: "Digunakan untuk menyatukan beberapa baris menjadi satu sel yang memanjang ke bawah." },
            { nama: "Gaya Tabel", info: "Merujuk pada pengaturan estetika tabel." },
            { nama: "Perataan", info: "Mengatur posisi teks atau objek." }
        ] 
    },
    { 
        t: "FORM", 
        d: "Materi Form dalam HTML merupakan elemen interaktif vital yang berfungsi sebagai jembatan komunikasi untuk mendapatkan umpan balik, informasi transaksi, hingga data diri dari pengguna secara terorganisir. Melalui penggunaan tag form yang dikombinasikan dengan berbagai jenis input menarik seperti kotak teks untuk nama, radio button untuk pilihan tunggal, checkbox untuk banyak hobi, hingga dropdown list yang rapi Anda dapat membangun antarmuka pendaftaran yang fungsional dan profesional. Seluruh data yang diinputkan ini kemudian diproses secara sistematis melalui tombol submit, yang secara cerdas akan mengirimkan informasi ke lokasi tujuan untuk diolah lebih lanjut, menjadikan website Anda tidak hanya sekadar media informasi, tetapi juga sarana interaksi yang dinamis.", 
        c: `<!DOCTYPE html>
<html>
<head>
    <title>Materi Form</title>
</head>
<body>
    <h3>Form Pendaftaran</h3>
    <form action="simpan.php" method="post">
        Nama: <input type="text" name="nama"><br>
        
        Gender: 
        <input type="radio" name="jk" value="P"> Pria 
        <input type="radio" name="jk" value="W"> Wanita<br>
        
        Agama: 
        <select name="agama">
            <option>Islam</option>
            <option>Kristen</option>
        </select><br>
        
        Komentar:<br>
        <textarea name="pesan" rows="2"></textarea><br>
        
        <input type="submit" value="Kirim">
        <input type="reset" value="Batal">
    </form>
</body>
</html>`, 
        f: [
            { nama: "Checkbox", info: "Menampilkan pilihan yang memungkinkan pengguna untuk memilih lebih dari satu opsi (pilihan ganda)." },
            { nama: "List atau Dropdown Box", info: "Menyediakan daftar pilihan dalam bentuk menu tarik menggunakan tag select dan option." },
            { nama: "Textarea", info: "Digunakan untuk menerima input data yang lebih panjang atau lebih dari satu baris, seperti kolom komentar atau keterangan." },
            { nama: "Daftar Pilihan", info: "digunakan untuk menyediakan pilihan dalam bentuk daftar atau dropdown box, sehingga tampilan form tetap rapi meskipun terdapat banyak pilihan (contohnya pilihan Agama atau Jurusan)." }
        ] 
    },
    { 
        t: "FRAME", 
        d: "Materi Frame dalam HTML merupakan teknik tata letak yang memungkinkan Anda membagi jendela browser menjadi beberapa bagian independen untuk menampilkan berbagai dokumen secara bersamaan dalam satu layar. Dengan menggunakan elemen frameset sebagai pengganti tag body, Anda memiliki fleksibilitas penuh untuk mengatur pembagian layar berdasarkan baris (rows) atau kolom (cols) menggunakan satuan pixel maupun persentase. Struktur ini sangat efisien untuk membangun website yang profesional, di mana satu bagian layar dapat dikunci sebagai menu navigasi tetap, sementara bagian lainnya secara dinamis menampilkan konten seperti profil, galeri, atau kontak tanpa perlu memuat ulang seluruh halaman.", 
        c: `<!DOCTYPE html>
<html>
<head>
    <title>Materi Frame IX</title>
</head>

<frameset rows="20%, 70%, 10%" border="5" bordercolor="#ff8fab">
    
    <frame srcdoc="<body style='background:#ff8fab; color:white; text-align:center; font-family:sans-serif;'><h1>HEADER WEBSITE</h1></body>" name="atas" noresize>

    <frameset cols="25%, 75%">
        <frame srcdoc="<body style='background:#fff5fb; font-family:sans-serif;'><h3>NAVIGASI</h3><ul><li>Home</li><li>Profil</li></ul></body>" name="menu">
        
        <frame srcdoc="<body style='font-family:sans-serif; padding:20px;'><h2>Halaman Utama</h2><p>Konten akan muncul di sini.</p></body>" name="kanan">
    </frameset>

    <frame srcdoc="<body style='background:#fce4ec; text-align:center; font-family:sans-serif;'><p>Footer @ 2025</p></body>" name="footer" scrolling="no">

</frameset>

<noframes>
    <body>Browser Anda tidak mendukung frame.</body>
</noframes>
</html>`, 
        f: [
            { nama: "Targeting (Navigasi)", info: "Struktur ini melibatkan penggunaan atribut name pada frame tujuan dan atribut target pada link (a) di frame menu. Hal ini memungkinkan konten di satu bagian layar berubah secara dinamis tanpa memengaruhi bagian lainnya." },
            { nama: "Frameset Bersarang", info: "Struktur ini memungkinkan pembagian layar yang lebih kompleks, di mana di dalam sebuah frameset baris terdapat frameset kolom lainnya. Teknik ini digunakan untuk membagi layar menjadi area atas (header), area tengah yang terbagi dua (menu dan isi), serta area bawah (footer)." },
            { nama: "Tag Frameset", info: "Struktur ini merupakan pengganti tag body dalam dokumen utama. Fungsinya adalah sebagai bingkai induk yang membagi jendela browser menjadi beberapa bagian." },
            { nama: "Kontrol Ukuran & Gulir", info: "(noresize & scrolling) Untuk menjaga tata letak tetap rapi, Anda bisa menggunakan atribut noresize agar pengguna tidak bisa menggeser garis pembatas frame. Selain itu, atribut scrolling= no dapat digunakan jika Anda ingin menghilangkan batang penggulung (scrollbar) pada bagian tertentu seperti footer." }
        ] 
    },
    { 
        t: "IFRAME", 
        d: "IFRAME atau Inline Frame adalah elemen HTML yang berfungsi sebagai jendela untuk menyisipkan atau meng-embed dokumen dan konten dari situs lain, seperti video atau media interaktif, ke dalam halaman web yang sedang aktif. Penggunaannya dilakukan dengan tag iframe yang menyertakan atribut utama seperti src untuk menentukan URL sumber, serta pengaturan width dan height melalui HTML maupun CSS untuk menentukan dimensi tampilannya. Meskipun didukung oleh berbagai browser populer seperti Chrome dan Firefox, beberapa atribut lama kini sudah tidak didukung dalam HTML 5, sehingga penggunaan atribut modern seperti sandbox sangat disarankan untuk menjaga keamanan konten yang ditampilkan.", 
        c: `<!DOCTYPE html>
<html>
<head>
    <title>Eksplorasi Jendela IFRAME</title>
    <style>
        /* Menggunakan CSS untuk mengatur tampilan Iframe agar lebih menarik  */
        .bingkai-keren {
            border: 5px solid #4A90E2;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: transform 0.3s;
        }
        .bingkai-keren:hover {
            transform: scale(1.02);
        }
    </style>
</head>
<body>

    <h2>Implementasi Jendela Interaktif (IFRAME)</h2>
    <p>Di bawah ini adalah konten eksternal yang disisipkan menggunakan elemen Inline Frame:</p>

    <iframe 
        src="https://indarnirmala.wordpress.com" 
        width="100%" 
        height="450px" 
        class="bingkai-keren"
        sandbox="allow-scripts allow-same-origin"
        title="Dokumen Eksternal">
        
        <p>Maaf, browser Anda tidak mendukung fitur IFRAME.</p>
    </iframe>

</body>
</html>`, 
        f: [
            { nama: "Struktur Keamanan", info: "Atribut ini berfungsi untuk mengaktifkan batasan keamanan tambahan pada konten di dalam iframe, seperti mengizinkan atau melarang penggunaan form (allow-forms) dan eksekusi script (allow-scripts)." },
            { nama: "Struktur Konten Internal", info: "Berbeda dengan src, struktur ini memungkinkan Anda menentukan konten HTML secara langsung di dalam atribut untuk ditampilkan pada iframe, tanpa harus memanggil file eksternal." },
            { nama: "Struktur Kontrol Navigasi", info: "Digunakan untuk menentukan apakah jendela iframe akan menampilkan batang penggulung atau tidak, dengan pilihan nilai berupa yes, no, atau auto." },
            { nama: "Struktur Pengaturan Jarak", info: "Atribut ini digunakan untuk menentukan batas jarak (margin) atas, bawah, kiri, dan kanan antara konten dengan bingkai iframe dalam satuan piksel." }
        ] 
    }
];

const nav = document.getElementById('sidebar-nav');
const view = document.getElementById('dynamic-body');

function init() {
    syllabus.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.id = `nav-${i}`;
        card.innerHTML = `<div style="opacity:0.5; font-size:0.7rem">PERTEMUAN ${i+1}</div><div style="font-weight:700">${item.t}</div>`;
        card.onclick = () => render(i);
        nav.appendChild(card);
    });
    goHome();
}

function goHome() {
    document.querySelectorAll('.module-card').forEach(c => c.classList.remove('active'));

    const content = document.getElementById('dynamic-body');
    content.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
            <span class="tag">Teknik Informatika - Universitas Pamulang 2026</span>
            <h1 style="font-size: 2.2rem; margin-bottom: 5px;">PEMROGRAMAN WEB 1</h1>
            <p style="margin-bottom: 30px;">Silakan pilih modul pertemuan untuk mulai belajar.</p>
    
            <div class="home-grid">
                ${syllabus.map((item, i) => `
                    <div class="home-card" onclick="render(${i})">
                        <h3>Pertemuan ${i + 1}</h3>
                        <p>${item.t}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function copyCode() {
    const codeText = document.getElementById('code-display').innerText;
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(codeText).then(() => {
        btn.innerText = "Copied! ✓";
        btn.style.background = "var(--primary)";
        btn.style.color = "white";
        
        setTimeout(() => {
            btn.innerText = "Copy Code";
            btn.style.background = "rgba(255, 255, 255, 0.1)";
            btn.style.color = "var(--accent)";
        }, 2000);
    });
}

function render(i) {
    document.querySelectorAll('.module-card').forEach(c => c.classList.remove('active'));
    document.getElementById(`nav-${i}`).classList.add('active');

    const data = syllabus[i];
    const isLast = i === syllabus.length - 1;
    const nextIndex = (i + 1) % syllabus.length;

    view.style.opacity = '0';
    setTimeout(() => {
        view.innerHTML = `
            <span class="tag">PERTEMUAN ${i+1}</span>
            <h1 style="background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.t}</h1>
            <p style="font-size: 1.1rem; color: #94a3b8; margin-bottom: 20px;">${data.d}</p>
            
            <div class="code-block">
                <button class="copy-btn" onclick="copyCode()">Copy Code</button>
                <pre id="code-display" style="color: var(--accent); font-size: 0.9rem; white-space: pre-wrap;"></pre>
            </div>

            <div class="grid-features">
                ${data.f.map(itemF => `
                    <div class="feature-item">
                        <strong style="font-size: 1.5rem; color: var(--accent);">${itemF.nama}</strong><br>
                        <small style="opacity: 0.8; font-size: 1.2rem;">${itemF.info}</small>
                    </div>
                `).join('')}
            </div>
            
            <div class="next-btn-container" style="gap: 15px;">
                <button class="restart-btn" onclick="goHome()" style="background: rgba(255,255,255,0.1); border: 1px solid var(--border);">
                    ← Back
                </button>
                
                ${isLast ? `
                    <button class="restart-btn" onclick="render(0)">Restart Journey ↺</button>
                ` : `
                    <button class="next-btn" onclick="render(${nextIndex})">Next ${nextIndex + 1} →</button>
                `}
            </div>
        `;
        document.getElementById('code-display').innerText = data.c;
        view.style.opacity = '1';
        view.style.transition = '0.5s';
        
        if(window.innerWidth <= 1000) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector('main').scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 300);
}

init();