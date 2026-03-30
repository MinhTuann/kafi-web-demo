import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
const LogoBlack = '/kafi-web-demo/assets/stocks/logo-black.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMarketMenuOpen, setIsMarketMenuOpen] = useState(false);
  const [isAcademyMenuOpen, setIsAcademyMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <header className="w-full z-30 relative bg-transparent">
      {/* Top Row: Sub-navigation */}
      <div className={`${isHome ? 'bg-transparent' : 'bg-[#073038]'} w-full`}>
        <div className="px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center py-2 px-6 font-['Inter',sans-serif]"
          >
            <div className="flex items-center gap-6 relative">
              <div className="relative group cursor-pointer">
                <span className={`text-[12px] leading-4 font-semibold ${isHome ? 'text-[#101828]' : 'text-white'}`}>Khách hàng cá nhân</span>
                {/* Pointer/Indicator Triangle */}
                <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white z-30" />
              </div>
              <span className={`text-[12px] leading-4 font-medium transition-colors cursor-pointer ${isHome ? 'text-[#667085] hover:text-[#101828]' : 'text-white/70 hover:text-white'}`}>Khách hàng tổ chức</span>
              <span className={`text-[12px] leading-4 font-medium transition-colors cursor-pointer ${isHome ? 'text-[#667085] hover:text-[#101828]' : 'text-white/70 hover:text-white'}`}>Quản lý gia sản</span>
              <span className={`text-[12px] leading-4 font-medium transition-colors cursor-pointer ${isHome ? 'text-[#667085] hover:text-[#101828]' : 'text-white/70 hover:text-white'}`}>Ngân hàng đầu tư</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <span
                onClick={() => navigate('/about')}
                className={`text-[14px] leading-5 font-semibold transition-opacity cursor-pointer ${isHome ? 'text-[#101828]' : 'text-white'} hover:opacity-80`}
              >
                Về Kafi
              </span>
              <span
                onClick={() => navigate('/shareholder')}
                className={`text-[14px] leading-5 font-semibold transition-opacity cursor-pointer ${isHome ? 'text-[#101828]' : 'text-white'} hover:opacity-80`}
              >
                Quan hệ cổ đông
              </span>
              <span className={`text-[14px] leading-5 font-semibold transition-opacity cursor-pointer ${isHome ? 'text-[#101828]' : 'text-white'} hover:opacity-80`}>Cơ hội sự nghiệp</span>

              {/* Language Switcher */}
              <div className={`h-8 p-1 ${isHome ? 'bg-[#101828]/50' : 'bg-white/10'} rounded-xl flex items-center`}>
                <div className="h-full px-2.5 bg-white rounded-md shadow-sm flex items-center justify-center cursor-pointer">
                  <span className="text-[14px] leading-5 font-semibold text-[#101828]">VI</span>
                </div>
                <div className="h-full px-2.5 flex items-center justify-center cursor-pointer">
                  <span className={`text-[14px] leading-5 font-semibold text-white`}>EN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Row: Primary Navigation Bar */}
      <div className="px-4 lg:px-6">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[150px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border border-white/60"
        >
          <div className="pl-6 pr-2 py-2 flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo */}
              <div
                className="pr-12 cursor-pointer flex items-center shrink-0"
                onClick={() => navigate('/')}
              >
                <img
                  src={LogoBlack}
                  alt="Kafi"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <div className="hidden xl:flex items-center gap-5 relative h-full">
                {/* Sản phẩm & dịch vụ */}
                <div
                  className="relative h-full flex items-center"
                  onMouseEnter={() => !isActive('/stocks') && setIsProductsMenuOpen(true)}
                  onMouseLeave={() => setIsProductsMenuOpen(false)}
                >
                  <div className="flex items-center cursor-pointer group py-4">
                    <span
                      className={`text-[14px] font-semibold transition-colors whitespace-nowrap ${
                        isProductsMenuOpen || isActive('/stocks') ? 'text-[#00C694]' : 'text-[#344054] group-hover:text-[#00C694]'
                      }`}
                      onClick={() => navigate('/stocks')}
                    >
                      Sản phẩm & dịch vụ
                    </span>
                  </div>

                  <AnimatePresence>
                    {isProductsMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-4 w-max max-w-[90vw] bg-white rounded-[40px] shadow-[0px_8px_46px_0px_rgba(0,0,0,0.12)] border border-white/60 p-8 z-50 flex gap-10"
                      >
                        {/* Column 1: Đầu tư tăng trưởng */}
                        <div className="flex flex-col gap-4 w-[200px]">
                          <h3 className="text-[16px] font-bold text-[#101828] px-3 py-2">Đầu tư tăng trưởng</h3>
                          <div className="flex flex-col">
                            {['Cổ phiếu', 'Phái sinh', 'Chứng quyền', 'Đầu tư mục tiêu GBI'].map((item) => (
                              <span key={item} className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Tích luỹ bền vững */}
                        <div className="flex flex-col gap-4 w-[200px]">
                          <h3 className="text-[16px] font-bold text-[#101828] px-3 py-2">Tích luỹ bền vững</h3>
                          <div className="flex flex-col">
                            {['Trái phiếu'].map((item) => (
                              <span key={item} className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Dịch vụ tài chính */}
                        <div className="flex flex-col gap-4 w-[200px]">
                          <h3 className="text-[16px] font-bold text-[#101828] px-3 py-2">Dịch vụ tài chính</h3>
                          <div className="flex flex-col">
                            {['Tài trợ giao dịch'].map((item) => (
                              <span key={item} className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Column 4: Nền tảng giao dịch */}
                        <div className="flex-1 flex flex-col gap-4">
                          <h3 className="text-[16px] font-bold text-[#101828] px-3 py-2">Nền tảng giao dịch</h3>
                          <div className="flex gap-8">
                            {/* Card 1 */}
                            <div className="flex-1 flex flex-col gap-3 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-[15vw] aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#00c694] to-[#07756d] relative overflow-hidden flex items-center justify-center p-4">
                                <img
                                  src="assets/b9e79771ccb89cc036ab4d49b5e6a2d48890aced.png"
                                  className="absolute bottom-0 -left-[5%] scale-120 object-contain"
                                  alt=""
                                />
                                <div className="size-16 bg-white rounded-2xl border-4 border-white shadow-xl z-10 overflow-hidden relative">
                                  <img src="assets/1c663ab9879f4194549ab252d5415675f4bb6bfc.png" className="size-full object-cover" alt="Kafi X" />
                                </div>
                              </div>
                              <span className="text-[14px] font-semibold text-[#101828] px-1 max-w-[15vw] block">App Kafi X</span>
                            </div>

                            {/* Card 2 */}
                            <div className="flex-1 flex flex-col gap-3 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer text-left">
                             <div className="w-[15vw] aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#00c694] via-[#0ae685] to-[#c6ffd9] relative overflow-hidden p-0">
                                <img
                                  src="assets/b9e79771ccb89cc036ab4d49b5e6a2d48890aced.png"
                                  className="absolute bottom-0 -left-[45%] scale-100 object-contain"
                                  alt=""
                                />
                                <div className="absolute top-[20%] -right-[30%] w-[120%] h-[120%] rounded-tl-lg border-[3px] border-[#17181b] overflow-hidden shadow-2xl">
                                  <img src="assets/0f719e2cf6935a464d665bb5a26c98510cb40ef0.png" className="size-full object-cover" alt="Web Kafi" />
                                </div>
                              </div>
                              <span className="text-[14px] font-semibold text-[#101828] px-1 max-w-[15vw] block">Web Kafi X</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Thị trường & khuyến nghị */}
                <div
                  className="relative h-full flex items-center"
                  onMouseEnter={() => !isActive('/reports') && setIsMarketMenuOpen(true)}
                  onMouseLeave={() => setIsMarketMenuOpen(false)}
                >
                  <div className="flex items-center cursor-pointer group py-4">
                    <span
                      className={`text-[14px] font-semibold transition-colors whitespace-nowrap ${
                        isMarketMenuOpen || isActive('/reports') ? 'text-[#00C694]' : 'text-[#344054] group-hover:text-[#00C694]'
                      }`}
                      onClick={() => navigate('/reports')}
                    >
                      Thị trường & khuyến nghị
                    </span>
                  </div>

                  <AnimatePresence>
                    {isMarketMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-4 w-max max-w-[90vw] bg-[#F7F9FC] rounded-[40px] shadow-[0px_8px_46px_0px_rgba(0,0,0,0.12)] border border-white/60 overflow-hidden z-50 flex"
                      >
                        {/* Sidebar Menu */}
                        <div className="bg-white w-[280px] border-r border-[#F7F9FC] p-5 flex flex-col gap-1">
                          {[
                            'Khuyến nghị đầu tư',
                            'Báo cáo thị trường',
                            'Báo cáo vĩ mô / chiến lược',
                            'Doanh nghiệp',
                            'Kafi Livestream',
                            'Cộng đồng đầu tư'
                          ].map((item) => (
                            <div key={item} className="flex flex-col">
                              <span className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 px-8 py-5 flex flex-col h-full gap-4 justify-start">
                          <div className="flex gap-4">
                            <span className="flex-1 px-3 py-2 text-[16px] text-[#667085] font-light">Điểm tâm chứng khoán</span>
                            <span className="flex-1 px-3 py-2 text-[16px] text-[#667085] font-light">Bản tin Kafi</span>
                          </div>

                          <div className="flex gap-6">
                            {/* News Card 1 */}
                            <div className="flex-1 flex flex-col gap-4 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-[15vw] aspect-[16/9] rounded-2xl overflow-hidden relative">
                                <img
                                  src="assets/02b38069d509285aeeaad2669c5d7d92948661a0.png"
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                              <h4 className="text-[14px] font-bold text-[#101828] leading-tight max-w-[15vw]">Thị trường lên đỉnh... nhà đầu tư lên huyết áp</h4>
                            </div>

                            {/* News Card 2 */}
                            <div className="flex-1 flex flex-col gap-4 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-[15vw] aspect-[16/9] rounded-2xl overflow-hidden relative">
                                <img
                                  src="assets/6ac2d4f95d69cab064362cb6809d4a38ff609678.png"
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                              <h4 className="text-[14px] font-bold text-[#101828] leading-tight max-w-[15vw]">Kafi vinh dự nhận giải thưởng "Thương hiệu Mạnh – Tăng trưởng Ấn tượng 2025"</h4>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Học viện */}
                <div
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setIsAcademyMenuOpen(true)}
                  onMouseLeave={() => setIsAcademyMenuOpen(false)}
                >
                  <div className="flex items-center cursor-pointer group py-4" onClick={() => navigate('/academy')}>
                    <span
                      className={`text-[14px] font-semibold transition-colors whitespace-nowrap ${isAcademyMenuOpen || isActive('/academy') ? 'text-[#00C694]' : 'text-[#344054] group-hover:text-[#00C694]'}`}
                    >
                      Học viện
                    </span>
                  </div>

                  <AnimatePresence>
                    {isAcademyMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-4 w-max max-w-[90vw] bg-[#F7F9FC] rounded-[40px] shadow-[0px_8px_46px_0px_rgba(0,0,0,0.12)] border border-white/60 overflow-hidden z-50 flex"
                      >
                        {/* Sidebar Menu */}
                        <div className="bg-white w-[280px] border-r border-[#F7F9FC] p-5 flex flex-col gap-1">
                          {[
                            'Cẩm nang đầu tư',
                            'Khoá học chứng khoán',
                            'Lịch sự kiện'
                          ].map((item) => (
                            <div key={item} className="flex flex-col">
                              <span className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 px-8 py-5 flex flex-col h-full gap-4 justify-start">
                          <div className="flex gap-4">
                            <span className="flex-1 px-3 py-2 text-[16px] text-[#667085] font-light">Lịch sự kiện</span>
                          </div>

                          <div className="flex gap-6">
                            {/* Event Card 1 */}
                            <div className="flex-1 flex flex-col gap-4 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer relative">
                              <div className="w-[15vw] aspect-[16/9] rounded-2xl overflow-hidden relative">
                                <img
                                  src="assets/2dd8f16344a87aef7872dd3d48f3e5a6973b2839.png"
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <h4 className="text-[14px] font-bold text-[#101828] leading-tight max-w-[15vw]">Tâm lý đầu tư – Yếu tố quyết định thành công dài hạn</h4>
                                <div className="flex items-center gap-1 text-[12px] text-[#667085]">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                  <span>Thứ 6, 09 tháng 02 2026</span>
                                </div>
                              </div>
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00c694] to-[#07756d] px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                <span className="text-[10px] font-medium text-white">Sắp diễn ra</span>
                              </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="flex-1 flex flex-col gap-4 group hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] rounded-2xl p-2 -m-2 transition-all duration-500 ease-out cursor-pointer relative">
                              <div className="w-[15vw] aspect-[16/9] rounded-2xl overflow-hidden relative">
                                <img
                                  src="assets/e21fa82a2b755257e4cee2eae67bb41e385b1a5d.png"
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <h4 className="text-[14px] font-bold text-[#101828] leading-tight max-w-[15vw]">Tâm lý đầu tư – Yếu tố quyết định thành công dài hạn</h4>
                                <div className="flex items-center gap-1 text-[12px] text-[#667085]">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                  <span>Thứ 6, 09 tháng 02 2026</span>
                                </div>
                              </div>
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00c694] to-[#07756d] px-2 py-1 rounded-bl-lg rounded-tr-lg">
                                <span className="text-[10px] font-medium text-white">Sắp diễn ra</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hỗ trợ */}
                <div
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setIsSupportMenuOpen(true)}
                  onMouseLeave={() => setIsSupportMenuOpen(false)}
                >
                  <div className="flex items-center cursor-pointer group py-4" onClick={() => navigate('/support')}>
                    <span
                      className={`text-[14px] font-semibold transition-colors whitespace-nowrap ${isSupportMenuOpen || isActive('/support') ? 'text-[#00C694]' : 'text-[#344054] group-hover:text-[#00C694]'}`}
                    >
                      Hỗ trợ
                    </span>
                  </div>

                  <AnimatePresence>
                    {isSupportMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-4 w-max max-w-[90vw] bg-[#F7F9FC] rounded-[40px] shadow-[0px_8px_46px_0px_rgba(0,0,0,0.12)] border border-white/60 overflow-hidden z-50 flex"
                      >
                        {/* Sidebar Menu */}
                        <div className="bg-white w-[280px] border-r border-[#F7F9FC] p-5 flex flex-col gap-1">
                          {[
                            'Câu hỏi thường gặp',
                            'Biễu mẫu và chính sách',
                            'Liên hệ'
                          ].map((item) => (
                            <div key={item} className="flex flex-col">
                              <span className="text-[14px] font-medium text-[#101828] hover:font-bold hover:text-[#101828] hover:bg-[#00C694] px-3 py-2.5 rounded-xl transition-all cursor-pointer">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 px-8 py-5 flex flex-col h-full gap-4 justify-start">
                          <div className="flex gap-4">
                            <span className="flex-1 px-3 py-2 text-[16px] text-[#667085] font-light">Liên hệ nhanh với Kafi</span>
                          </div>

                          <div className="flex gap-4">
                            {/* Contact Card 1: Email */}
                            <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-2xl border border-[#F7F9FC] group hover:scale-[1.04] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-full h-[80px] bg-white group-hover:bg-[#C6FFD9]/50 transition-all duration-500 ease-out rounded-lg flex items-center justify-center">
                                <svg
                                  width={48}
                                  height={45}
                                  viewBox="0 0 48 45"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <foreignObject x={-8.52071} y={-8.52071} width={65.0414} height={42.4399}>
                                    <div
                                      style={{
                                        backdropFilter: "blur(4.26px)",
                                        clipPath: "url(#bgblur_0_54_5441_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </foreignObject>
                                  <path
                                    data-figma-bg-blur-radius={8.52071}
                                    d="M29.2922 1.93161L48 17.7325L24 25.3984L0 17.7325L18.7078 1.93161C21.7559 -0.643868 26.2441 -0.643868 29.2953 1.93161H29.2922Z"
                                    fill="#9AE1C9"
                                  />
                                  <path
                                    d="M12.3851 4H35.6149C38.5891 4 41 7.02263 41 10.7493V24.2507C41 27.9774 38.5891 31 35.6149 31H12.3851C9.41091 31 7 27.9774 7 24.2507V10.7493C7 7.02263 9.41091 4 12.3851 4Z"
                                    fill="url(#paint0_linear_54_5441)"
                                  />
                                  <foreignObject x={-8.52071} y={9.21171} width={65.0414} height={43.5024}>
                                    <div
                                      style={{
                                        backdropFilter: "blur(4.26px)",
                                        clipPath: "url(#bgblur_1_54_5441_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </foreignObject>
                                  <path
                                    data-figma-bg-blur-radius={8.52071}
                                    d="M47.8584 37.8496C47.8584 41.2748 45.0814 44.0517 41.6562 44.0518H6.34375C2.91858 44.0517 0.141602 41.2748 0.141602 37.8496V17.9268L23.957 25.5332L24 25.5479L24.043 25.5332L47.8584 17.9268V37.8496Z"
                                    fill="#9AE1C9"
                                    fillOpacity={0.2}
                                    stroke="url(#paint1_linear_54_5441)"
                                    strokeWidth={0.284024}
                                  />
                                  <path
                                    d="M18.4916 32.0916C17.7424 32.0916 17.1211 31.4703 17.1211 30.7211C17.1211 29.9719 17.7424 29.3506 18.4916 29.3506H29.4558C30.205 29.3506 30.8263 29.9719 30.8263 30.7211C30.8263 31.4703 30.205 32.0916 29.4558 32.0916H18.4916Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.8569 14.0809C15.1076 14.0809 14.4863 13.4596 14.4863 12.7104C14.4863 11.9611 15.1076 11.3398 15.8569 11.3398H32.5015C33.2507 11.3398 33.8721 11.9611 33.8721 12.7104C33.8721 13.4596 33.2507 14.0809 32.5015 14.0809H15.8569Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M15.8569 19.1927C15.1076 19.1927 14.4863 18.5714 14.4863 17.8222C14.4863 17.073 15.1076 16.4517 15.8569 16.4517H32.5015C33.2507 16.4517 33.8721 17.073 33.8721 17.8222C33.8721 18.5714 33.2507 19.1927 32.5015 19.1927H15.8569Z"
                                    fill="white"
                                  />
                                  <defs>
                                    <clipPath
                                      id="bgblur_0_54_5441_clip_path"
                                      transform="translate(8.52071 8.52071)"
                                    >
                                      <path d="M29.2922 1.93161L48 17.7325L24 25.3984L0 17.7325L18.7078 1.93161C21.7559 -0.643868 26.2441 -0.643868 29.2953 1.93161H29.2922Z" />
                                    </clipPath>
                                    <clipPath
                                      id="bgblur_1_54_5441_clip_path"
                                      transform="translate(8.52071 -9.21171)"
                                    >
                                      <path d="M47.8584 37.8496C47.8584 41.2748 45.0814 44.0517 41.6562 44.0518H6.34375C2.91858 44.0517 0.141602 41.2748 0.141602 37.8496V17.9268L23.957 25.5332L24 25.5479L24.043 25.5332L47.8584 17.9268V37.8496Z" />
                                    </clipPath>
                                    <linearGradient
                                      id="paint0_linear_54_5441"
                                      x1={7}
                                      y1={17.5}
                                      x2={41}
                                      y2={17.5}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00C694" />
                                      <stop offset={1} stopColor="#07756D" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_54_5441"
                                      x1={6.90775}
                                      y1={16.7874}
                                      x2={35.3419}
                                      y2={46.9025}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="white" />
                                      <stop offset={0.5} stopColor="#42C1A1" />
                                      <stop offset={1} stopColor="white" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="text-center">
                                <p className="text-[14px] font-bold text-[#101828]">Email</p>
                                <p className="text-[14px] text-[#101828]">support@kafi.vn</p>
                              </div>
                            </div>

                            {/* Contact Card 2: Phone */}
                            <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-2xl border border-[#F7F9FC] group hover:scale-[1.04] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-full h-[80px] bg-white group-hover:bg-[#C6FFD9]/50 transition-all duration-500 ease-out rounded-lg flex items-center justify-center">
                                <svg
                                  width={57}
                                  height={44}
                                  viewBox="0 0 57 44"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <foreignObject x={-8.52071} y={-1.52071} width={51.4965} height={49.9823}>
                                    <div
                                      style={{
                                        backdropFilter: "blur(4.26px)",
                                        clipPath: "url(#bgblur_0_54_5456_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </foreignObject>
                                  <path
                                    data-figma-bg-blur-radius={8.52071}
                                    d="M25.6924 34.4023H25.835C28.3889 34.4023 30.5062 33.5526 31.9717 32.0879C33.4628 30.5976 34.3135 28.4809 34.3135 25.9287V15.6152C34.3134 13.2382 33.5746 11.2402 32.2764 9.78418C30.9781 8.32834 29.1113 7.40485 26.8359 7.19238L26.8369 7.19141C26.5071 7.16605 26.1832 7.14161 25.835 7.1416L8.62012 7.1416C6.06641 7.1416 3.94901 7.99231 2.4707 9.46973C0.992476 10.9472 0.141703 13.063 0.141602 15.6152V25.9287C0.141602 26.8306 0.241323 27.6785 0.464844 28.4482H0.46582L0.466797 28.4541C1.38757 32.1095 4.41933 34.4023 8.62012 34.4023H15.5586L15.5947 34.4268L23.251 39.5195L23.2529 39.5215C24.2961 40.2397 25.6924 39.477 25.6924 38.2188V34.4023Z"
                                    fill="url(#paint0_linear_54_5456)"
                                    stroke="url(#paint1_linear_54_5456)"
                                    strokeWidth={0.284024}
                                  />
                                  <path
                                    d="M25.7158 34.4258H25.835C28.3941 34.4258 30.5169 33.5731 31.9873 32.1035C33.4832 30.6084 34.3359 28.4861 34.3359 25.9287V15.6152C34.3358 13.2332 33.5956 11.2293 32.293 9.76855C30.991 8.30867 29.12 7.38235 26.8408 7.16895L26.8398 7.16992C26.5098 7.14454 26.1846 7.11915 25.835 7.11914L8.62012 7.11914C6.0611 7.11914 3.93728 7.9717 2.4541 9.4541C0.971194 10.9364 0.118265 13.058 0.118164 15.6152V25.9287C0.118164 26.7196 0.195644 27.4695 0.365234 28.1621L0.443359 28.4551L0.444336 28.459C1.36778 32.1258 4.40976 34.4258 8.62012 34.4258H15.5518L15.582 34.4453L23.2383 39.5391L23.2402 39.54C24.2991 40.269 25.7158 39.4947 25.7158 38.2188V34.4258Z"
                                    stroke="url(#paint2_linear_54_5456)"
                                    strokeWidth={0.238372}
                                  />
                                  <circle cx={11.1809} cy={21.2053} r={2.26682} fill="white" />
                                  <circle cx={17.2258} cy={21.2053} r={2.26682} fill="white" />
                                  <circle cx={23.2688} cy={21.2053} r={2.26682} fill="white" />
                                  <foreignObject x={14.4793} y={-8.52071} width={50.1547} height={60.5551}>
                                    <div
                                      style={{
                                        backdropFilter: "blur(4.26px)",
                                        clipPath: "url(#bgblur_1_54_5456_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </foreignObject>
                                  <path
                                    data-figma-bg-blur-radius={8.52071}
                                    d="M30.498 0.756836C31.6172 0.134179 32.9369 -0.0232762 34.1709 0.319336C35.4049 0.662008 36.4538 1.4774 37.0918 2.58789L37.0938 2.58984C37.0893 2.58246 37.0881 2.57897 37.0947 2.59375C37.099 2.60328 37.1046 2.61704 37.1123 2.63477C37.128 2.671 37.1502 2.72298 37.1777 2.78809C37.233 2.91845 37.3099 3.10208 37.4014 3.32031C37.5842 3.7567 37.8251 4.33279 38.0645 4.90723C38.3039 5.48172 38.5423 6.0544 38.7207 6.4834C38.8098 6.69756 38.8836 6.87606 38.9355 7.00098C38.9615 7.06346 38.9822 7.11303 38.9961 7.14648C39.003 7.1631 39.0081 7.17594 39.0117 7.18457C39.0135 7.18889 39.0157 7.19214 39.0166 7.19434L39.0176 7.19727L39.0234 7.21094C39.6238 8.31933 39.7762 9.61585 39.4482 10.833C39.1203 12.0501 38.3376 13.0952 37.2617 13.752L37.2607 13.751L37.251 13.7588L34.8164 15.5605L34.7773 15.5898L34.7637 15.6377C33.9786 18.5678 34.4411 21.4705 35.8271 23.877C37.2078 26.2739 39.9068 28.8655 42.8359 29.6504L42.8838 29.6631L42.9287 29.6436L45.7236 28.4297L45.7354 28.4238C46.8408 27.8178 48.1373 27.6598 49.3555 27.9844C50.5736 28.309 51.6201 29.0912 52.2773 30.167L52.2852 30.1787C52.2855 30.1792 52.2874 30.1807 52.2881 30.1816C52.2895 30.1835 52.2912 30.1868 52.2939 30.1904C52.2996 30.1978 52.3084 30.2084 52.3193 30.2227C52.3414 30.2514 52.3739 30.2939 52.415 30.3477C52.4973 30.4552 52.6147 30.6094 52.7559 30.7939C53.0382 31.1631 53.415 31.6558 53.793 32.1504C54.1711 32.6452 54.551 33.1419 54.8379 33.5186C54.9813 33.7068 55.101 33.8656 55.1865 33.9785C55.2292 34.0349 55.2634 34.0796 55.2871 34.1113C55.299 34.1272 55.3081 34.1398 55.3145 34.1484L55.3193 34.1543C55.9658 35.279 56.1405 36.6141 55.8047 37.8672C55.4687 39.1211 54.6487 40.1901 53.5254 40.8408L53.5176 40.8467L51.6445 42.1094C47.6625 44.2892 43.2553 43.4927 39.1016 40.8838C34.9443 38.2725 31.0617 33.8569 28.166 28.8564C25.2704 23.8561 23.3698 18.2842 23.1611 13.3691C22.9527 8.45688 24.4326 4.22294 28.2695 1.84277L30.4912 0.760742L30.498 0.756836Z"
                                    fill="#9AE1C9"
                                    fillOpacity={0.2}
                                    stroke="url(#paint3_linear_54_5456)"
                                    strokeWidth={0.284024}
                                  />
                                  <defs>
                                    <clipPath
                                      id="bgblur_0_54_5456_clip_path"
                                      transform="translate(8.52071 1.52071)"
                                    >
                                      <path d="M25.6924 34.4023H25.835C28.3889 34.4023 30.5062 33.5526 31.9717 32.0879C33.4628 30.5976 34.3135 28.4809 34.3135 25.9287V15.6152C34.3134 13.2382 33.5746 11.2402 32.2764 9.78418C30.9781 8.32834 29.1113 7.40485 26.8359 7.19238L26.8369 7.19141C26.5071 7.16605 26.1832 7.14161 25.835 7.1416L8.62012 7.1416C6.06641 7.1416 3.94901 7.99231 2.4707 9.46973C0.992476 10.9472 0.141703 13.063 0.141602 15.6152V25.9287C0.141602 26.8306 0.241323 27.6785 0.464844 28.4482H0.46582L0.466797 28.4541C1.38757 32.1095 4.41933 34.4023 8.62012 34.4023H15.5586L15.5947 34.4268L23.251 39.5195L23.2529 39.5215C24.2961 40.2397 25.6924 39.477 25.6924 38.2188V34.4023Z" />
                                    </clipPath>
                                    <clipPath
                                      id="bgblur_1_54_5456_clip_path"
                                      transform="translate(-14.4793 8.52071)"
                                    >
                                      <path d="M30.498 0.756836C31.6172 0.134179 32.9369 -0.0232762 34.1709 0.319336C35.4049 0.662008 36.4538 1.4774 37.0918 2.58789L37.0938 2.58984C37.0893 2.58246 37.0881 2.57897 37.0947 2.59375C37.099 2.60328 37.1046 2.61704 37.1123 2.63477C37.128 2.671 37.1502 2.72298 37.1777 2.78809C37.233 2.91845 37.3099 3.10208 37.4014 3.32031C37.5842 3.7567 37.8251 4.33279 38.0645 4.90723C38.3039 5.48172 38.5423 6.0544 38.7207 6.4834C38.8098 6.69756 38.8836 6.87606 38.9355 7.00098C38.9615 7.06346 38.9822 7.11303 38.9961 7.14648C39.003 7.1631 39.0081 7.17594 39.0117 7.18457C39.0135 7.18889 39.0157 7.19214 39.0166 7.19434L39.0176 7.19727L39.0234 7.21094C39.6238 8.31933 39.7762 9.61585 39.4482 10.833C39.1203 12.0501 38.3376 13.0952 37.2617 13.752L37.2607 13.751L37.251 13.7588L34.8164 15.5605L34.7773 15.5898L34.7637 15.6377C33.9786 18.5678 34.4411 21.4705 35.8271 23.877C37.2078 26.2739 39.9068 28.8655 42.8359 29.6504L42.8838 29.6631L42.9287 29.6436L45.7236 28.4297L45.7354 28.4238C46.8408 27.8178 48.1373 27.6598 49.3555 27.9844C50.5736 28.309 51.6201 29.0912 52.2773 30.167L52.2852 30.1787C52.2855 30.1792 52.2874 30.1807 52.2881 30.1816C52.2895 30.1835 52.2912 30.1868 52.2939 30.1904C52.2996 30.1978 52.3084 30.2084 52.3193 30.2227C52.3414 30.2514 52.3739 30.2939 52.415 30.3477C52.4973 30.4552 52.6147 30.6094 52.7559 30.7939C53.0382 31.1631 53.415 31.6558 53.793 32.1504C54.1711 32.6452 54.551 33.1419 54.8379 33.5186C54.9813 33.7068 55.101 33.8656 55.1865 33.9785C55.2292 34.0349 55.2634 34.0796 55.2871 34.1113C55.299 34.1272 55.3081 34.1398 55.3145 34.1484L55.3193 34.1543C55.9658 35.279 56.1405 36.6141 55.8047 37.8672C55.4687 39.1211 54.6487 40.1901 53.5254 40.8408L53.5176 40.8467L51.6445 42.1094C47.6625 44.2892 43.2553 43.4927 39.1016 40.8838C34.9443 38.2725 31.0617 33.8569 28.166 28.8564C25.2704 23.8561 23.3698 18.2842 23.1611 13.3691C22.9527 8.45688 24.4326 4.22294 28.2695 1.84277L30.4912 0.760742L30.498 0.756836Z" />
                                    </clipPath>
                                    <linearGradient
                                      id="paint0_linear_54_5456"
                                      x1={34.4551}
                                      y1={23.4706}
                                      x2={-0.000617981}
                                      y2={23.4706}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00C694" />
                                      <stop offset={1} stopColor="#07756D" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_54_5456"
                                      x1={29.4965}
                                      y1={5.82353}
                                      x2={-2.0456}
                                      y2={25.0866}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="white" stopOpacity={0.1} />
                                      <stop offset={0.5} stopColor="#42C1A1" />
                                      <stop offset={1} stopColor="white" stopOpacity={0.523483} />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint2_linear_54_5456"
                                      x1={29.4965}
                                      y1={5.82353}
                                      x2={-2.0456}
                                      y2={25.0866}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="white" stopOpacity={0.1} />
                                      <stop offset={0.5} stopColor="white" />
                                      <stop offset={1} stopColor="white" stopOpacity={0.523483} />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint3_linear_54_5456"
                                      x1={32.0259}
                                      y1={-1.84394}
                                      x2={61.8121}
                                      y2={28.2339}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="white" />
                                      <stop offset={0.5} stopColor="#42C1A1" />
                                      <stop offset={1} stopColor="white" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="text-center">
                                <p className="text-[14px] font-bold text-[#101828]">Điện thoại</p>
                                <p className="text-[14px] text-[#101828]">1900 633 322</p>
                              </div>
                            </div>

                            {/* Contact Card 3: HQ */}
                            <div className="flex-1 flex flex-col items-center gap-4 p-4 rounded-2xl border border-[#F7F9FC] group hover:scale-[1.04] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,198,148,0.20)] transition-all duration-500 ease-out cursor-pointer">
                              <div className="w-full h-[80px] bg-white group-hover:bg-[#C6FFD9]/50 transition-all duration-500 ease-out rounded-lg flex items-center justify-center">
                                <svg
                                  width={43}
                                  height={44}
                                  viewBox="0 0 43 44"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <ellipse cx={12} cy={39.5} rx={6} ry={1.5} fill="#9AE1C9" />
                                  <path
                                    d="M10.75 38.3444C11.3125 39.2185 12.625 39.2185 13.1875 38.3444C22.3125 25.2322 24 23.8585 24 18.9883C24 12.3698 18.625 7 12 7C5.3125 7 0 12.3698 0 18.9883C0 23.8585 1.625 25.2322 10.75 38.3444Z"
                                    fill="url(#paint0_linear_54_5472)"
                                  />
                                  <ellipse
                                    cx={26.3616}
                                    cy={41.3618}
                                    rx={8.17021}
                                    ry={2.55319}
                                    fill="#9AE1C9"
                                  />
                                  <foreignObject x={2.05156} y={-8.52071} width={49.0942} height={58.5204}>
                                    <div
                                      style={{
                                        backdropFilter: "blur(4.26px)",
                                        clipPath: "url(#bgblur_0_54_5472_clip_path)",
                                        height: "100%",
                                        width: "100%",
                                      }}
                                    />
                                  </foreignObject>
                                  <path
                                    data-figma-bg-blur-radius={8.52071}
                                    d="M26.5986 0.141602C35.3717 0.141792 42.4822 7.04281 42.4824 15.5391C42.4824 17.1081 42.3426 18.3887 41.9463 19.6914C41.5496 20.9953 40.8933 22.3292 39.8535 24.0029C37.7701 27.3565 34.1664 32.042 28.0684 40.5469L28.0654 40.5508C27.3921 41.5661 25.8434 41.5982 25.1152 40.6465L25.0469 40.5508L25.0439 40.5469L22.874 37.5312C18.0751 30.8913 15.1063 26.9379 13.3018 24.0039C12.2724 22.3303 11.6273 20.9963 11.2383 19.6924C10.8496 18.3894 10.7139 17.1086 10.7139 15.5391C10.7141 7.04222 17.7424 0.141602 26.5986 0.141602Z"
                                    fill="#9AE1C9"
                                    fillOpacity={0.2}
                                    stroke="url(#paint1_linear_54_5472)"
                                    strokeWidth={0.284024}
                                  />
                                  <circle
                                    cx={26.765}
                                    cy={15.4373}
                                    r={6.59894}
                                    stroke="white"
                                    strokeWidth={3.06383}
                                  />
                                  <defs>
                                    <clipPath
                                      id="bgblur_0_54_5472_clip_path"
                                      transform="translate(-2.05156 8.52071)"
                                    >
                                      <path d="M26.5986 0.141602C35.3717 0.141792 42.4822 7.04281 42.4824 15.5391C42.4824 17.1081 42.3426 18.3887 41.9463 19.6914C41.5496 20.9953 40.8933 22.3292 39.8535 24.0029C37.7701 27.3565 34.1664 32.042 28.0684 40.5469L28.0654 40.5508C27.3921 41.5661 25.8434 41.5982 25.1152 40.6465L25.0469 40.5508L25.0439 40.5469L22.874 37.5312C18.0751 30.8913 15.1063 26.9379 13.3018 24.0039C12.2724 22.3303 11.6273 20.9963 11.2383 19.6924C10.8496 18.3894 10.7139 17.1086 10.7139 15.5391C10.7141 7.04222 17.7424 0.141602 26.5986 0.141602Z" />
                                    </clipPath>
                                    <linearGradient
                                      id="paint0_linear_54_5472"
                                      x1={13.198}
                                      y1={11.1986}
                                      x2={13.8537}
                                      y2={39.0012}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#00C694" />
                                      <stop offset={1} stopColor="#07756D" />
                                    </linearGradient>
                                    <linearGradient
                                      id="paint1_linear_54_5472"
                                      x1={15.1849}
                                      y1={-1.4814}
                                      x2={48.6567}
                                      y2={13.62}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="white" />
                                      <stop offset={0.5} stopColor="#42C1A1" />
                                      <stop offset={1} stopColor="white" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                              <div className="text-center">
                                <p className="text-[14px] font-bold text-[#101828]">Trụ sở</p>
                                <p className="text-[14px] text-[#101828]">Xem bản đồ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500"><path d="M15 10V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H10M15 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V5M15 6V5M19 15V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15M1 5V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5M5 15H5.01M5 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V15M6 5H9C9.55228 5 10 5.44772 10 6V9C10 9.55228 9.55228 10 9 10H6C5.44772 10 5 9.55228 5 9V6C5 5.44772 5.44772 5 6 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="h-12 px-8 bg-gray-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 text-[15px] font-light">Đăng nhập</span>
              </div>

              {/* Sign Up Button */}
              <div className="h-11 pl-4 pr-2.5 bg-[#00C694] hover:bg-[#00B07A] rounded-[32px] flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-[#00C694]/20 group">
                <span className="text-[#101828] text-[16px] font-light leading-[20px]">Mở tài khoản</span>
                <div className="size-5 bg-[#073038] rounded-full flex items-center justify-center transition-colors">
                  <svg width="12" height="12" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-45">
                    <path d="M0.833333 5.83333L5.83332 0.833333M5.83332 0.833333L10.8333 5.83333M5.83332 0.833333V14.1667" stroke="#0AE685" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
