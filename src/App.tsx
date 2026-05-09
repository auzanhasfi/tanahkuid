/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MapPin, 
  BookOpen, 
  GraduationCap, 
  Phone, 
  Menu, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  MessageCircle,
  ArrowRight,
  Star,
  Instagram,
  Twitter,
  ChevronRight,
  Maximize2,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Tanah Dijual', href: '#listing' },
    { name: 'Ebook', href: '#ebook' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 earth-gradient rounded-xl flex items-center justify-center">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold font-display tracking-tight ${scrolled ? 'text-brand-primary' : 'text-white'}`}>Tanahku.id</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold hover:text-brand-secondary transition-colors ${scrolled ? 'text-brand-text' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-premium px-6 py-2.5 text-sm flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Chat WhatsApp
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu className={`w-8 h-8 ${scrolled ? 'text-brand-primary' : 'text-white'}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold font-display text-brand-primary">Tanahku.id</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8 text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-medium text-gray-800 hover:text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="bg-brand-primary text-white w-full py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fee74a52?q=80&w=2689&auto=format&fit=crop" 
          alt="Aerial Indonesian Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 backdrop-blur-sm p-8 md:p-16 rounded-[40px] border border-white/10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            #1 Platform Investasi Tanah
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Belajar Beli Tanah <br />
            <span className="text-brand-accent italic">Dari Nol Sampai Profit</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Platform edukasi investasi properti & jual beli tanah premium di Indonesia dengan panduan terlengkap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-premium px-10 py-4 text-lg w-full sm:w-auto flex items-center justify-center gap-2">
              Lihat Tanah <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
              Download Ebook
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Aman & Legal', desc: 'Semua listing tanah telah melewati verifikasi dokumen yang ketat.', icon: ShieldCheck },
    { title: 'Lokasi Potensial', desc: 'Riset lokasi berdasarkan pertumbuhan infrastruktur dan kenaikan harga.', icon: MapPin },
    { title: 'Harga Kompetitif', desc: 'Dapatkan harga terbaik langsung dari pemilik atau tangan pertama.', icon: BarChart3 },
    { title: 'Edukasi Lengkap', desc: 'Belajar strategi investasi tanah dari ahlinya lewat kursus dan ebook.', icon: GraduationCap },
    { title: 'Anti Sengketa', desc: 'Panduan cara pengecekan sertifikat ke BPN untuk hindari konflik.', icon: CheckCircle2 },
    { title: 'Investor Pemula', desc: 'Layanan konsultasi khusus bagi Anda yang ingin memulai investasi.', icon: Users },
  ];

  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Kenapa Tanahku.id?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Kami memberikan standar baru dalam transparansi dan keamanan transaksi properti tanah di Indonesia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 card-theme hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-brand-cream border border-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-brand-text">{item.title}</h3>
              <p className="text-brand-text/70 leading-relaxed text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ListingCard = ({ image, title, loc, size, price }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card-theme overflow-hidden flex flex-col group h-full"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute top-4 left-4 bg-white/90 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm">
        Premium Plot
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest mb-1">{loc}</p>
          <h3 className="text-lg font-bold text-brand-text leading-tight">{title}</h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Mulai</span>
          <span className="text-xl font-extrabold text-brand-primary leading-none">Rp {price}jt</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-brand-text/60 mt-4 font-semibold pb-6 border-b border-gray-50">
        <div className="flex items-center gap-1.5">
          <Maximize2 className="w-3.5 h-3.5 text-brand-secondary" /> {size} m²
        </div>
        <div className="w-1 h-1 bg-gray-200 rounded-full" />
        <div className="flex items-center gap-1.5 text-brand-secondary">
          <ShieldCheck className="w-3.5 h-3.5" /> SHM Ready
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <button className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
          DETAIL UNIT <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-brand-cream border border-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

const ListingSection = () => {
  const lands = [
    { image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a52?q=80&w=800&auto=format&fit=crop', title: 'Kavling Harmoni Alam', loc: 'Sentul, Bogor', size: '500', price: '450' },
    { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', title: 'Green View Merapi', loc: 'Sleman, Yogyakarta', size: '320', price: '210' },
    { image: 'https://images.unsplash.com/photo-1605146769289-440113ccad1b?q=80&w=800&auto=format&fit=crop', title: 'Canggu Serenity Plot', loc: 'Canggu, Bali', size: '1200', price: '1.200' },
  ];

  return (
    <section id="listing" className="py-24 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Rekomendasi Tanah</h2>
            <p className="text-gray-500">Pilihan kavling terbaik dengan legalitas yang sudah terjamin aman.</p>
          </div>
          <button className="text-brand-primary font-bold flex items-center gap-2 group">
            Lihat Semua Listing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lands.map((land, idx) => (
            <ListingCard key={idx} {...land} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  const blogs = [
    { title: 'Panduan Beli Tanah Aman Bagi Pemula', category: 'Tips & Trick', date: '25 Mar 2024', readTime: '5 Menit Baca' },
    { title: 'Cara Cek Keaslian Sertifikat Tanah (SHM)', category: 'Legalitas', date: '12 Apr 2024', readTime: '3 Menit Baca' },
    { title: 'Strategi Flipping Tanah: Beli - Tunggu - Untung', category: 'Investasi', date: '02 Mei 2024', readTime: '8 Menit Baca' },
    { title: '5 Lokasi Sunrise Property Paling Prospek 2024', category: 'Market Update', date: '15 Mei 2024', readTime: '6 Menit Baca' },
  ];

  return (
    <section id="edukasi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-4">Edukasi Terbaru</h2>
          <p className="text-brand-text/50 max-w-xl mx-auto font-medium">Pelajari strategi investasi aset tanah langsung dari ahlinya.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-5 card-theme group cursor-pointer"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden bg-brand-accent/20">
                <div className="w-full h-1/2 bg-brand-secondary/40" />
                <div className="w-full h-full flex items-center justify-center">
                   <BookOpen className="w-8 h-8 text-brand-primary opacity-30" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[2px] w-8 bg-brand-primary" />
                  <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.2em]">{blog.category}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors leading-snug">{blog.title}</h3>
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                  <span>{blog.date}</span>
                  <div className="w-1 h-1 bg-gray-200 rounded-full" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EbookSection = () => {
  return (
    <section id="ebook" className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-brand-secondary rounded-[40px] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="relative z-10 w-full lg:w-1/2">
            <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Exclusive Ebook</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Strategi Anti Boncos <br /> <span className="italic text-brand-accent">Investasi Properti</span></h2>
            <p className="text-white/80 text-lg mb-8 font-medium leading-relaxed">
              Dapatkan strategi eksklusif bagaimana cara mencari, memverifikasi, dan menawar tanah agar mendapatkan profit maksimal.
            </p>
            <a href="#" className="inline-block text-white font-bold text-base border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-all">
              Beli Sekarang →
            </a>
          </div>

          <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
            <motion.div 
              style={{ perspective: 1000 }}
              initial={{ rotateY: -10, scale: 0.9 }}
              whileInView={{ rotateY: 5, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-48 h-64 md:w-64 md:h-80 bg-white rounded-lg shadow-2xl flex flex-col p-6 items-center justify-center text-center border-l-[10px] border-brand-primary"
            >
               <span className="text-[10px] uppercase font-black text-brand-primary tracking-widest mb-4">Tanahku.id</span>
               <div className="w-12 h-1 bg-brand-accent mb-6" />
               <h3 className="text-lg md:text-xl font-bold text-brand-text mb-4 italic">Panduan Beli Tanah</h3>
               <p className="text-[8px] text-gray-400 font-bold uppercase">Edisi 2024</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const list = [
    { name: 'Andi Pratama', role: 'Investor Saham', text: 'Ebooknya sangat ngebantu banget buat saya yang baru mau shifting ke real estate. Materinya ringkas tapi padat.', rating: 5 },
    { name: 'Siska Amelia', role: 'Dosen', text: 'Tanahku.id timnya sangat profesional. Saya dibantu mengecek legalitas tanah di Bogor sampai tuntas.', rating: 5 },
    { name: 'Farhan Hakim', role: 'Entrepreneur', text: 'Listing tanahnya bener-bener terpilih. Harganya masuk akal dibanding marketplace lain.', rating: 4 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Apa Kata Investor Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-brand-cream border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-primary font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Mulai Investasi Tanah <br /> Sekarang Juga</h2>
        <p className="text-brand-accent/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Konsultasikan rencana investasi Anda dengan pakar properti kami secara gratis melalui WhatsApp.
        </p>
        <button className="bg-white text-brand-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-brand-accent transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto">
          <MessageCircle className="w-7 h-7" />
          Chat via WhatsApp
        </button>
      </div>
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/30 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] -ml-48 -mb-48" />
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="kontak" className="pt-24 pb-32 md:pb-12 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 earth-gradient rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display text-white">Tanahku.id</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Platform terpercaya untuk edukasi dan transaksi aset tanah di Indonesia. Membangun masa depan finansial lewat aset properti yang aman dan menguntungkan.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Phone].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#tentang" className="hover:text-brand-accent transition-colors">Tentang Kami</a></li>
              <li><a href="#listing" className="hover:text-brand-accent transition-colors">Tanah Dijual</a></li>
              <li><a href="#ebook" className="hover:text-brand-accent transition-colors">Ebook & Edukasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Bantuan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Kontak Kami</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>The Green Office Park, BSD City, Tangerang Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+62 821 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-brand-accent shrink-0" />
                <span>admin@tanahku.id</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>© 2024 Tanahku.id (Auzan Hasfi). Semua Hak Dilindungi UU Properti RI.</p>
        </div>
      </div>
    </footer>
  );
};

const MobileBottomNav = () => {
  return (
    <div className="sticky-bottom-nav">
      {[
        { icon: Home, label: 'Home', href: '#' },
        { icon: MapPin, label: 'Unit', href: '#listing' },
        { icon: BookOpen, label: 'Ebook', href: '#ebook' },
        { icon: GraduationCap, label: 'Edu', href: '#edukasi' },
      ].map((item, idx) => (
        <a key={idx} href={item.href} className="flex flex-col items-center gap-1.5 text-gray-300 hover:text-brand-primary transition-colors">
          <item.icon className="w-5 h-5" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

const FloatingWhatsApp = () => (
  <motion.button 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl"
  >
    <MessageCircle className="w-8 h-8 fill-current" />
  </motion.button>
);

export default function App() {
  return (
    <div className="relative selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ListingSection />
        <EducationSection />
        <EbookSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingWhatsApp />
    </div>
  );
}
