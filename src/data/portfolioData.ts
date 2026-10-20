import {
  ProfileData,
  ProjectItem,
  ServiceItem,
  ReviewItem,
  PricingPlan,
  BlogPost
} from '../types';

export const defaultProfile: ProfileData = {
  name: "James Smith",
  roleId: "Web Designer & Frontend Engineer",
  roleEn: "Web Designer & Frontend Engineer",
  rolesListId: [
    "A Web Designer",
    "Frontend Developer",
    "UI/UX Specialist",
    "Creative Director"
  ],
  rolesListEn: [
    "A Web Designer",
    "Frontend Developer",
    "UI/UX Specialist",
    "Creative Director"
  ],
  bioId: "Membantu brand, startup, dan bisnis menciptakan pengalaman digital yang memukau, berkinerja tinggi, dan berorientasi pada konversi penjualan yang nyata.",
  bioEn: "There are many variations of passages of Lorem Ipsum available, but my passion is crafting bespoke digital experiences with high performance and human-centric aesthetics.",
  email: "rusandiresi@gmail.com",
  phone: "+62 812-3456-7890",
  locationId: "Jakarta, Indonesia & Remote",
  locationEn: "Jakarta, Indonesia & Remote Worldwide",
  avatarUrl: "/assets/aistudio/image_4af57c09.png",
  experienceYears: 8,
  completedProjects: 145,
  clientSatisfaction: 99,
  awardsCount: 18,
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    whatsapp: "https://wa.me/6281234567890"
  }
};

export const skillsData = [
  { name: "React & Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS & Modern CSS", level: 98, category: "frontend" },
  { name: "UI/UX & Design Systems (Figma)", level: 94, category: "design" },
  { name: "Responsive & Mobile-First Web", level: 96, category: "design" },
  { name: "Node.js & Express", level: 86, category: "backend" },
  { name: "PostgreSQL & Supabase", level: 84, category: "backend" },
  { name: "Motion & Micro-interactions", level: 90, category: "frontend" },
  { name: "SEO & Web Vitals Optimization", level: 92, category: "tools" },
  { name: "Git, CI/CD & Cloud Deployment", level: 88, category: "tools" }
];

export const experienceTimeline = [
  {
    period: "2023 - Sekarang",
    periodEn: "2023 - Present",
    roleId: "Lead UI/UX Designer & Senior Frontend",
    roleEn: "Lead UI/UX Designer & Senior Frontend",
    company: "Apex Studio Global",
    descId: "Memimpin perancangan sistem desain multi-produk, mengembangkan aplikasi web skala perusahaan dengan performa 99/100 Lighthouse score.",
    descEn: "Leading design system architecture across multi-product suites, building enterprise web platforms with 99+ Lighthouse scores."
  },
  {
    period: "2020 - 2023",
    periodEn: "2020 - 2023",
    roleId: "Senior Frontend Developer",
    roleEn: "Senior Frontend Developer",
    company: "Nusantara Digital Tech",
    descId: "Membangun lebih dari 30 landing page dengan konversi tinggi dan platform e-commerce kustom untuk klien regional Asia Tenggara.",
    descEn: "Engineered 30+ high-converting landing pages and bespoke e-commerce platforms for Southeast Asian scaleups."
  },
  {
    period: "2018 - 2020",
    periodEn: "2018 - 2020",
    roleId: "Web Designer & UI Specialist",
    roleEn: "Web Designer & UI Specialist",
    company: "Creative Vanguard",
    descId: "Merancang wireframe, interactive prototype, dan implementasi kode frontend HTML5/CSS3/JavaScript untuk brand komersial.",
    descEn: "Crafted wireframes, high-fidelity prototypes, and frontend builds for commercial lifestyle and tech brands."
  }
];

