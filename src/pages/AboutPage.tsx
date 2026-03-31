import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Database,
  FileCheck,
  HandHeart,
  Newspaper,
  UserRound,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const ASSET_BASE = "/kafi-web-demo/assets/about";

const heroImage = `${ASSET_BASE}/hero-team.png`;
const visionHero = `${ASSET_BASE}/vision-hero-3d.png`;
const numbersTeam = `${ASSET_BASE}/numbers-team.jpg`;
const numbersSkyscraper = `${ASSET_BASE}/numbers-skyscraper.jpg`;
const numbersArrow = `${ASSET_BASE}/numbers-arrow.png`;
const numbersBubbles = `${ASSET_BASE}/numbers-bubbles.png`;
const awardsPodium = `${ASSET_BASE}/awards-podium.png`;
const awardsTrophy = `${ASSET_BASE}/awards-trophy.png`;
const awardGrowth = `${ASSET_BASE}/awards-growth.png`;
const awardInspire = `${ASSET_BASE}/awards-inspire.png`;
const awardExcellent = `${ASSET_BASE}/awards-excellent.png`;
const certHeroBg = `${ASSET_BASE}/cert-hero-bg.png`;
const certHeroPerson = `${ASSET_BASE}/cert-hero-person.png`;
const ctaBg = `${ASSET_BASE}/cta-bg.jpg`;
const ctaCoin = `${ASSET_BASE}/cta-coin.png`;

const leaderCards = [
  {
    name: "Lê Quang Trung",
    title: "Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-1.png`,
  },
  {
    name: "Nguyễn Việt Cường",
    title: "Phó Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-2.png`,
  },
  {
    name: "Hà Hoàng Dũng",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-3.png`,
  },
  {
    name: "Trần Minh Tuấn",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-4.png`,
  },
  {
    name: "Trình Thanh Cần",
    title: "Thành viên HĐQT kiêm Tổng giám đốc",
    image: `${ASSET_BASE}/leader-5.png`,
  },
];

const certYears = ["2026", "2025", "2024", "2023", "2022"];

const certFaq = [
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "05/02/2026",
    cta: "Xem danh sách",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "04/01/2026",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "03/12/2025",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "16/10/2025",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "11/09/2025",
  },
];

const VisionIcon = () => (
  <div className="size-[92px] shrink-0">
    <svg viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
      <circle cx="46" cy="46" r="46" fill="#00C694" />
      <path
        d="M46.1227 62.96H46.0443C39.7697 62.942 33.0244 60.2349 26.5232 55.1355C21.6517 51.3132 18.6625 47.5539 18.5405 47.392L18.0002 46.7085L18.5056 46.007C18.6276 45.8361 21.6429 41.699 26.5406 37.517C33.0593 31.9409 39.8219 29 46.0879 29H46.1576C52.4497 29.018 59.2123 32.0129 65.7222 37.6609C70.5851 41.8789 73.5743 46.034 73.6963 46.2138L74.2017 46.9243L73.6614 47.5989C73.5394 47.7517 70.5154 51.5021 65.6264 55.2794C59.1165 60.3069 52.3799 62.96 46.1314 62.96H46.1227ZM20.7976 46.6545C23.3075 49.5415 33.7652 60.6666 46.053 60.7116H46.1227C58.4018 60.7116 68.8857 49.7034 71.4043 46.8344C68.9554 43.7046 58.4716 31.2934 46.1489 31.2484H46.0792C33.7739 31.2484 23.2465 43.5427 20.7889 46.6545H20.7976Z"
        fill="white"
      />
      <path
        d="M46.14 34.4682C39.9787 34.4502 34.9677 39.5856 34.9416 45.9441C34.9241 52.3026 39.9003 57.474 46.0616 57.5009C52.2229 57.5189 57.2339 52.3836 57.2601 46.0251C57.2775 39.6666 52.3014 34.4952 46.14 34.4682ZM46.079 51.781C42.9766 51.772 40.4667 49.1638 40.4754 45.9621C40.4841 42.7604 43.0114 40.1702 46.1139 40.1792C49.2163 40.1882 51.7262 42.7963 51.7175 45.9981C51.7088 49.1998 49.1815 51.79 46.079 51.781Z"
        fill="white"
      />
    </svg>
  </div>
);

