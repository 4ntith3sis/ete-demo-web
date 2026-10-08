import type { Service } from "@/types/service";
import type { Article } from "@/types/article";
import type { Testimonial } from "@/types/content";
import type { AboutTeamMember } from "@/types/about";

export const demoServices: Service[] = [
  {
    "title": "Restitusi Pajak",
    "slug": "restitusi-pajak",
    "heroSubtitle": "Proses Cepat & Sesuai Ketentuan",
    "description": "Pendampingan proses restitusi pajak untuk membantu menyiapkan dokumen, memeriksa kelengkapan data, dan mendampingi proses pengajuan pengembalian kelebihan pembayaran pajak sesuai kebutuhan Anda.",
    "heroImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    "pricing": [
      {
        "name": "Paket Restitusi Basic",
        "description": "Cocok untuk kebutuhan restitusi dengan dokumen dan transaksi yang relatif sederhana.",
        "price": "Rp 2.500.000",
        "unit": "/paket",
        "features": [
          "Pemeriksaan kelengkapan dokumen",
          "Review data perpajakan",
          "Pendampingan persiapan pengajuan",
          "Konsultasi dasar restitusi"
        ]
      },
      {
        "name": "Paket Restitusi Standard",
        "description": "Pendampingan restitusi yang lebih menyeluruh untuk kebutuhan perusahaan dengan dokumen yang lebih kompleks.",
        "price": "Rp 5.000.000",
        "unit": "/paket",
        "features": [
          "Review dokumen dan data perpajakan",
          "Pemeriksaan transaksi terkait",
          "Persiapan dokumen restitusi",
          "Pendampingan proses pengajuan",
          "Konsultasi selama proses"
        ]
      },
      {
        "name": "Paket Restitusi Professional",
        "description": "Solusi pendampingan untuk proses restitusi dengan kebutuhan pemeriksaan dan dokumentasi yang lebih mendalam.",
        "price": "Rp 8.000.000",
        "unit": "/paket",
        "features": [
          "Review komprehensif dokumen perpajakan",
          "Analisis data dan transaksi",
          "Persiapan dokumen pendukung",
          "Pendampingan proses restitusi",
          "Konsultasi dan monitoring proses",
          "Pendampingan komunikasi terkait proses"
        ]
      },
      {
        "name": "Paket Restitusi Corporate",
        "description": "Pendampingan end-to-end untuk perusahaan dengan kebutuhan restitusi yang kompleks dan volume dokumen yang besar.",
        "price": "Rp 12.500.000",
        "unit": "/paket",
        "features": [
          "Review menyeluruh data perpajakan",
          "Analisis dokumen dan transaksi",
          "Persiapan dokumen pendukung",
          "Pendampingan proses restitusi",
          "Monitoring proses",
          "Konsultasi intensif",
          "Pendampingan kebutuhan lanjutan"
        ]
      }
    ],
    "faq": [
      {
        "question": "Apakah layanan dapat disesuaikan?",
        "answer": "[object Object]"
      }
    ],
    "seo": {
      "title": "Restitusi Pajak | EasyTax",
      "description": "Layanan pendampingan restitusi pajak EasyTax."
    }
  },
  {
    "title": "Laporan SPT",
    "slug": "laporan-spt",
    "heroSubtitle": "Bebas Denda & Akurat",
    "description": "EasyTax membantu perhitungan, penyusunan, dan e-Filing SPT Tahunan PPh Badan serta SPT Orang Pribadi dengan bukti lapor resmi DJP.",
    "heroImage": "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1000&q=80",
    "pricing": [
      {
        "name": "SPT Pribadi Karyawan",
        "price": "Rp 249.000",
        "features": [
          "Pengolahan bukti potong",
          "Pelaporan daftar harta",
          "E-Filing DJP resmi"
        ]
      },
      {
        "name": "SPT Pribadi Usahawan",
        "price": "Rp 499.000",
        "features": [
          "Perhitungan PPh Final/NPPN",
          "Rekap omzet bulanan",
          "Pendampingan rekonsiliasi harta"
        ]
      },
      {
        "name": "SPT Badan UMKM",
        "price": "Rp 1.999.000",
        "features": [
          "Laporan laba rugi dan neraca",
          "Rekonsiliasi pajak",
          "Pengolahan bukti potong"
        ]
      }
    ],
    "faq": [
      {
        "question": "Berapa lama proses pelaporan SPT?",
        "answer": "[object Object]"
      }
    ],
    "seo": {
      "title": "Laporan SPT Tahunan dan Masa | EasyTax",
      "description": "Jasa pelaporan SPT Badan dan Orang Pribadi EasyTax."
    }
  },
  {
    "title": "Layanan Pengurusan PKP",
    "slug": "pengurusan-pkp",
    "heroSubtitle": "Cepat & 100% Lolos Survei KPP",
    "description": "Bantu proses pengukuhan PKP, aktivasi akun e-Faktur, sertifikat elektronik DJP, dan pembekalan teknis faktur pajak.",
    "heroImage": "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1000&q=80",
    "pricing": [
      {
        "name": "Paket PKP Basic",
        "description": "Cocok untuk bisnis yang membutuhkan pendampingan dasar dalam proses pengurusan PKP.",
        "price": "Rp 1.500.000",
        "unit": "/pengurusan",
        "features": [
          "Konsultasi awal",
          "Pemeriksaan dokumen",
          "Pendampingan persiapan pengajuan",
          "Panduan proses pengukuhan PKP"
        ]
      },
      {
        "name": "Paket PKP Standard",
        "description": "Pendampingan lebih lengkap untuk memastikan dokumen dan proses pengukuhan PKP berjalan dengan baik.",
        "price": "Rp 2.500.000",
        "unit": "/pengurusan",
        "features": [
          "Konsultasi perpajakan",
          "Pemeriksaan kelengkapan dokumen",
          "Review data perpajakan",
          "Pendampingan proses pengajuan PKP",
          "Monitoring proses"
        ]
      },
      {
        "name": "Paket PKP Professional",
        "description": "Solusi pendampingan untuk bisnis yang membutuhkan proses pengurusan PKP secara lebih menyeluruh.",
        "price": "Rp 4.000.000",
        "unit": "/pengurusan",
        "features": [
          "Konsultasi perpajakan",
          "Review dokumen dan data",
          "Persiapan dokumen pendukung",
          "Pendampingan proses pengajuan",
          "Monitoring proses",
          "Pendampingan kebutuhan lanjutan"
        ]
      },
      {
        "name": "Paket PKP Corporate",
        "description": "Pendampingan pengukuhan PKP untuk perusahaan dengan kebutuhan dan dokumentasi yang lebih kompleks.",
        "price": "Rp 6.000.000",
        "unit": "/pengurusan",
        "features": [
          "Konsultasi komprehensif",
          "Review data dan dokumen perpajakan",
          "Persiapan dokumen pendukung",
          "Pendampingan proses pengajuan",
          "Monitoring proses",
          "Pendampingan kebutuhan lanjutan",
          "Konsultasi lanjutan sesuai kebutuhan"
        ]
      }
    ],
    "faq": [
      {
        "question": "Berapa lama proses pengurusan PKP?",
        "answer": "[object Object]"
      }
    ],
    "seo": {
      "title": "Pengurusan PKP dan e-Faktur | EasyTax",
      "description": "Layanan pengurusan PKP EasyTax."
    }
  },
  {
    "title": "Laporan Perpajakan & Keuangan",
    "slug": "laporan-perpajakan-keuangan",
    "heroSubtitle": "Lebih Rapi, Akurat & Aman",
    "description": "EasyTax membantu memahami, mengelola, dan menyusun laporan keuangan serta pelaporan pajak secara tepat waktu.",
    "heroImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    "pricing": [
      {
        "name": "Laporan Pajak Bulanan",
        "description": "Solusi praktis untuk UMKM dan startup.",
        "price": "Rp 749.000",
        "unit": "/bulan",
        "features": [
          "Pelaporan SPT Masa PPh",
          "Penyusunan laporan laba rugi",
          "Rekonsiliasi transaksi"
        ]
      },
      {
        "name": "Pajak Bulanan + SPT Tahunan",
        "description": "Paket komplit 1 tahun.",
        "price": "Rp 7.999.000",
        "unit": "/tahun",
        "features": [
          "Laporan pajak 12 bulan",
          "SPT Tahunan Badan 1771",
          "Laporan neraca dan laba rugi"
        ]
      },
      {
        "name": "Rekonsiliasi Fiskal",
        "price": "Rp 499.000",
        "unit": "/laporan",
        "features": [
          "Koreksi fiskal positif/negatif",
          "Kertas kerja rekonsiliasi"
        ]
      },
      {
        "name": "Review SPT Mandiri",
        "description": "Pemeriksaan SPT yang Anda susun sendiri sebelum dilapor.",
        "price": "Rp 199.000",
        "features": []
      },
      {
        "name": "Pendampingan Audit Penuh",
        "description": "Pendampingan menyeluruh untuk kebutuhan audit dan pemeriksaan.",
        "price": "Rp 4.999.000",
        "unit": "/perusahaan",
        "features": [
          "Audit laporan keuangan",
          "Penyusunan TPDoc",
          "Pendampingan SP2DK",
          "Tax opinion tertulis",
          "Simulasi sanksi administrasi",
          "Garansi bebas denda"
        ]
      }
    ],
    "faq": [
      {
        "question": "Apakah proses dapat dilakukan online?",
        "answer": "[object Object]"
      }
    ],
    "seo": {
      "title": "Laporan Perpajakan dan Keuangan | EasyTax",
      "description": "Layanan laporan perpajakan dan keuangan EasyTax."
    }
  },
  {
    "title": "[DEV] Pengurusan PKP",
    "slug": "dev-pengurusan-pkp",
    "heroSubtitle": "Subjudul hero development",
    "description": "",
    "heroImage": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1000&q=80",
    "pricing": [
      {
        "name": "Paket Dasar",
        "price": "Rp 1.000.000",
        "unit": "per bulan",
        "features": [
          "Fitur contoh"
        ]
      }
    ],
    "faq": [
      {
        "question": "Pertanyaan contoh?",
        "answer": "[object Object]"
      }
    ],
    "seo": {
      "title": "[DEV] Pengurusan PKP",
      "description": ""
    }
  }
];