export const educationList = [
  {
    year: "2014 - 2018",
    titleId: "Sarjana Ilmu Komputer (S.Kom)",
    titleEn: "B.Sc. in Computer Science",
    institution: "Universitas Indonesia",
    detailsId: "Fokus pada Rekayasa Perangkat Lunak dan Interaksi Manusia & Komputer (HCI).",
    detailsEn: "Focus on Software Engineering & Human-Computer Interaction (HCI)."
  },
  {
    year: "2022",
    titleId: "Sertifikasi Profesional Google UX Design",
    titleEn: "Google UX Design Professional Certificate",
    institution: "Coursera / Google",
    detailsId: "Spesialisasi riset pengguna, wireframing, dan usability testing.",
    detailsEn: "Comprehensive certification in user research, wireframing, and usability testing."
  },
  {
    year: "2021",
    titleId: "Meta Certified Frontend Developer",
    titleEn: "Meta Certified Frontend Developer",
    institution: "Meta",
    detailsId: "Advanced React, state management, dan arsitektur aplikasi web modern.",
    detailsEn: "Advanced React, state patterns, and production web application architecture."
  }
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "fintech-vault",
    title: "Fintech Vault Dashboard",
    category: "webapp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    summaryId: "Dashboard analitik finansial modern dengan visualisasi data real-time dan manajemen portofolio kripto/aset.",
    summaryEn: "Modern financial analytics dashboard featuring real-time data visualization and multi-asset portfolio tracking.",
    fullDescId: "Proyek fintech skala institusional yang menyajikan monitoring transaksi harian, analisis tren pasar menggunakan chart interaktif, serta sistem autentikasi perbankan dengan keamanan berlapis.",
    fullDescEn: "An institutional-grade fintech product providing daily transaction telemetry, market trend analytics via interactive charts, and multi-layered bank-grade security protocols.",
    client: "Vault Capital Ltd.",
    year: "2025",
    roleId: "Lead UI/UX & Frontend Engineer",
    roleEn: "Lead UI/UX & Frontend Engineer",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/fintech",
    githubUrl: "https://github.com",
    highlightsId: [
      "Performa skor Lighthouse 98/100 dengan waktu muat 0.4 detik",
      "Dukungan dark mode adaptif dan responsif pada 6 breakpoint layar",
      "Komponen chart interaktif dengan rendering grafis 60fps"
    ],
    highlightsEn: [
      "98/100 Lighthouse score with sub-400ms initial paint",
      "Adaptive dark-mode aesthetic responsive across 6 breakpoints",
      "Interactive data charts with 60fps hardware-accelerated rendering"
    ]
  },
  {
    id: "lumina-fashion",
    title: "Lumina Luxury Fashion Store",
    category: "ecommerce",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    summaryId: "Toko e-commerce mewah dengan katalog busana interaktif, filter cerdas, dan checkout terpadu.",
    summaryEn: "High-end luxury fashion store featuring interactive lookbooks, smart filtering, and seamless checkout.",
    fullDescId: "Platform belanja online kelas premium yang dirancang untuk brand pakaian haute-couture. Dilengkapi fitur 360 viewer, panduan ukuran interaktif, serta integrasi gateway pembayaran Stripe dan QRIS.",
    fullDescEn: "A high-end shopping destination crafted for haute-couture apparel. Features 360-degree garment showcase, interactive size recommender, and multi-currency checkout.",
    client: "Lumina Atelier Paris",
    year: "2024",
    roleId: "Full-Stack Web Designer",
    roleEn: "Full-Stack Web Designer",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/lumina",
    githubUrl: "https://github.com",
    highlightsId: [
      "Meningkatkan rasio konversi checkout hingga 34%",
      "Waktu muat gambar teroptimasi dengan webp next-gen format",
      "Pengalaman mobile shopping yang mulus seperti aplikasi native"
    ],
    highlightsEn: [
      "Boosted client checkout conversion rate by 34%",
      "Next-gen WebP imagery pipeline with responsive srcset",
      "Fluid, app-like mobile buying gestures and tactile feedback"
    ]
  },
  {
    id: "kopi-nusantara",
    title: "Kopi Karsa Brand & Ordering",
    category: "uiux",
    tags: ["Figma", "UI/UX Research", "Design System", "Prototyping"],
    summaryId: "Desain sistem brand dan antarmuka pemesanan kopi artisanal khas Indonesia dengan tipografi berkarakter.",
    summaryEn: "Brand identity system and mobile ordering UI for an artisanal Indonesian specialty coffee roastery.",
    fullDescId: "Merancang kembali identitas visual dan alur pemesanan digital dari kedai kopi artisan terkemuka. Hasil desain mencakup panduan brand lengkap, 40+ komponen UI teruji, dan flow pemesanan meja tanpa kontak.",
    fullDescEn: "Reinvented the visual language and ordering journey for an award-winning specialty roastery. Deliverables included a complete design system, 40+ atomic components, and contactless table ordering.",
    client: "Karsa Roastery Group",
    year: "2024",
    roleId: "Product & UI/UX Designer",
    roleEn: "Product & UI/UX Designer",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/coffee",
    highlightsId: [
      "Skor kepuasan pengguna (CSAT) mencapai 96%",
      "Alur pemesanan dipersingkat dari 7 langkah menjadi 3 langkah",
      "Pustaka komponen Figma yang siap diekspor ke kode produksi"
    ],
    highlightsEn: [
      "Achieved 96% CSAT in post-launch customer usability tests",
      "Streamlined order flow from 7 tedious steps down to 3 quick taps",
      "Production-ready Figma tokenized components library"
    ]
  },
  {
    id: "cloud-pulse-saas",
    title: "CloudPulse SaaS Monitoring",
    category: "webapp",
    tags: ["React 19", "Tailwind", "WebSockets", "Vite"],
    summaryId: "Aplikasi monitoring performa server dan cloud infrastructure dengan peringatan instan dan metrik interaktif.",
    summaryEn: "Cloud telemetry and server performance monitoring suite with real-time alerting and metrics visualization.",
    fullDescId: "SaaS dashboard b2b untuk tim DevOps yang membutuhkan visibilitas kesehatan kluster server secara langsung. Memproses data status jutaan request dengan latensi kurang dari 50 milidetik.",
    fullDescEn: "Enterprise B2B observability suite built for DevOps squads needing immediate infrastructure telemetry. Handles real-time event streams with sub-50ms render latency.",
    client: "PulseStack Technologies",
    year: "2024",
    roleId: "Lead Frontend Architect",
    roleEn: "Lead Frontend Architect",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/pulse",
    highlightsId: [
      "Sinkronisasi data real-time via WebSocket",
      "Sistem filter log server berkecepatan tinggi",
      "Arsitektur komponen modular dan reusable"
    ],
    highlightsEn: [
      "Instant state updates through streaming WebSockets",
      "High-throughput log query engine with regex highlighting",
      "Modular design tokens and atomic React components"
    ]
  },
  {
    id: "aura-zenith-villa",
    title: "Zenith Bali Luxury Escapes",
    category: "uiux",
    tags: ["Web Design", "Hospitality", "Motion", "Tailwind"],
    summaryId: "Website presentasi dan reservasi vila privat mewah di Bali dengan fotografi atmosferik dan integrasi kalender.",
    summaryEn: "Atmospheric website and direct reservation engine for exclusive luxury private villas in Bali.",
    fullDescId: "Website showcase eksklusif dengan tipografi elegan, efek transisi halus, galeri panorama 360, serta kalkulator harga otomatis berdasarkan musim kunjungan liburan.",
    fullDescEn: "Bespoke digital presence showcasing boutique private villas. Features smooth scroll storytelling, interactive room 360 panoramas, and automated seasonal pricing calculators.",
    client: "Zenith Escapes Hospitality",
    year: "2023",
    roleId: "Web Designer & Developer",
    roleEn: "Web Designer & Developer",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/zenith",
    highlightsId: [
      "Meningkatkan reservasi langsung sebesar 45%",
      "Pengalaman visual imersif dengan transisi sinematik",
      "Mendukung 4 bahasa dan konversi mata uang otomatis"
    ],
    highlightsEn: [
      "Increased direct bookings by 45% bypassing OTA commissions",
      "Cinematic micro-interactions that communicate luxury",
      "Multi-currency converter and multilingual booking flow"
    ]
  },
  {
    id: "fitpulse-mobile",
    title: "FitPulse Workout & Health App",
    category: "mobile",
    tags: ["React Native", "Tailwind", "HealthKit", "Figma"],
    summaryId: "Aplikasi mobile kebugaran pribadi dengan pelacak nutrisi harian, panduan latihan video, dan integrasi smartwatch.",
    summaryEn: "Personal fitness companion app with nutrition logging, video workout library, and smartwatch synchronization.",
    fullDescId: "Aplikasi mobile hybrid untuk iOS dan Android yang membimbing pengguna mencapai target kebugaran harian dengan antarmuka yang energetik, tipografi tebal, dan animasi panduan gerakan.",
    fullDescEn: "Cross-platform mobile app designed for fitness enthusiasts. Features personalized workout plans, biometric heart-rate sync, and dark aesthetic with neon punchy accents.",
    client: "FitPulse Inc.",
    year: "2023",
    roleId: "Mobile UI/UX Specialist",
    roleEn: "Mobile UI/UX Specialist",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://example.com/demo/fitpulse",
    highlightsId: [
      "Dinominasikan dalam Best Mobile Design Award 2023",
      "Desain ramah satu tangan (one-handed thumb ergonomics)",
      "Mode offline dengan penyimpanan data lokal"
    ],
    highlightsEn: [
      "Nominated for Best Mobile Lifestyle Design 2023",
      "Thumb-friendly ergonomics for one-handed gym usage",
      "Offline-first sync engine with local sqlite caching"
    ]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-design",
    iconName: "Palette",
    titleId: "Desain Web & UI/UX Modern",
    titleEn: "Modern Web & UI/UX Design",
    descId: "Merancang desain antarmuka web yang memikat, elegan, dan berorientasi pada kemudahan navigasi pengguna serta branding eksklusif.",
    descEn: "Crafting visually compelling, high-converting web interfaces tailored to elevate brand prestige and deliver flawless usability.",
    priceIdr: "Mulai Rp 4.500.000",
    priceUsd: "From $350",
    featuresId: [
      "Wireframe & High-Fidelity Prototype (Figma)",
      "Desain Responsif untuk Mobile, Tablet & Desktop",
      "Design System & Panduan Komponen Lengkap",
      "Riset Pengalaman Pengguna (UX Research)"
    ],
    featuresEn: [
      "Wireframing & Hi-Fi Interactive Figma Prototypes",
      "Full Responsive Viewport Adaptation (Mobile to 4K)",
      "Comprehensive Design Tokens & Component System",
      "Human-Centered Usability & User Journey Mapping"
    ]
  },
  {
    id: "frontend-dev",
    iconName: "Code2",
    titleId: "Pengembangan Frontend Responsif",
    titleEn: "Frontend Engineering & Web Apps",
    descId: "Mengubah desain menjadi website interaktif super cepat menggunakan teknologi modern seperti React, Next.js, dan Tailwind CSS.",
    descEn: "Transforming design mockups into blazingly fast, accessible, interactive web applications using React, Next.js, and Tailwind.",
    priceIdr: "Mulai Rp 6.500.000",
    priceUsd: "From $500",
    featuresId: [
      "Kode Bersih, Terstruktur, dan Berstandar TypeScript",
      "Optimasi Kecepatan Muat & Skor Google PageSpeed 95+",
      "Animasi Halus & Interaksi Mikro Profesional",
      "Kompatibilitas Lintas Browser (Chrome, Safari, Firefox)"
    ],
    featuresEn: [
      "Clean, maintainable, production-ready TypeScript code",
      "Sub-second load times & 95+ Google PageSpeed scores",
      "Tasteful micro-interactions with hardware acceleration",
      "Flawless cross-browser compatibility across all devices"
    ]
  },
  {
    id: "ecommerce-solutions",
    iconName: "ShoppingBag",
    titleId: "Solusi Toko Online E-Commerce",
    titleEn: "Custom E-Commerce Solutions",
    descId: "Membangun toko online siap jual dengan katalog produk interaktif, keranjang belanja dinamis, dan integrasi gerbang pembayaran.",
    descEn: "Engineering robust digital storefronts with dynamic catalogs, frictionless carts, and multi-currency payment gateway integrations.",
    priceIdr: "Mulai Rp 8.000.000",
    priceUsd: "From $650",
    featuresId: [
      "Integrasi Pembayaran (Midtrans, QRIS, Stripe, PayPal)",
      "Katalog Produk dengan Filter Kategori & Pencarian Cepat",
      "Sistem Keranjang & Checkout Tanpa Hambatan",
      "Panel Manajemen Produk & Pesanan Mandiri"
    ],
    featuresEn: [
      "Seamless payment gateway integration (Stripe, QRIS, Cards)",
      "High-speed product catalog with faceted search",
      "Conversion-optimized one-page checkout flow",
      "Client-friendly dashboard to manage products and orders"
    ]
  },
  {
    id: "brand-identity",
    iconName: "Sparkles",
    titleId: "Identitas Brand & Desain Grafis",
    titleEn: "Brand Identity & Visual Direction",
    descId: "Membangun identitas visual yang konsisten dan berwibawa: logo, palet warna, tipografi, dan aset grafis media sosial.",
    descEn: "Building a coherent and authoritative brand language: logomarks, typography rules, color science, and marketing assets.",
    priceIdr: "Mulai Rp 3.500.000",
    priceUsd: "From $250",
    featuresId: [
      "Desain Logo Vektor & Variasi Format Lengkap",
      "Brand Guidelines (Panduan Warna & Tipografi)",
      "Template Aset Media Sosial & Kartu Nama Digital",
      "Hak Cipta Kepemilikan Penuh Aset Desain"
    ],
    featuresEn: [
      "Vector logomark package in all essential formats",
      "Brand style guidelines with typography hierarchy",
      "Social media templates & digital collateral",
      "100% intellectual property ownership transfer"
    ]
  },
  {
    id: "speed-seo",
    iconName: "Zap",
    titleId: "Optimasi Performa & SEO Google",
    titleEn: "Speed Optimization & Technical SEO",
    descId: "Meningkatkan peringkat website Anda di mesin pencari Google serta memangkas waktu muat hingga di bawah 1 detik.",
    descEn: "Elevating your search rankings on Google and slashing load times to sub-second speeds for maximum user retention.",
    priceIdr: "Mulai Rp 3.000.000",
    priceUsd: "From $200",
    featuresId: [
      "Audit Core Web Vitals & Pembersihan Kode Usang",
      "Struktur Metadata OpenGraph, Twitter Cards & Schema.org",
      "Kompresi Gambar Otomatis & Caching Terpadu",
      "Laporan Sebelum dan Sesudah Optimasi"
    ],
    featuresEn: [
      "Core Web Vitals deep audit & bundle debloating",
      "Rich structured schema markup & social share cards",
      "Automated modern image compression & caching setup",
      "Comprehensive Before-and-After performance report"
    ]
  },
  {
    id: "maintenance",
    iconName: "ShieldCheck",
    titleId: "Pemeliharaan & Pendampingan Teknis",
    titleEn: "Maintenance & Technical Retainer",
    descId: "Menjaga website Anda tetap aman, selalu online, diperbarui berkala, dan bebas dari kendala teknis setiap hari.",
    descEn: "Keeping your digital products safe, online 24/7, continuously patched, and free of unexpected runtime glitches.",
    priceIdr: "Mulai Rp 1.500.000/bln",
    priceUsd: "From $120/mo",
    featuresId: [
      "Backup Rutin Mingguan & Pemulihan Darurat",
      "Pembaruan Library & Tambalan Keamanan",
      "Bantuan Teknis Prioritas via WhatsApp / Email",
      "Monitoring Uptime 24/7"
    ],
    featuresEn: [
      "Scheduled weekly backups & emergency rollback",
      "Routine dependency updates & security patches",
      "Priority direct support via WhatsApp & private Slack",
      "24/7 uptime monitoring with instant alert notifications"
    ]
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Hendrik Prasetyo",
    roleId: "Founder & CEO",
    roleEn: "Founder & CEO",
    company: "Nusantara Fintech Lab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    commentId: "Bekerja sama dengan James Smith adalah keputusan terbaik untuk platform kami. Tampilan website sangat mewah, waktu muat super cepat, dan investor kami sangat terkesan saat demo produk!",
    commentEn: "Working together was the best investment we made for our platform. The interface looks extraordinarily polished, loads instantly, and thoroughly impressed our investors during our Series A demo!",
    date: "14 Februari 2025",
    projectTitle: "Fintech Vault Dashboard"
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    roleId: "Creative Director",
    roleEn: "Creative Director",
    company: "Lumina Haute Couture Paris",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    commentId: "Kepekaan visualnya luar biasa. Ia mengerti arti sesungguhnya dari kemewahan digital: tipografi yang tenang, ruang bernapas yang cukup, dan interaksi yang terasa sangat berkelas.",
    commentEn: "His visual sensitivity is exceptional. He truly understands luxury digital design: quiet typography, deliberate negative space, and micro-interactions that feel wonderfully tactile.",
    date: "28 Januari 2025",
    projectTitle: "Lumina Fashion E-Commerce"
  },
  {
    id: "rev-3",
    name: "Bambang Wicaksono",
    roleId: "Head of Marketing",
    roleEn: "Head of Marketing",
    company: "Karsa Roastery Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    commentId: "Desain sistem yang dibuat rapi sekali dan mudah diimplementasikan oleh tim developer kami. Penjualan paket kopi kami meningkat lebih dari 40% setelah peluncuran tampilan baru.",
    commentEn: "The design system was remarkably clean and frictionless for our developers to implement. Direct online bean sales grew by over 40% immediately following the relaunch.",
    date: "10 Desember 2024",
    projectTitle: "Kopi Karsa Brand System"
  },
  {
    id: "rev-4",
    name: "Sarah Jenkins",
    roleId: "VP of Product",
    roleEn: "VP of Product",
    company: "PulseStack Tech Australia",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    commentId: "Komunikasi sangat responsif, timeline proyek tepat waktu, dan kode frontend yang diserahkan sangat rapi serta teruji dengan baik. Pasti akan bekerja sama lagi!",
    commentEn: "Incredible responsiveness, met every milestone ahead of schedule, and handed over production-grade TypeScript code that our senior engineers loved. Highly recommended!",
    date: "19 November 2024",
    projectTitle: "CloudPulse SaaS Monitoring"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    nameId: "Paket Starter (Landing Page)",
    nameEn: "Starter Plan (Landing Page)",
    taglineId: "Cocok untuk profil profesional, portofolio pribadi, atau peluncuran produk tunggal.",
    taglineEn: "Ideal for personal portfolios, professional branding, or single product launches.",
    priceIdr: 4500000,
    priceUsd: 350,
    featuresId: [
      "1 Halaman Landing Page Responsif Premium",
      "Desain Visual Custom & Mobile-First",
      "Integrasi Formulir Kontak & WhatsApp Langsung",
      "Optimasi SEO Dasar & Skor Kecepatan 90+",
      "Hosting & Domain Setup Assistance",
      "Garansi Revisi 2 Kali",
      "Waktu Pengerjaan 3 - 5 Hari Kerja"
    ],
    featuresEn: [
      "1 High-Impact Premium Responsive Landing Page",
      "Custom Visual Identity & Mobile-First Layout",
      "Direct Contact Form & Instant WhatsApp Click",
      "Basic SEO Setup & 90+ PageSpeed Guarantee",
      "Deployment & Custom Domain Hookup Support",
      "2 Iteration Revision Rounds",
      "Delivery within 3 - 5 Business Days"
    ]
  },
  {
    id: "professional",
    nameId: "Paket Profesional (Multi-Page)",
    nameEn: "Professional Plan (Multi-Page)",
    taglineId: "Pilihan terbaik untuk bisnis yang berkembang, agensi, dan perusahaan.",
    taglineEn: "The optimal choice for growing businesses, design agencies, and startups.",
    priceIdr: 10500000,
    priceUsd: 790,
    isPopular: true,
    featuresId: [
      "Hingga 5-7 Halaman Website Lengkap",
      "Desain UI/UX Khusus di Figma Sebelum Koding",
      "Dukungan Dua Bahasa (Bilingual ID/EN)",
      "Animasi Mikro Halus & Transisi Modern",
      "Struktur SEO Lanjutan & Google Analytics",
      "Integrasi CMS / Blog Dinamis",
      "Garansi Revisi Bebas Selama Tahap Desain",
      "Pendampingan & Pemeliharaan 30 Hari Gratis",
      "Waktu Pengerjaan 7 - 12 Hari Kerja"
    ],
    featuresEn: [
      "Up to 5-7 Bespoke Fully-Fledged Pages",
      "Exclusive Figma Prototype Before Development",
      "Bilingual Support (Indonesian & English)",
      "Smooth Micro-Interactions & Scroll Motion",
      "Advanced Technical SEO & Analytics Setup",
      "Dynamic Content Management / Blog Ready",
      "Unlimited Revisions During Design Phase",
      "30 Days of Complimentary Technical Support",
      "Delivery within 7 - 12 Business Days"
    ]
  },
  {
    id: "enterprise",
    nameId: "Paket Kustom (Aplikasi / E-Commerce)",
    nameEn: "Custom Plan (App / E-Commerce)",
    taglineId: "Untuk platform web kompleks, portal e-commerce, atau aplikasi SaaS kustom.",
    taglineEn: "Engineered for complex web platforms, high-volume e-commerce, or custom SaaS apps.",
    priceIdr: 24000000,
    priceUsd: 1750,
    featuresId: [
      "Arsitektur Aplikasi Kustom Penuh (Full-Stack)",
      "Sistem E-Commerce Lengkap & Multi-Payment Gateway",
      "Autentikasi Pengguna & Dashboard Manajemen Data",
      "Performa Berstandar Institusi (Load < 1s)",
      "Keamanan Data Tingkat Lanjut & SSL Enkripsi",
      "Dokumentasi API & Panduan Pemeliharaan",
      "Dukungan Prioritas VIP 60 Hari Pasca Rilis",
      "Konsultasi Strategi Produk Digital 1-on-1"
    ],
    featuresEn: [
      "Complete Full-Stack Bespoke Architecture",
      "E-Commerce Engine with Multi-Payment Gateways",
      "User Auth, Role Permissions & Admin Telemetry",
      "Enterprise Performance (< 1s Worldwide Latency)",
      "Bank-Grade Security Hardening & Enforced SSL",
      "Comprehensive Codebase & API Documentation",
      "60 Days VIP Priority Post-Launch Care",
      "Direct 1-on-1 Digital Strategy Consulting"
    ]
  }
];

