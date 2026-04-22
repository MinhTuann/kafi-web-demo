import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Check,
  Star,
  Building2,
  Newspaper,
  FileCheck
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const topBanner = "/kafi-web-demo/assets/career-top-banner.png"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("careers");
  const [careerType, setCareerType] = useState("join");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const navItems = [
    { id: "about", label: "Giới thiệu về Kafi", icon: Building2, path: "/about" },
    { id: "careers", label: "Cơ hội sự nghiệp", icon: Briefcase, path: "/careers" },
    { id: "news", label: "Tin tức & báo chí", icon: Newspaper, path: "/reports" },
    { id: "terms", label: "Điều khoản và điều kiện", icon: FileCheck, path: "/support" },
  ];

  const pillars = [
    {
      title: "Minh bạch & Chính trực",
      description: "Luôn tuân thủ chuẩn mực pháp lý và đạo đức nghề nghiệp."
    },
    {
      title: "Chuyên nghiệp & Hiệu quả",
      description: "Đề cao năng lực, trách nhiệm và chất lượng trong từng công việc."
    },
    {
      title: "Lấy con người làm trung tâm",
      description: "Tôn trọng sự khác biệt và khuyến khích mỗi cá nhân phát triển."
    },
    {
      title: "Học hỏi & Đổi mới",
      description: "Không ngừng nâng cao năng lực để thích ứng với thị trường tài chính luôn biến động."
    }
  ];

  const benefits = [
    {
      title: "100%",
      description: "Đầy đủ chế độ bảo hiểm, phúc lợi theo quy định và chính sách mở rộng",
      image: "/kafi-web-demo/assets/100-percents.png"
    },
    {
      title: "Thưởng",
      description: "Thưởng hiệu suất, thưởng dự án và chính sách khuyến khích dài hạn",
      image: "/kafi-web-demo/assets/rewarded.png"
    },
    {
      title: "Đào tạo",
      description: "Đào tạo chuyên môn, nâng cao nghiệp vụ và kỹ năng quản lý",
      image: "/kafi-web-demo/assets/training.png"
    }
  ];
  const positions = [
    {
      title: "Bond Issuance Advisory Manager",
      location: "Hồ Chí Minh",
      type: "Fulltime",
      deadline: "28/02/2026",
      description: "Tư vấn cho khách hàng/các bên liên quan nội bộ về phát hành trái phiếu. Quản lý việc thực hiện các giao dịch trái phiếu."
    },
    {
      title: "Backend Developer",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Xây dựng và tối ưu hóa hệ thống giao dịch chứng khoán, ứng dụng di động và nền tảng quản lý tài sản."
    },
    {
      title: "Treasury Product Professional",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Quản lý và phát triển các sản phẩm nguồn vốn, tối ưu hóa danh mục đầu tư và thanh khoản."
    },
    {
      title: "Chuyên viên Quản lý Tiền tệ và Thanh khoản (MM/ALM)",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Thực hiện quản trị rủi ro thanh khoản, quản lý dòng tiền và các hoạt động trên thị trường tiền tệ."
    },
    {
      title: "Senior BA & QC Professional",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Phân tích yêu cầu nghiệp vụ và kiểm soát chất lượng phần mềm cho các hệ thống tài chính chứng khoán."
    }
  ];

  const testimonials = [
    {
      name: "Lê Hùng",
      role: "Kỹ sư phần mềm",
      quote: "Đội ngũ ở đây không chỉ là đồng nghiệp mà còn là bạn bè thân thiết của tôi.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Lê Thanh Hà",
      role: "Nhà phân tích tài chính",
      quote: "Kafi là nơi tôi có thể phát triển kỹ năng và đóng góp vào một sứ mệnh có ý nghĩa.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Trần Anh Tuấn",
      role: "Chuyên viên Tư vấn",
      quote: "Môi trường làm việc chuyên nghiệp, năng động và luôn khuyến khích sự đổi mới sáng tạo.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#101828] font-['Inter',sans-serif]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Nơi sự nghiệp của bạn được đầu tư đúng cách"
          background={
            <div className="absolute h-full right-0 w-[65%]">
              <img
                src={topBanner}
                alt=""
                className="absolute inset-0 object-fill"
              />
            </div>
          }
        />
      </section>

      <main className="relative w-full px-4 lg:px-6 py-6">
        {/* Sticky Navigation */}
        <section className="sticky top-28 z-20 w-full flex justify-center py-4">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
            {navItems.map((tab) => {
              const isActive = tab.id === activeTab;
              const Icon = isActive ? ArrowUpRight : tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full h-[56px] transition-all duration-300 ${isActive
                    ? "bg-white shadow-sm"
                    : "hover:bg-white/50"
                    }`}
                >
                  <div className={`rounded-full size-6 flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-[#073038]" : "text-[#667085]"}`}>
                    <Icon size={isActive ? 14 : 20} className={isActive ? "text-[#00C694]" : "text-[#667085]"} strokeWidth={isActive ? 3 : 2} />
                  </div>
                  <span
                    className={`text-[14px] whitespace-nowrap transition-all duration-300 ${isActive ? "font-bold text-[#106070]" : "text-[#344054]"
                      }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
            <div className="pl-2 border-l border-white/30 ml-1">
              <button className="bg-white rounded-full size-10 flex items-center justify-center shadow-sm hover:bg-white/80 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#667085]"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {activeTab === "careers" && (
          <>
            {/* Career Type Switch */}
            <div className="w-full flex justify-center mt-12 mb-16">
              <div className="bg-white p-1.5 rounded-full inline-flex items-center border border-[#EAECF0]">
                <button
                  onClick={() => setCareerType("join")}
                  className={`px-8 py-3 rounded-full text-[15px] transition-all duration-300 ${careerType === "join"
                    ? "font-bold bg-[#00C694] text-[#101828] shadow-md"
                    : "text-[#667085] hover:text-[#101828]"
                    }`}
                >
                  Gia nhập Kafi
                </button>
                <button
                  onClick={() => setCareerType("partner")}
                  className={`px-8 py-3 rounded-full text-[15px] transition-all duration-300 ${careerType === "partner"
                    ? "font-bold bg-[#00C694] text-[#101828] shadow-md"
                    : "text-[#667085] hover:text-[#101828]"
                    }`}
                >
                  Trở thành Kafi Partner
                </button>
              </div>
            </div>

            {/* Core Pillars Section */}
            <section id="pillars" className="w-full mb-24 scroll-mt-32">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Left: Image & Quote Overlay */}
                <div className="flex-1 relative rounded-[40px] overflow-hidden min-h-[768px] group shadow-2xl flex flex-col justify-end">
                  <img
                    src="/kafi-web-demo/assets/core-team.png"
                    alt="Kafi Core Team"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay & Content */}
                  <div className="relative z-10 w-full p-10 pt-48 bg-gradient-to-t from-[#00C694] via-[#00C694]/80 to-transparent">
                    <div className="flex gap-6 items-start">
                      <div className="text-[#073038] shrink-0 mt-2">
                        <svg width="84" height="64" viewBox="0 0 84 64" fill="currentColor">
                          <path d="M0 0H36V32H18V64H0V0ZM48 0H84V32H66V64H48V0Z" />
                        </svg>
                      </div>
                      <p className="text-white text-[20px] lg:text-[22px] leading-[32px] font-medium">
                        Gia nhập Kafi để làm việc trong một môi trường minh bạch, chuyên nghiệp và không ngừng phát triển, nơi năng lực của bạn được ghi nhận và tạo ra giá trị thực.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 bg-white rounded-[40px] border border-[#EAECF0] p-10 lg:p-16 flex flex-col justify-center shadow-sm">
                  <h2 className="text-[40px] lg:text-[48px] font-bold text-[#101828] mb-6">Trụ cột cốt lõi</h2>
                  <p className="text-[#667085] text-[18px] leading-[28px] mb-12">
                    Tại Kafi, bạn không chỉ làm việc – bạn cùng xây dựng một hệ sinh thái đầu tư bền vững cho hàng triệu nhà đầu tư Việt. Kafi xây dựng đội ngũ dựa trên những trụ cột cốt lõi:
                  </p>

                  <div className="space-y-6">
                    {pillars.map((pillar, i) => (
                      <div key={i} className="group">
                        <div className="flex gap-5 items-start">
                          <div className="bg-[#073038] rounded-full size-10 flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                            <Check size={18} className="text-[#00C694]" strokeWidth={3} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[20px] text-[#101828] mb-2 transition-colors duration-300 group-hover:text-[#00C694]">{pillar.title}</h4>
                            <p className="text-[#667085] leading-[26px]">{pillar.description}</p>
                          </div>
                        </div>
                        {i < pillars.length - 1 && (
                          <div className="h-px bg-[#F2F4F7] w-full mt-6 mb-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="w-full mt-24 scroll-mt-32">
              <div className="text-center mb-16">
                <p className="text-[#101828] font-bold text-[14px] mb-4">Chính sách đãi ngộ</p>
                <h2 className="text-[40px] lg:text-[48px] font-bold text-[#101828]">Những gì Kafi dành cho bạn</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-white rounded-[40px] overflow-hidden border border-[#EAECF0] hover:shadow-2xl transition-all duration-500 group flex flex-col h-full shadow-sm">
                    <div className="h-[320px] bg-[#F0FDF9] relative overflow-hidden flex items-center justify-center p-8">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-10 flex flex-col flex-1 items-center text-center">
                      <h3 className="text-[40px] lg:text-[48px] font-bold text-[#344054] mb-4">{benefit.title}</h3>
                      <p className="text-[#667085] text-[18px] leading-[28px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Workspace Section */}
            <section id="workspace" className="w-full mt-24 scroll-mt-32">
              <div className="text-center mb-16">
                <h2 className="text-[40px] lg:text-[48px] font-bold text-[#101828] mb-4">Không gian làm việc</h2>
                <p className="text-[#667085] text-[18px] leading-[28px] max-w-[800px] mx-auto">
                  Từng cột mốc tăng trưởng được xây dựng trên nền tảng minh bạch, năng lực chuyên môn và sự đồng hành lâu dài cùng nhà đầu tư.
                </p>
              </div>

              <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[700px]">
                {/* Large Left Image */}
                <div className="col-span-12 lg:col-span-4 row-span-2 rounded-[32px] overflow-hidden group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
                    alt="Kafi Modern Office"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                
                {/* Top Middle Image */}
                <div className="col-span-6 lg:col-span-4 rounded-[32px] overflow-hidden group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2070"
                    alt="Modern Workspace Close-up"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Top Right Image */}
                <div className="col-span-6 lg:col-span-4 rounded-[32px] overflow-hidden group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522071823991-b1b8324a6c8a?auto=format&fit=crop&q=80&w=2070"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Wide Image */}
                <div className="col-span-12 lg:col-span-8 rounded-[32px] overflow-hidden group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
                    alt="Innovation Hub"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </section>

            {/* Moments Section */}
            <section id="moments" className="w-full mt-32 scroll-mt-32">
              <div className="text-center mb-16">
                <h2 className="text-[40px] lg:text-[48px] font-bold text-[#101828] mb-4">Khoảnh khắc Kafi</h2>
                <p className="text-[#667085] text-[18px] leading-[28px] max-w-[800px] mx-auto">
                  Từ các hoạt động nội bộ, đào tạo chuyên môn đến những cột mốc đáng nhớ, mỗi khoảnh khắc tại Kafi đều phản ánh tinh thần gắn kết và văn hóa tích cực.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Large Left Image with Overlay */}
                <div className="col-span-12 lg:col-span-6 row-span-2 relative rounded-[32px] overflow-hidden group shadow-xl h-[600px] lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070"
                    alt="Kafi Celebration"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Right Top Grid */}
                <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-6 h-[300px]">
                  <div className="relative rounded-[32px] overflow-hidden group shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
                      alt="Team Building"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex gap-2 items-start">
                        <div className="text-[#00C694] shrink-0 mt-1">
                          <svg width="16" height="12" viewBox="0 0 40 32" fill="currentColor">
                            <path d="M0 0H36V32H18V64H0V0ZM48 0H84V32H66V64H48V0Z" />
                          </svg>
                        </div>
                        <p className="text-white text-[12px] font-medium">Những dấu ấn được tạo nên từ hành trình cùng nhau</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[32px] overflow-hidden group shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1974"
                      alt="Beach Event"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex gap-2 items-start">
                        <div className="text-[#00C694] shrink-0 mt-1">
                          <svg width="16" height="12" viewBox="0 0 40 32" fill="currentColor">
                            <path d="M0 0H36V32H18V64H0V0ZM48 0H84V32H66V64H48V0Z" />
                          </svg>
                        </div>
                        <p className="text-white text-[12px] font-medium">Các hoạt động gắn kết nội bộ & đào tạo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Middle Image */}
                <div className="col-span-12 lg:col-span-6 relative rounded-[32px] overflow-hidden group shadow-lg h-[280px]">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2084"
                    alt="TEAM Silhouettes"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex gap-3 items-start">
                      <div className="text-[#00C694] shrink-0 mt-1">
                        <svg width="24" height="18" viewBox="0 0 40 32" fill="currentColor">
                          <path d="M0 0H36V32H18V64H0V0ZM48 0H84V32H66V64H48V0Z" />
                        </svg>
                      </div>
                      <p className="text-white text-[15px] font-medium max-w-[500px]">
                        Chúng tôi là đội ngũ Kafi, nơi năng lực được ghi nhận và tạo ra các giá trị gắn kết, phát triển sự nghiệp.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Large Bottom Image */}
                <div className="col-span-12 rounded-[32px] overflow-hidden group shadow-lg h-[400px] lg:h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070"
                    alt="Big Team Group"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="w-full mt-24 scroll-mt-32">
              <div className="bg-[#00C694] rounded-[48px] p-12 lg:p-20 relative overflow-hidden shadow-xl min-h-[600px] flex flex-col">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/kafi-web-demo/assets/testimonials-career.png" 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative z-10 text-center mb-16">
                  <p className="text-white font-medium text-[14px] mb-4 uppercase tracking-wider">Chính sách đãi ngộ</p>
                  <h2 className="text-[40px] lg:text-[64px] font-bold text-white tracking-tight leading-tight">Nhân viên Kafi nói gì?</h2>
                </div>

                <div className="relative z-10 flex gap-8 overflow-x-auto pb-12 no-scrollbar snap-x scroll-smooth flex-1">
                  {testimonials.map((t, i) => (
                    <div key={i} className="min-w-[100%] lg:min-w-[700px] bg-[#073038] rounded-[48px] p-8 lg:p-12 flex flex-col md:flex-row gap-10 snap-center shadow-2xl group border border-white/5">
                      {/* Image Container with Border */}
                      <div className="md:w-[280px] aspect-square shrink-0 rounded-[32px] overflow-hidden border-4 border-white/10 shadow-inner">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="flex flex-col justify-center flex-1">
                        <div className="text-[#00C694] mb-8">
                          <svg width="48" height="36" viewBox="0 0 84 64" fill="currentColor">
                            <path d="M0 0H36V32H18V64H0V0ZM48 0H84V32H66V64H48V0Z" />
                          </svg>
                        </div>
                        <p className="text-white text-[18px] lg:text-[22px] leading-[32px] mb-10 font-medium tracking-tight">
                          {t.quote}
                        </p>
                        <div className="mb-6">
                          <h4 className="text-white font-bold text-[24px] mb-1">{t.name}</h4>
                          <p className="text-[#00C694] text-[16px] font-medium">{t.role}</p>
                        </div>
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star key={starIdx} size={20} className="fill-[#00C694] text-[#00C694]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls - Figma Refined (274:8027) */}
                <div className="relative z-10 flex justify-between items-center mt-auto pt-10 px-6 lg:px-0">
                  {/* Progress Indicator (Pills) */}
                  <div className="flex gap-2 items-center">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? "w-8 bg-white" : "w-2 bg-white/30"}`} 
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Buttons (44x44px) */}
                  <div className="flex gap-4">
                    <button className="size-11 rounded-full bg-white flex items-center justify-center text-[#101828] hover:bg-[#EAECF0] transition-all shadow-md group">
                      <ChevronDown className="rotate-90 group-active:scale-90 transition-transform" size={20} />
                    </button>
                    <button className="size-11 rounded-full bg-white flex items-center justify-center text-[#101828] hover:bg-[#EAECF0] transition-all shadow-md group">
                      <ChevronDown className="-rotate-90 group-active:scale-90 transition-transform" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Positions Section */}
            <section id="positions" className="w-full mt-32 scroll-mt-32">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Left Side: Branded Image Card */}
                <div className="lg:w-[450px] shrink-0 rounded-[40px] overflow-hidden relative group min-h-[500px]">
                  <img
                    src="/kafi-web-demo/assets/recruitment.png"
                    alt="Join Kafi Team"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-[#00C694] via-[#00C694]/80 to-transparent backdrop-blur-[2px]">
                    <div className="bg-[#101828] text-white text-[12px] font-bold px-3 py-1 rounded-full inline-block mb-4">Gia nhập đội ngũ Kafi</div>
                    <h3 className="text-[32px] lg:text-[40px] font-bold text-[#101828] mb-4">Vị trí tuyển dụng</h3>
                    <p className="text-[#101828]/80 text-[16px] leading-[24px] mb-8 max-w-[320px]">
                      Khám phá các vị trí đang tuyển dụng tại Kafi và lựa chọn cơ hội phù hợp với năng lực và định hướng sự nghiệp của bạn.
                    </p>
                    <button className="bg-[#101828] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black transition-all shadow-lg">
                      Xem tất cả vị trí <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Right Side: Accordion Jobs List */}
                <div className="flex-1 flex flex-col gap-4">
                  <h2 className="text-[32px] font-bold text-[#101828] mb-2 px-2">Vị trí nổi bật</h2>
                  <div className="space-y-4">
                    {positions.map((pos, i) => {
                      const isActive = openAccordion === i;
                      return (
                        <div key={i} className={`rounded-[32px] overflow-hidden border transition-all duration-300 ${isActive ? "bg-[#F0FDF9] border-[#00C694]/30 shadow-md" : "bg-white border-[#EAECF0] hover:border-[#D0D5DD]"}`}>
                          <button
                            onClick={() => setOpenAccordion(isActive ? null : i)}
                            className="w-full flex items-start gap-4 p-8 text-left relative"
                          >
                            {isActive && <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#00C694]" />}
                            <div className={`shrink-0 mt-1 transition-transform duration-300 ${isActive ? "rotate-0" : "-rotate-90"}`}>
                              <ChevronDown size={24} className={isActive ? "text-[#00C694]" : "text-[#667085]"} />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className={`text-[20px] font-bold transition-colors ${isActive ? "text-[#101828]" : "text-[#101828]"}`}>{pos.title}</h4>
                                {isActive && <ArrowUpRight className="text-[#00C694]" size={28} />}
                              </div>
                              <p className={`text-[15px] ${isActive ? "text-[#344054]" : "text-[#667085]"}`}>
                                {pos.type}. {pos.location}
                              </p>

                              <AnimatePresence>
                                {isActive && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pt-6">
                                      <p className="text-[#475467] text-[16px] leading-[26px] mb-8">
                                        {pos.description}
                                      </p>
                                      <div className="flex justify-between items-center">
                                        <span className="text-[#667085] text-[14px]">Hạn nhận hồ sơ: <span className="font-semibold">{pos.deadline || "31/12/2025"}</span></span>
                                        <button className="bg-white border border-[#EAECF0] text-[#101828] px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#F9FAFB] transition-all shadow-sm">
                                          Ứng tuyển <div className="bg-[#00C694] rounded-full size-6 flex items-center justify-center text-[#101828]"><ArrowUpRight size={14} /></div>
                                        </button>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Explore products / CTA */}
            <section className="py-[40px] mt-24">
              <div className="relative rounded-[48px] overflow-hidden px-[60px] py-[40px]"
                style={{ backgroundImage: "linear-gradient(79.8024deg, rgb(12, 96, 112) 20.11%, rgb(0, 198, 148) 94.638%)" }}>

                {/* Background Pattern */}
                <div className="absolute inset-0 mix-blend-darken opacity-20 pointer-events-none">
                  <img src="/kafi-web-demo/assets/about/cta-bg-pattern.png" alt="" className="w-full h-full object-cover max-w-none" />
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 py-[64px] flex flex-col items-start justify-center min-h-full">
                  <div className="flex flex-col gap-[40px] items-start w-full lg:w-[722px]">
                    <div className="flex flex-col gap-[16px] items-start w-full">
                      <h3 className="font-bold text-[36px] lg:text-[48px] leading-[1.2] text-white m-0 max-w-[800px]">
                        Sẵn sàng cho bước tiến tiếp theo trong sự nghiệp của bạn?
                      </h3>
                      <p className="font-normal text-[18px] leading-[26px] text-white m-0 max-w-[600px]">
                        Chúng tôi luôn chào đón những ứng viên có tài năng và nhiệt huyết. Ứng tuyển ngay hôm nay và trở thành một phần của KAFI
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <button className="bg-[#00C694] h-[56px] px-[24px] py-[10px] rounded-[32px] flex items-center gap-[4px] group transition-all duration-300 hover:shadow-lg w-full sm:w-auto justify-center">
                        <span className="font-bold text-[18px] leading-[24px] text-[#101828]">
                          Ứng tuyển ngay!
                        </span>
                        <div className="relative w-6 h-6">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0C6070] size-[24px] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={14} className="text-white" />
                          </div>
                        </div>
                      </button>
                      <button className="bg-[#073038] h-[56px] px-[28px] py-[10px] rounded-[32px] flex items-center justify-center transition-all duration-300 hover:bg-black/80">
                        <span className="font-bold text-[18px] leading-[24px] text-white">
                          Xem tất cả vị trí
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Assets */}
                <div className="hidden lg:block">
                  {/* Income Badge */}
                  <motion.div
                    className="absolute bottom-[30%] right-[10%] bg-white border-8 border-[#F2F4F5]/80 px-[18.397px] py-[12px] rounded-[18.397px] shadow-xl flex items-center justify-between gap-[9.198px] z-30 w-[343px]"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-[9.198px]">
                      <div className="size-[42.926px] bg-[#D1FADF] rounded-full flex items-center justify-center shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="#0B756E"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[18.685px] font-bold text-black whitespace-nowrap">
                        Thu nhập
                      </p>
                    </div>
                    <p className="text-[18.685px] font-bold text-[#0B756E] whitespace-nowrap">
                      +168,000,000 đ
                    </p>
                  </motion.div>

                  {/* Coins and Graphics */}
                  <motion.img
                    src="/kafi-web-demo/assets/top-coin.png"
                    className="absolute top-[40%] right-[29%] size-24 object-contain z-40"
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/kafi-web-demo/assets/botton-coin.png"
                    className="absolute top-[55%] right-[30%] size-32 object-contain z-40"
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src="/kafi-web-demo/assets/bottom-coin-blured.png"
                    className="absolute top-[55%] right-[40%] size-52 object-contain z-40"
                    animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
      <Shortcut />
    </div>
  );
}