export const demoArticles: Article[] = [
  {
    "title": "Perbedaan Rekonsiliasi Fiskal Positif & Negatif pada Laporan Keuangan",
    "slug": "rekonsiliasi-fiskal-positif-negatif",
    "excerpt": "Mengenal koreksi biaya yang tidak dapat dikurangkan dan penghasilan bukan objek pajak dalam e-SPT PPh Badan.",
    "content": [
      "Rekonsiliasi fiskal adalah penyesuaian antara laba komersial menurut akuntansi dengan penghasilan neto fiskal menurut ketentuan perpajakan. Hasilnya menentukan PPh terutang yang benar dan dapat dipertahankan saat pemeriksaan.",
      "Koreksi Positif",
      "Koreksi positif menambah penghasilan kena pajak karena terdapat beban komersial yang tidak diakui fiskal atau penghasilan yang belum diakui. Contohnya jamuan tanpa daftar nominatif, sumbangan yang tidak memenuhi syarat, dan denda administrasi pajak.",
      "Koreksi Negatif",
      "Koreksi negatif mengurangi penghasilan kena pajak, misalnya penghasilan yang telah dikenakan PPh final, dividen dari penyertaan tertentu yang memenuhi syarat, dan selisih penilaian kembali yang bukan objek pajak.",
      "Penghasilan Kena Pajak Final",
      "Bunga deposito, sewa tanah dan bangunan, serta penghasilan usaha dengan omzet tertentu yang sudah final tidak digabungkan lagi ke penghasilan neto fiskal.",
      "Penyusunan Kertas Kerja",
      "Susun kertas kerja yang memetakan setiap akun laba rugi ke perlakuan fiskalnya, lengkap dengan referensi aturan dan dokumen pendukung. Kertas kerja yang rapi mempercepat penyusunan SPT sekaligus memperkuat posisi saat SP2DK atau pemeriksaan.",
      "Dokumentasi Pendukung",
      "Lampirkan daftar nominatif entertainment, bukti potong, kontrak, dan rekonsiliasi bank yang relevan dengan pos-pos koreksi material.",
      "Contoh Angka Sederhana",
      "Sebuah perusahaan mencatat laba komersial Rp500 juta. Koreksi positif atas entertainment dan denda sebesar Rp60 juta, koreksi negatif atas penghasilan final Rp40 juta, menghasilkan penghasilan neto fiskal Rp520 juta. Selisih Rp20 juta inilah yang sering luput tanpa kertas kerja yang sistematis.",
      "Kesalahan Umum Rekonsiliasi",
      "Kesalahan klasik meliputi lupa mengoreksi denda pajak, menggabungkan penghasilan final ke penghasilan neto, serta tidak menyimpan daftar nominatif sehingga seluruh beban entertainment dikoreksi pemeriksa.",
      "Kesimpulan",
      "Kuasai logika koreksi positif dan negatif, dokumentasikan setiap penyesuaian, dan SPT Tahunan Badan Anda akan berdiri di atas fondasi yang kokoh."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Rekonsiliasi fiskal adalah penyesuaian antara laba komersial menurut akuntansi dengan penghasilan neto fiskal menurut ketentuan perpajakan. Hasilnya menentukan PPh terutang yang benar dan dapat dipertahankan saat pemeriksaan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Koreksi Positif"
      },
      {
        "kind": "paragraph",
        "text": "Koreksi positif menambah penghasilan kena pajak karena terdapat beban komersial yang tidak diakui fiskal atau penghasilan yang belum diakui. Contohnya jamuan tanpa daftar nominatif, sumbangan yang tidak memenuhi syarat, dan denda administrasi pajak."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Beban entertainment tanpa bukti pendukung lengkap",
          "Sumbangan di luar kriteria peraturan",
          "Pajak penghasilan yang menjadi beban perusahaan",
          "Denda dan sanksi administrasi"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Koreksi Negatif"
      },
      {
        "kind": "paragraph",
        "text": "Koreksi negatif mengurangi penghasilan kena pajak, misalnya penghasilan yang telah dikenakan PPh final, dividen dari penyertaan tertentu yang memenuhi syarat, dan selisih penilaian kembali yang bukan objek pajak."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Penghasilan Kena Pajak Final"
      },
      {
        "kind": "paragraph",
        "text": "Bunga deposito, sewa tanah dan bangunan, serta penghasilan usaha dengan omzet tertentu yang sudah final tidak digabungkan lagi ke penghasilan neto fiskal."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Penyusunan Kertas Kerja"
      },
      {
        "kind": "paragraph",
        "text": "Susun kertas kerja yang memetakan setiap akun laba rugi ke perlakuan fiskalnya, lengkap dengan referensi aturan dan dokumen pendukung. Kertas kerja yang rapi mempercepat penyusunan SPT sekaligus memperkuat posisi saat SP2DK atau pemeriksaan."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Dokumentasi Pendukung"
      },
      {
        "kind": "paragraph",
        "text": "Lampirkan daftar nominatif entertainment, bukti potong, kontrak, dan rekonsiliasi bank yang relevan dengan pos-pos koreksi material."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Contoh Angka Sederhana"
      },
      {
        "kind": "paragraph",
        "text": "Sebuah perusahaan mencatat laba komersial Rp500 juta. Koreksi positif atas entertainment dan denda sebesar Rp60 juta, koreksi negatif atas penghasilan final Rp40 juta, menghasilkan penghasilan neto fiskal Rp520 juta. Selisih Rp20 juta inilah yang sering luput tanpa kertas kerja yang sistematis."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesalahan Umum Rekonsiliasi"
      },
      {
        "kind": "paragraph",
        "text": "Kesalahan klasik meliputi lupa mengoreksi denda pajak, menggabungkan penghasilan final ke penghasilan neto, serta tidak menyimpan daftar nominatif sehingga seluruh beban entertainment dikoreksi pemeriksa."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Denda dan sanksi tidak dikoreksi positif",
          "Penghasilan final ikut dihitung dalam penghasilan neto",
          "Entertainment tanpa daftar nominatif lengkap",
          "Kertas kerja tidak mencantumkan referensi aturan"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Kuasai logika koreksi positif dan negatif, dokumentasikan setiap penyesuaian, dan SPT Tahunan Badan Anda akan berdiri di atas fondasi yang kokoh."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?auto=format&fit=crop&w=600&q=80",
    "category": "Akuntansi",
    "categorySlug": "akuntansi",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "SPT Tahunan",
        "slug": "spt-tahunan"
      },
      {
        "name": "Laporan Keuangan",
        "slug": "laporan-keuangan"
      },
      {
        "name": "Pajak Badan",
        "slug": "pajak-badan"
      }
    ],
    "seo": {
      "title": "Rekonsiliasi Fiskal Positif dan Negatif | EasyTax",
      "description": "Mengenal rekonsiliasi fiskal dalam laporan keuangan."
    }
  },
  {
    "title": "Batas Omzet UMKM Bebas Pajak & Cara Hitung PPh Final 0,5% PP 55/2022",
    "slug": "batas-omzet-umkm-pajak-final",
    "excerpt": "Penjelasan insentif batasan omzet Rp 500 juta bebas pajak untuk UMKM Orang Pribadi dan tata cara perhitungan PPh final bulanan.",
    "content": [
      "Pelaku UMKM dengan peredaran bruto tertentu dapat memanfaatkan skema PPh final dengan tarif 0,5 persen dari omzet sesuai PP 55 Tahun 2022. Skema ini menyederhanakan kewajiban karena pajak dihitung langsung dari peredaran usaha tanpa pembukuan rumit.",
      "Siapa yang Bisa Memanfaatkan?",
      "Wajib Pajak orang pribadi dan badan tertentu dengan peredaran bruto tidak melebihi Rp500 juta dalam setahun untuk orang pribadi, serta batas waktu pemanfaatan tertentu bagi Wajib Pajak badan dan bentuk usaha tetap.",
      "Batasan Omzet",
      "Pantau akumulasi omzet setiap bulan. Begitu mendekati ambang batas, siapkan transisi ke skema pembukuan normal agar tidak kaget saat fasilitas berakhir.",
      "Cara Menghitung dan Menyetor",
      "Kalikan omzet sebulan dengan 0,5 persen, lalu setorkan menggunakan surat setoran elektronik sebelum batas waktu. Simpan seluruh bukti setoran sebagai arsip tahunan.",
      "Contoh Perhitungan",
      "Warung makan dengan omzet Rp60 juta sebulan terutang PPh final Rp300.000,00. Sederhana, tanpa perlu menghitung laba bersih terlebih dahulu.",
      "Kapan Beralih ke Skema Normal?",
      "Ketika omzet melewati ambang atau masa pemanfaatan berakhir, pelaku usaha wajib menyelenggarakan pembukuan dan menghitung PPh dengan tarif umum. Persiapkan pencatatan sejak dini agar transisi mulus.",
      "Kewajiban Setelah Masa Fasilitas",
      "Berakhirnya fasilitas bukan berarti bebas kewajiban. Pelaku usaha beralih ke pembukuan, menghitung penghasilan neto secara riil, dan melaporkan SPT Tahunan dengan tarif progresif. Arsip omzet masa fasilitas tetap wajib disimpan untuk keperluan pemeriksaan.",
      "Tips Pencatatan Sejak Dini",
      "Biasakan mencatat omzet harian walaupun masih memakai skema final. Kebiasaan ini membuat transisi ke pembukuan normal hampir tanpa gesekan.",
      "Kesimpulan",
      "Skema 0,5 persen adalah jembatan kepatuhan bagi UMKM. Manfaatkan selama memenuhi syarat, catat omzet dengan tertib, dan siapkan diri naik kelas."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Pelaku UMKM dengan peredaran bruto tertentu dapat memanfaatkan skema PPh final dengan tarif 0,5 persen dari omzet sesuai PP 55 Tahun 2022. Skema ini menyederhanakan kewajiban karena pajak dihitung langsung dari peredaran usaha tanpa pembukuan rumit."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Siapa yang Bisa Memanfaatkan?"
      },
      {
        "kind": "paragraph",
        "text": "Wajib Pajak orang pribadi dan badan tertentu dengan peredaran bruto tidak melebihi Rp500 juta dalam setahun untuk orang pribadi, serta batas waktu pemanfaatan tertentu bagi Wajib Pajak badan dan bentuk usaha tetap."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Batasan Omzet"
      },
      {
        "kind": "paragraph",
        "text": "Pantau akumulasi omzet setiap bulan. Begitu mendekati ambang batas, siapkan transisi ke skema pembukuan normal agar tidak kaget saat fasilitas berakhir."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Cara Menghitung dan Menyetor"
      },
      {
        "kind": "paragraph",
        "text": "Kalikan omzet sebulan dengan 0,5 persen, lalu setorkan menggunakan surat setoran elektronik sebelum batas waktu. Simpan seluruh bukti setoran sebagai arsip tahunan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Jumlahkan seluruh penerimaan bruto bulan berjalan",
          "Kalikan dengan tarif 0,5 persen",
          "Buat kode billing dan lakukan penyetoran",
          "Arsipkan bukti bayar bersama rekap omzet"
        ]
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Contoh Perhitungan"
      },
      {
        "kind": "paragraph",
        "text": "Warung makan dengan omzet Rp60 juta sebulan terutang PPh final Rp300.000,00. Sederhana, tanpa perlu menghitung laba bersih terlebih dahulu."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kapan Beralih ke Skema Normal?"
      },
      {
        "kind": "paragraph",
        "text": "Ketika omzet melewati ambang atau masa pemanfaatan berakhir, pelaku usaha wajib menyelenggarakan pembukuan dan menghitung PPh dengan tarif umum. Persiapkan pencatatan sejak dini agar transisi mulus."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kewajiban Setelah Masa Fasilitas"
      },
      {
        "kind": "paragraph",
        "text": "Berakhirnya fasilitas bukan berarti bebas kewajiban. Pelaku usaha beralih ke pembukuan, menghitung penghasilan neto secara riil, dan melaporkan SPT Tahunan dengan tarif progresif. Arsip omzet masa fasilitas tetap wajib disimpan untuk keperluan pemeriksaan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Tips Pencatatan Sejak Dini"
      },
      {
        "kind": "paragraph",
        "text": "Biasakan mencatat omzet harian walaupun masih memakai skema final. Kebiasaan ini membuat transisi ke pembukuan normal hampir tanpa gesekan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Pisahkan rekening usaha dari rekening pribadi",
          "Simpan seluruh bukti setoran PPh final per bulan",
          "Rekap omzet bulanan dalam satu file sederhana",
          "Konsultasikan ambang batas setiap awal tahun"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Skema 0,5 persen adalah jembatan kepatuhan bagi UMKM. Manfaatkan selama memenuhi syarat, catat omzet dengan tertib, dan siapkan diri naik kelas."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    "category": "Bisnis",
    "categorySlug": "bisnis",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "UMKM",
        "slug": "umkm"
      },
      {
        "name": "Pajak Pribadi",
        "slug": "pajak-pribadi"
      }
    ],
    "seo": {
      "title": "PPh Final UMKM 0,5% | EasyTax",
      "description": "Panduan batas omzet UMKM dan PPh Final 0,5%."
    }
  },
  {
    "title": "Cara Mengkreditkan Faktur Pajak Masukan Tanpa Risiko Kurang Bayar PPN",
    "slug": "kredit-faktur-pajak-masukan",
    "excerpt": "Tips mengelola transaksi PPN 11%, memastikan keabsahan nomor seri faktur pajak (NSFP), dan pengkreditan faktur dalam tenggat 3 bulan.",
    "content": [
      "Faktur pajak masukan adalah bukti pungutan PPN atas perolehan Barang Kena Pajak atau Jasa Kena Pajak yang dapat dikreditkan dengan pajak keluaran. Pengkreditan yang ceroboh berisiko menimbulkan kurang bayar beserta sanksi.",
      "Syarat Faktur Dapat Dikreditkan",
      "Faktur harus memenuhi syarat formal dan material: diterbitkan oleh PKP, memuat keterangan sesuai ketentuan, dilaporkan dalam masa yang benar, dan atas perolehan yang berkaitan langsung dengan kegiatan usaha.",
      "Pemeriksaan Faktur",
      "Sebelum dikreditkan, periksa keaslian nomor seri faktur, kesesuaian identitas lawan transaksi, kebenaran nilai, serta masa pajak penerbitannya.",
      "Pemeriksaan Faktur",
      "Pemeriksaan ulang sebaiknya juga mencakup pengecekan status PKP lawan transaksi dan konsistensi antara faktur dengan bukti penerimaan barang atau berita acara penyelesaian jasa.",
      "Mekanisme Pengkreditan",
      "Pajak masukan dikurangkan dari pajak keluaran dalam masa yang sama. Kelebihan pajak masukan dapat dikompensasikan ke masa berikutnya atau direstitusikan sesuai ketentuan.",
      "Risiko Kurang Bayar",
      "Faktur fiktif, faktur kedaluwarsa, atau faktur dari pemasok bermasalah dapat dikoreksi pemeriksa sehingga menimbulkan kurang bayar plus sanksi bunga. Disiplin verifikasi adalah perlindungan termurah.",
      "Faktur yang Tidak Dapat Dikreditkan",
      "Tidak semua pajak masukan boleh dikreditkan. Pengeluaran untuk keperluan pribadi, kendaraan penumpang tertentu, serta perolehan sebelum dikukuhkan sebagai PKP termasuk yang dikecualikan ketentuan.",
      "Studi Kasus",
      "Sebuah perusahaan dagang menerima 40 faktur masukan senilai total PPN Rp120 juta dalam sebulan. Setelah verifikasi, 2 faktur senilai Rp8 juta ternyata kedaluwarsa masa pengkreditannya. Perusahaan mengkreditkan Rp112 juta dan mencatat sisanya sebagai beban, sehingga terhindar dari koreksi pemeriksaan.",
      "Kesimpulan",
      "Kreditkan hanya faktur yang valid, tercatat, dan berkaitan dengan usaha. Administrasi yang rapi membuat SPT Masa PPN Anda aman dari koreksi."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Faktur pajak masukan adalah bukti pungutan PPN atas perolehan Barang Kena Pajak atau Jasa Kena Pajak yang dapat dikreditkan dengan pajak keluaran. Pengkreditan yang ceroboh berisiko menimbulkan kurang bayar beserta sanksi."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Syarat Faktur Dapat Dikreditkan"
      },
      {
        "kind": "paragraph",
        "text": "Faktur harus memenuhi syarat formal dan material: diterbitkan oleh PKP, memuat keterangan sesuai ketentuan, dilaporkan dalam masa yang benar, dan atas perolehan yang berkaitan langsung dengan kegiatan usaha."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Pemeriksaan Faktur"
      },
      {
        "kind": "paragraph",
        "text": "Sebelum dikreditkan, periksa keaslian nomor seri faktur, kesesuaian identitas lawan transaksi, kebenaran nilai, serta masa pajak penerbitannya."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Pemeriksaan Faktur"
      },
      {
        "kind": "paragraph",
        "text": "Pemeriksaan ulang sebaiknya juga mencakup pengecekan status PKP lawan transaksi dan konsistensi antara faktur dengan bukti penerimaan barang atau berita acara penyelesaian jasa."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Mekanisme Pengkreditan"
      },
      {
        "kind": "paragraph",
        "text": "Pajak masukan dikurangkan dari pajak keluaran dalam masa yang sama. Kelebihan pajak masukan dapat dikompensasikan ke masa berikutnya atau direstitusikan sesuai ketentuan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Kumpulkan seluruh faktur masukan per masa pajak",
          "Verifikasi dan input ke aplikasi e-Faktur",
          "Hitung selisih dengan pajak keluaran",
          "Tentukan kompensasi atau restitusi atas lebih bayar"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Risiko Kurang Bayar"
      },
      {
        "kind": "paragraph",
        "text": "Faktur fiktif, faktur kedaluwarsa, atau faktur dari pemasok bermasalah dapat dikoreksi pemeriksa sehingga menimbulkan kurang bayar plus sanksi bunga. Disiplin verifikasi adalah perlindungan termurah."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Faktur yang Tidak Dapat Dikreditkan"
      },
      {
        "kind": "paragraph",
        "text": "Tidak semua pajak masukan boleh dikreditkan. Pengeluaran untuk keperluan pribadi, kendaraan penumpang tertentu, serta perolehan sebelum dikukuhkan sebagai PKP termasuk yang dikecualikan ketentuan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Pengeluaran untuk kepentingan pribadi pemilik atau karyawan",
          "Perolehan sebelum tanggal pengukuhan PKP",
          "Faktur yang cacat formal dan tidak diperbaiki tepat waktu"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Studi Kasus"
      },
      {
        "kind": "paragraph",
        "text": "Sebuah perusahaan dagang menerima 40 faktur masukan senilai total PPN Rp120 juta dalam sebulan. Setelah verifikasi, 2 faktur senilai Rp8 juta ternyata kedaluwarsa masa pengkreditannya. Perusahaan mengkreditkan Rp112 juta dan mencatat sisanya sebagai beban, sehingga terhindar dari koreksi pemeriksaan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Kreditkan hanya faktur yang valid, tercatat, dan berkaitan dengan usaha. Administrasi yang rapi membuat SPT Masa PPN Anda aman dari koreksi."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=600&q=80",
    "category": "Perpajakan",
    "categorySlug": "perpajakan",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "PKP",
        "slug": "pkp"
      },
      {
        "name": "Pajak Badan",
        "slug": "pajak-badan"
      },
      {
        "name": "Pembukuan",
        "slug": "pembukuan"
      }
    ],
    "seo": {
      "title": "Cara Kredit Faktur Pajak Masukan | EasyTax",
      "description": "Tips mengkreditkan faktur pajak masukan dengan aman."
    }
  },
  {
    "title": "Mengapa Neraca & Laba Rugi Wajib Dilampirkan pada e-Filing SPT Badan?",
    "slug": "neraca-laba-rugi-spt-badan",
    "excerpt": "Penjelasan hubungan erat pembukuan akuntansi komersial dan kewajiban e-Filing SPT PPh 1771 untuk menghindari koreksi fiskal KPP.",
    "content": [
      "Setiap Wajib Pajak badan yang menyampaikan SPT Tahunan PPh wajib melampirkan laporan keuangan berupa neraca dan laporan laba rugi. Kedua laporan ini menjadi dasar Direktorat Jenderal Pajak menilai kewajaran penghasilan yang dilaporkan.",
      "Fungsi Neraca dalam SPT Badan",
      "Neraca menggambarkan posisi keuangan pada akhir tahun pajak: aset, liabilitas, dan ekuitas. Fiskus menggunakannya untuk menelusuri mutasi harta, utang pemegang saham, dan konsistensi modal disetor.",
      "Pos-Pos yang Sering Disorot",
      "Kas dan setara kas yang tidak wajar, piutang afiliasi yang menumpuk, serta utang tanpa bunga dari pemegang saham kerap memicu permintaan klarifikasi.",
      "Fungsi Laporan Laba Rugi",
      "Laporan laba rugi menunjukkan kinerja setahun: peredaran usaha, harga pokok, beban operasional, hingga laba bersih. Angka inilah titik awal rekonsiliasi fiskal menuju penghasilan neto fiskal.",
      "Rekonsiliasi Elemen Laba Rugi",
      "Tidak semua beban komersial diakui fiskal. Beban entertainment tanpa nominatif, sumbangan non-keagamaan tertentu, dan denda pajak harus dikoreksi positif.",
      "e-Filing SPT Badan",
      "Pelaporan dilakukan melalui e-filing DJP Online dengan mengunggah formulir 1771 beserta lampiran laporan keuangan dalam format yang ditentukan. Pastikan file terbaca jelas dan angka antar-lampiran konsisten.",
      "Studi Kasus Singkat",
      "PT Maju Bersama mencatat laba komersial Rp800 juta. Setelah koreksi positif Rp120 juta atas entertainment dan denda, serta koreksi negatif Rp50 juta atas penghasilan final, penghasilan neto fiskalnya menjadi Rp870 juta. Dari angka inilah PPh terutang dihitung, bukan dari laba komersial.",
      "Checklist Sebelum Melapor",
      "Sebelum menekan tombol submit, pastikan seluruh item berikut sudah terpenuhi agar SPT tidak perlu dibetulkan kemudian hari.",
      "Kesimpulan",
      "Neraca dan laba rugi bukan sekadar lampiran formalitas, melainkan fondasi kepercayaan fiskus terhadap SPT Anda. Susun dengan teliti, rekonsiliasi dengan benar, dan laporkan tepat waktu."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Setiap Wajib Pajak badan yang menyampaikan SPT Tahunan PPh wajib melampirkan laporan keuangan berupa neraca dan laporan laba rugi. Kedua laporan ini menjadi dasar Direktorat Jenderal Pajak menilai kewajaran penghasilan yang dilaporkan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Fungsi Neraca dalam SPT Badan"
      },
      {
        "kind": "paragraph",
        "text": "Neraca menggambarkan posisi keuangan pada akhir tahun pajak: aset, liabilitas, dan ekuitas. Fiskus menggunakannya untuk menelusuri mutasi harta, utang pemegang saham, dan konsistensi modal disetor."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Pos-Pos yang Sering Disorot"
      },
      {
        "kind": "paragraph",
        "text": "Kas dan setara kas yang tidak wajar, piutang afiliasi yang menumpuk, serta utang tanpa bunga dari pemegang saham kerap memicu permintaan klarifikasi."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Fungsi Laporan Laba Rugi"
      },
      {
        "kind": "paragraph",
        "text": "Laporan laba rugi menunjukkan kinerja setahun: peredaran usaha, harga pokok, beban operasional, hingga laba bersih. Angka inilah titik awal rekonsiliasi fiskal menuju penghasilan neto fiskal."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Rekonsiliasi Elemen Laba Rugi"
      },
      {
        "kind": "paragraph",
        "text": "Tidak semua beban komersial diakui fiskal. Beban entertainment tanpa nominatif, sumbangan non-keagamaan tertentu, dan denda pajak harus dikoreksi positif."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "e-Filing SPT Badan"
      },
      {
        "kind": "paragraph",
        "text": "Pelaporan dilakukan melalui e-filing DJP Online dengan mengunggah formulir 1771 beserta lampiran laporan keuangan dalam format yang ditentukan. Pastikan file terbaca jelas dan angka antar-lampiran konsisten."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Laporan keuangan komersial lengkap dengan catatan atas laporan keuangan",
          "Rekonsiliasi fiskal dan perhitungan kompensasi kerugian bila ada",
          "Daftar penyusutan fiskal dan amortisasi",
          "Surat setoran pajak dan bukti potong sebagai kredit pajak"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Studi Kasus Singkat"
      },
      {
        "kind": "paragraph",
        "text": "PT Maju Bersama mencatat laba komersial Rp800 juta. Setelah koreksi positif Rp120 juta atas entertainment dan denda, serta koreksi negatif Rp50 juta atas penghasilan final, penghasilan neto fiskalnya menjadi Rp870 juta. Dari angka inilah PPh terutang dihitung, bukan dari laba komersial."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Checklist Sebelum Melapor"
      },
      {
        "kind": "paragraph",
        "text": "Sebelum menekan tombol submit, pastikan seluruh item berikut sudah terpenuhi agar SPT tidak perlu dibetulkan kemudian hari."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Angka induk dan seluruh lampiran saling cocok",
          "Seluruh bukti potong sudah dikreditkan",
          "Status bayar sudah lunas atau sudah dibuatkan kode billing",
          "File lampiran terbaca dan tidak melebihi batas ukuran"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Neraca dan laba rugi bukan sekadar lampiran formalitas, melainkan fondasi kepercayaan fiskus terhadap SPT Anda. Susun dengan teliti, rekonsiliasi dengan benar, dan laporkan tepat waktu."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=600&q=80",
    "category": "Akuntansi",
    "categorySlug": "akuntansi",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "SPT Tahunan",
        "slug": "spt-tahunan"
      },
      {
        "name": "Pajak Badan",
        "slug": "pajak-badan"
      },
      {
        "name": "Laporan Keuangan",
        "slug": "laporan-keuangan"
      }
    ],
    "seo": {
      "title": "Neraca dan Laba Rugi SPT Badan | EasyTax",
      "description": "Pentingnya laporan keuangan dalam e-Filing SPT Badan."
    }
  },
  {
    "title": "Penerapan Tarif Efektif Rata-Rata (TER) PPh 21: Cara Hitung Pemotongan Gaji Karyawan",
    "slug": "penerapan-ter-pph-21",
    "excerpt": "Panduan praktis menghitung potong PPh 21 bulanan karyawan kategori A, B, dan C sesuai Peraturan Pemerintah No. 58 Tahun 2023.",
    "content": [
      "Tarif Efektif Rata-rata (TER) adalah metode pemotongan PPh 21 masa selain masa pajak terakhir yang dihitung berdasarkan tarif efektif dikalikan penghasilan bruto. Kebijakan ini menyederhanakan perhitungan bulanan bagi pemberi kerja sejak masa pajak Januari 2024.",
      "Apa Itu TER PPh 21?",
      "TER menggantikan perhitungan progresif bulanan dengan tarif tunggal berdasarkan kategori dan status PTKP penerima penghasilan. Tujuannya adalah kemudahan administrasi tanpa mengubah total beban pajak setahun, karena penyesuaian dilakukan pada masa Desember.",
      "Kategori Tarif Efektif",
      "Terdapat tiga kategori tarif: kategori A untuk status PTKP TK/0, TK/1, dan K/0; kategori B untuk status menengah; dan kategori C untuk status dengan tanggungan lebih banyak. Setiap kategori memiliki tabel tarif berlapis sesuai rentang penghasilan bruto.",
      "Siapa yang Dikenakan PPh 21?",
      "PPh 21 dikenakan atas penghasilan sehubungan dengan pekerjaan, jasa, dan kegiatan yang diterima Wajib Pajak orang pribadi dalam negeri. Klasifikasi penerima menentukan perlakuan pemotongannya.",
      "Karyawan Tetap",
      "Karyawan tetap dipotong setiap masa penggajian menggunakan TER, kemudian pada masa Desember dilakukan perhitungan ulang dengan tarif progresif Pasal 17 untuk menentukan kurang atau lebih potong.",
      "Karyawan Tidak Tetap",
      "Pekerja harian, mingguan, atau kontrak jangka pendek dipotong berdasarkan ketentuan tersendiri, termasuk batas penghasilan harian yang tidak dipotong apabila di bawah ambang tertentu.",
      "Penerima Penghasilan Lainnya",
      "Tenaga ahli, anggota dewan komisaris, mantan pegawai yang menerima jasa produksi, serta peserta kegiatan dikenakan pemotongan dengan dasar dan tarif sesuai ketentuan masing-masing.",
      "Komponen Penghasilan dalam Perhitungan",
      "Dasar pemotongan adalah penghasilan bruto yang diterima, dikurangi unsur-unsur yang secara ketentuan bukan objek atau mendapat perlakuan khusus.",
      "Penghasilan Bruto",
      "Meliputi gaji pokok, tunjangan tetap dan tidak tetap, bonus, premi, serta imbalan dalam bentuk natura tertentu yang menjadi objek PPh 21.",
      "Pengurang Penghasilan",
      "Untuk perhitungan tahunan, penghasilan neto diperoleh setelah dikurangi biaya jabatan, iuran pensiun, dan Penghasilan Tidak Kena Pajak sesuai status kawin dan tanggungan.",
      "Biaya Jabatan",
      "Biaya jabatan ditetapkan sebesar 5 persen dari penghasilan bruto setahun dengan batas maksimum Rp500.000,00 per bulan atau Rp6.000.000,00 per tahun.",
      "Iuran yang Diperbolehkan",
      "Iuran terkait pensiun yang dibayar pegawai, termasuk iuran jaminan hari tua, dapat menjadi pengurang sepanjang memenuhi ketentuan yang berlaku.",
      "Cara Menghitung PPh 21",
      "Pada masa Januari hingga November, kalikan penghasilan bruto dengan tarif TER sesuai kategori. Pada masa Desember, hitung ulang setahun penuh dengan tarif progresif, lalu selisihkan dengan total yang sudah dipotong.",
      "Contoh Perhitungan",
      "Karyawan dengan gaji bruto Rp10 juta per bulan dan status TK/0 menggunakan tarif kategori A. Pemotongan bulanan bersifat final sementara hingga rekonsiliasi akhir tahun.",
      "Tahap Pertama",
      "Hitung total penghasilan bruto setahun dan kurangkan dengan biaya jabatan, iuran, serta PTKP untuk memperoleh Penghasilan Kena Pajak.",
      "Tahap Kedua",
      "Terapkan tarif progresif Pasal 17 atas Penghasilan Kena Pajak, lalu bandingkan dengan akumulasi potongan Januari–November untuk menentukan kurang atau lebih bayar.",
      "Kesalahan yang Sering Terjadi",
      "Kesalahan umum meliputi salah memilih kategori TER, tidak memperbarui status PTKP karyawan yang menikah atau memiliki anak, serta lupa melakukan perhitungan ulang pada masa Desember.",
      "Perbedaan TER dan Tarif Progresif",
      "TER hanya berlaku untuk masa Januari hingga November sebagai metode penyederhanaan. Perhitungan final setahun penuh selalu menggunakan tarif progresif Pasal 17, sehingga total pajak setahun tidak berubah akibat penerapan TER.",
      "Kapan Tarif Progresif Langsung Dipakai?",
      "Tarif progresif dipakai pada masa Desember untuk rekonsiliasi, serta untuk penghasilan yang bukan objek TER seperti pesangon, bonus yang dibayarkan terpisah dengan skema tertentu, dan imbalan yang ketentuannya mengatur tersendiri.",
      "Administrasi Bukti Potong",
      "Setiap pemotongan harus didokumentasikan dengan bukti potong yang diserahkan kepada penerima penghasilan dan dilaporkan dalam SPT Masa. Arsip digital bukti potong memudahkan rekonsiliasi akhir tahun dan pemeriksaan.",
      "Cara Pelaporan",
      "Bukti potong 1721-A1 diterbitkan untuk karyawan tetap dan dilaporkan melalui SPT Masa PPh 21 setiap bulan serta pembetulan bila diperlukan. Simpan seluruh bukti potong sebagai kredit pajak SPT Tahunan.",
      "Kesimpulan",
      "TER menyederhanakan pemotongan bulanan, tetapi ketepatan kategori, pembaruan data karyawan, dan rekonsiliasi Desember tetap menentukan kepatuhan PPh 21 perusahaan Anda."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Tarif Efektif Rata-rata (TER) adalah metode pemotongan PPh 21 masa selain masa pajak terakhir yang dihitung berdasarkan tarif efektif dikalikan penghasilan bruto. Kebijakan ini menyederhanakan perhitungan bulanan bagi pemberi kerja sejak masa pajak Januari 2024."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Apa Itu TER PPh 21?"
      },
      {
        "kind": "paragraph",
        "text": "TER menggantikan perhitungan progresif bulanan dengan tarif tunggal berdasarkan kategori dan status PTKP penerima penghasilan. Tujuannya adalah kemudahan administrasi tanpa mengubah total beban pajak setahun, karena penyesuaian dilakukan pada masa Desember."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Kategori Tarif Efektif"
      },
      {
        "kind": "paragraph",
        "text": "Terdapat tiga kategori tarif: kategori A untuk status PTKP TK/0, TK/1, dan K/0; kategori B untuk status menengah; dan kategori C untuk status dengan tanggungan lebih banyak. Setiap kategori memiliki tabel tarif berlapis sesuai rentang penghasilan bruto."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Siapa yang Dikenakan PPh 21?"
      },
      {
        "kind": "paragraph",
        "text": "PPh 21 dikenakan atas penghasilan sehubungan dengan pekerjaan, jasa, dan kegiatan yang diterima Wajib Pajak orang pribadi dalam negeri. Klasifikasi penerima menentukan perlakuan pemotongannya."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Karyawan Tetap"
      },
      {
        "kind": "paragraph",
        "text": "Karyawan tetap dipotong setiap masa penggajian menggunakan TER, kemudian pada masa Desember dilakukan perhitungan ulang dengan tarif progresif Pasal 17 untuk menentukan kurang atau lebih potong."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Karyawan Tidak Tetap"
      },
      {
        "kind": "paragraph",
        "text": "Pekerja harian, mingguan, atau kontrak jangka pendek dipotong berdasarkan ketentuan tersendiri, termasuk batas penghasilan harian yang tidak dipotong apabila di bawah ambang tertentu."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Penerima Penghasilan Lainnya"
      },
      {
        "kind": "paragraph",
        "text": "Tenaga ahli, anggota dewan komisaris, mantan pegawai yang menerima jasa produksi, serta peserta kegiatan dikenakan pemotongan dengan dasar dan tarif sesuai ketentuan masing-masing."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Komponen Penghasilan dalam Perhitungan"
      },
      {
        "kind": "paragraph",
        "text": "Dasar pemotongan adalah penghasilan bruto yang diterima, dikurangi unsur-unsur yang secara ketentuan bukan objek atau mendapat perlakuan khusus."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Penghasilan Bruto"
      },
      {
        "kind": "paragraph",
        "text": "Meliputi gaji pokok, tunjangan tetap dan tidak tetap, bonus, premi, serta imbalan dalam bentuk natura tertentu yang menjadi objek PPh 21."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Pengurang Penghasilan"
      },
      {
        "kind": "paragraph",
        "text": "Untuk perhitungan tahunan, penghasilan neto diperoleh setelah dikurangi biaya jabatan, iuran pensiun, dan Penghasilan Tidak Kena Pajak sesuai status kawin dan tanggungan."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Biaya Jabatan"
      },
      {
        "kind": "paragraph",
        "text": "Biaya jabatan ditetapkan sebesar 5 persen dari penghasilan bruto setahun dengan batas maksimum Rp500.000,00 per bulan atau Rp6.000.000,00 per tahun."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Iuran yang Diperbolehkan"
      },
      {
        "kind": "paragraph",
        "text": "Iuran terkait pensiun yang dibayar pegawai, termasuk iuran jaminan hari tua, dapat menjadi pengurang sepanjang memenuhi ketentuan yang berlaku."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Cara Menghitung PPh 21"
      },
      {
        "kind": "paragraph",
        "text": "Pada masa Januari hingga November, kalikan penghasilan bruto dengan tarif TER sesuai kategori. Pada masa Desember, hitung ulang setahun penuh dengan tarif progresif, lalu selisihkan dengan total yang sudah dipotong."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Contoh Perhitungan"
      },
      {
        "kind": "paragraph",
        "text": "Karyawan dengan gaji bruto Rp10 juta per bulan dan status TK/0 menggunakan tarif kategori A. Pemotongan bulanan bersifat final sementara hingga rekonsiliasi akhir tahun."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Tahap Pertama"
      },
      {
        "kind": "paragraph",
        "text": "Hitung total penghasilan bruto setahun dan kurangkan dengan biaya jabatan, iuran, serta PTKP untuk memperoleh Penghasilan Kena Pajak."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Tahap Kedua"
      },
      {
        "kind": "paragraph",
        "text": "Terapkan tarif progresif Pasal 17 atas Penghasilan Kena Pajak, lalu bandingkan dengan akumulasi potongan Januari–November untuk menentukan kurang atau lebih bayar."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesalahan yang Sering Terjadi"
      },
      {
        "kind": "paragraph",
        "text": "Kesalahan umum meliputi salah memilih kategori TER, tidak memperbarui status PTKP karyawan yang menikah atau memiliki anak, serta lupa melakukan perhitungan ulang pada masa Desember."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Perbedaan TER dan Tarif Progresif"
      },
      {
        "kind": "paragraph",
        "text": "TER hanya berlaku untuk masa Januari hingga November sebagai metode penyederhanaan. Perhitungan final setahun penuh selalu menggunakan tarif progresif Pasal 17, sehingga total pajak setahun tidak berubah akibat penerapan TER."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Kapan Tarif Progresif Langsung Dipakai?"
      },
      {
        "kind": "paragraph",
        "text": "Tarif progresif dipakai pada masa Desember untuk rekonsiliasi, serta untuk penghasilan yang bukan objek TER seperti pesangon, bonus yang dibayarkan terpisah dengan skema tertentu, dan imbalan yang ketentuannya mengatur tersendiri."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Administrasi Bukti Potong"
      },
      {
        "kind": "paragraph",
        "text": "Setiap pemotongan harus didokumentasikan dengan bukti potong yang diserahkan kepada penerima penghasilan dan dilaporkan dalam SPT Masa. Arsip digital bukti potong memudahkan rekonsiliasi akhir tahun dan pemeriksaan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Cara Pelaporan"
      },
      {
        "kind": "paragraph",
        "text": "Bukti potong 1721-A1 diterbitkan untuk karyawan tetap dan dilaporkan melalui SPT Masa PPh 21 setiap bulan serta pembetulan bila diperlukan. Simpan seluruh bukti potong sebagai kredit pajak SPT Tahunan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "TER menyederhanakan pemotongan bulanan, tetapi ketepatan kategori, pembaruan data karyawan, dan rekonsiliasi Desember tetap menentukan kepatuhan PPh 21 perusahaan Anda."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    "category": "Perpajakan",
    "categorySlug": "perpajakan",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "PPh 21",
        "slug": "pph-21"
      },
      {
        "name": "Pajak Pribadi",
        "slug": "pajak-pribadi"
      },
      {
        "name": "SPT Tahunan",
        "slug": "spt-tahunan"
      }
    ],
    "seo": {
      "title": "Penerapan TER PPh 21 | EasyTax",
      "description": "Panduan praktis menghitung PPh 21 dengan tarif efektif rata-rata."
    }
  },
  {
    "title": "Syarat Pengukuhan PKP Terbaru: Cara Lolos Survey KPP & Aktivasi e-Faktur",
    "slug": "syarat-pengukuhan-pkp-terbaru",
    "excerpt": "Simak alur pengajuan PKP perusahaan, dokumen kelayakan lokasi kantor, dan tips mempersiapkan verifikasi lapangan oleh petugas pemeriksa KPP.",
    "content": [
      "Pengukuhan Pengusaha Kena Pajak (PKP) adalah penetapan status oleh Direktur Jenderal Pajak bagi pengusaha yang melakukan penyerahan Barang Kena Pajak atau Jasa Kena Pajak di atas batas tertentu. Status PKP mewajibkan pemungutan PPN, penerbitan faktur pajak, dan pelaporan SPT Masa PPN.",
      "Syarat Umum Pengukuhan PKP",
      "Pengusaha wajib melaporkan usahanya untuk dikukuhkan sebagai PKP apabila total peredaran bruto dalam satu tahun buku melebihi Rp4,8 miliar. Di bawah ambang tersebut, pengukuhan bersifat sukarela namun tetap dimungkinkan.",
      "Dokumen yang Perlu Disiapkan",
      "Siapkan fotokopi KTP pengurus, NPWP perusahaan dan pengurus, NIB, akta pendirian beserta pengesahannya, bukti kepemilikan atau sewa tempat usaha, serta foto lokasi usaha tampak depan dan dalam.",
      "Tahapan dan Survey Lapangan",
      "Setelah permohonan diajukan, petugas pajak akan melakukan verifikasi dan survey lapangan untuk memastikan keberadaan dan kegiatan usaha. Petugas memeriksa kesesuaian alamat, aktivitas operasional, dan kelengkapan dokumen.",
      "Tips Lolos Survey KPP",
      "Pastikan papan nama usaha terpasang, kegiatan operasional terlihat berjalan, penanggung jawab hadir saat kunjungan, dan seluruh dokumen asli tersedia untuk ditunjukkan. Ketidaksesuaian kecil sebaiknya dijelaskan secara terbuka dan dilengkapi segera.",
      "Aktivasi Akun dan e-Faktur",
      "Setelah dikukuhkan, segera aktivasi akun PKP dan aplikasi e-Faktur, daftarkan sertifikat elektronik, dan pastikan penanggung jawab memahami cara membuat faktur pajak keluaran serta mengkreditkan faktur masukan.",
      "Kewajiban Setelah Menjadi PKP",
      "PKP wajib memungut PPN atas setiap penyerahan, menerbitkan faktur pajak tepat waktu, melaporkan SPT Masa PPN setiap bulan, dan menyetorkan PPN kurang bayar sebelum batas waktu. Kelalaian berakibat sanksi administrasi dan bunga.",
      "PKP Sukarela versus PKP Wajib",
      "Pengusaha dengan omzet di bawah ambang dapat mengajukan pengukuhan sukarela, misalnya untuk dapat menerbitkan faktur pajak kepada pelanggan korporat yang mensyaratkannya. Konsekuensinya sama: seluruh kewajiban PPN berlaku penuh sejak dikukuhkan.",
      "Pertimbangan Sebelum Mengajukan Sukarela",
      "Timbang manfaat faktur pajak bagi pelanggan melawan beban administrasi bulanan. Jika pelanggan Anda kebanyakan konsumen akhir, pengukuhan dini justru menambah biaya kepatuhan tanpa manfaat.",
      "Pencabutan Status PKP",
      "Status PKP dapat dicabut apabila pengusaha tidak lagi memenuhi syarat, misalnya menghentikan kegiatan usaha kena pajak atau omzet turun permanen. Pencabutan diajukan secara tertulis dengan melampirkan bukti pendukung dan penyelesaian seluruh kewajiban PPN.",
      "Kesimpulan",
      "Kunci sukses pengukuhan PKP adalah dokumen lengkap, lokasi usaha yang jelas, dan kesiapan menghadapi survey. Setelah dikukuhkan, jalankan kewajiban PPN dengan disiplin agar terhindar dari sanksi."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Pengukuhan Pengusaha Kena Pajak (PKP) adalah penetapan status oleh Direktur Jenderal Pajak bagi pengusaha yang melakukan penyerahan Barang Kena Pajak atau Jasa Kena Pajak di atas batas tertentu. Status PKP mewajibkan pemungutan PPN, penerbitan faktur pajak, dan pelaporan SPT Masa PPN."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Syarat Umum Pengukuhan PKP"
      },
      {
        "kind": "paragraph",
        "text": "Pengusaha wajib melaporkan usahanya untuk dikukuhkan sebagai PKP apabila total peredaran bruto dalam satu tahun buku melebihi Rp4,8 miliar. Di bawah ambang tersebut, pengukuhan bersifat sukarela namun tetap dimungkinkan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Memiliki NPWP yang aktif dan valid",
          "Peredaran usaha melebihi ambang atau mengajukan secara sukarela",
          "Memiliki tempat usaha yang jelas dan dapat diverifikasi",
          "Melengkapi dokumen legalitas seperti NIB dan akta pendirian bagi badan"
        ]
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Dokumen yang Perlu Disiapkan"
      },
      {
        "kind": "paragraph",
        "text": "Siapkan fotokopi KTP pengurus, NPWP perusahaan dan pengurus, NIB, akta pendirian beserta pengesahannya, bukti kepemilikan atau sewa tempat usaha, serta foto lokasi usaha tampak depan dan dalam."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Tahapan dan Survey Lapangan"
      },
      {
        "kind": "paragraph",
        "text": "Setelah permohonan diajukan, petugas pajak akan melakukan verifikasi dan survey lapangan untuk memastikan keberadaan dan kegiatan usaha. Petugas memeriksa kesesuaian alamat, aktivitas operasional, dan kelengkapan dokumen."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Tips Lolos Survey KPP"
      },
      {
        "kind": "paragraph",
        "text": "Pastikan papan nama usaha terpasang, kegiatan operasional terlihat berjalan, penanggung jawab hadir saat kunjungan, dan seluruh dokumen asli tersedia untuk ditunjukkan. Ketidaksesuaian kecil sebaiknya dijelaskan secara terbuka dan dilengkapi segera."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Aktivasi Akun dan e-Faktur"
      },
      {
        "kind": "paragraph",
        "text": "Setelah dikukuhkan, segera aktivasi akun PKP dan aplikasi e-Faktur, daftarkan sertifikat elektronik, dan pastikan penanggung jawab memahami cara membuat faktur pajak keluaran serta mengkreditkan faktur masukan."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kewajiban Setelah Menjadi PKP"
      },
      {
        "kind": "paragraph",
        "text": "PKP wajib memungut PPN atas setiap penyerahan, menerbitkan faktur pajak tepat waktu, melaporkan SPT Masa PPN setiap bulan, dan menyetorkan PPN kurang bayar sebelum batas waktu. Kelalaian berakibat sanksi administrasi dan bunga."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "PKP Sukarela versus PKP Wajib"
      },
      {
        "kind": "paragraph",
        "text": "Pengusaha dengan omzet di bawah ambang dapat mengajukan pengukuhan sukarela, misalnya untuk dapat menerbitkan faktur pajak kepada pelanggan korporat yang mensyaratkannya. Konsekuensinya sama: seluruh kewajiban PPN berlaku penuh sejak dikukuhkan."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Pertimbangan Sebelum Mengajukan Sukarela"
      },
      {
        "kind": "paragraph",
        "text": "Timbang manfaat faktur pajak bagi pelanggan melawan beban administrasi bulanan. Jika pelanggan Anda kebanyakan konsumen akhir, pengukuhan dini justru menambah biaya kepatuhan tanpa manfaat."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Pencabutan Status PKP"
      },
      {
        "kind": "paragraph",
        "text": "Status PKP dapat dicabut apabila pengusaha tidak lagi memenuhi syarat, misalnya menghentikan kegiatan usaha kena pajak atau omzet turun permanen. Pencabutan diajukan secara tertulis dengan melampirkan bukti pendukung dan penyelesaian seluruh kewajiban PPN."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Kunci sukses pengukuhan PKP adalah dokumen lengkap, lokasi usaha yang jelas, dan kesiapan menghadapi survey. Setelah dikukuhkan, jalankan kewajiban PPN dengan disiplin agar terhindar dari sanksi."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    "category": "Perpajakan",
    "categorySlug": "perpajakan",
    "author": "[object Object]",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "PKP",
        "slug": "pkp"
      },
      {
        "name": "Pajak Badan",
        "slug": "pajak-badan"
      }
    ],
    "seo": {
      "title": "Syarat Pengukuhan PKP Terbaru | EasyTax",
      "description": "Panduan syarat pengukuhan PKP dan aktivasi e-Faktur."
    }
  },
  {
    "title": "[DEV] Tips Mengelola Arus Kas UMKM",
    "slug": "dev-tips-arus-kas",
    "excerpt": "",
    "content": [
      "Arus kas adalah nyawa usaha kecil. Banyak UMKM yang omzetnya besar tetapi kehabisan kas karena tidak memisahkan uang pribadi dan usaha, tidak mencatat piutang, dan tidak merencanakan pengeluaran. Artikel ini memberikan panduan praktis mengelola arus kas untuk UMKM.",
      "Pisahkan Keuangan Pribadi dan Usaha",
      "Langkah pertama dan paling menentukan adalah memisahkan rekening. Seluruh penerimaan usaha masuk ke rekening usaha, dan pemilik mengambil gaji tetap setiap bulan. Tanpa pemisahan ini, mustahil mengetahui apakah usaha benar-benar untung.",
      "Menentukan Gaji Pemilik",
      "Tetapkan gaji bulanan yang wajar sesuai kemampuan usaha, misalnya 30–40 persen dari rata-rata laba bersih. Kelebihannya ditahan sebagai modal kerja atau dana darurat usaha.",
      "Catat Setiap Aliran Kas",
      "Gunakan buku kas sederhana atau aplikasi pencatatan. Setiap rupiah yang masuk dan keluar harus tercatat pada hari yang sama agar tidak lupa.",
      "Kelola Piutang dan Utang",
      "Tetapkan batas tempo piutang maksimal 14–30 hari dan tindak lanjuti pelanggan yang telat membayar. Di sisi lain, manfaatkan tempo utang pemasok secara sehat tanpa merusak reputasi.",
      "Cadangan Dana Darurat",
      "Sisihkan minimal 10 persen dari laba untuk dana darurat yang menutup 2–3 bulan biaya operasional. Dana ini menyelamatkan usaha saat penjualan turun atau ada pengeluaran tak terduga.",
      "Proyeksi Arus Kas Sederhana",
      "Buat proyeksi tiga bulan ke depan: perkirakan penerimaan berdasarkan rata-rata penjualan dan daftarkan seluruh pengeluaran rutin seperti sewa, gaji, dan cicilan. Jika proyeksi menunjukkan defisit, segera cari solusi sebelum kas benar-benar habis.",
      "Kesalahan Umum Pengelolaan Kas",
      "Pola yang paling sering merugikan UMKM adalah mencampur keuangan pribadi, menunda pencatatan hingga akhir bulan, memberikan tempo piutang tanpa batas, dan tidak memiliki dana cadangan sehingga satu pelanggan telat bayar langsung melumpuhkan operasional.",
      "Perangkat Sederhana yang Cukup",
      "Anda tidak membutuhkan sistem mahal. Buku kas fisik atau spreadsheet dengan kolom tanggal, keterangan, masuk, keluar, dan saldo sudah memadai untuk omzet di bawah Rp100 juta per bulan. Kuncinya adalah konsistensi harian, bukan kecanggihan alat.",
      "Kesimpulan",
      "Disiplin memisahkan rekening, mencatat harian, mengelola piutang, dan menyisihkan dana darurat akan membuat arus kas UMKM sehat dan usaha siap tumbuh."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Arus kas adalah nyawa usaha kecil. Banyak UMKM yang omzetnya besar tetapi kehabisan kas karena tidak memisahkan uang pribadi dan usaha, tidak mencatat piutang, dan tidak merencanakan pengeluaran. Artikel ini memberikan panduan praktis mengelola arus kas untuk UMKM."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Pisahkan Keuangan Pribadi dan Usaha"
      },
      {
        "kind": "paragraph",
        "text": "Langkah pertama dan paling menentukan adalah memisahkan rekening. Seluruh penerimaan usaha masuk ke rekening usaha, dan pemilik mengambil gaji tetap setiap bulan. Tanpa pemisahan ini, mustahil mengetahui apakah usaha benar-benar untung."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Menentukan Gaji Pemilik"
      },
      {
        "kind": "paragraph",
        "text": "Tetapkan gaji bulanan yang wajar sesuai kemampuan usaha, misalnya 30–40 persen dari rata-rata laba bersih. Kelebihannya ditahan sebagai modal kerja atau dana darurat usaha."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Catat Setiap Aliran Kas"
      },
      {
        "kind": "paragraph",
        "text": "Gunakan buku kas sederhana atau aplikasi pencatatan. Setiap rupiah yang masuk dan keluar harus tercatat pada hari yang sama agar tidak lupa."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Catat penjualan tunai maupun transfer setiap hari",
          "Catat seluruh pembelian bahan dan biaya operasional",
          "Pisahkan kolom kas, bank, dan piutang",
          "Lakukan rekonsiliasi saldo setiap akhir pekan"
        ]
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Kelola Piutang dan Utang"
      },
      {
        "kind": "paragraph",
        "text": "Tetapkan batas tempo piutang maksimal 14–30 hari dan tindak lanjuti pelanggan yang telat membayar. Di sisi lain, manfaatkan tempo utang pemasok secara sehat tanpa merusak reputasi."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Cadangan Dana Darurat"
      },
      {
        "kind": "paragraph",
        "text": "Sisihkan minimal 10 persen dari laba untuk dana darurat yang menutup 2–3 bulan biaya operasional. Dana ini menyelamatkan usaha saat penjualan turun atau ada pengeluaran tak terduga."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Proyeksi Arus Kas Sederhana"
      },
      {
        "kind": "paragraph",
        "text": "Buat proyeksi tiga bulan ke depan: perkirakan penerimaan berdasarkan rata-rata penjualan dan daftarkan seluruh pengeluaran rutin seperti sewa, gaji, dan cicilan. Jika proyeksi menunjukkan defisit, segera cari solusi sebelum kas benar-benar habis."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesalahan Umum Pengelolaan Kas"
      },
      {
        "kind": "paragraph",
        "text": "Pola yang paling sering merugikan UMKM adalah mencampur keuangan pribadi, menunda pencatatan hingga akhir bulan, memberikan tempo piutang tanpa batas, dan tidak memiliki dana cadangan sehingga satu pelanggan telat bayar langsung melumpuhkan operasional."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Mencampur uang pribadi dan usaha dalam satu rekening",
          "Menunda pencatatan hingga struk hilang dan lupa",
          "Piutang tanpa batas tempo dan tanpa penagihan rutin",
          "Tidak ada dana darurat untuk menutup 2–3 bulan biaya"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Perangkat Sederhana yang Cukup"
      },
      {
        "kind": "paragraph",
        "text": "Anda tidak membutuhkan sistem mahal. Buku kas fisik atau spreadsheet dengan kolom tanggal, keterangan, masuk, keluar, dan saldo sudah memadai untuk omzet di bawah Rp100 juta per bulan. Kuncinya adalah konsistensi harian, bukan kecanggihan alat."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Disiplin memisahkan rekening, mencatat harian, mengelola piutang, dan menyisihkan dana darurat akan membuat arus kas UMKM sehat dan usaha siap tumbuh."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=600&q=80",
    "category": "Keuangan",
    "categorySlug": "keuangan",
    "author": "Tim Konsultan EasyTax",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "UMKM",
        "slug": "umkm"
      },
      {
        "name": "Pembukuan",
        "slug": "pembukuan"
      }
    ],
    "seo": {
      "title": "[DEV] Tips Mengelola Arus Kas UMKM",
      "description": ""
    }
  },
  {
    "title": "[DEV] Panduan SPT Tahunan Badan",
    "slug": "dev-panduan-spt-tahunan",
    "excerpt": "",
    "content": [
      "Surat Pemberitahuan Tahunan (SPT Tahunan) adalah surat yang digunakan Wajib Pajak untuk melaporkan penghitungan dan pembayaran pajak, objek pajak, harta, dan kewajiban sesuai ketentuan peraturan perundang-undangan. Panduan ini membahas SPT Tahunan Badan secara menyeluruh, dari persiapan dokumen hingga pelaporan e-filing.",
      "Jenis-Jenis SPT Tahunan",
      "Secara garis besar terdapat SPT Tahunan Orang Pribadi (formulir 1770, 1770 S, 1770 SS) dan SPT Tahunan Badan (formulir 1771). Artikel ini berfokus pada formulir 1771 yang digunakan Wajib Pajak badan.",
      "Formulir 1771 Induk",
      "Formulir induk memuat ringkasan penghasilan neto fiskal, kompensasi kerugian, PPh terutang, kredit pajak, serta status kurang bayar, lebih bayar, atau nihil.",
      "Lampiran Pendukung",
      "Lampiran yang umum dilampirkan antara lain laporan keuangan fiskal, daftar penyusutan dan amortisasi, perhitungan peredaran usaha, serta daftar pemegang saham dan susunan pengurus.",
      "Dokumen Transaksi Afiliasi",
      "Bagi perusahaan yang bertransaksi dengan pihak afiliasi, dokumentasi transfer pricing (Master File, Local File, CbCR bila memenuhi ambang) wajib disiapkan sebagai lampiran pendukung.",
      "Catatan Arsip Digital",
      "Seluruh dokumen pendukung sebaiknya diarsipkan dalam bentuk digital yang mudah ditelusuri, karena jangka waktu penagihan pajak dapat mencapai lima tahun sejak terutangnya pajak.",
      "Tahapan Penyusunan",
      "Penyusunan SPT Badan yang baik mengikuti tahapan sistematis agar tidak ada pos yang terlewat dan seluruh angka dapat dipertanggungjawabkan.",
      "Batas Waktu dan Sanksi",
      "SPT Tahunan Badan wajib dilaporkan paling lambat empat bulan setelah akhir tahun pajak. Keterlambatan dikenai sanksi administrasi berupa denda Rp1.000.000,00, belum termasuk bunga atas kekurangan pembayaran bila statusnya kurang bayar.",
      "Jadwal Persiapan Ideal",
      "Idealnya persiapan dimulai tiga bulan sebelum batas waktu: bulan pertama untuk rekonsiliasi dan pengumpulan dokumen, bulan kedua untuk perhitungan dan review manajemen, bulan ketiga untuk finalisasi dan pelaporan dengan masa tenggang revisi.",
      "Pertanyaan yang Sering Muncul",
      "Berikut isu yang paling sering ditanyakan klien korporat menjelang musim pelaporan SPT tahunan.",
      "Apakah Rugi Tetap Wajib Lapor?",
      "Ya. Perusahaan yang merugi tetap wajib menyampaikan SPT Tahunan. Kerugian fiskal bahkan dapat dikompensasikan hingga lima tahun ke depan sehingga dokumentasinya justru semakin penting.",
      "Bagaimana Jika Ada Pembetulan?",
      "Pembetulan SPT dapat dilakukan selama belum dilakukan pemeriksaan. Pembetulan yang menambah kekurangan bayar dikenai bunga, sehingga ketelitian sejak awal jauh lebih murah.",
      "Kesimpulan",
      "Dengan persiapan dokumen yang rapi, pemahaman rekonsiliasi fiskal, dan pelaporan tepat waktu, kewajiban SPT Tahunan Badan dapat dipenuhi tanpa denda. Simpan panduan berjenjang ini sebagai referensi tahunan perusahaan Anda."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Surat Pemberitahuan Tahunan (SPT Tahunan) adalah surat yang digunakan Wajib Pajak untuk melaporkan penghitungan dan pembayaran pajak, objek pajak, harta, dan kewajiban sesuai ketentuan peraturan perundang-undangan. Panduan ini membahas SPT Tahunan Badan secara menyeluruh, dari persiapan dokumen hingga pelaporan e-filing."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Jenis-Jenis SPT Tahunan"
      },
      {
        "kind": "paragraph",
        "text": "Secara garis besar terdapat SPT Tahunan Orang Pribadi (formulir 1770, 1770 S, 1770 SS) dan SPT Tahunan Badan (formulir 1771). Artikel ini berfokus pada formulir 1771 yang digunakan Wajib Pajak badan."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Formulir 1771 Induk"
      },
      {
        "kind": "paragraph",
        "text": "Formulir induk memuat ringkasan penghasilan neto fiskal, kompensasi kerugian, PPh terutang, kredit pajak, serta status kurang bayar, lebih bayar, atau nihil."
      },
      {
        "kind": "heading",
        "level": 4,
        "text": "Lampiran Pendukung"
      },
      {
        "kind": "paragraph",
        "text": "Lampiran yang umum dilampirkan antara lain laporan keuangan fiskal, daftar penyusutan dan amortisasi, perhitungan peredaran usaha, serta daftar pemegang saham dan susunan pengurus."
      },
      {
        "kind": "heading",
        "level": 5,
        "text": "Dokumen Transaksi Afiliasi"
      },
      {
        "kind": "paragraph",
        "text": "Bagi perusahaan yang bertransaksi dengan pihak afiliasi, dokumentasi transfer pricing (Master File, Local File, CbCR bila memenuhi ambang) wajib disiapkan sebagai lampiran pendukung."
      },
      {
        "kind": "heading",
        "level": 6,
        "text": "Catatan Arsip Digital"
      },
      {
        "kind": "paragraph",
        "text": "Seluruh dokumen pendukung sebaiknya diarsipkan dalam bentuk digital yang mudah ditelusuri, karena jangka waktu penagihan pajak dapat mencapai lima tahun sejak terutangnya pajak."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Tahapan Penyusunan"
      },
      {
        "kind": "paragraph",
        "text": "Penyusunan SPT Badan yang baik mengikuti tahapan sistematis agar tidak ada pos yang terlewat dan seluruh angka dapat dipertanggungjawabkan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Menyiapkan laporan keuangan komersial yang telah diaudit atau disusun manajemen",
          "Melakukan rekonsiliasi fiskal atas pos-pos yang berbeda perlakuan",
          "Menghitung PPh terutang dan mengkreditkan PPh yang telah dipotong/dipungut pihak lain",
          "Mengisi formulir 1771 beserta lampirannya dan melaporkannya melalui e-filing"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Batas Waktu dan Sanksi"
      },
      {
        "kind": "paragraph",
        "text": "SPT Tahunan Badan wajib dilaporkan paling lambat empat bulan setelah akhir tahun pajak. Keterlambatan dikenai sanksi administrasi berupa denda Rp1.000.000,00, belum termasuk bunga atas kekurangan pembayaran bila statusnya kurang bayar."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Jadwal Persiapan Ideal"
      },
      {
        "kind": "paragraph",
        "text": "Idealnya persiapan dimulai tiga bulan sebelum batas waktu: bulan pertama untuk rekonsiliasi dan pengumpulan dokumen, bulan kedua untuk perhitungan dan review manajemen, bulan ketiga untuk finalisasi dan pelaporan dengan masa tenggang revisi."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Bulan pertama: kumpulkan laporan keuangan, bukti potong, dan SSP",
          "Bulan kedua: susun rekonsiliasi fiskal dan hitung PPh terutang",
          "Bulan ketiga: review, tanda tangan direksi, dan lapor via e-filing"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Pertanyaan yang Sering Muncul"
      },
      {
        "kind": "paragraph",
        "text": "Berikut isu yang paling sering ditanyakan klien korporat menjelang musim pelaporan SPT tahunan."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Apakah Rugi Tetap Wajib Lapor?"
      },
      {
        "kind": "paragraph",
        "text": "Ya. Perusahaan yang merugi tetap wajib menyampaikan SPT Tahunan. Kerugian fiskal bahkan dapat dikompensasikan hingga lima tahun ke depan sehingga dokumentasinya justru semakin penting."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Bagaimana Jika Ada Pembetulan?"
      },
      {
        "kind": "paragraph",
        "text": "Pembetulan SPT dapat dilakukan selama belum dilakukan pemeriksaan. Pembetulan yang menambah kekurangan bayar dikenai bunga, sehingga ketelitian sejak awal jauh lebih murah."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Dengan persiapan dokumen yang rapi, pemahaman rekonsiliasi fiskal, dan pelaporan tepat waktu, kewajiban SPT Tahunan Badan dapat dipenuhi tanpa denda. Simpan panduan berjenjang ini sebagai referensi tahunan perusahaan Anda."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=600&q=80",
    "category": "Perpajakan",
    "categorySlug": "perpajakan",
    "author": "Tim Konsultan EasyTax",
    "publishedDate": "7 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "SPT Tahunan",
        "slug": "spt-tahunan"
      },
      {
        "name": "Pajak Badan",
        "slug": "pajak-badan"
      }
    ],
    "seo": {
      "title": "[DEV] Panduan SPT Tahunan Badan",
      "description": ""
    }
  },
  {
    "title": "[DEV] Artikel Contoh",
    "slug": "dev-artikel-contoh",
    "excerpt": "Contoh artikel EasyTax: dasar pajak, NPWP, dan pencatatan sederhana dengan Daftar Isi otomatis.",
    "content": [
      "Artikel ini adalah contoh struktur artikel EasyTax yang lengkap: memiliki pengantar, beberapa bagian dengan heading berjenjang, daftar, contoh kasus, dan kesimpulan. Seluruh bagian di bawah ini akan terbaca oleh Daftar Isi otomatis.",
      "Pengertian Pajak Secara Umum",
      "Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan undang-undang, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat. Definisi ini menjadi fondasi seluruh pembahasan perpajakan di Indonesia.",
      "Ciri-Ciri Pajak",
      "Agar dapat dibedakan dari pungutan lain, pajak memiliki ciri-ciri yang jelas dan diakui secara umum dalam literatur perpajakan.",
      "Fungsi Pajak bagi Negara",
      "Pajak memiliki dua fungsi utama. Pertama, fungsi budgetair sebagai sumber penerimaan negara untuk membiayai belanja rutin dan pembangunan. Kedua, fungsi regulerend sebagai alat pengatur kebijakan ekonomi dan sosial, misalnya insentif pajak untuk sektor tertentu.",
      "Nomor Pokok Wajib Pajak",
      "NPWP adalah nomor yang diberikan kepada Wajib Pajak sebagai sarana administrasi perpajakan. Setiap Wajib Pajak yang memenuhi syarat subjektif dan objektif wajib mendaftarkan diri untuk memperoleh NPWP di Kantor Pelayanan Pajak terdekat atau secara daring.",
      "Studi Kasus Singkat",
      "Sebuah usaha katering rumahan milik Ibu Sari memiliki omzet Rp40 juta per bulan. Karena omzet tahunannya di bawah Rp500 juta, ia dapat memanfaatkan skema PPh final UMKM. Dengan pencatatan sederhana, ia menghitung kewajiban bulanannya tanpa perlu menyewa konsultan mahal.",
      "Dasar Hukum Perpajakan Indonesia",
      "Ketentuan perpajakan nasional bersumber pada undang-undang di bidang ketentuan umum dan tata cara perpajakan, pajak penghasilan, pajak pertambahan nilai, serta penagihan pajak dengan surat paksa. Di bawahnya terdapat peraturan pemerintah, peraturan menteri keuangan, dan peraturan direktur jenderal pajak yang mengatur teknis pelaksanaan.",
      "Hierarki Aturan",
      "Urutan kekuatan hukum dimulai dari undang-undang, lalu peraturan pemerintah, peraturan menteri, hingga peraturan pelaksana Ditjen Pajak. Ketika terjadi pertentangan penafsiran, ketentuan yang lebih tinggi mengesampingkan yang lebih rendah.",
      "Tips Membaca Artikel Pajak",
      "Agar tidak tersesat dalam istilah teknis, bacalah artikel pajak dengan strategi: pahami definisi kunci terlebih dahulu, catat angka ambang batas seperti tarif dan batas waktu, lalu terapkan pada contoh kasus usaha Anda sendiri.",
      "Kesimpulan",
      "Memahami dasar-dasar pajak, NPWP, dan pencatatan sederhana adalah langkah awal kepatuhan. Artikel contoh ini menunjukkan bagaimana heading H2 dan H3 tersusun rapi ke dalam Daftar Isi otomatis di sisi kanan halaman."
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Artikel ini adalah contoh struktur artikel EasyTax yang lengkap: memiliki pengantar, beberapa bagian dengan heading berjenjang, daftar, contoh kasus, dan kesimpulan. Seluruh bagian di bawah ini akan terbaca oleh Daftar Isi otomatis."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Pengertian Pajak Secara Umum"
      },
      {
        "kind": "paragraph",
        "text": "Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat memaksa berdasarkan undang-undang, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat. Definisi ini menjadi fondasi seluruh pembahasan perpajakan di Indonesia."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Ciri-Ciri Pajak"
      },
      {
        "kind": "paragraph",
        "text": "Agar dapat dibedakan dari pungutan lain, pajak memiliki ciri-ciri yang jelas dan diakui secara umum dalam literatur perpajakan."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Bersifat memaksa dan diatur dengan undang-undang",
          "Tidak ada imbalan langsung bagi pembayarnya",
          "Dipungut oleh negara, baik pemerintah pusat maupun daerah",
          "Digunakan untuk membiayai pengeluaran negara dan pembangunan"
        ]
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Fungsi Pajak bagi Negara"
      },
      {
        "kind": "paragraph",
        "text": "Pajak memiliki dua fungsi utama. Pertama, fungsi budgetair sebagai sumber penerimaan negara untuk membiayai belanja rutin dan pembangunan. Kedua, fungsi regulerend sebagai alat pengatur kebijakan ekonomi dan sosial, misalnya insentif pajak untuk sektor tertentu."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Nomor Pokok Wajib Pajak"
      },
      {
        "kind": "paragraph",
        "text": "NPWP adalah nomor yang diberikan kepada Wajib Pajak sebagai sarana administrasi perpajakan. Setiap Wajib Pajak yang memenuhi syarat subjektif dan objektif wajib mendaftarkan diri untuk memperoleh NPWP di Kantor Pelayanan Pajak terdekat atau secara daring."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Studi Kasus Singkat"
      },
      {
        "kind": "paragraph",
        "text": "Sebuah usaha katering rumahan milik Ibu Sari memiliki omzet Rp40 juta per bulan. Karena omzet tahunannya di bawah Rp500 juta, ia dapat memanfaatkan skema PPh final UMKM. Dengan pencatatan sederhana, ia menghitung kewajiban bulanannya tanpa perlu menyewa konsultan mahal."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Dasar Hukum Perpajakan Indonesia"
      },
      {
        "kind": "paragraph",
        "text": "Ketentuan perpajakan nasional bersumber pada undang-undang di bidang ketentuan umum dan tata cara perpajakan, pajak penghasilan, pajak pertambahan nilai, serta penagihan pajak dengan surat paksa. Di bawahnya terdapat peraturan pemerintah, peraturan menteri keuangan, dan peraturan direktur jenderal pajak yang mengatur teknis pelaksanaan."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Hierarki Aturan"
      },
      {
        "kind": "paragraph",
        "text": "Urutan kekuatan hukum dimulai dari undang-undang, lalu peraturan pemerintah, peraturan menteri, hingga peraturan pelaksana Ditjen Pajak. Ketika terjadi pertentangan penafsiran, ketentuan yang lebih tinggi mengesampingkan yang lebih rendah."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Tips Membaca Artikel Pajak"
      },
      {
        "kind": "paragraph",
        "text": "Agar tidak tersesat dalam istilah teknis, bacalah artikel pajak dengan strategi: pahami definisi kunci terlebih dahulu, catat angka ambang batas seperti tarif dan batas waktu, lalu terapkan pada contoh kasus usaha Anda sendiri."
      },
      {
        "kind": "list",
        "ordered": false,
        "items": [
          "Fokus pada definisi dan syarat utama setiap ketentuan",
          "Catat tarif, ambang batas, dan tenggat waktu",
          "Bandingkan dengan kondisi usaha Anda sebelum mengambil kesimpulan"
        ]
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Kesimpulan"
      },
      {
        "kind": "paragraph",
        "text": "Memahami dasar-dasar pajak, NPWP, dan pencatatan sederhana adalah langkah awal kepatuhan. Artikel contoh ini menunjukkan bagaimana heading H2 dan H3 tersusun rapi ke dalam Daftar Isi otomatis di sisi kanan halaman."
      }
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    "category": "Perpajakan",
    "categorySlug": "perpajakan",
    "author": "[object Object]",
    "publishedDate": "6 Okt 2026",
    "readingTime": "3 Min Baca",
    "tags": [
      {
        "name": "NPWP",
        "slug": "npwp"
      },
      {
        "name": "Pembukuan",
        "slug": "pembukuan"
      }
    ],
    "seo": {
      "title": "[DEV] Artikel Contoh",
      "description": "Contoh artikel EasyTax: dasar pajak, NPWP, dan pencatatan sederhana dengan Daftar Isi otomatis."
    }
  }
];

