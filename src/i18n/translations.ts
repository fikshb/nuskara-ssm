export type Locale = "en" | "id";

export interface Translations {
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    headline: string[];
    headlineHighlight: string;
    subtitle: string;
    tags: string[];
    description: string;
    cta: string;
    kpis: { value: string; label: string }[];
  };
  overview: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string[];
    stats: { value: number; suffix: string; label: string }[];
    vision: {
      title: string;
      text: string;
    };
    mission: {
      title: string;
      items: string[];
    };
  };
  services: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    cards: {
      title: string;
      description: string;
      bullets: string[];
    }[];
  };
  safety: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    steps: { title: string; description: string }[];
    certifications: { title: string; description: string }[];
    stats: { value: string; label: string }[];
  };
  equipment: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    systems: {
      title: string;
      description: string;
      icon: string;
    }[];
    stats: { value: string; label: string }[];
  };
  coverage: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    stats: { value: string; label: string }[];
    regions: string[];
  };
  clients: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    names: string[];
  };
  contact: {
    overline: string;
    headline: string;
    headlineHighlight: string;
    info: {
      address: string[];
      email: string;
      phone: string;
      operationalLabel: string;
      operationalAddress: string[];
    };
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    description: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}

const en: Translations = {
  nav: {
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Services", href: "#services" },
      { label: "Safety", href: "#safety" },
      { label: "Equipment", href: "#equipment" },
      { label: "Coverage", href: "#coverage" },
    ],
    cta: "Contact Us",
  },
  hero: {
    badge: "PT SILIWANGI SUMBER MAKMUR",
    headline: ["Precision Blasting &", "Drilling Services Across"],
    headlineHighlight: "Indonesia",
    subtitle: "A Nuskara Group Company",
    tags: [
      "Precision Blasting",
      "Core Drilling",
      "Quarry Mining",
      "Licensed Operator",
    ],
    description:
      "Specialized blasting and drilling service provider supporting mining operations, quarry development, and construction projects with world class safety standards since 2015.",
    cta: "Explore Our Services",
    kpis: [
      { value: "150+", label: "Projects Completed" },
      { value: "10+", label: "Years Operating" },
      { value: "0", label: "Safety Incidents" },
    ],
  },
  overview: {
    overline: "COMPANY PROFILE",
    headline: "Precision in Every",
    headlineHighlight: "Detonation",
    description: [
      "Established in 2015 as an expansion of the Nuskara group, PT Siliwangi Sumber Makmur specializes in precision blasting, core drilling, and quarry mining operations across Indonesia's most demanding terrain.",
      "As part of the integrated Nuskara mining ecosystem, SSM delivers end to end blasting solutions backed by licensed operators, advanced blast design technology, and an unwavering commitment to zero incident operations.",
    ],
    stats: [
      { value: 2015, suffix: "", label: "Established" },
      { value: 150, suffix: "+", label: "Projects" },
      { value: 6, suffix: "+", label: "Provinces" },
      { value: 100, suffix: "%", label: "Safety Record" },
    ],
    vision: {
      title: "Vision",
      text: "To become Indonesia's leading blasting and drilling service provider, recognized for world class safety standards, operational precision, and sustainable mining practices.",
    },
    mission: {
      title: "Mission",
      items: [
        "Deliver precision blasting and drilling services with zero incident as our non negotiable standard",
        "Advance mining operations through modern blast design technology and continuous innovation",
        "Contribute to local communities and sustainable development in every region we operate",
      ],
    },
  },
  services: {
    overline: "CORE SERVICES",
    headline: "Three Pillars of",
    headlineHighlight: "Mining Excellence",
    description:
      "SSM operates across three specialized service verticals, each backed by certified personnel, proper licensing, and proven operational methodologies.",
    cards: [
      {
        title: "Precision Blasting",
        description:
          "Controlled blasting operations for mining, quarry, and construction applications. Every blast is engineered for optimal fragmentation and minimum environmental impact.",
        bullets: [
          "Licensed blasting operations (BNSP certified)",
          "Site specific blast pattern design",
          "Vibration and noise monitoring",
          "Post blast assessment and reporting",
        ],
      },
      {
        title: "Core Drilling",
        description:
          "Diamond core and reverse circulation drilling services for exploration, geotechnical survey, and production operations across diverse geological conditions.",
        bullets: [
          "Exploration and production drilling",
          "Diamond core and RC drilling",
          "Geotechnical survey support",
          "Sample analysis and reporting",
        ],
      },
      {
        title: "Quarry Mining",
        description:
          "End to end quarry operations management from site assessment through production, ensuring maximum material yield with optimized fragmentation.",
        bullets: [
          "Open pit quarry management",
          "Rock fragmentation optimization",
          "Material processing and crushing",
          "Production planning and scheduling",
        ],
      },
    ],
  },
  safety: {
    overline: "SAFETY PROTOCOL",
    headline: "Engineered for",
    headlineHighlight: "Zero Incidents",
    description:
      "Every operation follows our rigorous five step safety protocol. From initial survey through final reporting, SSM maintains the highest standards of safety and compliance at every stage.",
    steps: [
      {
        title: "Site Survey",
        description: "Comprehensive geological assessment and environmental baseline study before any operation begins.",
      },
      {
        title: "Blast Planning",
        description: "Computer aided blast design with precise charge calculations, delay timing, and fragmentation modeling.",
      },
      {
        title: "Preparation",
        description: "Site preparation, equipment staging, exclusion zone setup, and pre blast safety verification.",
      },
      {
        title: "Controlled Execution",
        description: "Licensed operators execute the blast with real time monitoring of vibration, air overpressure, and flyrock.",
      },
      {
        title: "Monitoring & Reporting",
        description: "Post blast assessment, environmental impact documentation, and comprehensive compliance reporting.",
      },
    ],
    certifications: [
      {
        title: "BNSP Certification",
        description: "All blasting personnel certified by the National Professional Certification Authority.",
      },
      {
        title: "K3 Mining Safety",
        description: "Full compliance with mining occupational health and safety regulations.",
      },
      {
        title: "Environmental Compliance",
        description: "Environmental impact monitoring and mitigation per AMDAL requirements.",
      },
      {
        title: "Insurance Coverage",
        description: "Comprehensive operational and third party liability insurance for all projects.",
      },
    ],
    stats: [
      { value: "0", label: "Safety Incidents" },
      { value: "100%", label: "Compliance Rate" },
      { value: "5 Step", label: "Protocol" },
      { value: "24/7", label: "Monitoring" },
    ],
  },
  equipment: {
    overline: "EQUIPMENT & TECHNOLOGY",
    headline: "Powered by",
    headlineHighlight: "Heavy Machinery",
    description:
      "Our operations are driven by modern drilling rigs, advanced blast design software, and comprehensive safety monitoring systems that ensure precision and efficiency.",
    systems: [
      {
        title: "Drilling Rig Fleet",
        description: "Hydraulic crawler drills, down the hole hammers, and diamond core rigs maintained to manufacturer specifications for maximum uptime and accuracy.",
        icon: "drill",
      },
      {
        title: "Blast Design Software",
        description: "Computer aided blast pattern optimization with fragmentation analysis, vibration prediction, and 3D terrain modeling for every project.",
        icon: "software",
      },
      {
        title: "Safety Monitoring Systems",
        description: "Seismograph monitoring, air blast pressure tracking, and real time alert systems deployed at every active blast site.",
        icon: "monitor",
      },
      {
        title: "GPS Fleet Management",
        description: "Equipment tracking, utilization reporting, and predictive maintenance scheduling across all operational sites.",
        icon: "gps",
      },
    ],
    stats: [
      { value: "20+", label: "Drilling Rigs" },
      { value: "15+", label: "Blast Units" },
      { value: "99.8%", label: "Uptime" },
      { value: "GPS", label: "Tracked" },
    ],
  },
  coverage: {
    overline: "OPERATIONAL COVERAGE",
    headline: "Nationwide",
    headlineHighlight: "Mining Reach",
    description:
      "With headquarters in Jakarta and operational teams deployed across 6 provinces, SSM provides blasting and drilling services throughout Indonesia's key mining and quarry regions.",
    stats: [
      { value: "6+", label: "Provinces" },
      { value: "20+", label: "Mine Sites" },
      { value: "Nationwide", label: "Coverage" },
    ],
    regions: [
      "Jawa Barat (HQ)",
      "Banten",
      "Jawa Tengah",
      "Kalimantan Timur",
      "Kalimantan Selatan",
      "Sumatera Selatan",
    ],
  },
  clients: {
    overline: "TRUSTED BY",
    headline: "Industry",
    headlineHighlight: "Partners",
    description:
      "SSM serves as a trusted blasting and drilling partner for leading mining companies, quarry operators, and infrastructure developers across Indonesia.",
    names: [
      "Nuskara Group",
      "DAN",
      "GBN",
      "Berau Coal",
      "Dahana",
      "Orica",
      "BME",
      "Dyno Nobel",
    ],
  },
  contact: {
    overline: "GET IN TOUCH",
    headline: "Start a",
    headlineHighlight: "Conversation",
    info: {
      address: [
        "Talavera Office Park, 28th Floor",
        "Jl. TB Simatupang Kav. 22-26",
        "Cilandak Barat, Cilandak",
        "Jakarta Selatan 12430",
      ],
      email: "info@ssm-mining.co.id",
      phone: "+62 21 7599 8000",
      operationalLabel: "Operational Office",
      operationalAddress: [
        "Site Office, Mining Area",
        "Jawa Barat",
      ],
    },
    form: {
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      message: "Your Message",
      submit: "Send Message",
    },
  },
  footer: {
    description:
      "PT Siliwangi Sumber Makmur is a precision blasting and drilling service company and a subsidiary of PT Nuskara Karya Raya Indonesia. BNSP certified operators with nationwide mining coverage.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Precision Blasting", href: "#services" },
          { label: "Core Drilling", href: "#services" },
          { label: "Quarry Mining", href: "#services" },
          { label: "Safety Protocol", href: "#safety" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About SSM", href: "#overview" },
          { label: "Coverage Area", href: "#coverage" },
          { label: "Our Clients", href: "#clients" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Compliance",
        links: [
          { label: "BNSP Certification", href: "#safety" },
          { label: "K3 Mining Safety", href: "#safety" },
          { label: "Environmental Policy", href: "#" },
          { label: "Quality Assurance", href: "#" },
        ],
      },
    ],
    copyright: "PT Siliwangi Sumber Makmur. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
};