const MissionIcon = () => (
  <div className="size-[92px] shrink-0 overflow-hidden rounded-full bg-[#00C694] flex items-center justify-center">
    <svg viewBox="0 0 50.07 49.38" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[54px]">
      <path
        d="M26.11 49.38C12.9 49.38 2.15 38.63 2.15 25.42C2.15 12.21 12.9 1.46 26.11 1.46C39.32 1.46 50.07 12.21 50.07 25.42C50.07 38.63 39.32 49.38 26.11 49.38ZM26.11 3.97C14.28 3.97 4.66 13.59 4.66 25.42C4.66 37.25 14.28 46.87 26.11 46.87C37.94 46.87 47.56 37.25 47.56 25.42C47.56 13.59 37.93 3.97 26.11 3.97Z"
        fill="white"
      />
      <path
        d="M26.1 40.06C22.34 40.06 18.77 38.64 16.03 36.04C13.19 33.35 11.58 29.71 11.47 25.8C11.37 21.89 12.79 18.18 15.48 15.34C18.17 12.5 21.81 10.89 25.72 10.78C29.63 10.65 33.34 12.1 36.18 14.79C39.02 17.48 40.63 21.12 40.74 25.03C40.84 28.94 39.42 32.65 36.72 35.49C34.03 38.33 30.39 39.94 26.49 40.05C26.36 40.05 26.23 40.05 26.1 40.05V40.06ZM26.12 13.29C26.01 13.29 25.9 13.29 25.8 13.29C22.56 13.38 19.55 14.72 17.32 17.06C15.09 19.41 13.91 22.48 13.99 25.72C14.08 28.96 15.42 31.97 17.76 34.2C20.11 36.43 23.18 37.6 26.42 37.53C33.1 37.35 38.4 31.78 38.22 25.09C38.13 21.85 36.79 18.84 34.45 16.61C32.18 14.46 29.23 13.28 26.11 13.28L26.12 13.29Z"
        fill="white"
      />
      <path
        d="M26.11 33.29C21.87 33.29 18.36 29.89 18.25 25.63C18.14 21.29 21.57 17.67 25.91 17.56C28.01 17.49 30.01 18.27 31.53 19.72C33.05 21.17 33.92 23.12 33.98 25.22C34.09 29.56 30.66 33.18 26.32 33.29C26.25 33.29 26.18 33.29 26.11 33.29ZM26.11 20.06C26.11 20.06 26.01 20.06 25.97 20.06C23.02 20.14 20.14 22.6 20.76 25.55C20.84 28.45 23.22 30.76 26.11 30.76C26.16 30.76 26.2 30.76 26.25 30.76C27.68 30.72 29.01 30.13 29.99 29.09C30.97 28.05 31.5 26.69 31.46 25.26C31.42 23.83 30.83 22.5 29.79 21.52C28.79 20.57 27.48 20.05 26.11 20.05V20.06Z"
        fill="white"
      />
      <path
        d="M25.25 23.11L7.81 6.03V5.96L7.87 3.5L4.37 0L4.27 4.31H4.24L0 4.5L3.37 7.87L6.02 7.75L6.3 7.73L23.65 24.71L22.17 26.2L29.36 28.69L26.74 21.63L25.25 23.11Z"
        fill="white"
      />
    </svg>
  </div>
);