export const demoTestimonials: Testimonial[] = [
  {
    "quote": "Restitusi PPN perusahaan kami sukses dicairkan tanpa kendala berarti. Konsultansi perpajakan yang sangat solutif dan dapat diandalkan.",
    "initials": "ES",
    "tone": "navy",
    "name": "Eka Susanti",
    "role": ""
  },
  {
    "quote": "Respon super cepat via WhatsApp dan konsultannya paham betul regulasi perpajakan startup & industri kreatif. Rekomendasi banget!",
    "initials": "RS",
    "tone": "gold",
    "name": "Rian Saputra",
    "role": ""
  },
  {
    "quote": "Sebagai UMKM yang baru berkembang, EasyTax membimbing kami dari nol memahami kewajiban PPh Final 0,5% sampai pembukuan rapi tiap bulan.",
    "initials": "MI",
    "tone": "navy",
    "name": "Maya Indah",
    "role": ""
  },
  {
    "quote": "Audit pajak internal & penyusunan Transfer Pricing Documentation (TPDoc) diselesaikan dengan ketelitian sangat tinggi oleh tim konsultan senior.",
    "initials": "HP",
    "tone": "gold",
    "name": "Hendra Pratama",
    "role": ""
  },
  {
    "quote": "Pendampingan tanggapan SP2DK dari EasyTax sangat taktis. Kertas kerja lengkap dan argumen fiskal sangat kredibel sehingga urusan tuntas cepat.",
    "initials": "DN",
    "tone": "navy",
    "name": "Dian Nugroho",
    "role": ""
  },
  {
    "quote": "Laporan pembukuan bulanan dan rekonsiliasi PPh 21/23 selalu beres tanpa pusing. Biayanya transparan dan pembayarannya aman lewat Tokopedia.",
    "initials": "BH",
    "tone": "gold",
    "name": "Budi Hartono",
    "role": ""
  },
  {
    "quote": "Sangat terbantu dengan layanan pengurusan PKP dan e-Faktur EasyTax. Timnya responsif dan mengarahkan dari awal hingga sertifikat digital aktif.",
    "initials": "SR",
    "tone": "navy",
    "name": "Siti Rahma",
    "role": ""
  },
  {
    "quote": "Proses pelaporan SPT Tahunan 1771 perusahaan kami selesai tepat waktu, rapi, dan tim konsultan sangat teliti mengaudit bukti potong.",
    "initials": "AW",
    "tone": "gold",
    "name": "Ahmad Wijaya",
    "role": ""
  },
  {
    "quote": "Testimoni contoh development.",
    "initials": "[K",
    "tone": "navy",
    "name": "[DEV] Klien Contoh",
    "role": ""
  }
];

