import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Download, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";
const reportTexture =
  "/kafi-web-demo/assets/reports/b9e79771ccb89cc036ab4d49b5e6a2d48890aced.png";
const subscribePattern = "/kafi-web-demo/assets/reports/section-info-bg.png";
const heroSkyscrapers = "/kafi-web-demo/assets/reports/hero-sky-scrapers.png";
const sortIcon =
  "/kafi-web-demo/assets/reports/b87adff81c24ab62c3e6279774280aac6aff67ad.svg";
const chevronDownIcon =
  "/kafi-web-demo/assets/reports/6e0fb4b6297e4892ce243c595c9606e9d41f5640.svg";

const ReportThumbnail = ({ month, year }: { month: string; year: string }) => (
  <div
    className="overflow-clip relative rounded-[12px] size-[197px] min-w-[197px] flex items-center justify-center"
    style={{
      backgroundImage:
        "linear-gradient(17.7869deg, rgb(231, 252, 255) 32.588%, rgb(218, 255, 230) 93.034%)",
    }}
  >
    {/* Texture Overlay */}
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-multiply">
      <img
        src={reportTexture}
        alt=""
        className="w-full h-full object-cover scale-150 rotate-[-15deg] translate-y-[-20%]"
      />
    </div>

    <div className="relative z-10 flex flex-col items-center gap-4 w-[178px]">
      <div className="flex flex-col gap-1 items-center leading-none text-[#0b756e] text-center uppercase">
        <p className="font-['Inter'] font-medium text-[10px] tracking-[1px]">
          MACRO REPORT
        </p>
        <p className="font-['Inter'] font-bold text-[20px]">Báo cáo Vĩ mô</p>
      </div>

      <div className="bg-white flex flex-col gap-1 items-center justify-center pb-2 pt-1.5 px-3 rounded-[10px] w-[92px] shadow-sm">
        <span className="font-['Inter'] font-bold text-[43px] text-[#0b756e] leading-none">
          {month}
        </span>
        <div className="w-8 h-[1px] bg-[#0b756e]/20" />
        <span className="font-['Inter'] font-medium text-[13px] text-[#0b756e] tracking-[1.3px] uppercase">
          {year}
        </span>
      </div>
    </div>
  </div>
);

