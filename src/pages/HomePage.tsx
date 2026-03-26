import Header from '../components/Header';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { useState, useEffect, Fragment } from 'react';

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
      image: 'assets/ads-banner1.png'
    },
    {
      id: 'partner',
      image: 'assets/ads-banner2.png'
    }
  ];

  const stockTabs = [
    {
      name: 'VNIndex',
      value: '1,696.24',
      change: '-12.24',
      percent: '-0.78%',
      isUp: false,
      vol: 1023,
      val: 27428,
      up: 245,
      flat: 66,
      down: 132,
      chartData: [
        {
          type: 'down',
          d: "M0,70 L5,68 L10,62 L15,58 L20,64 L25,60 L30,62 L35,55 L40,58 L45,52 L50,48 L55,54 L60,50 L65,56 L70,52 L75,58 L80,50 L85,48 L90,52 L95,58 L100,50 L105,48",
          fill: "0,70 5,68 10,62 15,58 20,64 25,60 30,62 35,55 40,58 45,52 50,48 55,54 60,50 65,56 70,52 75,58 80,50 85,48 90,52 95,58 100,50 105,48 105,75 0,75"
        },
        {
          type: 'up',
          d: "M105,48 L115,42 L125,40 L135,38 L145,35 L155,30 L165,26 L175,22 L185,18 L195,14 L205,10 L215,8 L225,18 L235,12 L245,22 L255,26 L265,30 L275,32 L285,18 L295,15 L305,10 L315,6 L325,10 L335,18 L345,30 L355,42 L365,42 L375,48 L385,48 L395,44 L405,32 L415,20 L420,14",
          fill: "105,48 115,42 125,40 135,38 145,35 155,30 165,26 175,22 185,18 195,14 205,10 215,8 225,18 235,12 245,22 255,26 265,30 275,32 285,18 295,15 305,10 315,6 325,10 335,18 345,30 355,42 365,42 375,48 385,48 395,44 405,32 415,20 420,14 420,75 105,75"
        }
      ]
    },
    {
      name: 'VN30',
      value: '1,112.40',
      change: '+5.12',
      percent: '+0.46%',
      isUp: true,
      vol: 452,
      val: 12560,
      up: 18,
      flat: 5,
      down: 7,
      chartData: [
        {
          type: 'up',
          d: "M0,48 L20,42 L40,38 L60,35 L80,30 L100,26 L120,22 L140,18 L160,14 L180,10 L200,6 L220,18 L240,18 L260,14 L280,10 L300,6 L320,8 L340,10 L360,12 L380,14 L400,14 L420,0",
          fill: "0,48 20,42 40,38 60,35 80,30 100,26 120,22 140,18 160,14 180,10 200,6 220,18 240,18 260,14 280,10 300,6 320,8 340,10 360,12 380,14 400,14 420,0 420,75 0,75"
        }
      ]
    },
    {
      name: 'HNXIndex',
      value: '226.78',
      change: '-0.45',
      percent: '-0.20%',
      isUp: false,
      vol: 128,
      val: 2150,
      up: 85,
      flat: 42,
      down: 112,
      chartData: [
        {
          type: 'down',
          d: "M0,50 L10,55 L20,52 L30,60 L40,52 L50,65 L60,58 L70,70 L80,62 L90,75 L100,68 L110,72 L120,64 L130,75 L140,68 L150,75 L160,67 L170,75 L180,68 L190,75 L200,67 L210,75 L220,68 L230,75 L240,67 L250,75 L260,68 L270,72 L280,64 L290,68 L300,60 L310,64 L320,56 L330,60 L340,52 L350,56 L360,48 L370,52 L380,50 L390,55 L400,48 L410,54 L420,48",
          fill: "0,50 10,55 20,52 30,60 40,52 50,65 60,58 70,70 80,62 90,75 100,68 110,72 120,64 130,75 140,68 150,75 160,67 170,75 180,68 190,75 200,67 210,75 220,68 230,75 240,67 250,75 260,68 270,72 280,64 290,68 300,60 310,64 320,56 330,60 340,52 350,56 360,48 370,52 380,50 390,55 400,48 410,54 420,48 420,75 0,75"
        }
      ]
    },
    {
      name: 'UPCOMIndex',
      value: '86.54',
      change: '+0.12',
      percent: '+0.14%',
      isUp: true,
      vol: 85,
      val: 1050,
      up: 156,
      flat: 98,
      down: 74,
      chartData: [
        {
          type: 'up',
          d: "M0,48 L20,44 L40,40 L60,36 L80,32 L100,28 L120,24 L140,20 L160,16 L180,12 L200,8 L220,10 L240,12 L260,14 L280,16 L300,18 L320,20 L340,22 L360,24 L380,26 L400,28 L420,30",
          fill: "0,48 20,44 40,40 60,36 80,32 100,28 120,24 140,20 160,16 180,12 200,8 220,10 240,12 260,14 280,16 300,18 320,20 340,22 360,24 380,26 400,28 420,30 420,75 0,75"
        }
      ]
    },
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
        src="assets/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <Header />

      {/* Main Content Area */}
      <main className="w-full z-10 px-4 md:px-6 py-3 md:py-4 flex-1 flex flex-col min-h-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-4 lg:gap-5 flex-1 min-h-0"
        >
          {/* Hero Column */}
          <div className="col-span-9 flex flex-col min-h-0">
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
                <div className="flex flex-col items-center gap-4 pt-4">
                  <span className="text-[#106070] text-[16px] font-semibold">Chào mừng bạn đến với Kafi</span>
                  <p className="text-[#101828] text-[36px] font-bold leading-[42px] text-center max-w-[580px]">
                    Hôm nay bạn muốn tìm hiểu hay bắt đầu đầu tư?
                  </p>
                  {/* Text field search */}
                  <motion.div
                    whileHover={{ scale: 1.01, boxShadow: "0 16px 40px -8px rgba(0,0,0,0.10)" }}
                    className="w-full max-w-[540px] pl-8 pr-4 py-4 bg-white rounded-[110px] shadow-[0px_12px_32px_0px_#c7d9e5] flex justify-between items-center transition-all cursor-text mt-4 relative overflow-hidden"
                  >
                    <div className="flex-1 relative h-6 flex items-center">
                      <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="absolute inset-0 w-full bg-transparent outline-none text-Grayscale-Black text-[16px] font-medium z-10"
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
                            className="text-[#667085] text-[16px] font-medium pointer-events-none flex"
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
                    {/* Search Icon button */}
                    <div className="size-11 bg-[#00c694] hover:bg-[#00a87a] rounded-full flex justify-center items-center cursor-pointer transition-colors shadow flex-shrink-0 z-20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#101828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
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
                    className="text-white text-[48px] font-bold leading-[56px] text-center drop-shadow-lg"
                  >
                    Đầu tư thông minh
                  </motion.h2>
                  <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                    className="text-white text-[48px] font-bold leading-[56px] text-center drop-shadow-lg"
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
            className="flex flex-col col-span-3 gap-4 min-h-0 flex-1"
          >
            {/* Advertisement Carousel */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex-none w-full aspect-[16/9] bg-transparent rounded-[32px] relative overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500"
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
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="absolute bottom-6 left-4 h-10 px-3 bg-[#1a202c] text-white rounded-full font-light text-sm shadow-xl transition-all flex items-center gap-2 w-max group"
                      >
                        <span>Tham gia ngay</span>
                        <div className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>
                      </motion.button>
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
              className="bg-black/60 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl border border-white/5 flex flex-col gap-2 relative flex-[1_0_0%] min-[1729px]:aspect-[16/9] min-[1729px]:flex-none"
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

                          <line x1="0" y1="48" x2="420" y2="48" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />

                          {tab.chartData.map((data, dataIdx) => (
                            <Fragment key={dataIdx}>
                              <motion.path
                                d={data.d}
                                fill="none"
                                stroke={data.type === 'up' ? "#00C48C" : "#E53935"}
                                strokeWidth="1"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, delay: dataIdx * 0.8 }}
                              />
                              <motion.polygon
                                points={data.fill}
                                fill={`url(#${data.type === 'up' ? 'greenFill' : 'redFill'}-${idx})`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: dataIdx * 0.8 + 0.4 }}
                              />
                            </Fragment>
                          ))}
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
                              <path d="M12 19V5M5 12l7-7 7 7" />
                            </motion.svg>
                            <span className="text-[#00C48C] text-sm font-medium">{tab.up}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-base font-medium leading-none">—</span>
                            <span className="text-yellow-400 text-sm font-medium">{tab.flat}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <motion.svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.22, 1], y: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                              <path d="M12 5v14M5 12l7 7 7-7" />
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Chat bot container */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center p-5 rounded-[32px] border border-white/20 gap-3 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: "url('assets/home-kai-background.png')" }}
            >
              {/* Bot avatar character video */}
              <div
                className="size-[69px] flex-shrink-0 relative z-10 rounded-full overflow-hidden border-2 border-white/30 shadow-lg"
              >
                <video
                  src="assets/Generate_Kai_Character_Video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.5)', // 1.5 = 150% zoom
                    transformOrigin: 'center top' // Zooms into the middle
                  }}
                />
              </div>

              {/* Speech bubble */}
              <div className="flex-1">
                <div className="bg-white/5 rounded-[24px] px-5 py-3">
                  <p className="text-white text-[14px] font-semibold leading-relaxed">
                    Xin chào bạn! Mình là Kai, trợ lý tài chính của bạn.
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