export const demoClients: string[] = [
  "vidichi.jpg",
  "tantri.jpg",
  "sumber-aneka-wangi.jpg",
  "satoshi.jpg",
  "power-computerindo.jpg",
  "pabriek-kuweh.jpg",
  "oseal.jpg",
  "moonbow.jpg",
  "kms.jpg",
  "kafeel-netz.jpg",
  "javarudraksha.jpg",
  "happyeats.jpg",
  "guri-senbei.jpg",
  "gmk-door.jpg",
  "dewa-rackindo.jpg",
  "daingsuper.jpg",
  "callme.jpg",
  "beeskin.jpg",
  "artave.jpg",
  "arava-tour.jpg",
  "akiha.jpg",
  "dev-logo.png"
];

export const demoWhatsAppUrl = "https://mauorder.online/easytaxwebsite";

export const demoTeam: AboutTeamMember[] = [
  { photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", name: "Akmal Abdul Arik", position: "Senior Tax Consultant", licenseLevel: "A", bio: "Mendampingi kepatuhan pajak dan pelaporan perusahaan dari berbagai industri." },
  { photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", name: "Risa Rizki Sharon", position: "Tax & Financial Advisor", licenseLevel: "B", bio: "Berfokus pada perencanaan keuangan dan advisory perpajakan bisnis." },
  { photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80", name: "Tiara Nabila", position: "Tax Compliance Specialist", licenseLevel: "B", bio: "Memastikan dokumen dan proses compliance klien berjalan rapi dan tepat waktu." },
  { photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", name: "Dimas Permana", position: "Accounting & Payroll Lead", licenseLevel: "C", bio: "Menangani pembukuan, rekonsiliasi, dan pengelolaan payroll perusahaan." },
  { photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80", name: "Siti Rahmawati", position: "Tax Officer Specialist", licenseLevel: "C", bio: "Mendukung administrasi perpajakan dan komunikasi dokumen klien." },
];
