import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Download } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReportsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Báo cáo vĩ mô / chiến lược');

  const reportCategories = [
    { name: 'Khuyến nghị đầu tư', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: 'Báo cáo thị trường', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: 'Báo cáo vĩ mô / chiến lược', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 2L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: 'Doanh nghiệp', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: 'Kafi Livestream', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 15L15 12L10 9V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: 'Cộng đồng đầu tư', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2522 22.1614 16.5523C21.6184 15.8524 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25393 19.0078 6.11714 19.0078 7.005C19.0078 7.89286 18.7122 8.75607 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
  ];

  const reports = [
    {
      id: 1,
      month: '12',
      year: '2025',
      category: 'Vĩ mô tháng 12/2025',
      title: 'Báo cáo Vĩ mô & Chiến lược thị trường tháng 12/2025',
      summary: 'Dòng vốn ngoại quay trở lại, áp lực tỷ giá hạ nhiệt là những điểm nhấn quan trọng giúp thị trường chứng khoán phục hồi mạnh mẽ trong tháng cuối năm. Kafi dự báo VN-Index sẽ tiếp tục duy trì đà tăng...',
      date: '10/12/2025',
    },
    {
      id: 2,
      month: '11',
      year: '2025',
      category: 'Vĩ mô tháng 11/2025',
      title: 'Báo cáo Vĩ mô & Chiến lược thị trường tháng 11/2025',
      summary: 'Thị trường đối mặt với nhiều biến số vĩ mô từ kết quả bầu cử Mỹ, tuy nhiên nội lực nền kinh tế vẫn duy trì đà tăng trưởng ổn định nhờ xuất khẩu và đầu tư công được đẩy mạnh.',
      date: '08/11/2025',
    },
    {
      id: 3,
      month: '10',
      year: '2025',
      category: 'Vĩ mô tháng 10/2025',
      title: 'Báo cáo Vĩ mô & Chiến lược thị trường tháng 10/2025',
      summary: 'Lạm phát được kiểm soát tốt, chính sách tiền tệ nới lỏng tiếp tục là động lực chính hỗ trợ thanh khoản hệ thống ngân hàng và thị trường vốn trong giai đoạn chuyển giao quý.',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-['Inter',sans-serif] text-[#101828]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <div className="w-full h-[320px] relative overflow-hidden bg-gradient-to-r from-[#09977A] via-[#0AE685] to-transparent rounded-[48px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-60">
             <div className="absolute inset-0 bg-gradient-to-r from-[#09977A] via-[#09977A]/10 to-transparent z-10" />
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
          </div>
          
          {/* Rotating Circular Kafi Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-12 right-12 size-32 opacity-20 hidden lg:block"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-current">
                <textPath xlinkHref="#circlePath">KAFI SECURITIES • KAFI SECURITIES • </textPath>
              </text>
            </svg>
          </motion.div>

          <div className="relative z-10 px-16">
            <div className="flex items-center gap-2 text-white/50 text-[13px] font-medium mb-4">
              <span className="hover:text-white cursor-pointer transition-colors" onClick={() => navigate('/')}>Trang chủ</span>
              <span className="opacity-50">/</span>
              <span className="hover:text-white cursor-pointer transition-colors">Thị trường & khuyến nghị</span>
              <span className="opacity-50">/</span>
              <span className="text-white">Báo cáo vĩ mô / chiến lược</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "'Roboto', sans-serif" }}
              className="text-[56px] font-bold text-white leading-tight"
            >
              Báo cáo vĩ mô / chiến lược
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="w-[280px] shrink-0">
            <div className="sticky top-12 flex flex-col gap-2">
              <h3 className="text-[18px] font-bold mb-5 px-4 text-[#101828]">Danh mục báo cáo</h3>
              <div className="flex flex-col gap-1.5 p-1 bg-[#F1F5F9]/50 rounded-[28px] border border-[#E2E8F0]">
                <button className="text-left px-5 py-4 rounded-2xl bg-white text-[#00C694] font-bold shadow-[0_4px_20px_-4px_rgba(0,198,148,0.15)] border border-[#00C694]/5 transition-all flex items-center justify-between group">
                  Báo cáo vĩ mô
                  <div className="size-2 rounded-full bg-[#00C694]" />
                </button>
                <button className="text-left px-5 py-4 rounded-2xl text-gray-500 font-bold hover:bg-white/80 hover:text-[#101828] transition-all">
                  Báo cáo chiến lược
                </button>
              </div>
            </div>
          </aside>

          {/* Report List Section */}
          <section className="flex-1">
            {/* Category Sub-tabs */}
            <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
              {reportCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex flex-col items-center gap-4 min-w-[150px] p-6 rounded-[32px] transition-all duration-300 ${
                    activeCategory === cat.name 
                    ? 'bg-white shadow-[0_24px_48px_-12px_rgba(0,198,148,0.15)] border border-[#00C694]/20 scale-105' 
                    : 'bg-transparent border border-transparent hover:bg-white/40'
                  }`}
                >
                  <div className={`size-12 rounded-2xl flex items-center justify-center transition-colors ${activeCategory === cat.name ? 'bg-[#00C694] text-white' : 'bg-white text-gray-400 border border-gray-100'}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[13px] font-bold text-center leading-tight tracking-tight ${activeCategory === cat.name ? 'text-[#101828]' : 'text-gray-400'}`}>
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Reports List */}
            <div className="flex flex-col gap-6">
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="bg-white rounded-[40px] p-7 flex gap-9 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,198,148,0.12)] transition-all duration-500 group cursor-pointer border border-transparent hover:border-[#00C694]/10"
                >
                  {/* Thumbnail */}
                  <div className="size-[150px] rounded-3xl bg-gradient-to-br from-[#E7FCFF] to-[#DAFFE6] shrink-0 relative overflow-hidden flex flex-col items-center justify-center border border-white/40 shadow-sm">
                    {/* Background Graphic Overlay */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                       <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                          <circle cx="100" cy="0" r="60" fill="white" fillOpacity="0.3" />
                          <circle cx="0" cy="100" r="40" fill="#00C694" fillOpacity="0.1" />
                       </svg>
                    </div>
                    
                    <span className="text-[10px] font-bold tracking-[0.1em] text-[#00C694]/70 mb-2 uppercase">Macro Report</span>
                    <div className="flex flex-col items-center">
                      <span className="text-[43px] font-bold text-[#101828] leading-none mb-1">{report.month}</span>
                      <div className="w-8 h-[1px] bg-[#101828]/10 mb-1" />
                      <span className="text-[12px] font-bold text-[#101828]/40 tracking-[0.2em]">{report.year}</span>
                    </div>
                  </div>

                  {/* Info Content */}
                  <div className="flex-1 flex flex-col py-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#ECFDF3] rounded-full border border-[#D1FADF]">
                        <div className="size-1.5 rounded-full bg-[#039855]" />
                        <span className="text-[#039855] text-[11px] font-bold uppercase tracking-[0.05em]">
                          {report.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#101828] mb-3 group-hover:text-[#00C694] transition-colors leading-[1.3] max-w-[90%] font-['Roboto',sans-serif]">
                      {report.title}
                    </h3>
                    <p className="text-[#475467] text-[14px] leading-relaxed mb-6 line-clamp-2 max-w-[95%] font-medium">
                      {report.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-5">
                      <div className="flex items-center gap-3 text-gray-400 text-[12px] font-medium">
                        <Search className="size-3.5 opacity-50" />
                        Ngày đăng: {report.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#EBEFF5] text-[#344054] text-[14px] font-bold hover:bg-[#00C694] hover:text-white transition-all">
                          Xem online
                        </button>
                        <button className="size-10 rounded-full bg-[#EBEFF5] flex items-center justify-center text-[#344054] hover:bg-[#00C694] hover:text-white transition-all">
                          <Download className="size-4.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
               <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-5 border-[3px] border-gray-100 rounded-full text-[16px] font-black text-gray-400 hover:border-[#00C694] hover:text-[#00C694] transition-all bg-white/50"
               >
                  Xem thêm báo cáo
               </motion.button>
            </div>
          </section>
        </div>
      </main>

      {/* Subscription Section */}
      <section className="max-w-[1440px] mx-auto px-6 mb-32">
        <div className="w-full h-[400px] rounded-[60px] bg-[#C6FFD9] relative overflow-hidden flex items-center justify-between px-24">
          {/* Background Illustration Placeholder */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-[#C6FFD9] via-[#C6FFD9]/40 to-transparent z-10" />
             <img src="https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="" />
          </div>

          <div className="flex flex-col gap-6 max-w-[550px] relative z-10">
            <h2 className="text-[48px] font-bold text-[#101828] leading-[1.1] font-['Roboto',sans-serif]">Đăng ký nhận<br/>bản tin phân tích</h2>
            <p className="text-[#475467] text-[18px] font-medium leading-relaxed">Nhà đầu tư có thể truy cập các tài liệu quan trọng và đăng ký nhận bản tin định kỳ từ Kafi.</p>
          </div>
          
          <div className="relative w-[520px] z-10">
            <input 
              type="text" 
              placeholder="Nhập địa chỉ email của bạn..." 
              className="w-full h-20 pl-10 pr-32 rounded-full bg-black/50 text-white text-[16px] font-medium focus:outline-none focus:ring-2 focus:ring-[#00C694]/50 placeholder:text-white/40 border-none backdrop-blur-md"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 h-14 px-10 rounded-full bg-[#00C694] flex items-center justify-center text-[#101828] hover:bg-[#00B07A] transition-all font-bold shadow-lg shadow-[#00C694]/20">
              Gửi
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