const ReportItemRow = ({ report, index }: { report: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="border-b border-[#D0D5DD]/50 flex gap-8 items-center py-4 group hover:bg-white/40 transition-all rounded-3xl px-4 -mx-4 cursor-pointer"
  >
    <ReportThumbnail month={report.month} year={report.year} />

    <div className="flex-1 flex gap-8 items-end">
      <div className="flex-1 flex flex-col gap-2 items-start">
        <div className="inline-flex items-center gap-1.5 bg-[#ECFDF3] px-2 py-1 rounded-full mix-blend-multiply">
          <div className="size-2 rounded-full bg-[#0b756e]" />
          <span className="font-['Inter'] font-medium text-[12px] text-[#0b756e]">
            {report.category}
          </span>
        </div>

        <h3 className="font-['Inter'] font-semibold text-[22px] text-[#101828] leading-[32px] group-hover:text-[#0b756e] transition-colors">
          {report.title}
        </h3>

        <p className="font-['Roboto'] font-normal text-[16px] text-[#344054] leading-[1.4] line-clamp-2">
          {report.summary}
        </p>

        <p className="font-['Inter'] font-normal text-[14px] text-[#667085] leading-[20px] mt-1">
          {report.date}
        </p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <button className="bg-[#EBEFF5] px-4 py-2 rounded-full font-['Inter'] font-semibold text-[14px] text-[#344054] hover:bg-[#106070] hover:text-white transition-all whitespace-nowrap">
          Xem online
        </button>
        <button className="bg-[#EBEFF5] p-2 rounded-full hover:bg-[#106070] hover:text-white transition-all flex items-center justify-center shrink-0">
          <Download className="size-6" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function ReportsPage() {
  const [activeCategory, setActiveCategory] = useState(
    "Báo cáo vĩ mô / chiến lược",
  );

  const reportCategories = [
    {
      name: "Khuyến nghị đầu tư",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.9999 4.09961C17.1363 4.09986 18.8697 5.81835 18.8974 7.94824C18.9678 7.94525 19.0384 7.94234 19.1093 7.94434C19.9051 7.96685 20.6601 8.30516 21.207 8.88379C21.7536 9.4624 22.0478 10.2346 22.0253 11.0303C22.0028 11.8242 21.6659 12.5756 21.0898 13.1221L21.0907 13.123L16.5136 17.5C15.6005 18.5173 14.3285 19 12.9999 19H8.99992C8.61182 19 8.45721 19.1245 8.40032 19.2002C8.35868 19.2557 8.31092 19.3068 8.25871 19.3525L7.46282 20.0488L7.70696 20.293C8.09743 20.6835 8.09743 21.3165 7.70696 21.707C7.31644 22.0975 6.68342 22.0975 6.29289 21.707L0.292893 15.707C-0.0976311 15.3165 -0.0976311 14.6835 0.292893 14.293C0.683421 13.9025 1.31644 13.9025 1.70696 14.293L2.01164 14.5977L6.86223 9.92188C7.40648 9.25618 8.21858 9 8.99992 9H11.2294C11.1449 8.68083 11.0996 8.34573 11.0995 8C11.0995 5.84609 12.846 4.09961 14.9999 4.09961ZM19.0536 9.94336C18.8213 9.93679 18.5944 10.0114 18.412 10.1523L18.33 10.2227L17.7724 10.7402C17.6933 10.8202 17.611 10.8968 17.5253 10.9697L14.1308 14.123C14.0984 14.1531 14.0633 14.1791 14.0282 14.2041C13.4757 14.7127 12.754 15 11.9999 15H9.99992C9.44764 15 8.99992 14.5523 8.99992 14C8.99992 13.4477 9.44764 13 9.99992 13H11.9999C12.2651 13 12.5194 12.8946 12.707 12.707C12.8945 12.5195 12.9999 12.2652 12.9999 12C12.9999 11.7348 12.8945 11.4805 12.707 11.293C12.5194 11.1054 12.2651 11 11.9999 11H8.99992C8.61152 11 8.4571 11.1245 8.40032 11.2002C8.36829 11.2429 8.33229 11.2833 8.29387 11.3203L3.42668 16.0127L6.04485 18.6309L6.87883 17.9014C7.42292 17.2509 8.22665 17 8.99992 17H12.9999C13.8529 17 14.5634 16.6952 15.0478 16.1416L15.1083 16.0771L19.7089 11.6777L19.7128 11.6738C19.9059 11.4913 20.0188 11.2392 20.0263 10.9736C20.0338 10.708 19.9353 10.45 19.7529 10.2568C19.5705 10.064 19.319 9.95098 19.0536 9.94336ZM14.9999 6.09961C13.9506 6.09961 13.0995 6.95066 13.0995 8C13.0997 9.04916 13.9507 9.89941 14.9999 9.89941C15.4563 9.8993 15.8746 9.73792 16.2021 9.46973L16.3593 9.32324C16.6924 8.98108 16.8992 8.5153 16.8993 8C16.8993 6.95081 16.0491 6.09986 14.9999 6.09961ZM4.99992 0C7.20903 4.07808e-05 8.99992 1.79089 8.99992 4C8.99992 6.20911 7.20903 7.99996 4.99992 8C2.79079 8 0.999924 6.20914 0.999924 4C0.999924 1.79086 2.79079 0 4.99992 0ZM4.99992 2C3.89535 2 2.99992 2.89543 2.99992 4C2.99992 5.10457 3.89535 6 4.99992 6C6.10446 5.99996 6.99992 5.10454 6.99992 4C6.99992 2.89546 6.10446 2.00004 4.99992 2Z" />
        </svg>
      ),
    },
    {
      name: "Báo cáo thị trường",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 14V19M15 12V19M19 8V19M21 1L12.354 9.646C12.3076 9.69256 12.2524 9.72951 12.1916 9.75471C12.1309 9.77992 12.0658 9.79289 12 9.79289C11.9342 9.79289 11.8691 9.77992 11.8084 9.75471C11.7476 9.72951 11.6924 9.69256 11.646 9.646L8.354 6.354C8.26024 6.26026 8.13308 6.20761 8.0005 6.20761C7.86792 6.20761 7.74076 6.26026 7.647 6.354L1 13M3 16V19M7 12V19" />
        </svg>
      ),
    },
    {
      name: "Báo cáo vĩ mô / chiến lược",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 14 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 7L7 1M7 1L13 7M7 1V17" />
        </svg>
      ),
    },
    {
      name: "Doanh nghiệp",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 21V14.43M9 10H9.01M9 6H9.01M11 14.43V21M12 15C11.1345 14.3509 10.0819 14 9 14C7.91815 14 6.86548 14.3509 6 15M13 10H13.01M13 6H13.01M5 10H5.01M5 6H5.01M3 1H15C16.1046 1 17 1.89543 17 3V19C17 20.1046 16.1046 21 15 21H3C1.89543 21 1 20.1046 1 19V3C1 1.89543 1.89543 1 3 1Z" />
        </svg>
      ),
    },
    {
      name: "Kafi Livestream",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 23 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 5.22017C12.6392 6.34131 12.9754 7.60961 12.9754 8.90017C12.9754 10.1907 12.6392 11.459 12 12.5802M15.46 3.11017C16.4591 4.87636 16.9841 6.871 16.9841 8.90017C16.9841 10.9293 16.4591 12.9240 15.46 14.6902M18.91 1.00017C20.2876 3.4048 21.0132 6.12756 21.0149 8.89884C21.0167 11.6701 20.2945 14.3938 18.92 16.8002M2 2.90017H7C7.55228 2.90017 8 3.34789 8 3.90017V13.9002C8 14.4525 7.55228 14.9002 7 14.9002H2C1.44772 14.9002 1 14.4525 1 13.9002V3.90017C1 3.34789 1.44772 2.90017 2 2.90017Z" />
        </svg>
      ),
    },
    {
      name: "Cộng đồng đầu tư",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 19C17 16.8783 16.1571 14.8434 14.6569 13.3431C13.1566 11.8429 11.1217 11 9 11M9 11C6.87827 11 4.84344 11.8429 3.34315 13.3431C1.84285 14.8434 1 16.8783 1 19M9 11C11.7614 11 14 8.76142 14 6C14 3.23858 11.7614 1 9 1C6.23858 1 4 3.23858 4 6C4 8.76142 6.23858 11 9 11ZM21 18C21 14.63 19 11.5 17 10C17.6574 9.50677 18.1831 8.85909 18.5306 8.11427C18.878 7.36945 19.0365 6.55047 18.992 5.7298C18.9475 4.90913 18.7014 4.11209 18.2755 3.4092C17.8495 2.70631 17.2569 2.11926 16.55 1.7" />
        </svg>
      ),
    },
  ];

  const reports = [
    {
      id: 1,
      month: "12",
      year: "2025",
      category: "Vĩ mô tháng 12/2025",
      title: 'Kinh tế về đích " sát nút" ',
      summary:
        "Nền kinh tế Việt Nam xuất sắc vượt qua mục tiêu tăng trưởng đầu năm của Chính phủ, đạt tăng trưởng quý 4 đạt 8.46% YoY, lũy kế cả năm 2025 đạt 8.02%. ",
      date: "19/12/2025",
    },
    {
      id: 2,
      month: "11",
      year: "2025",
      category: "Vĩ mô tháng 11/2025",
      title: "Sức ép từ biến động lãi suất",
      summary:
        "Tình hình trong nước chủ yếu xoay quanh những ảnh hưởng và khắc phục sau bão lũ, Chính phủ đưa ra những đánh giá sơ bộ về mức độ ảnh hưởng tổng quát lên tăng trưởng kinh tế quý 4 giảm 0.1%...",
      date: "21/11/2025",
    },
    {
      id: 3,
      month: "10",
      year: "2025",
      category: "Vĩ mô tháng 10/2025",
      title: "Tỷ giá biến động mạnh, NHNN tiếp tục bán USD kỳ hạn.",
      summary:
        "Thị trường tiền tệ tháng 9 ghi nhận những biến động đáng chú ý khi lãi suất có dấu hiệu tăng lại và tỷ giá dự báo giảm áp lực vào cuối năm, kéo theo các điều chỉnh trên thị trường lãi suất và trái phiếu.",
      date: "21/10/2025",
    },
    {
      id: 4,
      month: "09",
      year: "2025",
      category: "Vĩ mô tháng 09/2025",
      title: "Trời Có Chuyển Giông ? ",
      summary:
        "Chính phủ đẩy mạnh giám sát các dự án đầu tư công, chuyển đổi số, cũng như quy trình về thủ tục hành chính sau thực thi chính quyền 2 cấp. Các mục tiêu kinh tế được bảo lưu, dưới nền ...",
      date: "21/09/2025",
    },
    {
      id: 5,
      month: "08",
      year: "2025",
      category: "Vĩ mô tháng 08/2025",
      title: "Lãi Suất Liên Ngân Hàng Giảm Mạnh, Tỷ Giá Vẫn Chịu Áp Lực",
      summary:
        "Thị trường tiền tệ tháng 8 ghi nhận những biến động đáng chú ý khi lãi suất biến động và tỷ giá dự báo giảm áp lực vào cuối năm, kéo theo các điều chỉnh trên thị trường lãi suất và trái phiếu. ",
      date: "21/01/2025",
    },
    {
      id: 6,
      month: "07",
      year: "2025",
      category: "Vĩ mô tháng 07/2025",
      title: "Hội Nghị Jackson Hole Năm 2025",
      summary:
        "Hội nghị Kinh tế Jackson Hole là một sự kiện thường niên được Ngân hàng Dự trữ Liên ba Kansas City tổ chức tại Jackson Hole, Wyoming, Hoa Kỳ...",
      date: "21/01/2025",
    },
    {
      id: 7,
      month: "06",
      year: "2025",
      category: "VT tháng 08/2025",
      title: "Trời Có Chuyển Giông ?",
      summary:
        "Chính phủ đẩy mạnh giám sát các dự án đầu tư công, chuyển đổi số, cũng như quy trình về thủ tục hành chính sau thực thi chính quyền 2 cấp...",
      date: "21/01/2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-['Inter',sans-serif] text-[#101828]">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Báo cáo vĩ mô/chiến lược"
          background={
            <div className="absolute h-full right-0 w-[65%]">
              <img
                src={heroSkyscrapers}
                alt=""
                className="absolute inset-0 object-fill"
              />
            </div>
          }
        />
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 pt-8 pb-12">
        {/* Sticky Liquid Glass Tab Bar */}
        <section className="sticky top-6 z-30 w-full flex justify-center px-4 lg:px-6 mb-12">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20 transition-all duration-300">
            {reportCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`h-[56px] px-6 rounded-[52px] flex items-center gap-2.5 transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.name
                    ? "bg-white text-[#106070] font-bold shadow-lg scale-100"
                    : "text-[#344054] font-medium hover:bg-white/10 hover:scale-[1.02]"
                }`}
              >
                <div
                  className={`shrink-0 flex items-center justify-center transition-all duration-300 ${
                    activeCategory === cat.name
                      ? "bg-[#106070] text-[#0AE685] size-8 rounded-full shadow-md shadow-[#106070]/20"
                      : "text-[#344054] size-6"
                  }`}
                >
                  <div
                    className={`transition-all duration-300 flex items-center justify-center ${
                      activeCategory === cat.name ? "size-4" : "size-5"
                    } ${cat.name === "Báo cáo vĩ mô / chiến lược" ? "rotate-45" : ""}`}
                  >
                    {cat.icon}
                  </div>
                </div>
                <span className="text-[14px] tracking-tight">{cat.name}</span>
              </button>
            ))}
            <div className="pl-4 pr-1">
              <button className="bg-white size-14 rounded-full flex items-center justify-center shadow-lg border border-gray-100/50 hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all shrink-0 group">
                <Search className="size-5 text-[#344054] group-hover:text-[#106070] transition-colors" />
              </button>
            </div>
          </div>
        </section>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="w-[280px] shrink-0">
            <div className="sticky top-36 flex flex-col gap-2">
              <div className="flex flex-col gap-1.5 p-2 bg-white rounded-[24px] border border-[#E2E8F0]">
                <button
                  className={`text-left px-5 py-4 rounded-[12px] font-bold transition-all flex items-center justify-between group ${activeCategory === "Báo cáo vĩ mô / chiến lược" ? "bg-[#00C694] text-[#101828]" : "text-gray-500 hover:bg-gray-50"}`}
                >
                  Báo cáo vĩ mô
                </button>
                <button className="text-left px-5 py-4 rounded-[12px] text-gray-500 hover:bg-gray-50 transition-all font-bold">
                  Báo cáo chiến lược
                </button>
              </div>
            </div>
          </aside>

          {/* Report List Section */}
          <section className="flex-1 flex flex-col gap-6">
            {/* Section Header */}
            <div className="flex items-center justify-between h-[64px] mb-4">
              <h2 className="text-[36px] font-bold text-black leading-[42px] font-['Inter']">
                Báo cáo vĩ mô
              </h2>
              {/* Sorting button */}
              <div className="bg-white border border-[#DDE2EC] h-[48px] rounded-[32px] pl-4 pr-5 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-all select-none group">
                <div className="flex items-center justify-center shrink-0">
                  <img src={sortIcon} alt="" className="w-[17px] opacity-70" />
                </div>
                <span className="text-[16px] text-[#121212] font-['Inter'] font-normal mx-2">
                  Mới nhất
                </span>
                <div className="flex items-center justify-center shrink-0 translate-y-[0.5px]">
                  <img
                    src={chevronDownIcon}
                    alt=""
                    className="w-[11px] opacity-60 group-hover:translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Reports List */}
            <div className="flex flex-col">
              {reports.map((report, index) => (
                <ReportItemRow key={report.id} report={report} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Subscription Section */}
      <section className="max-w-[1440px] mx-auto px-6 mb-32">
        <div className="w-full h-[400px] rounded-[48px] bg-[#C6FFD9] relative overflow-hidden flex flex-col items-center justify-center text-center px-10">
          {/* Pattern Overlay */}
          <div className="absolute top-0 right-0 w-[100vw] h-[120vh] pointer-events-none opacity-80">
            <img
              src={subscribePattern}
              alt=""
              className="w-full h-full object-contain object-right-top"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-10 items-center max-w-[987px]">
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-[48px] font-bold text-black leading-[56px] font-['Inter']">
                Đăng ký nhận báo cáo
              </h2>
              <p className="text-[18px] font-normal text-black leading-[26px] max-w-[832px] font-['Inter']">
                Nhà đầu tư có thể truy cập các tài liệu quan trọng, đăng ký nhận
                cập nhật định kỳ hoặc liên hệ trực tiếp với đội ngũ quan hệ cổ
                đông của KAFI.
              </p>
            </div>

            <div className="bg-[rgba(16,24,40,0.5)] backdrop-blur-md rounded-full pl-6 pr-3 py-3 flex items-center gap-3 w-[540px] shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
              <input
                type="text"
                placeholder="Để lại email của bạn ở đây |"
                className="flex-1 bg-transparent border-none text-[16px] text-[#f7f9fc] font-medium focus:outline-none placeholder:text-[#f7f9fc]/60 font-['Inter']"
              />
              <button className="size-11 rounded-full bg-[#00c694] flex items-center justify-center text-black hover:bg-[#00B07A] transition-all shrink-0">
                <Send className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Shortcut />
    </div>
  );
}