export default function AboutPage() {
  const [activeAboutTab, setActiveAboutTab] = useState("vision");
  const [activeLeadershipTab, setActiveLeadershipTab] =
    useState("Hội đồng quản trị");
  const [activeYear, setActiveYear] = useState("2026");
  const [openedFaq, setOpenedFaq] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveAboutTab(id);
    }
  };

  const activeLeaders = useMemo(() => leaderCards, [activeLeadershipTab]);

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#101828] font-['Inter',sans-serif]">
      <Header />

      {/* Top banner */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Cùng bạn xây dựng tương lai tài chính"
          background={
            <div className="absolute h-full right-0 w-full">
              <img
                src={heroImage}
                alt="Kafi team"
                className="absolute inset-0 object-contain"
              />
            </div>
          }
        />
      </section>

      <main className="relative w-full px-4 lg:px-6 py-6 pb-24">
        {/* Product Tab Selection Group */}
        <section className="space-y-8">
          {/* Sticky Product Tab Navigation */}
          <section className="sticky top-0 z-20 w-full flex justify-center">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
              {[
                { id: "vision", label: "Giới thiệu về Kafi", icon: "ArrowUpRight" },
                { id: "careers", label: "Cơ hội sự nghiệp", icon: "Briefcase" },
                { id: "news", label: "Tin tức & báo chí", icon: "Newspaper" },
                { id: "terms", label: "Điều khoản và điều kiện", icon: "FileCheck" },
              ].map((tab) => {
                const isActive = activeAboutTab === tab.id;
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
                      {tab.icon === "ArrowUpRight" && <ArrowUpRight size={14} className={isActive ? "text-[#00C694]" : "text-[#667085]"} strokeWidth={3} />}
                      {tab.icon === "Briefcase" && <Briefcase size={20} className={isActive ? "text-white" : "text-[#667085]"} />}
                      {tab.icon === "Newspaper" && <Newspaper size={20} className={isActive ? "text-white" : "text-[#667085]"} />}
                      {tab.icon === "FileCheck" && <FileCheck size={20} className={isActive ? "text-white" : "text-[#667085]"} />}
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

          <section className="mt-8 space-y-24">
            {/* Vision & Mission */}
            <section id="vision" className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-[1.12fr_0.88fr] gap-6 scroll-mt-24">
              {/* Vision Hero Side */}
              <div className="relative rounded-[32px] overflow-hidden h-[768px] group">
                <img
                  src={visionHero}
                  alt="Vision Hero"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/30" />
                
                {/* Vision Quote Glass Card */}
                <div className="absolute bottom-6 left-6 right-6 p-12 rounded-[24px] bg-white/20 backdrop-blur-xl border border-white/30 flex items-center gap-12 overflow-hidden shadow-2xl">
                  <div className="shrink-0 text-white/20">
                    <svg width="88" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.5 0H0V45H22.5V85H37.5V45H37.5V0ZM87.5 0H50V45H72.5V85H87.5V45H87.5V0Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-[24px] md:text-[28px] text-white leading-relaxed font-normal tracking-wide">
                    Trở thành Công ty hàng đầu về tư vấn
                    <br />
                    tài chính cá nhân và đầu tư tại Việt Nam.
                  </div>
                </div>
              </div>

              {/* Tầm nhìn & Sứ mệnh Cards Side */}
              <div className="bg-white rounded-[32px] p-6 flex flex-col gap-6 h-[768px]">
                {/* Tầm nhìn Block */}
                <div className="relative flex-1 bg-white rounded-[24px] p-10 flex flex-col justify-center border border-[#F2F4F7] hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-8 right-8">
                    <ArrowUpRight className="text-[#00C694]" size={28} />
                  </div>
                  
                  <div className="mb-6 h-[92px] w-[92px]">
                    <VisionIcon />
                  </div>
                  
                  <h3 className="text-[40px] font-bold text-[#101828] mb-6 leading-tight">
                    Tầm nhìn
                  </h3>
                  
                  <p className="text-[18px] text-[#344054] leading-[26px] max-w-[460px]">
                    Trở thành Công ty hàng đầu về tư vấn tài chính cá nhân và đầu tư tại Việt Nam.
                  </p>
                </div>

                {/* Sứ mệnh Block */}
                <div className="relative flex-1 bg-white rounded-[24px] p-10 flex flex-col justify-center border border-[#F2F4F7] hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-8 right-8">
                    <ArrowUpRight className="text-[#00C694]" size={28} />
                  </div>
                  
                  <div className="mb-6 h-[92px] w-[92px]">
                    <MissionIcon />
                  </div>
                  
                  <h3 className="text-[40px] font-bold text-[#101828] mb-6 leading-tight">
                    Sứ mệnh
                  </h3>
                  
                  <p className="text-[18px] text-[#344054] leading-[26px] max-w-[500px]">
                    Xây dựng tư duy phát triển cho nhà đầu tư tài chính Việt Nam, hướng tới sự thịnh vượng và bền vững trong tương lai.
                  </p>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section id="core-values" className="max-w-[1440px] mx-auto px-6 lg:px-0 scroll-mt-24">
              <div className="bg-white rounded-[48px] p-12 border border-[#F2F4F7]">
                <h3 className="text-center text-[48px] font-bold text-[#101828] mb-12 leading-[56px]">
                  Giá trị cốt lõi
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Thông thái */}
                  <div 
                    className="relative h-[450px] rounded-[32px] p-10 overflow-hidden border border-[#D0D5DD]/50 group"
                    style={{ background: 'linear-gradient(179.96deg, #FFFFFF 35.01%, rgba(187, 251, 169, 0.2) 69.99%, rgba(154, 255, 220, 0.5) 99.97%)' }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-[24px] font-bold text-[#101828] mb-6 leading-[32px]">Thông thái</h4>
                      <p className="text-[18px] text-[#344054] leading-[26px]">
                        Giúp khách hàng hiểu trạng thái tài chính cá nhân, xây dựng và đạt được các mục tiêu với hiểu biết sâu rộng về thị trường từ đội ngũ chuyên gia Kafi.
                      </p>
                    </div>
                    {/* Illustration Background */}
                    <div className="absolute -bottom-4 -right-12 w-[522px] h-[357px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      <img src="/assets/about/496742c14694bc09dbd89539105b4c8e6ab9bdfc.svg" alt="Illustration" className="size-full object-contain" />
                    </div>
                    {/* Floating Icon Circle */}
                    <div className="absolute bottom-[91px] left-[152px] size-[58px] rounded-full bg-white flex items-center justify-center shadow-lg transform -rotate-180">
                      <Database className="text-[#00C694] size-[32px]" />
                    </div>
                  </div>

                  {/* Đơn giản */}
                  <div 
                    className="relative h-[450px] rounded-[32px] p-10 overflow-hidden border border-[#D0D5DD]/50 group"
                    style={{ background: 'linear-gradient(179.96deg, #FFFFFF 35.01%, rgba(187, 251, 169, 0.2) 69.99%, rgba(154, 255, 220, 0.5) 99.97%)' }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-[24px] font-bold text-[#101828] mb-6 leading-[32px]">Đơn giản</h4>
                      <p className="text-[18px] text-[#344054] leading-[26px]">
                        Cung cấp các công cụ, giải pháp tài chính đơn giản, dễ sử dụng, hướng tới tối ưu hóa trải nghiệm khách hàng.
                      </p>
                    </div>
                    {/* Illustration Background */}
                    <div className="absolute -bottom-4 -right-12 w-[522px] h-[357px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      <img src="/assets/about/87addde8427f84d51c0cf667cc134808060ba0c8.svg" alt="Illustration" className="size-full object-contain" />
                    </div>
                    {/* Floating Icon Circle */}
                    <div className="absolute bottom-[91px] left-[152px] size-[58px] rounded-full bg-white flex items-center justify-center shadow-lg">
                      <UserRound className="text-[#00C694] size-[32px]" />
                    </div>
                  </div>

                  {/* Chuyên nghiệp */}
                  <div 
                    className="relative h-[450px] rounded-[32px] p-10 overflow-hidden border border-[#D0D5DD]/50 group"
                    style={{ background: 'linear-gradient(179.96deg, #FFFFFF 35.01%, rgba(187, 251, 169, 0.2) 69.99%, rgba(154, 255, 220, 0.5) 99.97%)' }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-[24px] font-bold text-[#101828] mb-6 leading-[32px]">Chuyên nghiệp</h4>
                      <p className="text-[18px] text-[#344054] leading-[26px]">
                        Giữ vững chuẩn mực nghề nghiệp, hành xử có trách nhiệm và đặt lợi ích khách hàng lên hàng đầu.
                      </p>
                    </div>
                    {/* Illustration Background */}
                    <div className="absolute -bottom-4 -right-12 w-[522px] h-[357px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      <img src="/assets/about/f7abfb3d30ecd03b857a5f56d011ed77523fb175.svg" alt="Illustration" className="size-full object-contain" />
                    </div>
                    {/* Floating Icon Circle */}
                    <div className="absolute bottom-[91px] left-[152px] size-[58px] rounded-full bg-white flex items-center justify-center shadow-lg">
                      <HandHeart className="text-[#00C694] size-[32px]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Kafi through numbers */}
            <section id="numbers" className="max-w-[1440px] mx-auto scroll-mt-24">
              <h3 className="text-center text-[56px] font-bold">
                Kafi qua những con số
              </h3>
              <p className="text-center text-[22px] text-[#344054] mt-4 max-w-[900px] mx-auto">
                Từng cột mốc tăng trưởng được xây dựng trên nền tảng minh bạch, năng
                lực chuyên môn và sự đồng hành lâu dài cùng nhà đầu tư.
              </p>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-[381px_1fr] gap-6">
                <div className="bg-white rounded-[24px] p-8">
                  <div className="border-b border-[#E1E6EC] pb-8">
                    <p className="text-[24px] text-[#667085] font-semibold">
                      VỐN ĐIỀU LỆ
                    </p>
                    <p className="text-[84px] font-bold leading-[1] mt-3">7,500</p>
                    <p className="text-[44px] mt-2">Tỷ đồng</p>
                  </div>
                  <div className="pt-8">
                    <p className="text-[24px] text-[#667085] font-semibold">
                      TỔNG TÀI SẢN
                    </p>
                    <p className="text-[110px] font-bold leading-[1] mt-3">
                      26,870
                    </p>
                    <p className="text-[44px] mt-2">Tỷ đồng</p>
                  </div>
                  <p className="text-[24px] mt-6 text-[#667085]">
                    Tính đến 31/12/2025
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[286px_1fr] gap-6">
                  <div className="bg-gradient-to-b from-[#0b6f88] to-[#00C694] rounded-[24px] p-6 text-white relative overflow-hidden">
                    <img
                      src={numbersTeam}
                      alt="Numbers"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                    <p className="relative text-[34px] leading-[1.4] mt-20">
                      Những con số phản ánh niềm tin và hành trình phát triển bền
                      vững của Kafi.
                    </p>
                  </div>
                  <div className="bg-white rounded-[24px] p-6 flex items-center gap-4 relative overflow-hidden">
                    <img
                      src={numbersArrow}
                      alt="Arrow"
                      className="w-[250px] h-auto"
                    />
                    <div>
                      <p className="text-[84px] font-bold leading-none">300K+</p>
                      <p className="text-[48px] font-bold mt-2">
                        Nhà đầu tư tin tưởng
                      </p>
                      <p className="text-[30px] text-[#667085] mt-2">
                        Cộng đồng đầu tư đang phát triển mỗi ngày
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[24px] p-6 flex items-center justify-between">
                    <div>
                      <p className="text-[84px] font-bold leading-none">300+</p>
                      <p className="text-[48px] font-bold mt-2">
                        Đối tác chiến lược
                      </p>
                      <p className="text-[30px] text-[#667085] mt-2">
                        Định chế tài chính chuyên nghiệp
                      </p>
                    </div>
                    <img
                      src={numbersBubbles}
                      alt="Bubbles"
                      className="w-[170px] h-auto"
                    />
                  </div>
                  <div className="rounded-[24px] overflow-hidden">
                    <img
                      src={numbersSkyscraper}
                      alt="Skyscraper"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Awards */}
            <section id="awards" className="max-w-[1440px] mx-auto py-10 grid grid-cols-1 xl:grid-cols-[1.07fr_0.93fr] gap-6 scroll-mt-24">
              <div className="rounded-[32px] bg-[#00C694] p-10 relative overflow-hidden min-h-[780px]">
                <img
                  src={awardsPodium}
                  alt="Podium"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%]"
                />
                <img
                  src={awardsTrophy}
                  alt="Trophy"
                  className="absolute right-[8%] top-[5%] w-[58%]"
                />
                <div className="relative z-10 max-w-[360px]">
                  <p className="text-[28px]">Thành Tựu</p>
                  <h3 className="text-[70px] font-bold leading-[1.05] mt-4">
                    Giải thưởng
                  </h3>
                  <p className="text-[28px] mt-6 leading-[1.45]">
                    Những giải thưởng Kafi đạt được phản ánh nỗ lực không ngừng
                    trong việc nâng cao chất lượng dịch vụ, minh bạch hoạt động và
                    trải nghiệm nhà đầu tư.
                  </p>
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#101820] text-[#00C694] px-6 py-3 text-[22px] font-medium">
                    Xem tất cả <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Giải thưởng",
                    title: "Tăng trưởng ấn tượng",
                    detail: "Thương hiệu mạnh Việt Nam 2025",
                    image: awardGrowth,
                  },
                  {
                    label: "Giải thưởng",
                    title: "Doanh nghiệp truyền cảm hứng",
                    detail: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                    image: awardInspire,
                  },
                  {
                    label: "Giải thưởng",
                    title: "Doanh nghiệp xuất sắc",
                    detail: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                    image: awardExcellent,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-[24px] p-6 flex gap-6 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[92px] h-[180px] object-contain"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[28px] font-semibold">{item.label}</p>
                        <ArrowUpRight className="text-[#00C694]" />
                      </div>
                      <h4 className="text-[56px] leading-[1.05] font-bold mt-2">
                        {item.title}
                      </h4>
                      <div className="h-px bg-[#D6DCE4] my-4" />
                      <p className="text-[30px] leading-[1.3] text-[#344054]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* Other Sections (Always visible) */}
          <section className="mt-24 space-y-24">
            <section id="leadership" className="max-w-[1440px] mx-auto py-6">
              <h3 className="text-center text-[56px] font-bold">
                Những người lãnh đạo tại Kafi
              </h3>
              <div className="mt-8 flex justify-center">
                <div className="bg-white rounded-full p-2 flex gap-2">
                  {["Hội đồng quản trị", "Ban điều hành", "Ban kiểm soát"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveLeadershipTab(tab)}
                        className={`px-6 py-3 rounded-full text-[24px] ${activeLeadershipTab === tab
                          ? "bg-[#00C694] font-semibold"
                          : "text-[#344054]"
                          }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {activeLeaders.slice(0, 5).map((leader) => (
                  <div
                    key={leader.name}
                    className="bg-[#DDE2EC] rounded-[32px] overflow-hidden h-[540px] relative"
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0f172aaf] to-transparent">
                      <h4 className="text-[54px] font-bold text-[#F7F9FC] leading-[1.05]">
                        {leader.name}
                      </h4>
                      <p className="text-[30px] text-white/90 mt-2">
                        {leader.title}
                      </p>
                    </div>
                    <button className="absolute right-5 bottom-5 size-11 rounded-full bg-[#0AE685] text-[#073038] grid place-items-center">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                ))}
                <div className="bg-[#106070] rounded-[32px] p-6 lg:col-span-1">
                  <h4 className="text-[74px] leading-[1.05] font-bold text-[#F7F9FC]">
                    Diệp Thế Anh
                  </h4>
                  <p className="text-[30px] text-white/70 mt-2">
                    Thành viên HĐQT kiêm Phó Tổng giám đốc
                  </p>
                  <div className="h-px bg-white/30 my-6" />
                  <p className="text-[30px] text-[#F7F9FC] leading-[1.45]">
                    Ông là chuyên gia phát triển công nghệ tại các định chế tài
                    chính, với hơn 20 năm kinh nghiệm xây dựng và vận hành hệ thống
                    công nghệ cho lĩnh vực chứng khoán; từng đảm nhiệm Giám đốc
                    Nghiên cứu & Phát triển tại Chứng khoán SSI, Phó Tổng Giám đốc
                    tại Chứng khoán ACB và Giám đốc Công nghệ (CTO) tại Chứng khoán
                    HSC.
                  </p>
                </div>
              </div>
            </section>

            <section className="max-w-[1440px] mx-auto bg-white rounded-[48px] p-8 lg:p-16">
              <h3 className="text-center text-[56px] font-bold">
                Đội ngũ nhân sự được cấp chứng chỉ hành nghề
              </h3>
              <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1fr_582px] gap-8 items-stretch">
                <div>
                  <div className="bg-[#F7F9FC] rounded-full p-2 inline-flex gap-2 mb-5">
                    {certYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={`px-5 py-2.5 rounded-full text-[22px] ${activeYear === year
                          ? "bg-[#073038] text-[#F7F9FC] font-semibold"
                          : "text-[#101828]"
                          }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {certFaq.map((row, idx) => {
                      const opened = idx === openedFaq;
                      return (
                        <div
                          key={`${row.title}-${idx}`}
                          className={`rounded-[16px] border-l-[6px] ${opened
                            ? "border-[#00C694] bg-[linear-gradient(247deg,rgba(196,255,166,0.1),rgba(0,198,148,0.2))]"
                            : "border-[#E8EDF3] bg-white"
                            } p-6`}
                        >
                          <button
                            onClick={() => setOpenedFaq(opened ? -1 : idx)}
                            className="w-full flex items-start gap-3 text-left"
                          >
                            {opened ? (
                              <ChevronUp className="mt-1" />
                            ) : (
                              <ChevronDown className="mt-1" />
                            )}
                            <p className="text-[34px] font-semibold leading-[1.25]">
                              {row.title}
                            </p>
                          </button>
                          {opened && (
                            <div className="pl-10 mt-5 flex items-center justify-between gap-4">
                              <p className="text-[30px] text-[#344054]">
                                {row.date}
                              </p>
                              <button className="inline-flex items-center gap-2 rounded-full border border-[#00C694] px-5 py-2.5 text-[24px]">
                                {row.cta}
                                <ArrowUpRight
                                  size={18}
                                  className="text-[#0B756E]"
                                />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[32px] overflow-hidden relative bg-[#00C694] min-h-[760px]">
                  <img
                    src={certHeroBg}
                    alt="Certificate background"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light opacity-90"
                  />
                  <img
                    src={certHeroPerson}
                    alt="Certificate representative"
                    className="absolute inset-0 w-full h-[70%] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#00c69470] backdrop-blur-sm border-t border-white/20">
                    <h4 className="text-[48px] font-bold text-white">
                      Chứng chỉ hành nghề chứng khoán
                    </h4>
                    <p className="text-[28px] mt-3 text-[#F7F9FC] leading-[1.45]">
                      chứng chỉ hành nghề, mang đến cho khách hàng sự yên tâm trong
                      mỗi quyết định đầu tư.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* partners */}
            <section id="partners" className="max-w-[1440px] mx-auto py-24 min-h-[400px] flex flex-col items-center justify-center text-center">
              <h3 className="text-[56px] font-bold">Đối tác chiến lược</h3>
              <p className="text-[22px] text-[#344054] mt-4 max-w-[900px]">
                Kafi hợp tác chặt chẽ với các định chế tài chính hàng đầu để mang lại giá trị tối ưu cho khách hàng.
              </p>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50">
                {/* Placeholder for partner logos */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-white/50 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-xl">PARTNER {i}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Network */}
            <section id="network" className="max-w-[1440px] mx-auto py-24 min-h-[400px] flex flex-col items-center justify-center text-center">
              <h3 className="text-[56px] font-bold">Mạng lưới chi nhánh</h3>
              <p className="text-[22px] text-[#344054] mt-4 max-w-[900px]">
                Kafi hiện diện tại các thành phố lớn, sẵn sàng hỗ trợ nhà đầu tư trên khắp cả nước.
              </p>
              <div className="mt-16 h-[400px] w-full bg-white/50 rounded-[48px] flex items-center justify-center border border-dashed border-gray-300">
                <span className="text-gray-400 font-bold text-xl uppercase tracking-widest">Network Map Illustration</span>
              </div>
            </section>
          </section>
        </section>

        <section className="max-w-[1440px] mx-auto py-4">
          <div className="relative rounded-[48px] overflow-hidden bg-gradient-to-r from-[#0c6070] to-[#00c694] px-14 py-16">
            <img
              src={ctaBg}
              alt="CTA background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-darken"
            />
            <div className="relative z-10 max-w-[740px]">
              <h3 className="text-[64px] font-bold text-white leading-[1.1]">
                Bắt đầu hành trình đầu tư của bạn
              </h3>
              <p className="text-[30px] text-white/95 mt-4">
                Khám phá các sản phẩm và dịch vụ được thiết kế cho nhà đầu tư
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00C694] text-[#101828] px-7 py-3 text-[28px] font-medium">
                Khám phá sản phẩm
                <ArrowUpRight size={20} className="text-[#0C6070]" />
              </button>
            </div>

            <img
              src={ctaCoin}
              alt="Coin"
              className="absolute right-[12%] bottom-[10%] w-[290px] opacity-90"
            />
            <div className="absolute right-[5%] top-[44%] rounded-[18px] border-[5px] border-white/70 bg-white px-6 py-3 flex items-center gap-3">
              <CircleDollarSign className="text-[#00C694]" />
              <span className="text-[30px] font-bold">Thu nhập</span>
              <span className="text-[30px] font-bold text-[#0B756E]">
                +168,000,000 đ
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
}
