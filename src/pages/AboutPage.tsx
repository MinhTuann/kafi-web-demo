import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
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

const Card1Background = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.5px)] top-[calc(50%-1.5px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[157px] top-[calc(50%-0.5px)]">
        <div className="absolute inset-[3.78%]">
          <img alt="" className="block max-w-none size-full opacity-80" src={`${ASSET_BASE}/1976b80b9e90bf4cc67b2b0b894270aa18efc647.svg`} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[157px] top-[calc(50%-0.5px)]">
        <div className="absolute inset-[6.33%]">
          <img alt="" className="block max-w-none size-full opacity-80" src={`${ASSET_BASE}/e33bded6b2260b1074157ab276f00f76afc532f1.svg`} />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-162.5px)] size-[157px] top-[calc(50%-0.5px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="relative size-[157px]">
            <div className="absolute inset-[4.22%]">
              <img alt="" className="block max-w-none size-full opacity-80" src={`${ASSET_BASE}/9edcd105d027fa74d68e61a96698b23e53ebcd80.svg`} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[157px] left-1/2 top-[calc(50%-95.5px)] w-[316px]">
        <img alt="" className="absolute block max-w-none size-full opacity-80" src={`${ASSET_BASE}/a6167b44b90a4009e2b444804e41caf7baf72580.svg`} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[157px] left-1/2 top-[calc(50%+92.5px)] w-[316px]">
        <img alt="" className="absolute block max-w-none size-full opacity-80" src={`${ASSET_BASE}/4a74956a29effc308853b17ebad0fa3276b404b7.svg`} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+163.5px)] size-[157px] top-[calc(50%-0.5px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="relative size-[157px]">
            <div className="absolute inset-[4.22%]">
              <img alt="" className="block max-w-none size-full opacity-80" src={`${ASSET_BASE}/77c8759b9b8f6fd9379bcebf8e8ba1d2f106485c.svg`} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[229.5px] left-[210px] top-[5px] w-0">
        <div className="absolute inset-[-0.33%_-0.75px]">
          <img alt="" className="block max-w-none size-full opacity-80" src={`${ASSET_BASE}/569b890c0ae40a057e8882e30ccd2b761cc8e264.svg`} />
        </div>
      </div>
    </div>
  </div>
);

const heroImage = `${ASSET_BASE}/hero-team.png`;

const numbersTeam = `${ASSET_BASE}/numbers-team.png`;
const awardGrowth = `${ASSET_BASE}/awards-growth.png`;
const awardInspire = `${ASSET_BASE}/awards-inspire.png`;
const awardExcellent = `${ASSET_BASE}/awards-excellent.png`;
const staffCertSphere = `${ASSET_BASE}/staff-cert-sphere.png`;
const staffCertPerson = `${ASSET_BASE}/staff-cert-person.png`;
const ctaBgPattern = `${ASSET_BASE}/cta-bg-pattern.png`;

const leaderCards = [
  {
    name: "Lê Quang Trung",
    title: "Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-1.png`,
    description: "Ông là chuyên gia hàng đầu về kinh doanh nguồn vốn và ngoại hối, với hơn 30 năm kinh nghiệm tài chính – ngân hàng. Ông hiện là Giám đốc khối Nguồn vốn và ngoại hối Ngân hàng TMCP Quốc tế Việt Nam (VIB) và từng đảm nhiệm các vai trò quản lý cấp cao tại Citibank, Deutsche Bank, BNP Paribas.",
  },
  {
    name: "Nguyễn Việt Cường",
    title: "Phó Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-2.png`,
    description: "Ông là chuyên gia phát triển công nghệ tại các định chế tài chính, với hơn 20 năm kinh nghiệm xây dựng và vận hành hệ thống công nghệ cho lĩnh vực chứng khoán; từng đảm nhiệm Giám đốc Nghiên cứu & Phát triển tại Chứng khoán SSI, Phó Tổng Giám đốc tại Chứng khoán ACB và Giám đốc Công nghệ (CTO) tại Chứng khoán HSC.",
  },
  {
    name: "Hà Hoàng Dũng",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-3.png`,
    description: "Ông là nhà chuyên gia hàng đầu về quản trị rủi ro trong lĩnh vực tài chính - ngân hàng, với hơn 25 năm kinh nghiệm tại các định chế trong và ngoài nước. Ông hiện là Giám đốc Quản trị rủi r VIB; triển khai thành công các chuẩn mực quốc tế Basel II và Basel III tại VIB và từng giữ các vị trí quản lý cấp cao tại Ngân hàng Mizuho Việt Nam.",
  },
  {
    name: "Trần Minh Tuấn",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-4.png`,
    description: "Ông là chuyên gia quản trị nhân sự cấp cao, với hơn 25 năm kinh nghiệm xây dựng tổ chức và phát triển nhân tài tại các công ty tài chính toàn cầu ở Việt Nam. Ông hiện là Giám đốc Nhân sự VIB; từng giữ vai trò quản lý tại Vinaflour và CTCP Tư vấn nhân lực NIC.",
  },
  {
    name: "Trịnh Thanh Cần",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-5.png`,
    description: "Ông là nhà quản trị cấp cao hàng đầu trong lĩnh vực chứng khoán, với hơn 20 năm kinh nghiệm điều hành các công ty chứng khoán tại Việt Nam; từng giữ vai trò Tổng giám đốc Chứng khoán ACB, Giám đốc Điều hành Chứng khoán Bản Việt, và các vị trí quản lý tại HSBC, VinaCapital.",
  },
  {
    name: "Diệp Thế Anh",
    title: "Thành viên HĐQT kiêm Phó tổng giám đốc",
    image: `${ASSET_BASE}/cb9d43d01fe7caf7c3f2db98eae07b8a516369d8.png`,
    description: "Ông là chuyên gia phát triển công nghệ tại các định chế tài chính, với hơn 20 năm kinh nghiệm xây dựng và vận hành hệ thống công nghệ cho lĩnh vực chứng khoán; từng đảm nhiệm Giám đốc Nghiên cứu & Phát triển tại Chứng khoán SSI, Phó Tổng Giám đốc tại Chứng khoán ACB và Giám đốc Công nghệ (CTO) tại Chứng khoán HSC.",
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
  <div className="size-[92px] shrink-0 overflow-hidden rounded-full bg-[#0B756E] flex items-center justify-center">
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

// 3D Flip Card Component for Leadership
const LeaderFlipCard = ({ leader }: { leader: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[540px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden bg-[#DDE2EC]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Front Decorations (Vibrant accent layers from Figma) */}
            <div className="absolute top-[-384.27px] -left-[40vw] w-[729.5px] h-[838.988px] rotate-[33.91deg] bg-[rgba(22,228,130,0.3)] pointer-events-none" />
            <div className="absolute top-[21.16px] -left-[40vw] w-[689.604px] h-[801.304px] rotate-[144.83deg] bg-[#00C694] pointer-events-none" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 pt-16 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-[4px]">
            <div className="flex-1">
              <h4 className="font-bold text-[32px] leading-[1.2] text-white m-0">
                {leader.name}
              </h4>
              <p className="font-normal text-[18px] leading-[26px] text-[#F9FAFB] m-0 mt-1">
                {leader.title}
              </p>
            </div>
            <div className="bg-[#0AE685] rounded-full p-2.5 flex items-center justify-center shrink-0 shadow-lg">
              <ArrowUpRight size={20} className="text-[#101828]" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden bg-[#106070] p-8 flex flex-col items-start gap-6 shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-[32px] leading-[1.2] text-[#F7F9FC] m-0">
              {leader.name}
            </h4>
            <p className="font-normal text-[18px] leading-[26px] text-white/70 m-0">
              {leader.title}
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <p className="font-normal text-[18px] lg:text-[20px] leading-[1.6] text-[#F7F9FC] text-justify m-0 opacity-90">
              {leader.description}
            </p>
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
      `}} />
    </div>
  );
};

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

      <main className="relative w-full px-4 lg:px-6 py-6">
        {/* Product Tab Selection Group */}
        <section className="space-y-8">
          {/* Sticky Product Tab Navigation */}
          <section className="sticky top-28 z-20 w-full flex justify-center py-4">
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

          {/* Vision & Mission */}
          <section id="vision" className="w-full mt-6 grid grid-cols-1 xl:grid-cols-[1.12fr_0.88fr] gap-6 scroll-mt-24">
            {/* Vision Hero Side */}
            <div className="relative rounded-[32px] overflow-hidden h-[768px] group bg-[#16E482]">
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={`${ASSET_BASE}/ad23f233308efa384ed37d30a72995fb55fd18f2.png`}
                  alt="Vision Hero Layer 1"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <img
                  src={`${ASSET_BASE}/28a3915bec8db03bde23c28214333baa6f573a61.png`}
                  alt="Vision Hero Layer 2"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Quote Glass Area at bottom */}
              <div className="rounded-[24px] absolute inset-x-0 bottom-0 h-[20vh] flex items-center justify-center p-8 bg-gradient-to-b from-[#00C694]/0 via-[#01B68C]/50 to-[#0AE685]/80 backdrop-blur-[24px]">
                <div className="flex items-center gap-10">
                  <div className="shrink-0 text-[#073038]">
                    <svg width="88" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37.5 0H0V45H22.5V85H37.5V45H37.5V0ZM87.5 0H50V45H72.5V85H87.5V45H87.5V0Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-[24px] text-white leading-[1.5] font-normal tracking-[0.24px] m-0">
                    Trở thành Công ty hàng đầu về tư vấn<br />
                    tài chính cá nhân và đầu tư tại Việt Nam.
                  </p>
                </div>
              </div>
            </div>

            {/* Tầm nhìn & Sứ mệnh Cards Side */}
            <div className="bg-white rounded-[32px] p-10 xl:p-14 flex flex-col h-[768px] transition-all duration-300 relative">
              {/* Tầm nhìn Block */}
              <div className="relative flex-1 flex flex-col justify-center">
                <div className="absolute top-6 right-0">
                  <ArrowUpRight className="text-[#00C694]" strokeWidth={2.5} size={32} />
                </div>
                <div className="mb-6 h-[92px] w-[92px]">
                  <VisionIcon />
                </div>
                <h3 className="text-[40px] font-bold text-[#101828] mb-4 leading-[1.2]">
                  Tầm nhìn
                </h3>
                <p className="text-[18px] text-[#344054] leading-[26px] max-w-[460px]">
                  Trở thành Công ty hàng đầu về tư vấn
                  <br />
                  tài chính cá nhân và đầu tư tại Việt Nam.
                </p>
              </div>

              <div className="w-full h-px bg-[#F2F4F7]" />

              {/* Sứ mệnh Block */}
              <div className="relative flex-1 flex flex-col justify-center">
                <div className="absolute top-6 right-0">
                  <ArrowUpRight className="text-[#00C694]" strokeWidth={2.5} size={32} />
                </div>
                <div className="mb-6 mt-8 h-[92px] w-[92px]">
                  <MissionIcon />
                </div>
                <h3 className="text-[40px] font-bold text-[#101828] mb-4 leading-[1.2]">
                  Sứ mệnh
                </h3>
                <p className="text-[18px] text-[#344054] leading-[26px] max-w-[510px]">
                  Xây dựng tư duy phát triển cho nhà đầu tư tài chính Việt Nam, hướng tới sự thịnh vượng và bền vững trong tương lai.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section id="core-values" className="w-full scroll-mt-24">
            <div className="bg-white rounded-[48px] py-16 px-12 border border-[#F2F4F7]">
              <h3 className="text-center text-[48px] font-bold text-[#101828] mb-12 leading-[56px]">
                Giá trị cốt lõi
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Thông thái */}
                <div className="relative h-[450px] bg-white rounded-[24px] overflow-hidden border border-[#D0D5DD]/50 flex flex-col items-center text-center group">
                  <div className="relative z-10 p-10 pb-0">
                    <h4 className="text-[24px] font-bold text-[#101828] mb-4 leading-[32px]">Thông thái</h4>
                    <p className="text-[18px] text-[#344054] leading-[26px]">
                      Giúp khách hàng hiểu trạng thái tài chính cá nhân, xây dựng và đạt được các mục tiêu với hiểu biết sâu rộng về thị trường từ đội ngũ chuyên gia Kafi.
                    </p>
                  </div>
                  {/* Graphics Container */}
                  <div className="absolute inset-x-0 bottom-0 h-[240px] flex items-center justify-center">
                    {/* Illustration Background */}
                    <Card1Background />
                    {/* Floating Icon */}
                    <div className="size-[78px] bg-white rounded-[14px] flex items-center justify-center">
                      <Database className="text-[#0B756E] size-[48px]" />
                    </div>
                  </div>
                </div>

                {/* Đơn giản */}
                <div className="relative h-[450px] bg-white rounded-[24px] overflow-hidden border border-[#D0D5DD]/50 flex flex-col items-center text-center group">
                  <div className="relative z-10 p-10 pb-0">
                    <h4 className="text-[24px] font-bold text-[#101828] mb-4 leading-[32px]">Đơn giản</h4>
                    <p className="text-[18px] text-[#344054] leading-[26px]">
                      Cung cấp các công cụ, giải pháp tài chính đơn giản, dễ sử dụng, hướng tới tối ưu hóa trải nghiệm khách hàng.
                    </p>
                  </div>
                  {/* Graphics Container */}
                  <div className="absolute inset-x-0 bottom-0 h-[240px] flex items-center justify-center">
                    {/* Illustration Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[392px] h-[357px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      <img src={`${ASSET_BASE}/df4eeb6dc3f028d1cf9e2551a22c74cb7858e90c.svg`} alt="Illustration" className="w-full h-full object-contain opacity-80" />
                    </div>
                    {/* Floating Icon Hexagon */}
                    <div className="size-[78px] bg-white flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <UserRound className="text-[#00C694] size-[32px]" />
                    </div>
                  </div>
                </div>

                {/* Chuyên nghiệp */}
                <div className="relative h-[450px] bg-white rounded-[24px] overflow-hidden border border-[#D0D5DD]/50 flex flex-col items-center text-center group">
                  <div className="relative z-10 p-10 pb-0">
                    <h4 className="text-[24px] font-bold text-[#101828] mb-4 leading-[32px]">Chuyên nghiệp</h4>
                    <p className="text-[18px] text-[#344054] leading-[26px]">
                      Giữ vững chuẩn mực nghề nghiệp, hành xử có trách nhiệm và đặt lợi ích khách hàng lên hàng đầu.
                    </p>
                  </div>
                  {/* Graphics Container */}
                  <div className="absolute inset-x-0 bottom-0 h-[240px] flex items-center justify-center">
                    {/* Illustration Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[392px] h-[357px] pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      <img src={`${ASSET_BASE}/ebd09f487e943e5be3997e36c30a9f367f78a4e9.svg`} alt="Illustration" className="w-full h-full object-contain opacity-80" />
                    </div>
                    {/* Floating Icon Circle */}
                    <div className="size-[78px] rounded-full bg-white flex items-center justify-center">
                      <HandHeart className="text-[#00C694] size-[32px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kafi through numbers */}
          <section id="numbers" className="w-full scroll-mt-24 mb-32 flex flex-col gap-[48px] items-center">
            <div className="flex flex-col gap-[32px] items-start justify-center shrink-0 w-full relative">
              <div className="flex flex-col font-bold justify-center items-center text-[48px] text-[#101828] text-center w-full">
                <h2 className="leading-[56px] m-0">Kafi qua những con số</h2>
              </div>
              <div className="flex flex-col items-center shrink-0 w-full relative">
                <p className="text-[18px] text-[#101828] font-normal leading-[26px] text-center max-w-[638px] m-0">
                  Từng cột mốc tăng trưởng được xây dựng trên nền tảng minh bạch, năng lực chuyên môn và sự đồng hành lâu dài cùng nhà đầu tư.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-[24px] items-stretch shrink-0 w-full">
              {/* Left Global Stats Card */}
              <div className="bg-white flex flex-col gap-[16px] justify-center overflow-hidden px-[48px] py-[24px] rounded-[24px] shrink-0 w-full lg:w-[381px] relative">
                {/* Glowing Dollar Sign */}
                <div
                  className="-translate-x-full -translate-y-1/2 absolute h-[202px] w-[146px] left-[calc(50%+172.83px)] top-[calc(50%-159.69px)] pointer-events-none select-none z-0"
                >
                  <div
                    className="absolute inset-0 flex flex-col justify-center text-right text-[194.7px] font-extrabold bg-clip-text text-transparent leading-[0] blur-[24px] opacity-80"
                    style={{ backgroundImage: "linear-gradient(178.6deg, #C4FFA6 13.8%, #00AE82 99.3%)" }}
                  >
                    <p className="leading-[31.5px] m-0">$</p>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col justify-center text-right text-[194.7px] font-extrabold bg-clip-text text-transparent leading-[0]"
                    style={{ backgroundImage: "linear-gradient(178.6deg, #C4FFA6 13.8%, #00AE82 99.3%)" }}
                  >
                    <p className="leading-[31.5px] m-0">$</p>
                  </div>
                </div>

                <div className="flex flex-col gap-[24px] h-full lg:h-[458px] items-start justify-end shrink-0 w-full relative z-10">
                  <div className="border-[#d0d5dd] border-b-[0.5px] border-solid flex flex-col gap-[4px] items-start py-[4px] shrink-0 w-full">
                    <p className="font-semibold leading-[28px] shrink-0 text-[20px] text-[#667085] m-0 uppercase">
                      Vốn điều lệ
                    </p>
                    <p className="font-bold leading-[80px] shrink-0 text-[56px] text-[#101828] m-0">
                      7,500
                    </p>
                    <p className="font-normal leading-[48px] shrink-0 text-[24px] text-[#101828] m-0">
                      Tỷ đồng
                    </p>
                  </div>

                  <div className="flex flex-col gap-[12px] items-start py-[12px] shrink-0 w-full">
                    <p className="font-semibold leading-[28px] shrink-0 text-[20px] text-[#667085] m-0 uppercase">
                      Tổng tài sản
                    </p>
                    <div className="flex flex-col items-start shrink-0 text-[#101828] w-full">
                      <p className="font-bold leading-none shrink-0 text-[80px] m-0">
                        26,870
                      </p>
                      <p className="font-normal leading-[48px] shrink-0 text-[24px] m-0">
                        Tỷ đồng
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center min-w-full font-normal shrink-0 text-[16px] text-[#344054] h-[48px] mt-4 lg:mt-0">
                  <p className="leading-[24px] m-0">Tính đến 31/12/2025</p>
                </div>
              </div>

              {/* Right Metrics Layout */}
              <div className="flex flex-1 flex-col gap-[24px] shrink-0 min-h-[568px]">
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row flex-1 gap-[24px] items-stretch w-full shrink-0">
                  {/* Numbers Team */}
                  <div className="bg-[#00c694] flex flex-col items-center justify-center p-[24px] overflow-hidden rounded-[24px] shrink-0 w-full lg:w-[286px] min-h-[272px] relative group cursor-pointer">
                    {/* Background Image with Darken Blend */}
                    <div className="absolute h-[275px] left-[-54px] top-[-3px] w-[422px] mix-blend-darken">
                      <img alt="Team" className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-110 transition-transform duration-700" src={numbersTeam} />
                    </div>

                    {/* Atmospheric Top-Down Gradient Overlay */}
                    <div className="absolute top-0 left-0 w-full h-[182px] bg-gradient-to-t from-transparent to-[#08444e]/60 backdrop-blur-[12px] opacity-100" />

                    {/* Content */}
                    <div className="relative z-10 text-center px-4">
                      <p className="font-normal text-[18px] leading-[26px] text-white m-0">
                        Những con số phản ánh niềm tin và hành trình phát triển bền vững của Kafi.
                      </p>
                    </div>
                  </div>

                  {/* 300K+ */}
                  <div className="bg-white flex flex-1 flex-col lg:flex-row items-center overflow-hidden rounded-[24px] min-h-[272px] shrink-0 relative group p-10 lg:p-0">
                    {/* Arrow Overlay (Desktop: Side-by-side, Mobile: Background) */}
                    <div className="flex-none w-[200px] h-[200px] lg:w-[274px] lg:h-[269px] relative lg:static mb-8 lg:mb-0 opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-110">
                      <img
                        alt="Arrow"
                        className="w-full h-full object-contain"
                        src={`${ASSET_BASE}/numbers-arrow-gradient.png`}
                      />
                    </div>

                    <div className="flex flex-col gap-[16px] h-auto lg:h-[200px] justify-center items-center lg:items-start shrink-0 relative z-10 w-full lg:w-[242px] px-6 lg:px-0">
                      {/* Horizontal Line Decoration (Line 133 for 300K+) */}
                      <div className="hidden lg:block w-[274px] h-[2px] opacity-40">
                        <img
                          src={`${ASSET_BASE}/numbers-line-horizontal-long.svg`}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>

                      <div className="flex flex-col gap-[16px] w-full shrink-0">
                        <p className="font-bold leading-[1] text-[64px] xl:text-[80px] text-[#101828] m-0 lg:leading-[80px]">
                          300K+
                        </p>
                        <div className="flex flex-col gap-[8px] items-center lg:items-start shrink-0">
                          <p className="font-bold leading-[32px] shrink-0 text-[20px] xl:text-[24px] text-[#101828] m-0">
                            Nhà đầu tư tin tưởng
                          </p>
                          <p className="font-normal leading-[24px] shrink-0 text-[16px] text-[#344054] m-0">
                            Cộng đồng đầu tư đang phát triển mỗi ngày
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col lg:flex-row flex-1 gap-[24px] items-stretch w-full shrink-0">
                  <div className="bg-white flex flex-col lg:flex-row gap-[32px] items-center lg:items-center justify-between overflow-hidden rounded-[24px] p-10 lg:p-0 px-[32px] shrink-0 w-full lg:w-auto xl:w-[413px] min-h-[272px] group relative">
                    <div className="flex flex-col gap-[16px] items-center lg:items-start shrink-0 z-10 w-full text-center lg:text-left lg:h-[200px] justify-center lg:pl-8">
                      {/* Horizontal Line Decoration (Line 133 for 300+) */}
                      <div className="hidden lg:block w-[173px] h-[2px] opacity-40 mb-4">
                        <img
                          src={`${ASSET_BASE}/numbers-line-horizontal.svg`}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>

                      <p className="font-bold leading-[1] shrink-0 text-[56px] lg:text-[56px] text-[#101828] m-0">
                        300+
                      </p>
                      <div className="flex flex-col gap-[8px] items-center lg:items-start shrink-0">
                        <p className="font-bold leading-[32px] shrink-0 text-[24px] text-[#101828] m-0">
                          Đối tác chiến lược
                        </p>
                        <p className="font-normal leading-[24px] shrink-0 text-[16px] text-[#344054] m-0 max-w-[200px] xl:max-w-none">
                          Định chế tài chính chuyên nghiệp
                        </p>
                      </div>
                    </div>
                    <div className="aspect-square w-[20vw] relative shrink-0 -mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-10 xl:-right-10 opacity-20 lg:opacity-100 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                      <img alt="Decoration" className="absolute w-full h-full object-contain" src={`${ASSET_BASE}/numbers-partners-decoration.png`} />
                    </div>
                  </div>

                  <div className="bg-[#08444e] flex flex-1 items-center overflow-hidden rounded-[24px] min-h-[272px] shrink-0 relative group">
                    <div className="absolute inset-0">
                      <img alt="Cityscape" className="absolute w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700" src={`${ASSET_BASE}/numbers-skyscraper-highref.png`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section id="awards" className="w-full scroll-mt-24">
            <div className="flex flex-col xl:flex-row gap-6 w-full items-stretch">
              <div className="bg-[#00C694] rounded-[32px] px-[24px] py-[56px] relative overflow-hidden flex flex-col justify-between min-h-[680px] xl:w-[723px] shrink-0 group">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Podium Backdrop (Node 171:8226) */}
                  <div className="absolute h-[70vh] right-0 top-[288px] w-[40vw] opacity-100 transition-transform duration-700 group-hover:scale-105">
                    <img
                      alt="Podium"
                      src={`${ASSET_BASE}/awards-podium-highref.png`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Glowing Trophy (Node 171:8227) */}
                  <div className="absolute h-[70vh] right-[6vw] top-[8vh] w-[28vw] transition-transform duration-700 group-hover:translate-y-[-10px]">
                    <img
                      alt="Trophy"
                      src={`${ASSET_BASE}/awards-trophy-highref.png`}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Bottom Vignette Overlay (Node 171:8228) */}
                  <div className="absolute bottom-0 left-0 w-full h-[18vh] bg-gradient-to-t from-[#08444e]/40 to-transparent backdrop-blur-[2px] pointer-events-none" />
                </div>

                {/* Left Column Content (Node 171:8229) */}
                <div className="relative z-20 flex flex-col gap-[24px] items-start ml-2 lg:ml-[51px] mt-[12px] w-full max-w-[351px]">
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold leading-[26px] text-[18px] text-[#101828] m-0">
                      Thành Tựu
                    </p>
                    <h2 className="font-bold leading-[56px] text-[48px] text-[#101828] m-0">
                      Giải thưởng
                    </h2>
                  </div>
                  <p className="font-normal leading-[26px] text-[18px] text-[#101828] text-justify">
                    Những giải thưởng Kafi đạt được phản ánh nỗ lực không ngừng trong việc nâng cao chất lượng dịch vụ, minh bạch hoạt động và trải nghiệm nhà đầu tư.
                  </p>

                  <button className="bg-[#101828] flex items-center justify-center gap-2 px-[16px] py-[10px] rounded-[32px] transition-all hover:bg-[#1d2939] group/btn">
                    <span className="font-medium text-[16px] leading-[20px] text-[#00c694]">Xem tất cả</span>
                    <div className="w-6 h-6 rounded-full bg-[#101820] flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-[#00c694] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Column: Listing Awards */}
              <div className="flex flex-col gap-6 flex-1">
                {[
                  {
                    title: "Tăng trưởng ấn tượng",
                    subtitle: "Thương hiệu mạnh Việt Nam 2025",
                    icon: awardGrowth,
                  },
                  {
                    title: "Doanh nghiệp truyền cảm hứng",
                    subtitle: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                    icon: awardInspire,
                  },
                  {
                    title: "Doanh nghiệp xuất sắc",
                    subtitle: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                    icon: awardExcellent,
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[24px] px-8 xl:px-[48px] py-[24px] flex items-center gap-[32px] group hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[220px]">
                    <div className="w-[102px] shrink-0 flex items-center justify-center h-full">
                      <img alt={item.title} src={item.icon} className={`object-contain group-hover:scale-110 transition-transform duration-700 size-full`} />
                    </div>
                    <div className="flex flex-col gap-[14px] flex-1">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-semibold text-[18px] leading-[26px] text-[#101828] m-0">
                          Giải thưởng
                        </p>
                        <ArrowUpRight size={19} className="text-[#101828] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h4 className="font-bold text-[32px] lg:text-[36px] leading-[1.15] text-[#101828] m-0">
                        {item.title}
                      </h4>
                      <div className="w-full h-px bg-[#D0D5DD]" />
                      <p className="font-normal text-[18px] leading-[26px] text-[#344054] m-0">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Kafi leadership */}
        <section id="leadership" className="w-full py-20 lg:py-[80px] scroll-mt-24">
          <div className="flex flex-col items-center gap-[48px] lg:gap-[56px] w-full">
            {/* Leadership Header */}
            <div className="flex flex-col items-center gap-8 w-full max-w-[832px]">
              <h2 className="font-bold text-[36px] lg:text-[48px] leading-[1.15] text-[#101828] text-center m-0">
                Những người lãnh đạo tại Kafi
              </h2>

              <div className="bg-white p-2 rounded-[60px] flex items-center gap-2 shadow-sm border border-[#F2F4F7] overflow-x-auto max-w-full no-scrollbar">
                {[
                  { name: "Hội đồng quản trị", icon: true },
                  { name: "Ban điều hành", icon: false },
                  { name: "Ban kiểm soát", icon: false }
                ].map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveLeadershipTab(tab.name)}
                    className={`px-5 py-3 lg:px-[20px] lg:py-[16px] rounded-[58px] flex items-center gap-3 transition-all duration-300 whitespace-nowrap ${activeLeadershipTab === tab.name
                      ? "bg-[#00C694] font-semibold text-[#101828]"
                      : "bg-transparent font-normal text-[#101828] hover:bg-[#F9FAFB]"
                      }`}
                  >
                    {tab.icon && (
                      <div className={`size-6 rounded-full flex items-center justify-center ${activeLeadershipTab === tab.name ? "bg-[#101828]" : "bg-[#D0D5DD]"}`}>
                        <ArrowUpRight size={14} className={activeLeadershipTab === tab.name ? "text-[#00C694]" : "text-white"} />
                      </div>
                    )}
                    <span className="text-[16px] leading-[1.5]">{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Leadership Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {activeLeaders.map((leader) => (
                <LeaderFlipCard key={leader.name} leader={leader} />
              ))}
            </div>
          </div>
        </section>

        {/* Đội ngũ nhân sự / Staffs */}
        <section className="bg-white rounded-[48px] py-16 lg:py-[64px] px-5 lg:px-10 overflow-hidden">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12 lg:gap-[80px] items-center w-full">
            <div className="max-w-[768px] w-full text-center">
              <h2 className="font-bold text-[36px] lg:text-[48px] leading-[1.15] text-[#101828] m-0">
                Đội ngũ nhân sự được cấp chứng chỉ hành nghề
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[666px_1fr] gap-[32px] items-start w-full">
              {/* Accordions Column */}
              <div className="flex flex-col gap-[16px] w-full">
                {/* Year Tabs Switcher */}
                <div className="bg-[#F7F9FC] p-1 rounded-[32px] flex items-center self-start border border-[#F7F9FC] overflow-x-auto no-scrollbar max-w-full">
                  {certYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveYear(year)}
                      className={`px-4 py-3 lg:px-[16px] lg:py-[12px] rounded-[52px] flex items-center gap-1 transition-all duration-300 whitespace-nowrap ${activeYear === year
                        ? "bg-[#073038] font-semibold text-[#F7F9FC]"
                        : "bg-transparent font-semibold text-[#101828]"
                        }`}
                    >
                      {activeYear === year && (
                        <div className="bg-[#0AE685] rounded-full size-6 flex items-center justify-center -ml-1">
                          <ArrowUpRight size={14} className="text-[#101828] rotate-45" />
                        </div>
                      )}
                      <span className="text-[16px] leading-[1.5]">{year}</span>
                    </button>
                  ))}
                </div>

                {/* Document List */}
                <div className="flex flex-col gap-[16px] w-full">
                  {certFaq.map((row, idx) => {
                    const isOpened = idx === openedFaq;
                    return (
                      <div
                        key={`${row.title}-${idx}`}
                        className={`rounded-bl-[4px] rounded-br-[16px] rounded-tl-[4px] rounded-tr-[16px] border-l-[6px] transition-all duration-500 overflow-hidden ${isOpened
                          ? "border-[#00C694] shadow-[0px_5px_15px_rgba(74,58,255,0.06)]"
                          : "border-[#F1F2F9] bg-white shadow-[0px_1px_4px_rgba(25,33,61,0.06)]"
                          }`}
                        style={isOpened ? {
                          backgroundImage: "linear-gradient(247.4deg, rgba(196, 255, 166, 0.1) 17.5%, rgba(0, 198, 148, 0.2) 94.6%)"
                        } : {}}
                      >
                        <button
                          onClick={() => setOpenedFaq(isOpened ? -1 : idx)}
                          className="w-full flex items-center gap-[10px] p-[32px] text-left group"
                        >
                          <div className={`p-1.5 rounded-full flex items-center justify-center transition-colors ${isOpened ? "bg-transparent" : "bg-transparent"}`}>
                            {isOpened ? (
                              <ChevronUp size={20} className="text-[#101828]" />
                            ) : (
                              <ChevronDown size={20} className="text-[#101828]" />
                            )}
                          </div>
                          <p className="font-semibold text-[20px] leading-[1.35] text-[#101828] m-0">
                            {row.title}
                          </p>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpened ? "max-h-[200px] opacity-100 pb-8 px-8 pl-[76px]" : "max-h-0 opacity-0"}`}>
                          <div className="flex items-center justify-between gap-4 w-full">
                            <p className="font-normal text-[18px] leading-[26px] text-[#344054] m-0">
                              {row.date}
                            </p>
                            <button className="flex items-center gap-[6px] rounded-[32px] border border-[#00C694] px-4 py-[10px] min-h-[44px] transition-all duration-300 hover:bg-[#00C694]/5 group/btn">
                              <span className="font-medium text-[16px] text-[#101828] whitespace-nowrap">
                                {row.cta}
                              </span>
                              <div className="bg-[#073038] rounded-full size-5 flex items-center justify-center">
                                <ArrowUpRight size={12} className="text-[#0AE685] rotate-0 group-hover/btn:rotate-45 transition-transform" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hero Column */}
              <div className="bg-[#00C694] rounded-[32px] overflow-hidden relative h-[768px] min-w-0 group">
                {/* Flowing Lines Decoration */}
                <div className="absolute inset-0 mix-blend-plus-lighter opacity-80 pointer-events-none">
                  {Array.from({ length: 45 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-gradient-to-b from-white/0 via-white to-white/0 w-[8.9px] h-[301px]"
                      style={{
                        left: `${213 + i * 17.8}px`,
                        top: `${162 - i * 15}px`,
                        opacity: i < 11 ? (i + 1) * 0.09 : i > 33 ? (45 - i) * 0.09 : 1,
                        mixBlendMode: 'plus-lighter'
                      }}
                    />
                  ))}
                </div>

                {/* Sphere Background */}
                <div className="absolute inset-0 mix-blend-hard-light blur-[49px] scale-110">
                  <img
                    src={staffCertSphere}
                    alt="Abstract Sphere"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Representative Person */}
                <div className="absolute inset-x-0 top-[-44px] bottom-0 flex justify-center h-full">
                  <img
                    src={staffCertPerson}
                    alt="Representative"
                    className="h-[661px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 h-[350px] flex flex-col justify-end">
                  {/* Gradient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08444e] via-[#01B68C]/50 to-transparent backdrop-blur-[50px] pointer-events-none" />

                  {/* Glass Box */}
                  <div className="relative z-10 m-[48px] mt-0 p-[48px] py-[24px] bg-[#00c69433] border border-white/20 rounded-[24px] backdrop-blur-[10px]">
                    <h4 className="font-bold text-[24px] leading-[32px] text-white m-0 mb-[16px]">
                      Chứng chỉ hành nghề chứng khoán
                    </h4>
                    <p className="font-normal text-[18px] leading-[26px] text-white m-0 opacity-90">
                      KAFI tự hào giới thiệu đội ngũ nhân sự chuyên môn được cấp chứng chỉ hành nghề, mang đến cho khách hàng sự yên tâm trong mỗi quyết định đầu tư.

                      <span className="block mt-4">
                        Với kinh nghiệm sâu rộng và tinh thần minh bạch tuyệt đối, chúng tôi cam kết xây dựng một cộng đồng nhà đầu tư tin cậy và phát triển bền vững trên thị trường chứng khoán.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore products / CTA */}
        <section className="py-[40px]">
          <div className="relative rounded-[48px] overflow-hidden px-[60px] py-[40px]"
            style={{ backgroundImage: "linear-gradient(79.8024deg, rgb(12, 96, 112) 20.11%, rgb(0, 198, 148) 94.638%)" }}>

            {/* Background Pattern */}
            <div className="absolute inset-0 mix-blend-darken opacity-20 pointer-events-none">
              <img src={ctaBgPattern} alt="" className="w-full h-full object-cover max-w-none" />
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 py-[64px] flex flex-col items-start justify-center min-h-full">
              <div className="flex flex-col gap-[40px] items-start w-[722px]">
                <div className="flex flex-col gap-[12px] items-start w-full">
                  <h3 className="font-bold text-[36px] lg:text-[48px] leading-[56px] text-white m-0 whitespace-nowrap">
                    Bắt đầu hành trình đầu tư của bạn
                  </h3>
                  <p className="font-normal text-[18px] leading-[26px] text-white m-0">
                    Khám phá các sản phẩm và dịch vụ được thiết kế cho nhà đầu tư
                  </p>
                </div>

                <div className="flex items-start">
                  <button className="bg-[#00C694] h-[56px] px-[24px] py-[10px] rounded-[32px] flex items-center gap-[4px] group transition-all duration-300 hover:shadow-lg">
                    <span className="font-medium text-[18px] leading-[24px] text-[#101828]">
                      Khám phá sản phẩm
                    </span>
                    <div className="relative w-6 h-6">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0C6070] size-[24px] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                        <ArrowUpRight size={14} className="text-white" />
                      </div>
                    </div>
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
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
}