export const blogArticles: BlogPost[] = [
  {
    id: "modern-minimalism",
    titleId: "Prinsip Desain Minimalis Modern: Mengapa 'Less is More' Menghasilkan Konversi Lebih Tinggi",
    titleEn: "Modern Minimalist Web Design: Why Restraint Drives Higher Conversion Rates",
    excerptId: "Eksplorasi bagaimana tipografi yang berani, kontras warna yang tepat, dan ruang kosong terencana dapat melipatgandakan kepercayaan pengunjung.",
    excerptEn: "Exploring how confident typography, deliberate contrast, and generous negative space establish immediate brand trust.",
    date: "12 Februari 2025",
    readTime: "4",
    category: "UI/UX Design",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    contentId: [
      "Dalam dunia digital yang penuh dengan distraksi visual, pengguna internet semakin menyukai antarmuka yang langsung ke inti pesan tanpa hambatan kognitif yang melelahkan.",
      "Prinsip minimalis modern bukanlah tentang membuat tampilan serba putih yang membosankan, melainkan tentang penghapusan elemen yang tidak memiliki tujuan fungsional.",
      "Tiga aturan emas yang selalu saya terapkan: Pertama, batasi palet warna hanya pada satu warna aksen yang kuat (seperti oranye terang pada tema gelap). Kedua, beri teks ruang bernapas dengan line-height yang nyaman dibaca. Ketiga, pastikan tombol tindakan (Call to Action) terlihat menonjol tanpa harus berteriak."
    ],
    contentEn: [
      "In an online world flooded with visual noise, users instinctively gravitate towards interfaces that deliver information with zero cognitive friction.",
      "Modern minimalism is not about sterile, empty voids; it is about eliminating decorative clutter that serves no functional or narrative purpose.",
      "Three core rules I stand by: First, anchor the design with a single punchy accent color against a deep charcoal canvas. Second, prioritize spacious typographic rhythm and line heights. Third, make call-to-actions visually unequivocal without resorting to gaudy tricks."
    ]
  },
  {
    id: "web-vitals-speed",
    titleId: "Strategi Optimasi Kecepatan Web 2025: Mencapai Skor 100 di Google PageSpeed",
    titleEn: "2025 Web Performance Playbook: Achieving a Perfect 100 on Google PageSpeed",
    excerptId: "Panduan praktis memangkas JavaScript bundle, optimasi format gambar WebP/AVIF, dan memanfaatkan streaming rendering untuk website secepat kilat.",
    excerptEn: "Actionable tactics for debloating JavaScript bundles, leveraging AVIF imagery, and streaming HTML for instantaneous page loads.",
    date: "25 Januari 2025",
    readTime: "6",
    category: "Engineering",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    contentId: [
      "Kecepatan website bukan lagi sekadar fitur tambahan, melainkan faktor penentu utama peringkat SEO di mesin pencari dan retensi pembeli.",
      "Riset membuktikan bahwa setiap penundaan 1 detik dalam waktu muat halaman dapat menurunkan tingkat konversi penjualan hingga 7%.",
      "Dengan mengadopsi Tailwind CSS, font-display: swap, kompresi aset gambar generasi baru, dan arsitektur bundler Vite modern, kita dapat menghadirkan website yang langsung tampil dalam hitungan milidetik."
    ],
    contentEn: [
      "Website loading speed is no longer just a technical nice-to-have; it directly dictates your search ranking on Google and your customer retention curve.",
      "Independent data demonstrates that every additional 1-second delay in mobile page load slashes conversion rates by up to 7%.",
      "By combining Tailwind CSS tree-shaking, local webfont caching, next-gen AVIF media, and modern bundlers like Vite, we regularly achieve sub-second render times worldwide."
    ]
  },
  {
    id: "bilingual-ux",
    titleId: "Mendesain Pengalaman Dwibahasa yang Menghubungkan Pasar Lokal dan Global",
    titleEn: "Architecting Seamless Bilingual UX for Local and Global Audiences",
    excerptId: "Cara memastikan tata letak visual tetap harmonis ketika beralih antara Bahasa Indonesia dan Bahasa Inggris tanpa pergeseran layout yang mengganggu.",
    excerptEn: "Ensuring visual rhythm and layout balance when toggling between Indonesian and English without annoying cumulative layout shifts.",
    date: "8 Januari 2025",
    readTime: "5",
    category: "Strategy",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    contentId: [
      "Bisnis modern di Indonesia kini dituntut untuk ramah terhadap pasar domestik sekaligus memancarkan wibawa profesional di hadapan klien internasional.",
      "Tantangan terbesar dalam desain dwibahasa adalah perbedaan panjang kata. Kalimat dalam Bahasa Indonesia umumnya 15% hingga 25% lebih panjang dibanding Bahasa Inggris.",
      "Kunci solusinya terletak pada container flexbox yang fleksibel, penggunaan typography clamps, dan persistensi bahasa pilihan pengunjung menggunakan browser storage secara instan."
    ],
    contentEn: [
      "Modern Indonesian enterprises and creators now need to speak authentically to their domestic audience while projecting global credibility.",
      "The primary architectural challenge in bilingual interfaces is lexical variance: Indonesian phrases often require 15-25% more physical width than English equivalents.",
      "The solution relies on fluid flexbox wrappers, modular typographic scale clamps, and instant zero-latency preference switching stored locally."
    ]
  }
];
