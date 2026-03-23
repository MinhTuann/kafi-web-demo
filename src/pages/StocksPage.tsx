import { motion } from 'framer-motion';
import { useState } from 'react';

export default function StocksPage() {
  const [activeCategory, setActiveCategory] = useState('Đầu tư tăng trưởng');

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A]">
      {/* Two-tier Header would go here - for now using a placeholder or common component logic */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-40 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-0.5">
              <div className="size-4 bg-[#006D5B] rounded-sm" />
              <div className="size-4 bg-[#00CD98] rounded-sm -mt-2 translate-x-1" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter">Kafi</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <span className="text-[15px] font-semibold hover:text-[#006D5B] cursor-pointer">Sản phẩm & dịch vụ</span>
            <span className="text-[15px] font-semibold hover:text-[#006D5B] cursor-pointer">Thị trường & khuyến nghị</span>
            <span className="text-[15px] font-semibold hover:text-[#006D5B] cursor-pointer">Học viện</span>
            <span className="text-[15px] font-semibold hover:text-[#006D5B] cursor-pointer">Hỗ trợ</span>
          </nav>
          <div className="flex gap-4">
             <button className="px-6 py-2 rounded-full font-semibold border border-gray-200">Đăng nhập</button>
             <button className="px-6 py-2 rounded-full font-semibold bg-[#00CD98] text-white shadow-lg shadow-[#00CD98]/20">Mở tài khoản</button>
          </div>
        </div>
      </header>

      {/* Sub-navigation / Product Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-40 py-4 flex gap-6 overflow-x-auto no-scrollbar">
          {['Cổ phiếu', 'Phái sinh', 'Chứng quyền', 'GBI'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                tab === 'Cổ phiếu' ? 'bg-[#006D5B] text-white shadow-md' : 'text-gray-500 hover:text-[#006D5B]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-32">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="inline-block px-5 py-2 bg-[#00CD98]/10 text-[#006D5B] rounded-full text-sm font-bold tracking-wide uppercase">
              Cổ phiếu
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Đầu tư cổ phiếu <br /> <span className="text-[#006D5B]">Cùng Kafi</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-xl leading-relaxed">
              Trải nghiệm nền tảng giao dịch hiện đại, phí cực thấp và nhận định thị trường chuyên sâu từ đội ngũ chuyên gia hàng đầu.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-4 bg-[#006D5B] text-white rounded-full font-bold text-lg shadow-xl shadow-[#006D5B]/20 hover:scale-105 transition-all">
                Mở tài khoản ngay
              </button>
              <button className="px-10 py-4 bg-white text-[#006D5B] border-2 border-[#006D5B]/10 rounded-full font-bold text-lg hover:border-[#006D5B]/30 transition-all flex items-center gap-2">
                Tìm hiểu thêm
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </button>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="flex-1 relative">
             <div className="relative z-10 scale-110 lg:scale-125">
                <img 
                  src="/assets/isomorphic-stocks.png" 
                  alt="Stocks Hero" 
                  className="w-full h-auto drop-shadow-2xl"
                />
             </div>
             {/* Background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 bg-[#00CD98] blur-[120px] opacity-20 pointer-events-none" />
          </motion.div>
        </motion.section>

        {/* Product Secondary Tabs */}
        <section className="py-12">
          <div className="bg-gray-100/50 p-2 rounded-[32px] inline-flex flex-wrap gap-2 mx-auto lg:ml-0 shadow-inner">
            {['Đầu tư tăng trưởng', 'Đầu tư giá trị', 'Đầu tư thu nhập', 'Quản trị rủi ro'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[15px] font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-white text-[#1A1A1A] shadow-md' 
                  : 'text-gray-500 hover:text-[#006D5B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Promotion Cards */}
        <section className="py-24 space-y-16">
           <div className="space-y-4">
             <h2 className="text-4xl lg:text-5xl font-bold">Ưu đãi từ Kafi</h2>
             <div className="w-20 h-1.5 bg-[#00CD98] rounded-full" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Phí giao dịch 0%', desc: 'Miễn phí giao dịch trọn đời cho tài khoản mới đăng ký trong tháng này.' },
                { title: 'Lãi suất Margin 6.8%', desc: 'Gói vay ưu đãi chỉ từ 6.8% dành cho nhà đầu tư chuyên nghiệp.' },
                { title: 'Tặng ngay 1,000,000đ', desc: 'Nhận ngay tiền mặt vào tài khoản khi thực hiện giao dịch đầu tiên.' }
              ].map((promo, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -12 }}
                  className="bg-white p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-start gap-6 group cursor-pointer"
                >
                  <div className="size-16 bg-[#00CD98]/10 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#00CD98]/20">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006D5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold leading-tight">{promo.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{promo.desc}</p>
                  </div>
                  <button className="text-[#006D5B] font-bold flex items-center gap-2 pt-2 group/btn">
                    Tìm hiểu ngay 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                  </button>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Fee Table Section */}
        <section className="py-24 space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Biểu phí & Chính sách</h2>
              <p className="text-xl text-gray-500 max-w-2xl">Công khai, minh bạch và luôn tối ưu lợi ích cho khách hàng</p>
              <div className="w-20 h-1.5 bg-[#006D5B] rounded-full" />
            </div>
            <button className="px-8 py-3 border-2 border-[#006D5B] text-[#006D5B] rounded-full font-bold hover:bg-[#006D5B] hover:text-white transition-all">
              Tải biểu phí đầy đủ (PDF)
            </button>
          </div>
          
          <div className="bg-white rounded-[48px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.06)] border border-gray-100">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#006D5B] text-white">
                  <th className="px-12 py-8 text-lg font-bold">Loại sản phẩm</th>
                  <th className="px-12 py-8 text-lg font-bold">Phí giao dịch</th>
                  <th className="px-12 py-8 text-lg font-bold">Chính sách ưu đãi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Cổ phiếu niêm yết', fee: '0.1% - 0.15%', policy: 'Miễn phí nếu Vol > 10 tỷ' },
                  { name: 'Chứng khoán phái sinh', fee: '500đ / Hợp đồng', policy: 'Tặng 100 HĐ đầu tiên' },
                  { name: 'Chứng quyền', fee: '0.1%', policy: 'Hoàn phí 50% tháng đầu' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-12 py-8">
                      <span className="text-xl font-bold group-hover:text-[#006D5B] transition-colors">{row.name}</span>
                    </td>
                    <td className="px-12 py-8">
                      <span className="text-xl font-bold text-[#006D5B]">{row.fee}</span>
                    </td>
                    <td className="px-12 py-8">
                      <span className="text-lg text-gray-500">{row.policy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-24 space-y-16">
           <div className="space-y-4 text-center">
             <h2 className="text-4xl lg:text-5xl font-bold">Hướng dẫn giao dịch</h2>
             <p className="text-xl text-gray-500 max-w-2xl mx-auto">Mọi thứ bạn cần biết để bắt đầu hành trình đầu tư tại Kafi</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Cách thức nạp/rút tiền nhanh chóng tại Kafi', time: '5 MIN READ' },
                { title: 'Hướng dẫn mở tài khoản eKYC trong 3 phút', time: '3 MIN READ' },
                { title: 'Cẩm nang sử dụng Margin hiệu quả', time: '7 MIN READ' },
                { title: 'Phân tích kỹ thuật cơ bản cho người mới', time: '10 MIN READ' }
              ].map((guide, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer space-y-6"
                >
                  <div className="aspect-[3/4] bg-gray-200 rounded-[32px] overflow-hidden relative shadow-md">
                    <img 
                      src={`https://picsum.photos/seed/${i + 20}/600/800`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                      alt="Guide" 
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full tracking-widest">
                      {guide.time}
                    </div>
                  </div>
                  <div className="space-y-3 px-2">
                    <h4 className="text-xl font-bold leading-tight group-hover:text-[#006D5B] transition-colors">
                      {guide.title}
                    </h4>
                    <button className="text-[#006D5B] font-bold flex items-center gap-2 text-sm group/btn">
                      Xem hướng dẫn
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                    </button>
                  </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Support CTA */}
        <section className="py-24 pb-48">
           <div className="bg-[#006D5B] rounded-[60px] p-12 lg:p-24 text-center text-white space-y-10 relative overflow-hidden shadow-[0_40px_80px_rgba(0,109,91,0.25)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 size-96 bg-[#00CD98] blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 size-96 bg-[#00CD98] blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/2" />
              
              <div className="space-y-6 relative z-10">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Bạn cần hỗ trợ thêm?</h2>
                <p className="text-white/70 max-w-2xl mx-auto text-xl leading-relaxed">
                  Đội ngũ chuyên gia và chăm sóc khách hàng của Kafi luôn sẵn sàng giải đáp mọi thắc mắc của bạn 24/7 qua các kênh hỗ trợ trực tuyến.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#006D5B] rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                  Liên hệ bộ phận hỗ trợ
                </button>
                <button className="w-full sm:w-auto px-12 py-5 bg-[#00CD98] text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                  Chat với Kai
                </button>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-20">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-40 grid grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="size-4 bg-[#006D5B] rounded-sm" />
                <div className="size-4 bg-[#00CD98] rounded-sm -mt-2 translate-x-1" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter">Kafi</span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Công ty Cổ phần Chứng khoán Kafi - Tận tâm đồng hành cùng nhà đầu tư trên hành trình thịnh vượng.
            </p>
          </div>
          <div className="space-y-4">
             <h5 className="font-bold">Sản phẩm</h5>
             <ul className="space-y-2 text-gray-500">
               <li>Cổ phiếu</li>
               <li>Phái sinh</li>
               <li>GBI</li>
             </ul>
          </div>
          <div className="space-y-4">
             <h5 className="font-bold">Học viện</h5>
             <ul className="space-y-2 text-gray-500">
               <li>Kiến thức cơ bản</li>
               <li>Phân tích kỹ thuật</li>
               <li>Podcast</li>
             </ul>
          </div>
          <div className="space-y-4">
             <h5 className="font-bold">Hỗ trợ</h5>
             <ul className="space-y-2 text-gray-500">
               <li>Trung tâm hỗ trợ</li>
               <li>Hotline: 1900 xxxx</li>
               <li>Email: support@kafi.vn</li>
             </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
