import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Check,
  Search,
  LayoutGrid,
  Heart,
  Globe,
  Star,
  Plus
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  const navItems = [
    { id: "about", label: "Về chúng tôi", icon: ArrowUpRight },
    { id: "benefits", label: "Phúc đãi tại Kafi", icon: Heart },
    { id: "workspace", label: "Không gian làm việc", icon: LayoutGrid },
    { id: "positions", label: "Vị trí nổi bật", icon: Briefcase },
  ];

  const benefits = [
    {
      title: "Môi trường chuyên nghiệp",
      description: "Làm việc cùng đội ngũ chuyên gia hàng đầu trong lĩnh vực tài chính, tiếp cận công nghệ hiện đại và quy trình chuẩn quốc tế.",
      icon: Globe
    },
    {
      title: "Thu nhập & Thưởng hấp dẫn",
      description: "Chế độ lương thưởng cạnh tranh, đánh giá năng lực công bằng và lộ trình thăng tiến rõ ràng cho từng vị trí.",
      icon: Star
    },
    {
      title: "Chăm sóc toàn diện",
      description: "Bảo hiểm sức khỏe cao cấp, các hoạt động team building, du lịch hàng năm và môi trường làm việc cân bằng.",
      icon: Heart
    }
  ];

  const positions = [
    {
      title: "Chuyên viên Tư vấn Tài chính (Wealth Advisor)",
      location: "TP. Hồ Chí Minh / Hà Nội",
      type: "Full-time",
      description: "Tư vấn các giải pháp quản lý gia sản, đầu tư chứng khoán và trái phiếu cho khách hàng cá nhân cao cấp."
    },
    {
      title: "Kỹ sư Phát triển Phần mềm (Full-stack Developer)",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Xây dựng và tối ưu hóa hệ thống giao dịch chứng khoán, ứng dụng di động và nền tảng quản lý tài sản."
    },
    {
      title: "Chuyên viên Phân tích Đầu tư",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      description: "Thực hiện báo cáo phân tích vĩ mô, ngành và doanh nghiệp niêm yết để hỗ trợ ra quyết định đầu tư."
    },
    {
      title: "Chuyên viên Chăm sóc khách hàng",
      location: "Đà Nẵng / Hà Nội",
      type: "Full-time",
      description: "Hỗ trợ khách hàng trong quá trình sử dụng dịch vụ và giải đáp các thắc mắc về sản phẩm tài chính."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#101828] font-['Inter',sans-serif]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Kiến tạo sự nghiệp thịnh vượng cùng Kafi"
          background={
            <div className="absolute inset-0 bg-[#106070] flex items-center justify-center">
              {/* Placeholder for Hero Image */}
              <div className="w-full h-full opacity-20 bg-gradient-to-br from-[#00C694] to-[#101828]" />
            </div>
          }
        />
      </section>

      <main className="relative w-full px-4 lg:px-6 py-6">
        {/* Sticky Navigation */}
        <section className="sticky top-28 z-20 w-full flex justify-center py-4">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
            {navItems.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full h-[56px] transition-all duration-300 ${isActive
                    ? "bg-white shadow-sm"
                    : "hover:bg-white/50"
                    }`}
                >
                  <div className={`rounded-full size-6 flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-[#073038]" : "text-[#667085]"}`}>
                    <Icon size={isActive ? 14 : 16} className={isActive ? "text-[#00C694]" : "text-[#667085]"} strokeWidth={isActive ? 3 : 2} />
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
                <Search size={20} className="text-[#667085]" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full mt-12 scroll-mt-32">
          <div className="bg-white rounded-[32px] overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[768px]">
            <div className="flex-1 bg-[#F9FAFB] p-12 lg:p-20 flex flex-col justify-center">
              <div className="max-w-[560px]">
                <h2 className="text-[40px] lg:text-[48px] font-bold leading-[1.2] mb-6">
                  Tại sao nên chọn<br />sự nghiệp tại Kafi?
                </h2>
                <p className="text-[18px] text-[#344054] leading-[28px] mb-12">
                  Kafi không chỉ là nơi làm việc, mà là cộng đồng của những người đam mê kiến tạo giá trị tài chính thực thụ. Chúng tôi tôn trọng sự khác biệt và thúc đẩy tiềm năng vô hạn của mỗi cá nhân.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Tầm nhìn dẫn đầu", desc: "Trở thành định chế tài chính công nghệ hàng đầu." },
                    { title: "Văn hóa đổi mới", desc: "Khuyến khích sáng tạo và thử nghiệm cái mới." },
                    { title: "Con người là trọng tâm", desc: "Đầu tư vào sự phát triển bền vững của đội ngũ." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-[#EAECF0]">
                      <div className="bg-[#00C694] rounded-lg size-10 flex items-center justify-center shrink-0">
                        <Check size={20} className="text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[18px] text-[#101828]">{item.title}</h4>
                        <p className="text-[#667085]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#101828] relative overflow-hidden">
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C694]/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full mt-24 scroll-mt-32">
          <div className="text-center mb-16">
            <span className="text-[#00C694] font-bold tracking-wider uppercase text-[14px]">Phúc lợi & Đãi ngộ</span>
            <h2 className="text-[40px] lg:text-[48px] font-bold mt-4">Những gì Kafi dành cho bạn</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white rounded-[32px] p-10 border border-[#EAECF0] hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                  <div className="bg-[#F0FDF9] rounded-full size-20 flex items-center justify-center mb-8">
                    <Icon size={40} className="text-[#00C694]" />
                  </div>
                  <h3 className="text-[24px] font-bold mb-4">{benefit.title}</h3>
                  <p className="text-[#667085] leading-[26px]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Workspace Section */}
        <section id="workspace" className="w-full mt-24 scroll-mt-32">
          <div className="bg-[#101828] rounded-[48px] p-12 lg:p-20 text-white overflow-hidden relative">
            <div className="max-w-[700px] relative z-10">
              <h2 className="text-[40px] lg:text-[48px] font-bold mb-6">Không gian làm việc sáng tạo</h2>
              <p className="text-white/70 text-[18px] leading-[28px] mb-12">
                Chúng tôi xây dựng môi trường làm việc mở, hiện đại tại các trung tâm tài chính lớn, giúp đội ngũ tối ưu hóa hiệu suất và khơi nguồn cảm hứng mỗi ngày.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
              <div className="h-[400px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                <span className="text-white/20">Phòng họp hiện đại</span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="h-full bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-center px-4">Khu vực Pantry</span>
                </div>
                <div className="h-full bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <span className="text-white/20 text-center px-4">Khu vực làm việc chung</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C694] opacity-10 blur-[120px] rounded-full -mr-[300px] -mt-[300px]" />
          </div>
        </section>

        {/* Featured Positions Section */}
        <section id="positions" className="w-full mt-24 scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-[40px] lg:text-[48px] font-bold mb-6">Vị trí nổi bật</h2>
              <p className="text-[#667085] text-[18px] leading-[28px] mb-8">
                Tìm kiếm cơ hội phù hợp với năng lực và đam mê của bạn. Kafi luôn chào đón những tài năng mới gia nhập đội ngũ.
              </p>
              <button className="bg-[#00C694] text-[#101828] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#00b586] transition-colors">
                Xem tất cả vị trí <ArrowUpRight size={20} />
              </button>
            </div>

            <div className="lg:w-2/3 w-full space-y-4">
              {positions.map((pos, i) => (
                <div key={i} className="bg-white rounded-3xl border border-[#EAECF0] overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div>
                      <h4 className="text-[20px] font-bold mb-1">{pos.title}</h4>
                      <div className="flex gap-4 text-[#667085] text-[14px]">
                        <span>{pos.location}</span>
                        <span>•</span>
                        <span>{pos.type}</span>
                      </div>
                    </div>
                    <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${openAccordion === i ? "bg-[#00C694] text-[#101828]" : "bg-[#F2F4F7] text-[#667085]"}`}>
                      {openAccordion === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px bg-[#EAECF0] mb-6" />
                          <p className="text-[#344054] mb-8 leading-[26px]">
                            {pos.description}
                          </p>
                          <div className="flex gap-4">
                            <button className="bg-[#101828] text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-colors">
                              Ứng tuyển ngay
                            </button>
                            <button className="border border-[#D0D5DD] text-[#344054] px-6 py-3 rounded-full font-semibold hover:bg-[#F9FAFB] transition-colors">
                              Chi tiết công việc
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full mt-32 mb-12">
          <div className="bg-[#00C694] rounded-[48px] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="max-w-[600px] relative z-10 text-center lg:text-left">
              <h2 className="text-[36px] lg:text-[48px] font-bold text-[#101828] mb-6">
                Sẵn sàng cho bước tiến tiếp theo?
              </h2>
              <p className="text-[#101828]/70 text-[18px] leading-[28px] mb-12">
                Chúng tôi luôn tìm kiếm những cộng sự tài năng và nhiệt huyết. Đừng ngần ngại gửi hồ sơ của bạn cho chúng tôi ngay hôm nay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#101828] text-white px-10 py-5 rounded-full font-bold text-[18px] flex items-center justify-center gap-2 hover:bg-black transition-all">
                  Ứng tuyển ngay <ArrowUpRight size={22} />
                </button>
                <button className="bg-white/30 backdrop-blur-md text-[#101828] px-10 py-5 rounded-full font-bold text-[18px] border border-white/40 hover:bg-white/50 transition-all">
                  Gửi hồ sơ nhanh
                </button>
              </div>
            </div>

            <div className="relative z-10 lg:w-1/3 flex justify-center">
              <div className="size-64 lg:size-80 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30">
                <div className="size-48 lg:size-60 bg-white/40 rounded-full flex items-center justify-center">
                  <Briefcase size={80} className="text-[#101828]" />
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white opacity-20 blur-[100px] rounded-full -mb-[200px] -mr-[200px]" />
          </div>
        </section>
      </main>

      <Footer />
      <Shortcut />
    </div>
  );
}
