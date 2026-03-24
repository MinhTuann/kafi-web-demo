import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StocksPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Đầu tư tăng trưởng');
  const [activeCategory, setActiveCategory] = useState('Đầu tư tăng trưởng');
  const [activeFeeTab, setActiveFeeTab] = useState('Cổ phiếu niêm yết');
  const [activeGrowthProduct, setActiveGrowthProduct] = useState('Cổ phiếu');

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
      {/* Refined Two-Row Header */}
      <header className="w-full z-20">
        {/* Top Row: Sub-navigation */}
        <div className="px-4 lg:px-6 bg-[#073038]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center py-2 px-6 text-white/70"
          >
            <div className="flex items-center gap-6 relative">
              <div className="relative group cursor-pointer">
                <span className="text-[13px] font-semibold text-white">Khách hàng cá nhân</span>
                {/* Pointer/Indicator Triangle */}
                <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white z-30" />
              </div>
              <span className="text-[13px] font-medium hover:text-white transition-colors cursor-pointer">Khách hàng tổ chức</span>
              <span className="text-[13px] font-medium hover:text-white transition-colors cursor-pointer">Quản lý gia sản</span>
              <span className="text-[13px] font-medium hover:text-white transition-colors cursor-pointer">Ngân hàng đầu tư</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <span className="text-[13px] font-medium text-white hover:text-[#00C694] transition-colors cursor-pointer">Về Kafi</span>
              <span className="text-[13px] font-medium text-white hover:text-[#00C694] transition-colors cursor-pointer">Quan hệ cổ đông</span>
              <span className="text-[13px] font-medium text-white hover:text-[#00C694] transition-colors cursor-pointer">Cơ hội sự nghiệp</span>

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
        </div>

        {/* Main Row: Primary Navigation Bar */}
        <div className="px-4 lg:px-6">
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
                  <span className="text-[15px] font-semibold text-Grayscale-Black/80 hover:text-Green-D2 transition-colors cursor-pointer">Sản phẩm & dịch vụ</span>
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

      {/* Stocks Banner Section */}
      <div className="w-full px-4 lg:px-6 pt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[48px]"
        >
          <img
            src="assets/stocks-banner.png"
            alt="Stocks Banner"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Benefits Section - Three feature cards */}
      <section className="px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Giao dịch thông minh',
              desc: 'Nền tảng hiện đại, tốc độ thực thi lệnh mili giây.',
              icon: (
                <div className="size-12 bg-[#D1FAE5] rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A382" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2" /><path d="m16 16-4 4-4-4" /><path d="M12 12v8" /></svg>
                </div>
              )
            },
            {
              title: 'Tối ưu chi phí',
              desc: 'Phí giao dịch cực thấp, miễn phí nạp rút tiền.',
              icon: (
                <div className="size-12 bg-[#D1FAE5] rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A382" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                </div>
              )
            },
            {
              title: 'Phân tích chuyên sâu',
              desc: 'Báo cáo thị trường từ đội ngũ chuyên gia hàng đầu.',
              icon: (
                <div className="size-12 bg-[#D1FAE5] rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A382" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="m13 13 6 6" /></svg>
                </div>
              )
            }
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-start gap-4"
            >
              {benefit.icon}
              <h4 className="text-xl font-bold text-[#000000]">{benefit.title}</h4>
              <p className="text-[#4A5568] text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Features Section (New Section from Screenshot) */}
      <section className="px-4 lg:px-6 h-dvh flex flex-col items-center gap-2 py-4">
        {/* Floating Tab Bar */}
        <div className="flex justify-center w-full overflow-x-auto no-scrollbar py-3">
          <div className="bg-white/20 backdrop-blur-[20px] rounded-[33px] p-1.5 flex items-center shrink-0 border border-white/30">
            {[
              {
                id: 'Đầu tư tăng trưởng', icon: (
                  <div className="size-6 bg-[#073038] rounded-full flex items-center justify-center">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.25 10.75L8.75 3.25M8.75 3.25H2.625M8.75 3.25V9.375" stroke="#0AE685" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )
              },
              {
                id: 'Tích lũy bền vững', icon: (
                  <svg width="24" height="24" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9999 4.09961C17.1363 4.09986 18.8697 5.81835 18.8974 7.94824C18.9678 7.94525 19.0384 7.94234 19.1093 7.94434C19.9051 7.96685 20.6601 8.30516 21.207 8.88379C21.7536 9.4624 22.0478 10.2346 22.0253 11.0303C22.0028 11.8242 21.6659 12.5756 21.0898 13.1221L21.0907 13.123L16.5136 17.5C15.6005 18.5173 14.3285 19 12.9999 19H8.99992C8.61182 19 8.45721 19.1245 8.40032 19.2002C8.35868 19.2557 8.31091 19.3068 8.25871 19.3525L7.46282 20.0488L7.70696 20.293C8.09743 20.6835 8.09743 21.3165 7.70696 21.707C7.31644 22.0975 6.68342 22.0975 6.29289 21.707L0.292893 15.707C-0.0976311 15.3165 -0.0976311 14.6835 0.292893 14.293C0.683421 13.9025 1.31644 13.9025 1.70696 14.293L2.01164 14.5977L6.86223 9.92188C7.40648 9.25618 8.21858 9 8.99992 9H11.2294C11.1449 8.68083 11.0996 8.34573 11.0995 8C11.0995 5.84609 12.846 4.09961 14.9999 4.09961ZM19.0536 9.94336C18.8213 9.93679 18.5944 10.0114 18.412 10.1523L18.33 10.2227L17.7724 10.7402C17.6933 10.8202 17.611 10.8968 17.5253 10.9697L14.1308 14.123C14.0984 14.1531 14.0633 14.1791 14.0282 14.2041C13.4757 14.7127 12.754 15 11.9999 15H9.99992C9.44764 15 8.99992 14.5523 8.99992 14C8.99992 13.4477 9.44764 13 9.99992 13H11.9999C12.2651 13 12.5194 12.8946 12.707 12.707C12.8945 12.5195 12.9999 12.2652 12.9999 12C12.9999 11.7348 12.8945 11.4805 12.707 11.293C12.5194 11.1054 12.2651 11 11.9999 11H8.99992C8.61152 11 8.4571 11.1245 8.40032 11.2002C8.36829 11.2429 8.33229 11.2833 8.29387 11.3203L3.42668 16.0127L6.04485 18.6309L6.87883 17.9014C7.42292 17.2509 8.22666 17 8.99992 17H12.9999C13.8529 17 14.5634 16.6952 15.0478 16.1416L15.1083 16.0771L19.7089 11.6777L19.7128 11.6738C19.9059 11.4913 20.0188 11.2392 20.0263 10.9736C20.0338 10.708 19.9353 10.45 19.7529 10.2568C19.5705 10.064 19.319 9.95098 19.0536 9.94336ZM14.9999 6.09961C13.9506 6.09961 13.0995 6.95066 13.0995 8C13.0997 9.04916 13.9507 9.89941 14.9999 9.89941C15.4563 9.8993 15.8746 9.73792 16.2021 9.46973L16.3593 9.32324C16.6924 8.98108 16.8992 8.5153 16.8993 8C16.8993 6.95081 16.049 6.09986 14.9999 6.09961ZM4.99992 0C7.20903 4.07808e-05 8.99992 1.79089 8.99992 4C8.99992 6.20911 7.20903 7.99996 4.99992 8C2.79079 8 0.999924 6.20914 0.999924 4C0.999924 1.79086 2.79079 0 4.99992 0ZM4.99992 2C3.89535 2 2.99992 2.89543 2.99992 4C2.99992 5.10457 3.89535 6 4.99992 6C6.10446 5.99996 6.99992 5.10454 6.99992 4C6.99992 2.89546 6.10446 2.00004 4.99992 2Z" fill="#344054" />
                  </svg>
                )
              },
              {
                id: 'Dịch vụ tài chính', icon: (
                  <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM11 4C11.5523 4 12 4.44772 12 5V6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H12V10H13C13.7957 10 14.5585 10.3163 15.1211 10.8789C15.6837 11.4415 16 12.2044 16 13C16 13.7957 15.6837 14.5585 15.1211 15.1211C14.5585 15.6837 13.7957 16 13 16H12V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V16H7C6.44772 16 6 15.5523 6 15C6 14.4477 6.44772 14 7 14H10V12H9C8.20435 12 7.44151 11.6837 6.87891 11.1211C6.3163 10.5585 6 9.79565 6 9C6 8.20435 6.3163 7.44151 6.87891 6.87891C7.44151 6.3163 8.20435 6 9 6H10V5C10 4.44772 10.4477 4 11 4ZM12 14H13C13.2652 14 13.5195 13.8946 13.707 13.707C13.8946 13.5195 14 13.2652 14 13C14 12.7348 13.8946 12.4805 13.707 12.293C13.5195 12.1054 13.2652 12 13 12H12V14ZM9 8C8.73478 8 8.48051 8.10543 8.29297 8.29297C8.10543 8.48051 8 8.73478 8 9C8 9.26522 8.10543 9.5195 8.29297 9.70703C8.48051 9.89457 8.73478 10 9 10H10V8H9Z" fill="#344054" />
                  </svg>
                )
              },
              {
                id: 'Nền tảng giao dịch', icon: (
                  <svg width="24" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8C20.6569 8 22 9.34315 22 11V17C22 18.6569 20.6569 20 19 20H17C15.3431 20 14 18.6569 14 17V11C14 9.34315 15.3431 8 17 8H19ZM17 10C16.4477 10 16 10.4477 16 11V17C16 17.5523 16.4477 18 17 18H19C19.5523 18 20 17.5523 20 17V11C20 10.4477 19.5523 10 19 10H17ZM15 0C15.7956 0 16.5585 0.316297 17.1211 0.878906C17.6837 1.44152 18 2.20435 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.73478 15.8946 2.48051 15.707 2.29297C15.5195 2.10543 15.2652 2 15 2H3C2.73478 2 2.4805 2.10543 2.29297 2.29297C2.10543 2.4805 2 2.73478 2 3V10C2 10.2652 2.10543 10.5195 2.29297 10.707C2.48051 10.8946 2.73478 11 3 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H10V15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H6C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15H8V13H3C2.20435 13 1.44152 12.6837 0.878906 12.1211C0.316297 11.5585 0 10.7956 0 10V3C0 2.20435 0.316297 1.44152 0.878906 0.878906C1.44152 0.316297 2.20435 0 3 0H15Z" fill="#344054" />
                  </svg>
                )
              }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-14 px-4 py-2.5 rounded-[28px] flex items-center gap-2 text-sm leading-5 transition-colors ${activeTab === tab.id
                  ? 'bg-white text-[#106070] font-bold'
                  : 'text-[#344054] font-normal hover:bg-white/60'
                  }`}
              >
                {tab.icon}
                <span className="whitespace-nowrap leading-5">{tab.id}</span>
              </button>
            ))}
            <div className="pl-6 flex items-center">
              <button className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-[#344054] hover:bg-gray-50 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="w-full pt-4">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1.6fr] gap-6">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 relative overflow-hidden min-h-[560px] border border-[#F7F9FC]">
              <div className="relative z-10 max-w-[370px] pt-8">
                <h2 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#073038]">
                  Đầu tư <br />
                  tăng trưởng
                </h2>
                <p className="mt-6 text-[16px] lg:text-[18px] leading-7 text-[#073038]">
                  Kafi cung cấp các sản phẩm đầu tư tăng trưởng phù hợp với từng nhu cầu và mức độ kinh nghiệm của nhà đầu tư – từ cổ phiếu cơ sở đến các sản phẩm có đòn bẩy và giải pháp đầu tư theo mục tiêu.
                </p>
              </div>

              <img
                src="https://www.figma.com/api/mcp/asset/d055b7c5-c7d4-408d-8b0e-a58b307be370"
                alt=""
                className="absolute -top-6 right-8 w-[220px] opacity-85 blur-[1px] pointer-events-none"
              />
              <img
                src="https://www.figma.com/api/mcp/asset/de398579-30eb-432b-9877-1bfdbf3706f4"
                alt=""
                className="absolute -bottom-14 -left-14 w-[260px] opacity-20 blur-[2px] pointer-events-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cổ phiếu',
                  image: 'https://www.figma.com/api/mcp/asset/dd8dd31d-b3c8-401d-b54c-2bb3a71bfc0b'
                },
                {
                  title: 'Phái sinh',
                  image: 'https://www.figma.com/api/mcp/asset/9a804233-b19c-45d2-94c1-bd284881fee4'
                },
                {
                  title: 'Chứng quyền',
                  image: 'https://www.figma.com/api/mcp/asset/2cd16ccf-2ee9-45b8-9ed8-9285645b2cb7'
                },
                {
                  title: 'Đầu tư mục tiêu GBI',
                  image: 'https://www.figma.com/api/mcp/asset/a17ab63d-46a6-407d-b19f-4a4e9155c6e1'
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[32px] border border-[#F7F9FC] p-6 lg:p-8 min-h-[268px] flex flex-col"
                >
                  <h3 className="text-[32px] leading-[1] font-bold text-[#101828]">{item.title}</h3>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[130px] lg:max-h-[150px] w-auto object-contain"
                    />
                  </div>
                  <button className="h-11 px-4 rounded-[32px] bg-[#101820] text-[#F7F9FC] text-base font-medium flex items-center gap-1.5 self-start hover:bg-[#073038] transition-colors">
                    Tìm hiểu thêm
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#F7F9FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Product Navigation Section */}
      <section className="px-4 lg:px-6 pt-16 pb-10">
        <div className="max-w-[980px] mx-auto flex flex-col items-center gap-6">
          <h2 className="text-center text-[#101828] text-[38px] lg:text-[48px] leading-[1.18] lg:leading-[56px] font-bold">
            Khám phá các sản phẩm
            <br />
            đầu tư tăng trưởng
          </h2>

          <div className="bg-white/85 backdrop-blur-[20px] rounded-[60px] p-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full justify-start lg:justify-center">
            {['Cổ phiếu', 'Phái sinh', 'Chứng quyền', 'Đầu tư mục tiêu GBI'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveGrowthProduct(item)}
                className={`px-5 py-4 rounded-[58px] text-base leading-6 whitespace-nowrap transition-colors ${activeGrowthProduct === item
                  ? 'bg-[#00C694] text-[#101828] font-semibold'
                  : 'text-[#101828] font-normal hover:bg-[#F1F5F3]'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Product Detail Section */}
      <section className="px-4 lg:px-6 pb-12">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-8 lg:p-12 border border-[#F7F9FC]">
              <h3 className="text-[42px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Cổ phiếu</h3>
              <p className="mt-4 text-[16px] lg:text-[18px] leading-[26px] text-[#101828] max-w-[520px]">
                Đầu tư cổ phiếu mang lại cơ hội tăng trưởng dài hạn thông qua việc sở hữu một phần doanh nghiệp niêm yết trên thị trường chứng khoán.
              </p>
              <div className="mt-8 space-y-4 max-w-[560px]">
                {[
                  'Phù hợp với nhà đầu tư muốn tăng trưởng tài sản theo thời gian',
                  'Thanh khoản cao, dễ tiếp cận',
                  'Đa dạng ngành nghề và quy mô doanh nghiệp'
                ].map((line) => (
                  <div key={line} className="pb-4 border-b border-[#DDE2EC] last:border-b-0 last:pb-0 flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 size-8 rounded-full bg-[#106070] text-white flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[16px] lg:text-[18px] leading-[26px] text-[#101828] font-semibold">{line}</p>
                  </div>
                ))}
              </div>
              <button className="mt-8 h-11 px-4 rounded-[32px] bg-[#101820] text-[#F7F9FC] text-base font-medium flex items-center gap-1.5 hover:bg-[#073038] transition-colors">
                Đầu tư ngay
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#F7F9FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-[32px] p-6 lg:p-10 border border-[#F7F9FC] relative overflow-hidden min-h-[560px]">
              <div className="absolute inset-6 rounded-[24px] bg-gradient-to-b from-[#00C694] to-[#CCFCFF]" />
              <img
                src="https://www.figma.com/api/mcp/asset/0982f57c-caa3-45ca-80cf-44abb8cb25f6"
                alt=""
                className="absolute right-[22%] top-10 h-[82%] object-contain drop-shadow-2xl"
              />
              <div className="absolute right-10 top-[45%] bg-gradient-to-b from-[#C4FFA6] to-[#C6FFD9] shadow-[0_14px_24px_rgba(0,0,0,0.15)] rounded-[20px] px-4 py-3 flex items-center gap-2">
                <span className="text-[#101820] font-bold">+8.09%</span>
                <div className="size-6 rounded-full bg-[#073038] flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M3.02332 1.00012L9.09288 1.00011M9.09288 1.00011L9.09289 7.06969M9.09288 1.00011L1.00012 9.09287" stroke="#0AE685" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute right-6 bottom-6 w-[220px] rounded-[20px] border border-[#282D31] bg-[#161A1D] p-3 shadow-[0_4px_34px_rgba(0,0,0,0.25)]">
                <img src="https://www.figma.com/api/mcp/asset/7f01f3d1-0fcc-4766-a467-872415b694ba" alt="" className="w-full rounded-lg" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[48px] p-8 lg:p-14 space-y-8">
            <div className="text-center">
              <h3 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Đặc quyền vượt trội tại Kafi</h3>
              <p className="mt-2 text-[16px] lg:text-[18px] leading-[26px] text-[#667085]">Khám phá những đặc quyền nổi bật dành cho nhà đầu tư cổ phiếu tại Kafi.</p>
            </div>
            <div className="rounded-[24px] overflow-hidden bg-gradient-to-b from-white via-white to-[#A9FBCE]">
              <img src="https://www.figma.com/api/mcp/asset/20fe8fe0-1e25-47a6-b6ea-04639de7ca84" alt="" className="w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: 'Nền tảng giao dịch thông minh', desc: 'Hệ thống ổn định, tốc độ xử lý nhanh cùng công cụ theo dõi và quản lý danh mục ngay trên Kafi X.' },
                { title: 'Chi phí giao dịch tối ưu', desc: 'Mức phí cạnh tranh, linh hoạt theo từng giai đoạn và nhu cầu đầu tư, giúp tối ưu hiệu quả sinh lời.' },
                { title: 'Phân tích & tư vấn chuyên sâu', desc: 'Mức phí cạnh tranh, linh hoạt theo từng giai đoạn và nhu cầu đầu tư, giúp tối ưu hiệu quả sinh lời.' }
              ].map((f) => (
                <div key={f.title} className="bg-[#F7F9FC] rounded-[24px] p-5">
                  <h4 className="text-[22px] lg:text-[24px] leading-[32px] font-bold text-[#101828]">{f.title}</h4>
                  <p className="mt-2 text-[16px] leading-[24px] text-[#667085]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[48px] p-8 lg:p-14 space-y-8">
            <div>
              <h3 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Biểu phí & Chính sách</h3>
              <p className="mt-2 text-[16px] lg:text-[18px] leading-[26px] text-[#667085] max-w-3xl">Chi tiết biểu phí và chính sách áp dụng cho từng sản phẩm giao dịch tại Kafi, được cập nhật theo từng thời kỳ.</p>
            </div>
            <div className="border-t border-[#DDE2EC] pt-6 grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6">
              <div className="space-y-1">
                <button className="w-full h-11 rounded-xl bg-[#00C694] text-left px-4 font-semibold text-[#101828] flex items-center justify-between">
                  Biểu phí
                  <span>↗</span>
                </button>
                {['Lãi suất không kỳ hạn*', 'Dịch vụ lưu ký', 'Chuyển quyền sở hữu chứng khoán ngoài hệ thống giao dịch', 'Giao dịch chứng khoán phái sinh'].map((m) => (
                  <button key={m} className="w-full rounded-xl px-3 py-2.5 text-left text-[#101828] hover:bg-[#F7F9FC]">{m}</button>
                ))}
              </div>
              <div className="border border-[#D0D5DD] rounded-3xl overflow-hidden">
                <div className="h-16 bg-[#0B756E] text-white text-center flex items-center justify-center">Biểu phí giao dịch qua sàn</div>
                <div className="p-5">
                  <table className="w-full text-sm lg:text-base">
                    <thead>
                      <tr className="border-b border-dashed border-[#106070]/60 text-[#106070]">
                        <th className="text-left py-3 font-normal text-[#101828]">Loại chứng khoán</th>
                        <th className="py-3 font-semibold">Khách hàng chủ động giao dịch</th>
                        <th className="py-3 font-semibold">Khách hàng có nhân viên tư vấn đầu tư</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-dashed border-[#106070]/60">
                        <td className="py-4 text-[#101828]">Cổ phiếu / Chứng chỉ Quỹ / Chứng quyền (*)</td>
                        <td className="py-4 text-center text-[#106070] font-bold text-xl">0,10%</td>
                        <td className="py-4 text-center text-[#106070] font-bold text-xl">0,15%</td>
                      </tr>
                      <tr>
                        <td className="py-4 text-[#101828]">Trái phiếu</td>
                        <td className="py-4 text-center text-[#106070] font-bold text-xl">0,10%</td>
                        <td className="py-4 text-center text-[#106070] font-bold text-xl">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[48px] overflow-hidden bg-[linear-gradient(59deg,#fff_50%,#bbfba9_72%,rgba(1,194,127,.5)_95%)] p-8 lg:p-14">
            <div className="max-w-[720px]">
              <h3 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Bắt đầu đầu tư ngay hôm nay</h3>
              <p className="mt-3 text-[16px] lg:text-[18px] leading-[26px] text-[#667085]">Mở tài khoản hoặc tải ứng dụng Kafi X để khám phá các cơ hội đầu tư.</p>
              <button className="mt-8 h-14 px-6 rounded-[32px] bg-[#101820] text-[#F7F9FC] text-[18px] font-medium flex items-center gap-2 hover:bg-[#073038] transition-colors">
                Mở Tài khoản Kafi X
                <span>↗</span>
              </button>
            </div>
            <img src="https://www.figma.com/api/mcp/asset/0982f57c-caa3-45ca-80cf-44abb8cb25f6" alt="" className="hidden lg:block absolute right-14 top-3 h-[420px] object-contain" />
            <div className="hidden lg:flex absolute right-16 bottom-8 bg-white border-[6px] border-[#F2F4F5CC] rounded-[18px] px-4 py-3 items-center gap-4">
              <span className="font-bold text-[#101828]">Thu nhập</span>
              <span className="font-bold text-[#0B756E]">+168,000,000 đ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Cards - "Ưu đãi từ Kafi" */}
      <section className="py-20 space-y-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Ưu đãi từ Kafi</h2>
              <p className="mt-2 text-[16px] lg:text-[18px] leading-[26px] text-[#101828]">Khám phá các ưu đãi hỗ trợ nhà đầu tư từ Kafi</p>
            </div>
            <button className="h-11 px-4 rounded-[32px] bg-[#101820] text-[#F7F9FC] text-base font-medium flex items-center gap-1.5 hover:bg-[#073038] transition-colors">
              Xem tất cả
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#F7F9FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: 'Miễn phí gói vay ký quỹ Margin',
                desc: 'Miễn phí lãi vay margin cho khách hàng có dư nợ lên đến 100,000,000 VND.',
                badge: 'Ưu đãi giao dịch',
                image: 'https://www.figma.com/api/mcp/asset/b82289d0-b8c3-4b0f-bc12-aed2058c2e10',
                cardClass: 'bg-gradient-to-b from-[#0AE685] via-[#01B68C] to-[#07756D]'
              },
              {
                title: 'Mở app mới. Mở vận năm mới',
                desc: 'Hoàn 100% phí giao dịch trong 30 ngày đầu tiên. Nhận thêm lì xì lên đến 100,000 VND.',
                badge: 'Ưu đãi giao dịch',
                image: 'https://www.figma.com/api/mcp/asset/b70fdb08-98d7-4d30-9f79-151dc8674880',
                cardClass: 'bg-[#FFFAD4]'
              },
              {
                title: 'Đại tiệc không phí - Đầu tư hết ý',
                desc: 'Giới thiệu thành công 03 bạn mới mở tài khoản để kích hoạt ưu đãi miễn phí giao dịch.',
                badge: 'Ưu đãi giao dịch',
                image: 'https://www.figma.com/api/mcp/asset/e5e76f87-2b8f-4976-bcc2-e4b14cc755c6',
                cardClass: 'bg-[#C6FFD9]'
              }
            ].map((promo) => (
              <div key={promo.title} className={`rounded-[24px] border border-[#DDE2EC] overflow-hidden min-h-[520px] flex flex-col ${promo.cardClass}`}>
                <div className="relative h-[290px]">
                  <img src={promo.image} alt={promo.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="backdrop-blur-[20px] bg-gradient-to-b from-transparent to-black/15 px-6 py-5 mt-auto">
                  <span className="inline-flex px-2 py-1 rounded-[40px] text-xs bg-[#073038] text-white">{promo.badge}</span>
                  <h3 className="mt-3 text-2xl font-bold leading-8 text-[#101828]">{promo.title}</h3>
                  <p className="mt-2 text-base leading-6 text-[#101828] line-clamp-3">{promo.desc}</p>
                  <button className="mt-4 text-[16px] font-semibold text-[#101828] flex items-center gap-1.5">
                    Khám phá ngay
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#101828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
              <span className="size-1.5 rounded-full bg-[#101828]" />
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
            </div>
            <div className="flex items-center gap-3">
              <button className="size-11 rounded-full bg-[#EBEFF5] text-[#101828] flex items-center justify-center">‹</button>
              <button className="size-11 rounded-full bg-[#00C694] text-[#101828] flex items-center justify-center">›</button>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-16 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-[40px] lg:text-[48px] leading-[1.15] lg:leading-[56px] font-bold text-[#101828]">Hướng dẫn giao dịch</h2>
              <p className="mt-2 text-[16px] lg:text-[18px] leading-[26px] text-[#101828]">Giao dịch dễ dàng chỉ với vài bước đơn giản</p>
            </div>
            <button className="h-11 px-4 rounded-[32px] bg-[#101820] text-[#F7F9FC] text-base font-medium flex items-center gap-1.5 hover:bg-[#073038] transition-colors">
              Xem tất cả
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#F7F9FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: 'Đăng ký sử dụng dịch vụ tài trợ giao dịch',
                desc: 'Hướng dẫn đăng ký sử dụng dịch vụ tài trợ giao dịch tại Kafi, bao gồm các bước đăng ký, xác thực thông tin.',
                image: 'https://www.figma.com/api/mcp/asset/6e516c6f-3e9f-4d86-860e-b7ca54335f0a'
              },
              {
                title: 'Ký kết hợp đồng và kích hoạt hạn mức',
                desc: 'Hướng dẫn ký hợp đồng và kích hoạt hạn mức tài trợ giao dịch tại Kafi, bao gồm các bước xác nhận điều khoản.',
                image: 'https://www.figma.com/api/mcp/asset/434a88dd-87a4-4afc-bc9b-f874d3f7a9cf'
              },
              {
                title: 'Theo dõi tỷ lệ ký quỹ và trạng thái tài khoản',
                desc: 'Hướng dẫn theo dõi tỷ lệ ký quỹ và trạng thái tài khoản tại Kafi, bao gồm các thông tin về hạn mức, dư nợ.',
                image: 'https://www.figma.com/api/mcp/asset/590ce1aa-3524-49a7-a8e0-da01330bee02'
              }
            ].map((guide) => (
              <article key={guide.title} className="bg-white border border-[#DDE2EC] rounded-[24px] overflow-hidden">
                <div className="aspect-[16/9]">
                  <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="px-2 py-1 rounded-[40px] bg-[#F7F9FC] text-[#121212] text-xs font-medium">Hướng dẫn</span>
                    <span className="text-xs font-medium text-[#9AA5BD]">5 min read</span>
                  </div>
                  <h3 className="mt-3 text-[30px] leading-[1.25] font-semibold text-[#101828]">{guide.title}</h3>
                  <p className="mt-2 text-[16px] leading-[24px] text-[#667085] line-clamp-2">{guide.desc}</p>
                  <button className="mt-4 text-[16px] leading-[24px] font-semibold text-[#101828] flex items-center gap-1.5">
                    Xem hướng dẫn
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5.83325 14.1667L14.1666 5.83337M14.1666 5.83337H7.36103M14.1666 5.83337V12.6389" stroke="#101828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
              <span className="size-1.5 rounded-full bg-[#101828]" />
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
              <span className="size-1.5 rounded-full bg-[#101828]/50" />
            </div>
            <div className="flex items-center gap-3">
              <button className="size-11 rounded-full bg-[#EBEFF5] text-[#101828] flex items-center justify-center">‹</button>
              <button className="size-11 rounded-full bg-[#0AE685] text-[#101828] flex items-center justify-center">›</button>
            </div>
          </div>
        </section>

      {/* Sub-navigation / Product Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-40 py-4 flex gap-6 overflow-x-auto no-scrollbar">
          {['Cổ phiếu', 'Phái sinh', 'Chứng quyền', 'GBI'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${tab === 'Cổ phiếu' ? 'bg-[#006D5B] text-white shadow-md' : 'text-gray-500 hover:text-[#006D5B]'
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </button>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="flex-1 relative">
            <div className="relative z-10 scale-110 lg:scale-125">
              <img
                src="assets/isomorphic-stocks.png"
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
                className={`px-8 py-3 rounded-full text-[15px] font-bold transition-all ${activeCategory === cat
                  ? 'bg-white text-[#1A1A1A] shadow-md'
                  : 'text-gray-500 hover:text-[#006D5B]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Fee Table Section - Split View Layout */}
        <section className="py-24 space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000000]">Biểu phí & Chính sách</h2>
              <p className="text-xl text-[#4A5568] max-w-2xl">Công khai, minh bạch và luôn tối ưu lợi ích cho khách hàng</p>
              <div className="w-20 h-1.5 bg-[#00A382] rounded-full" />
            </div>
            <button className="px-8 py-3 bg-[#1E1E1E] text-white rounded-full font-bold hover:bg-[#00A382] transition-all flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Tải biểu phí PDF
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 bg-white p-8 lg:p-12 rounded-[48px] shadow-[0_32px_80px_rgba(0,0,0,0.04)] border border-gray-100">
            {/* Left Sidebar Navigation */}
            <aside className="w-full lg:w-64 space-y-2">
              {[
                'Cổ phiếu niêm yết',
                'Chứng khoán phái sinh',
                'Chứng quyền có bảo đảm',
                'Chứng chỉ quỹ ETFS',
                'Dịch vụ tài chính'
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFeeTab(tab)}
                  className={`w-full text-left px-6 py-4 rounded-2xl text-base font-bold transition-all ${activeFeeTab === tab
                    ? 'bg-[#F0FDFA] text-[#00A382] shadow-sm'
                    : 'text-[#4A5568] hover:bg-gray-50'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </aside>

            {/* Right Content Area - Data Table */}
            <div className="flex-1 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1E514B] text-white">
                      <th className="px-10 py-6 text-lg font-bold rounded-tl-2xl">Phân loại</th>
                      <th className="px-10 py-6 text-lg font-bold border-l border-white/10">Phí giao dịch</th>
                      <th className="px-10 py-6 text-lg font-bold border-l border-white/10 rounded-tr-2xl">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: 'Kênh trực tuyến', fee: '0.1% - 0.15%', note: 'Áp dụng cho mọi giá trị giao dịch' },
                      { name: 'Kênh qua nhân viên', fee: '0.2% - 0.3%', note: 'Hỗ trợ tư vấn 1-1' },
                      { name: 'Giao dịch lô lẻ', fee: 'Miễn phí', note: 'Theo quy định của sàn' },
                      { name: 'Khách hàng ưu tiên', fee: 'Thỏa thuận', note: 'Vốn trên 10 tỷ VNĐ' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors group">
                        <td className="px-10 py-7">
                          <span className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#00A382] transition-colors">{row.name}</span>
                        </td>
                        <td className="px-10 py-7 border-l border-dashed border-gray-200">
                          <span className="text-xl font-bold text-[#00A382]">{row.fee}</span>
                        </td>
                        <td className="px-10 py-7 border-l border-dashed border-gray-200">
                          <span className="text-base text-[#4A5568]">{row.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-6 bg-[#F9FAFB] rounded-3xl flex items-start gap-4">
                <div className="size-6 bg-[#D1FAE5] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A382" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                </div>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  <strong>Lưu ý:</strong> Biểu phí chưa bao gồm phí trả cho Sở giao dịch Chứng khoán và Trung tâm Lưu ký Chứng khoán theo quy định. Vui lòng liên hệ Kafi để được tư vấn chi tiết về các gói ưu đãi hiện hành.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Banner (CTA) */}
        <section className="py-24 pb-48">
          <div className="bg-gradient-to-r from-[#1E514B] via-[#00A382] to-[#00CD98] rounded-[60px] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_80px_rgba(0,163,130,0.2)] group">
            {/* Decorative background glass elements */}
            <div className="absolute top-0 right-0 size-96 bg-white/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 size-96 bg-[#073038] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />

            <div className="flex-1 space-y-8 relative z-10">
              <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase">
                Khám phá ngay
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Bắt đầu hành trình <br /> đầu tư ngay hôm nay
              </h2>
              <p className="text-white/80 max-w-xl text-xl leading-relaxed">
                Tham gia cùng hàng nghìn nhà đầu tư đang tin dùng Kafi. <br className="hidden lg:block" /> Trải nghiệm sự chuyên nghiệp và minh bạch tuyệt đối.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-12 py-5 bg-white text-[#006D5B] rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  Mở tài khoản
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </button>
                <button className="px-12 py-5 bg-[#073038] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#0a424e] transition-all">
                  Tài khoản dùng thử
                </button>
              </div>
            </div>

            <div className="flex-1 relative mt-16 lg:mt-0 flex justify-center lg:justify-end z-10 group-hover:translate-x-2 transition-transform duration-700">
              <img
                src="assets/kafi-smartphone-3d.png"
                alt="Kafi App 3D"
                className="w-full max-w-[500px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              />
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
