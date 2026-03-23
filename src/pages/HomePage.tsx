import { motion, AnimatePresence, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountingNumber = ({ value, duration = 1.6 }: { value: number, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    return controls.stop;
  }, [value, duration]);

  return <span>{displayValue.toLocaleString('en-US')}</span>;
};

export default function HomePage() {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.92 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 }
    }
  };

  const [searchValue, setSearchValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [activeStockTab, setActiveStockTab] = useState(0);
  const [activeAdSlide, setActiveAdSlide] = useState(0);
  const placeholders = ["Mã cổ phiếu...", "Giá vàng...", "Tin tức đầu tư..."];

  const adSlides = [
    {
      id: 'lixi',
      image: '/assets/ads-banner1.png'
    },
    {
      id: 'partner',
      image: '/assets/ads-banner2.png'
    }
  ];

  const stockTabs = [
    { name: 'VNIndex', value: '1,696.24', change: '-12.24', percent: '-0.78%', isUp: false, vol: 1023, val: 27428, up: 245, flat: 66, down: 132 },
    { name: 'VN30', value: '1,112.40', change: '+5.12', percent: '+0.46%', isUp: true, vol: 452, val: 12560, up: 18, flat: 5, down: 7 },
    { name: 'HNXIndex', value: '226.78', change: '-0.45', percent: '-0.20%', isUp: false, vol: 128, val: 2150, up: 85, flat: 42, down: 112 },
    { name: 'UPCOMI', value: '86.54', change: '+0.12', percent: '+0.14%', isUp: true, vol: 85, val: 1050, up: 156, flat: 98, down: 74 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAdSlide((prev) => (prev + 1) % adSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [adSlides.length]);

  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col font-sans">
      {/* Full-screen background video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Refined Two-Row Header */}
      <header className="w-full z-20">
        <div className="px-4 lg:px-6">
          {/* Top Row: Sub-navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center py-2 px-6"
          >
            <div className="flex items-center gap-6 relative">
              <div className="relative group cursor-pointer">
                <span className="text-[13px] font-semibold text-Grayscale-Black">Khách hàng cá nhân</span>
                {/* Pointer/Indicator Triangle */}
                <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white z-30" />
              </div>
              <span className="text-[13px] font-medium text-Grayscale-D1/60 hover:text-Grayscale-Black transition-colors cursor-pointer">Khách hàng tổ chức</span>
              <span className="text-[13px] font-medium text-Grayscale-D1/60 hover:text-Grayscale-Black transition-colors cursor-pointer">Quản lý gia sản</span>
              <span className="text-[13px] font-medium text-Grayscale-D1/60 hover:text-Grayscale-Black transition-colors cursor-pointer">Ngân hàng đầu tư</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <span className="text-[13px] font-medium text-Grayscale-D1/80 hover:text-Grayscale-Black transition-colors cursor-pointer">Về Kafi</span>
              <span className="text-[13px] font-medium text-Grayscale-D1/80 hover:text-Grayscale-Black transition-colors cursor-pointer">Quan hệ cổ đông</span>
              <span className="text-[13px] font-medium text-Grayscale-D1/80 hover:text-Grayscale-Black transition-colors cursor-pointer">Cơ hội sự nghiệp</span>

              {/* Language Switcher */}
              <div className="h-7 p-0.5 bg-Grayscale-D1/10 rounded-lg flex items-center border border-Grayscale-Black/10">
                <div className="h-full px-2.5 bg-white rounded-md shadow-sm flex items-center justify-center">
                  <span className="text-[11px] font-bold text-Grayscale-Black">VI</span>
                </div>
                <div className="h-full px-2.5 flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-Grayscale-D1/60">EN</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Row: Primary Navigation Bar */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-full shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-white/60 mt-1"
          >
            <div className="px-5 py-3 flex justify-between items-center">
              <div className="flex items-center gap-12">
                  <div 
                    className="flex items-center gap-2 pl-3 cursor-pointer"
                    onClick={() => navigate('/')}
                  >
                    <div className="flex flex-col gap-0.5">
                      <div className="size-4 bg-Green-Primary rounded-sm" />
                      <div className="size-4 bg-Green-D2 rounded-sm -mt-2 translate-x-1" />
                    </div>
                    <span className="text-3xl font-extrabold text-Grayscale-Black tracking-tighter">Kafi</span>
                  </div>

                <div className="hidden xl:flex items-center gap-8">
                  <span 
                    className="text-[15px] font-semibold text-Grayscale-Black/80 hover:text-Green-D2 transition-colors cursor-pointer"
                    onClick={() => navigate('/stocks')}
                  >
                    Sản phẩm & dịch vụ
                  </span>
                  <span className="text-[15px] font-semibold text-Grayscale-Black/80 hover:text-Green-D2 transition-colors cursor-pointer">Thị trường & khuyến nghị</span>
                  <span className="text-[15px] font-semibold text-Grayscale-Black/80 hover:text-Green-D2 transition-colors cursor-pointer">Học viện</span>
                  <span className="text-[15px] font-semibold text-Grayscale-Black/80 hover:text-Green-D2 transition-colors cursor-pointer">Hỗ trợ</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pr-2">
                {/* Search/Scan Icon Button */}
                <div className="size-12 rounded-full bg-Grayscale-L1 flex items-center justify-center cursor-pointer hover:bg-Grayscale-L3 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-Grayscale-Black/60"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M8 12h8" /></svg>
                </div>

                <div className="h-12 px-8 bg-Grayscale-L3 rounded-full flex items-center justify-center cursor-pointer hover:bg-Grayscale-L4 transition-colors">
                  <span className="text-Grayscale-Black/80 text-[15px] font-semibold">Đăng nhập</span>
                </div>

                <div className="h-12 pl-8 pr-3 bg-[#00C48C] hover:bg-[#00B07A] rounded-full flex items-center gap-3 transition-all cursor-pointer shadow-lg shadow-[#00C48C]/20 group">
                  <span className="text-white text-[15px] font-semibold">Mở tài khoản</span>
                  <div className="size-9 bg-black/10 group-hover:bg-black/20 rounded-full flex items-center justify-center transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full z-10 px-4 md:px-6 py-3 md:py-4 flex-1 flex flex-col min-h-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1fr,420px] gap-4 lg:gap-5 flex-1 min-h-0"
        >
          {/* Hero Column */}
          <div className="flex flex-col min-h-0">
            <motion.section
              variants={itemVariants}
              className="flex-1 rounded-[32px] overflow-hidden relative shadow-xl min-h-0"
            >
              {/* Top frosted overlay for text readability */}
              <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-white/50 via-white/10 to-transparent backdrop-blur-[1px]" />
              {/* Bottom teal gradient for tagline legibility */}
              <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-teal-700/50 to-transparent" />

              {/* Content */}
              <div className="relative h-full z-10 flex flex-col justify-between p-8">
                {/* Top: heading + search */}
                <div className="flex flex-col items-center gap-4 pt-2">
                  <span className="text-[#1a5a4a]/80 text-sm font-medium uppercase tracking-[0.2em]">Chào mừng bạn đến với Kafi</span>
                  <h1 className="text-[#0d1f1a] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-center max-w-xl drop-shadow-sm">
                    Hôm nay bạn muốn tìm hiểu hay bắt đầu đầu tư?
                  </h1>
                  {/* Text field search */}
                  <motion.div
                    whileHover={{ scale: 1.01, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.10)" }}
                    className="w-full max-w-lg pl-7 pr-2.5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.10)] flex justify-between items-center transition-all cursor-text mt-2 relative overflow-hidden"
                  >
                    <div className="flex-1 relative h-6 flex items-center">
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="absolute inset-0 w-full bg-transparent outline-none text-Grayscale-Black text-base font-medium z-10"
                      />
                      <AnimatePresence mode="wait">
                        {!searchValue && (
                          <motion.div
                            key={placeholders[placeholderIndex]}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              visible: { transition: { staggerChildren: 0.03 } },
                              hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
                            }}
                            className="text-gray-400 text-base font-medium pointer-events-none flex"
                          >
                            {placeholders[placeholderIndex].split("").map((char, index) => (
                              <motion.span
                                key={index}
                                variants={{
                                  hidden: { opacity: 0, scale: 0.5, y: 15 },
                                  visible: { opacity: 1, scale: 1, y: 0 }
                                }}
                                transition={{ 
                                  type: "spring", 
                                  stiffness: 300, 
                                  damping: 20 
                                }}
                              >
                                {char === " " ? "\u00A0" : char}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="size-11 bg-[#00C48C] hover:bg-[#00a87a] rounded-full flex justify-center items-center cursor-pointer transition-colors shadow flex-shrink-0 z-20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom: tagline text */}
                <div className="flex flex-col items-center gap-1">
                  <motion.h2 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg"
                  >
                    Đầu tư thông minh
                  </motion.h2>
                  <motion.h2 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg"
                  >
                    Sinh lời bền vững
                  </motion.h2>
                </div>
              </div>
            </motion.section>
          </div>



          {/* Sidebar Column */}
          <motion.aside 
            variants={containerVariants}
            className="flex flex-col gap-4 min-h-0 flex-1"
          >
            {/* Advertisement Carousel */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full bg-transparent rounded-[32px] relative overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500"
              style={{ aspectRatio: '2/1' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAdSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={adSlides[activeAdSlide].image} 
                      className="absolute inset-0 w-full h-full object-fill" 
                      alt="Promo" 
                    />
                    
                    {/* Primary Button */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-center px-8">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-20 h-10 px-6 bg-[#1a202c] text-white rounded-full font-bold text-sm shadow-xl transition-all flex items-center gap-2 w-max group"
                      >
                        <span>Tham gia ngay</span>
                        <div className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 px-3 py-1.5">
                {adSlides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveAdSlide(i)}
                    className={`rounded-full transition-all duration-300 ${i === activeAdSlide ? 'w-4 h-1.5 bg-[#101828]' : 'size-1.5 bg-[#101828]/50'}`} 
                  />
                ))}
              </div>
            </motion.div>

            {/* Stock Market Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: -8, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-black/60 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl border border-white/5 flex flex-col gap-2 relative flex-[1_0_0%]"
            >
              {/* Tab nav */}
              <nav className="p-1 bg-black/20 rounded-full flex items-center gap-1">
                {stockTabs.map((tab, idx) => (
                  <button 
                    key={tab.name} 
                    onClick={() => setActiveStockTab(idx)}
                    className={`flex-1 h-9 rounded-full text-[13px] font-semibold transition-all truncate ${idx === activeStockTab ? 'bg-[#00C48C] text-[#0d1f1a] shadow-lg font-bold' : 'text-white/50 hover:text-white'}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>

              <div className="relative overflow-hidden mb-2 flex-1">
                <motion.div 
                  animate={{ x: `-${activeStockTab * 25}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex"
                  style={{ width: '400%' }}
                >
                  {stockTabs.map((tab, idx) => (
                    <div key={idx} className="w-1/4 flex-shrink-0 flex flex-col gap-4 flex-1">
                      {/* Chart area */}
                      <div className="w-full relative flex-1 min-h-[120px]">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 420 75">
                          <defs>
                            <linearGradient id={`greenFill-${idx}`} x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#00C48C" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#00C48C" stopOpacity="0.02" />
                            </linearGradient>
                            <linearGradient id={`redFill-${idx}`} x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#E53935" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#E53935" stopOpacity="0.02" />
                            </linearGradient>
                          </defs>

                          <line x1="0" y1="36" x2="420" y2="36" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />

                          {idx === 0 ? (
                            <>
                              {/* Original VNIndex dual-segment chart */}
                              <motion.path
                                d="M0,56 L20,60 L35,46 L50,62 L65,50 L80,58 L100,43 L120,48"
                                fill="none" stroke="#E53935" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }}
                              />
                              <motion.polygon
                                points="0,56 20,60 35,46 50,62 65,50 80,58 100,43 120,48 120,75 0,75"
                                fill={`url(#redFill-${idx})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                              />
                              <motion.path
                                d="M120,48 L145,36 L165,26 L185,32 L200,18 L220,23 L240,8 L260,16 L280,6 L300,13 L320,8 L340,16 L360,10 L380,6 L400,3 L420,0"
                                fill="none" stroke="#00C48C" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }}
                              />
                              <motion.polygon
                                points="120,48 145,36 165,26 185,32 200,18 220,23 240,8 L260,16 L280,6 L300,13 L320,8 L340,16 L360,10 L380,6 L400,3 L420,0 420,75 120,75"
                                fill={`url(#greenFill-${idx})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
                              />
                            </>
                          ) : (
                            <>
                              {/* Mock chart paths for other tabs */}
                              <motion.path
                                d={tab.isUp 
                                  ? "M0,48 L50,43 L100,46 L150,33 L200,36 L250,23 L300,26 L350,13 L400,16 L420,8" 
                                  : "M0,8 L50,13 L100,10 L150,23 L200,20 L250,33 L300,30 L350,43 L400,40 L420,53"}
                                fill="none" 
                                stroke={tab.isUp ? "#00C48C" : "#E53935"} 
                                strokeWidth="2" 
                                strokeLinejoin="round" 
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                              />
                              <motion.polygon
                                points={tab.isUp
                                  ? "0,48 50,43 100,46 150,33 200,36 250,23 300,26 350,13 400,16 420,8 420,75 0,75"
                                  : "0,8 50,13 100,10 150,23 200,20 250,33 300,30 350,43 400,40 420,53 420,75 0,75"}
                                fill={`url(#${tab.isUp ? 'greenFill' : 'redFill'}-${idx})`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </>
                          )}
                        </svg>

                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
                          {['9g', '10g', '11g', '12g', '13g', '14g', '15g'].map(t => (
                            <span key={t} className="text-[10px] text-white/30 font-medium">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* VNINDEX data row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm font-semibold tracking-wide uppercase">{tab.name}</span>
                          <span className="text-[11px] font-medium text-white/50 bg-white/10 px-2 py-0.5 rounded-full">Đóng cửa</span>
                        </div>
                        <span className={`${tab.isUp ? 'text-[#00C48C]' : 'text-[#E53935]'} text-sm font-semibold`}>
                          {tab.value} <span className="font-medium">({tab.change} {tab.percent})</span>
                        </span>
                      </div>

                      {/* Volume + up/flat/down row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white text-[12px] font-bold">
                          <span><CountingNumber value={tab.vol} /> tr CP</span>
                          <span className="opacity-40">|</span>
                          <span><CountingNumber value={tab.val} /> Tỷ</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <motion.svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.22, 1], y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                              <path d="M12 19V5M5 12l7-7 7 7"/>
                            </motion.svg>
                            <span className="text-[#00C48C] text-sm font-medium">{tab.up}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-base font-medium leading-none">—</span>
                            <span className="text-yellow-400 text-sm font-medium">{tab.flat}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <motion.svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.22, 1], y: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                              <path d="M12 5v14M5 12l7 7 7-7"/>
                            </motion.svg>
                            <span className="text-[#E53935] text-sm font-medium">{tab.down}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Footer: dots + link */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {stockTabs.map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-full transition-all duration-300 ${i === activeStockTab ? 'w-4 h-1.5 bg-white' : 'size-1.5 bg-white/40'}`} 
                    />
                  ))}
                </div>
                <button className="flex items-center gap-1 text-white/70 text-[13px] font-semibold hover:text-[#00C48C] transition-colors group">
                  Xem bảng giá
                  <div className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Chat bot container */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center px-3 py-3 bg-gradient-to-r from-[#4ec99b]/80 via-[#38b88a]/80 to-[#2da676]/80 backdrop-blur-xl rounded-[32px] shadow-xl border border-white/20 gap-3"
            >
              {/* Bot avatar circle */}
              <motion.div 
                className="size-[72px] flex-shrink-0 rounded-full bg-[#34c68a] border-[3px] border-white/80 shadow-lg flex items-center justify-center overflow-hidden z-10"
                animate={{ scale: [1, 1.05, 1], y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/assets/bot.png"
                  alt="Kai"
                  className="w-[85%] h-[85%] object-contain"
                />
              </motion.div>

              {/* Speech bubble */}
              <div className="flex-1 relative">
                {/* Triangle pointer */}
                <div
                  className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0"
                  style={{
                    borderTop: '9px solid transparent',
                    borderBottom: '9px solid transparent',
                    borderRight: '10px solid rgba(255,255,255,0.25)',
                  }}
                />
                <div className="bg-white/25 backdrop-blur-md rounded-[18px] px-5 py-3.5 border border-white/30">
                  <p className="text-white text-[15px] font-medium leading-relaxed">
                    Xin chào bạn! Mình là <span className="font-bold">Kai</span>, trợ lý tài chính.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.aside>
        </motion.div>
      </main>

    </div>
  );
}