const id: Translations = {
  nav: {
    links: [
      { label: "Profil", href: "#overview" },
      { label: "Layanan", href: "#services" },
      { label: "Keselamatan", href: "#safety" },
      { label: "Peralatan", href: "#equipment" },
      { label: "Jangkauan", href: "#coverage" },
    ],
    cta: "Hubungi Kami",
  },
  hero: {
    badge: "PT SILIWANGI SUMBER MAKMUR",
    headline: ["Jasa Peledakan &", "Pengeboran Presisi di"],
    headlineHighlight: "Indonesia",
    subtitle: "Bagian dari Nuskara Group",
    tags: [
      "Peledakan Presisi",
      "Pengeboran Inti",
      "Tambang Quarry",
      "Operator Berizin",
    ],
    description:
      "Penyedia jasa peledakan dan pengeboran khusus yang mendukung operasi pertambangan, pengembangan quarry, dan proyek konstruksi dengan standar keselamatan kelas dunia sejak 2015.",
    cta: "Jelajahi Layanan Kami",
    kpis: [
      { value: "150+", label: "Proyek Selesai" },
      { value: "10+", label: "Tahun Beroperasi" },
      { value: "0", label: "Insiden Keselamatan" },
    ],
  },
  overview: {
    overline: "PROFIL PERUSAHAAN",
    headline: "Presisi di Setiap",
    headlineHighlight: "Peledakan",
    description: [
      "Didirikan pada tahun 2015 sebagai ekspansi dari grup Nuskara, PT Siliwangi Sumber Makmur mengkhususkan diri dalam peledakan presisi, pengeboran inti, dan operasi tambang quarry di berbagai medan paling menantang di Indonesia.",
      "Sebagai bagian dari ekosistem pertambangan terintegrasi Nuskara, SSM memberikan solusi peledakan menyeluruh yang didukung oleh operator berlisensi, teknologi desain peledakan canggih, dan komitmen tak tergoyahkan terhadap operasi tanpa insiden.",
    ],
    stats: [
      { value: 2015, suffix: "", label: "Didirikan" },
      { value: 150, suffix: "+", label: "Proyek" },
      { value: 6, suffix: "+", label: "Provinsi" },
      { value: 100, suffix: "%", label: "Rekam Keselamatan" },
    ],
    vision: {
      title: "Visi",
      text: "Menjadi penyedia jasa peledakan dan pengeboran terdepan di Indonesia, diakui untuk standar keselamatan kelas dunia, presisi operasional, dan praktik pertambangan berkelanjutan.",
    },
    mission: {
      title: "Misi",
      items: [
        "Memberikan layanan peledakan dan pengeboran presisi dengan zero incident sebagai standar mutlak",
        "Memajukan operasi pertambangan melalui teknologi desain peledakan modern dan inovasi berkelanjutan",
        "Berkontribusi pada masyarakat lokal dan pembangunan berkelanjutan di setiap wilayah operasi",
      ],
    },
  },
  services: {
    overline: "LAYANAN INTI",
    headline: "Tiga Pilar",
    headlineHighlight: "Keunggulan Pertambangan",
    description:
      "SSM beroperasi di tiga vertikal layanan khusus, masing masing didukung oleh personel bersertifikat, perizinan yang tepat, dan metodologi operasional yang teruji.",
    cards: [
      {
        title: "Peledakan Presisi",
        description:
          "Operasi peledakan terkontrol untuk aplikasi pertambangan, quarry, dan konstruksi. Setiap peledakan direkayasa untuk fragmentasi optimal dan dampak lingkungan minimum.",
        bullets: [
          "Operasi peledakan berizin (sertifikasi BNSP)",
          "Desain pola peledakan spesifik lokasi",
          "Pemantauan getaran dan kebisingan",
          "Penilaian dan pelaporan pasca peledakan",
        ],
      },
      {
        title: "Pengeboran Inti",
        description:
          "Layanan pengeboran diamond core dan reverse circulation untuk eksplorasi, survei geoteknik, dan operasi produksi di berbagai kondisi geologis.",
        bullets: [
          "Pengeboran eksplorasi dan produksi",
          "Pengeboran diamond core dan RC",
          "Dukungan survei geoteknik",
          "Analisis sampel dan pelaporan",
        ],
      },
      {
        title: "Tambang Quarry",
        description:
          "Manajemen operasi quarry menyeluruh dari penilaian lokasi hingga produksi, memastikan hasil material maksimal dengan fragmentasi yang dioptimalkan.",
        bullets: [
          "Manajemen quarry open pit",
          "Optimalisasi fragmentasi batuan",
          "Pemrosesan dan penghancuran material",
          "Perencanaan dan penjadwalan produksi",
        ],
      },
    ],
  },
  safety: {
    overline: "PROTOKOL KESELAMATAN",
    headline: "Direkayasa untuk",
    headlineHighlight: "Zero Incident",
    description:
      "Setiap operasi mengikuti protokol keselamatan lima langkah yang ketat. Dari survei awal hingga pelaporan akhir, SSM mempertahankan standar keselamatan dan kepatuhan tertinggi di setiap tahap.",
    steps: [
      {
        title: "Survei Lokasi",
        description: "Penilaian geologis komprehensif dan studi baseline lingkungan sebelum operasi dimulai.",
      },
      {
        title: "Perencanaan Peledakan",
        description: "Desain peledakan berbantuan komputer dengan perhitungan muatan presisi, pengaturan waktu tunda, dan pemodelan fragmentasi.",
      },
      {
        title: "Persiapan",
        description: "Persiapan lokasi, penempatan peralatan, pengaturan zona eksklusi, dan verifikasi keselamatan pra peledakan.",
      },
      {
        title: "Eksekusi Terkontrol",
        description: "Operator berlisensi melaksanakan peledakan dengan pemantauan real time getaran, tekanan udara, dan flyrock.",
      },
      {
        title: "Monitoring & Pelaporan",
        description: "Penilaian pasca peledakan, dokumentasi dampak lingkungan, dan pelaporan kepatuhan komprehensif.",
      },
    ],
    certifications: [
      {
        title: "Sertifikasi BNSP",
        description: "Seluruh personel peledakan tersertifikasi oleh Badan Nasional Sertifikasi Profesi.",
      },
      {
        title: "K3 Pertambangan",
        description: "Kepatuhan penuh terhadap regulasi kesehatan dan keselamatan kerja pertambangan.",
      },
      {
        title: "Kepatuhan Lingkungan",
        description: "Pemantauan dan mitigasi dampak lingkungan sesuai persyaratan AMDAL.",
      },
      {
        title: "Asuransi Operasional",
        description: "Asuransi komprehensif operasional dan tanggung jawab pihak ketiga untuk semua proyek.",
      },
    ],
    stats: [
      { value: "0", label: "Insiden Keselamatan" },
      { value: "100%", label: "Tingkat Kepatuhan" },
      { value: "5 Langkah", label: "Protokol" },
      { value: "24/7", label: "Pemantauan" },
    ],
  },
  equipment: {
    overline: "PERALATAN & TEKNOLOGI",
    headline: "Didukung oleh",
    headlineHighlight: "Mesin Berat",
    description:
      "Operasi kami digerakkan oleh rig pengeboran modern, perangkat lunak desain peledakan canggih, dan sistem monitoring keselamatan komprehensif yang memastikan presisi dan efisiensi.",
    systems: [
      {
        title: "Armada Rig Pengeboran",
        description: "Hydraulic crawler drill, down the hole hammer, dan diamond core rig yang dipelihara sesuai spesifikasi pabrik untuk uptime dan akurasi maksimal.",
        icon: "drill",
      },
      {
        title: "Software Desain Peledakan",
        description: "Optimalisasi pola peledakan berbantuan komputer dengan analisis fragmentasi, prediksi getaran, dan pemodelan terrain 3D untuk setiap proyek.",
        icon: "software",
      },
      {
        title: "Sistem Monitoring Keselamatan",
        description: "Pemantauan seismograf, pelacakan tekanan udara, dan sistem peringatan real time yang diterapkan di setiap lokasi peledakan aktif.",
        icon: "monitor",
      },
      {
        title: "Manajemen Armada GPS",
        description: "Pelacakan peralatan, pelaporan utilisasi, dan penjadwalan pemeliharaan prediktif di semua lokasi operasional.",
        icon: "gps",
      },
    ],
    stats: [
      { value: "20+", label: "Rig Pengeboran" },
      { value: "15+", label: "Unit Peledakan" },
      { value: "99.8%", label: "Uptime" },
      { value: "GPS", label: "Terpantau" },
    ],
  },
  coverage: {
    overline: "JANGKAUAN OPERASIONAL",
    headline: "Jangkauan Pertambangan",
    headlineHighlight: "Nasional",
    description:
      "Dengan kantor pusat di Jakarta dan tim operasional yang tersebar di 6 provinsi, SSM menyediakan layanan peledakan dan pengeboran di seluruh wilayah pertambangan dan quarry utama Indonesia.",
    stats: [
      { value: "6+", label: "Provinsi" },
      { value: "20+", label: "Lokasi Tambang" },
      { value: "Nasional", label: "Cakupan" },
    ],
    regions: [
      "Jawa Barat (HQ)",
      "Banten",
      "Jawa Tengah",
      "Kalimantan Timur",
      "Kalimantan Selatan",
      "Sumatera Selatan",
    ],
  },
  clients: {
    overline: "DIPERCAYA OLEH",
    headline: "Mitra",
    headlineHighlight: "Industri",
    description:
      "SSM berperan sebagai mitra peledakan dan pengeboran terpercaya bagi perusahaan pertambangan, operator quarry, dan pengembang infrastruktur terkemuka di Indonesia.",
    names: [
      "Nuskara Group",
      "DAN",
      "GBN",
      "Berau Coal",
      "Dahana",
      "Orica",
      "BME",
      "Dyno Nobel",
    ],
  },
  contact: {
    overline: "HUBUNGI KAMI",
    headline: "Mulai",
    headlineHighlight: "Percakapan",
    info: {
      address: [
        "Talavera Office Park, Lantai 28",
        "Jl. TB Simatupang Kav. 22-26",
        "Cilandak Barat, Cilandak",
        "Jakarta Selatan 12430",
      ],
      email: "info@ssm-mining.co.id",
      phone: "+62 21 7599 8000",
      operationalLabel: "Kantor Operasional",
      operationalAddress: [
        "Site Office, Area Pertambangan",
        "Jawa Barat",
      ],
    },
    form: {
      name: "Nama Lengkap",
      email: "Alamat Email",
      company: "Nama Perusahaan",
      message: "Pesan Anda",
      submit: "Kirim Pesan",
    },
  },
  footer: {
    description:
      "PT Siliwangi Sumber Makmur adalah perusahaan jasa peledakan presisi dan pengeboran serta anak perusahaan dari PT Nuskara Karya Raya Indonesia. Operator bersertifikasi BNSP dengan cakupan pertambangan nasional.",
    columns: [
      {
        title: "Layanan",
        links: [
          { label: "Peledakan Presisi", href: "#services" },
          { label: "Pengeboran Inti", href: "#services" },
          { label: "Tambang Quarry", href: "#services" },
          { label: "Protokol Keselamatan", href: "#safety" },
        ],
      },
      {
        title: "Perusahaan",
        links: [
          { label: "Tentang SSM", href: "#overview" },
          { label: "Area Jangkauan", href: "#coverage" },
          { label: "Klien Kami", href: "#clients" },
          { label: "Kontak", href: "#contact" },
        ],
      },
      {
        title: "Kepatuhan",
        links: [
          { label: "Sertifikasi BNSP", href: "#safety" },
          { label: "K3 Pertambangan", href: "#safety" },
          { label: "Kebijakan Lingkungan", href: "#" },
          { label: "Jaminan Kualitas", href: "#" },
        ],
      },
    ],
    copyright: "PT Siliwangi Sumber Makmur. Hak cipta dilindungi.",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Syarat & Ketentuan",
  },
};

export const translations = { en, id };
