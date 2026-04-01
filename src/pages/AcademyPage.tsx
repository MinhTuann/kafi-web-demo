import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const academyTopBanner = "/kafi-web-demo/assets/academy-top-banner.png";
const Guide1 = "/kafi-web-demo/assets/stocks/guide-1.png";
const Guide2 = "/kafi-web-demo/assets/stocks/guide-2.png";
const Guide3 = "/kafi-web-demo/assets/stocks/guide-3.png";
const Guide4 = "/kafi-web-demo/assets/stocks/guide-4.png";
const subscribePattern = "/kafi-web-demo/assets/reports/section-info-bg.png";

// Figma-sourced card thumbnail images
const imgCard1 = "/kafi-web-demo/assets/084c193af1428e3fb080c1b6fb3e9179c648eb90.png";
const imgCard2 = "/kafi-web-demo/assets/42974844ed76ac1eeca4ffff316fa196159ea392.png";
const imgCard3 = "/kafi-web-demo/assets/73cb6fea9067c9731730a28e93f05cc817e16bfd.png";
const imgCard4 = "/kafi-web-demo/assets/1575a38ab0e9d3df605a90bee64a1cc7288eb4ae.png";
const imgCard5 = "/kafi-web-demo/assets/ae8ed9936d0f0311cde9a5cf0b69518c5c075d72.png";
const imgCard6 = "/kafi-web-demo/assets/bea429d8648bdc8756ba8d3088239f9ec0a6637b.png";
const imgBeginStocks = "/kafi-web-demo/assets/begin-stocks.png";


const ACADEMY_TABS = [
  {
    id: "Cẩm nang đầu tư",
    icon: (
      // Arrow-up-right icon (active state indicator from Figma)
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 0C11.0563 0 11.1113 0.00571339 11.165 0.0146484C11.1738 0.0161084 11.1827 0.0168607 11.1914 0.0185547L11.2012 0.0205078C11.211 0.0225203 11.2207 0.025044 11.2305 0.0273438C11.251 0.032196 11.2717 0.0367993 11.292 0.0429688C11.3408 0.0578329 11.3873 0.0778027 11.4326 0.0996094C11.4466 0.106345 11.4609 0.11269 11.4746 0.120117C11.6203 0.198874 11.7441 0.312548 11.835 0.450195C11.8597 0.487681 11.8812 0.526617 11.9004 0.566406C11.9222 0.61159 11.9412 0.65838 11.9561 0.707031C11.9623 0.727318 11.9668 0.747986 11.9717 0.768555C11.9893 0.842936 12 0.92022 12 1V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V3.41406L1.70703 11.707C1.31651 12.0976 0.683493 12.0976 0.292969 11.707C-0.0975556 11.3165 -0.0975556 10.6835 0.292969 10.293L8.58594 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H11Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "Khoá học chứng khoán",
    icon: (
      // Candlestick bar chart + upward trend arrow — Figma
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 16V21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 14V21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 10V21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 3L13.354 11.646C13.3076 11.6926 13.2524 11.7295 13.1916 11.7547C13.1309 11.7799 13.0658 11.7929 13 11.7929C12.9342 11.7929 12.8691 11.7799 12.8084 11.7547C12.7476 11.7295 12.6924 11.6926 12.646 11.646L9.354 8.354C9.26024 8.26026 9.13308 8.20761 9.0005 8.20761C8.86792 8.20761 8.74076 8.26026 8.647 8.354L2 15" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4 18V21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 14V21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
  },
  {
    id: "Lịch sự kiện",
    icon: (
      // Calendar with square dot grid — Figma
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 18L18 14L22 18" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 2V6" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 22V14" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 11.343V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H14" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 10H21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 2V6" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
  },
];

const AcademyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Cẩm nang đầu tư");
  return (
    <div className="min-h-screen bg-[#f7f9fc] flex flex-col items-center relative w-full font-sans">
      <Header />

      {/* Hero Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Học viện Kafi"
          background={
            <div className="absolute h-full right-0 w-[65%] bg-red-500">
              <img
                src={academyTopBanner}
                alt=""
                className="absolute -right-10 object-fill"
              />
            </div>
          }
        />
      </section>

      <main className="relative w-full px-4 lg:px-6 py-6 space-y-24">
        {/* Product Tab Selection Group */}
        <section className="space-y-8">
          {/* Sub header navigation — StocksPage style */}
          <section className="sticky top-28 z-20 w-full flex justify-center py-4">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-1.5 rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
              {ACADEMY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-14 px-4 rounded-[28px] flex items-center gap-2 text-[14px] leading-[20px] transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "bg-white text-[#106070] font-bold shadow-sm"
                    : "text-[#344054] font-normal hover:text-[#101828]"
                    }`}
                >
                  {activeTab === tab.id ? (
                    <div className="bg-[#073038] text-white p-1.5 rounded-full shrink-0 flex items-center justify-center">
                      {tab.icon}
                    </div>
                  ) : (
                    <div className="text-[#667085] shrink-0">{tab.icon}</div>
                  )}
                  {tab.id}
                </button>
              ))}
              {/* Search button */}
              <div className="pl-4">
                <button className="bg-white size-14 rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-all shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18.2053 18.2053"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.0005 14.0005C8.78843 14.0005 9.56865 13.8453 10.2966 13.5438C11.0246 13.2423 11.686 12.8003 12.2431 12.2431C12.8003 11.686 13.2423 11.0246 13.5438 10.2966C13.8453 9.56865 14.0005 8.78843 14.0005 8.0005C14.0005 7.21257 13.8453 6.43236 13.5438 5.7044C13.2423 4.97645 12.8003 4.31501 12.2431 3.75786C11.686 3.20071 11.0246 2.75875 10.2966 2.45723C9.56865 2.1557 8.78843 2.0005 8.0005 2.0005C6.4092 2.0005 4.88308 2.63264 3.75786 3.75786C2.63264 4.88308 2.0005 6.4092 2.0005 8.0005C2.0005 9.5918 2.63264 11.1179 3.75786 12.2431C4.88308 13.3684 6.4092 14.0005 8.0005 14.0005V14.0005ZM14.3205 12.9065L17.9005 16.4865C17.9959 16.5788 18.072 16.6892 18.1244 16.8113C18.1767 16.9333 18.2042 17.0645 18.2052 17.1973C18.2063 17.3301 18.1809 17.4618 18.1305 17.5846C18.0802 17.7075 18.0058 17.8191 17.9119 17.9129C17.8179 18.0067 17.7062 18.0809 17.5833 18.1311C17.4604 18.1813 17.3287 18.2065 17.1959 18.2052C17.0631 18.204 16.9319 18.1763 16.8099 18.1238C16.688 18.0713 16.5777 17.9951 16.4855 17.8995L12.9055 14.3195C11.298 15.5674 9.2753 16.1557 7.24926 15.9647C5.22322 15.7737 3.34611 14.8178 2.00005 13.2916C0.654 11.7653 -0.0598121 9.78345 0.00392902 7.74943C0.0676701 5.7154 0.904173 3.78213 2.34315 2.34315C3.78213 0.904173 5.7154 0.0676701 7.74943 0.00392902C9.78345 -0.0598121 11.7653 0.654 13.2916 2.00005C14.8178 3.34611 15.7737 5.22322 15.9647 7.24926C16.1557 9.2753 15.5674 11.298 14.3195 12.9055L14.3205 12.9065Z"
                      fill="#344054"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Tab 1 Content: Cẩm nang đầu tư */}
          {activeTab === "Cẩm nang đầu tư" && (
            <>
              {/* Title Section */}
              <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic pb-[40px] pt-[24px] px-[80px] relative shrink-0 w-full">
                <div className="flex flex-col font-bold justify-center min-w-full relative shrink-0 text-[48px] text-[#101828] w-[min-content] whitespace-pre-wrap tracking-tight">
                  <p className="leading-[56px] mb-0">{`Kiến thức nền tảng `}</p>
                  <p className="leading-[56px]">cho hành trình đầu tư bền vững</p>
                </div>
                <div className="flex flex-col font-normal justify-center relative shrink-0 text-[18px] text-[#667085] w-[736px]">
                  <p className="leading-[26px]">
                    Cẩm nang đầu tư tại KAFI giúp bạn hiểu đúng bản chất của thị
                    trường tài chính, từng sản phẩm đầu tư và cách quản lý rủi ro
                    trong quá trình đầu tư.
                  </p>
                </div>
              </div>

              {/* Filter and Grid Section */}
              <div
                className="content-stretch flex flex-col gap-[24px] items-start px-[80px] relative shrink-0 w-full"
                data-name="div.grid:margin"
              >
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <div className="bg-[#f7f9fc] border border-[#f7f9fc] border-solid content-stretch flex gap-[12px] items-start p-[4px] relative rounded-[32px] shrink-0">
                    <div className="bg-white content-stretch flex gap-[12px] items-center p-[8px] relative rounded-[60px] shrink-0 shadow-sm">
                      <div className="bg-[#00c694] content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative rounded-[58px] shrink-0 cursor-pointer">
                        <p className="font-semibold leading-[24px] text-[#101828] text-[16px] whitespace-nowrap">
                          Đầu tư chứng khoán
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative rounded-[58px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
                        <p className="font-normal leading-[24px] text-[#101828] text-[16px] whitespace-nowrap">{`Tài chính cá nhân `}</p>
                      </div>
                    </div>
                  </div>

                  {/* Filter all */}
                  <div
                    className="content-stretch flex flex-col gap-[8px] items-end relative self-stretch shrink-0"
                    data-name="Select"
                  >
                    <div className="bg-white border border-[#dde2ec] border-solid content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-[160px] px-[16px] py-[8px] relative rounded-[32px] cursor-pointer hover:border-[#00c694] transition-colors group">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16.6667 18.3333"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M5 0.833333V4.16667M11.6667 0.833333V4.16667M0.833333 7.5H15.8333M2.5 2.5H14.1667C15.0871 2.5 15.8333 3.24619 15.8333 4.16667V15.8333C15.8333 16.7538 15.0871 17.5 14.1667 17.5H2.5C1.57953 17.5 0.833333 16.7538 0.833333 15.8333V4.16667C0.833333 3.24619 1.57953 2.5 2.5 2.5Z"
                          stroke="#667085"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:stroke-[#00c694] transition-colors"
                        />
                      </svg>
                      <div className="flex flex-col font-normal justify-center relative shrink-0 text-[#121212] text-[16px] whitespace-nowrap">
                        <p className="leading-[24px] tracking-tight whitespace-nowrap">Tất cả </p>
                      </div>
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 11.6667 6.66667"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-auto"
                      >
                        <path
                          d="M0.833333 0.833333L5.83333 5.83333L10.8333 0.833333"
                          stroke="#667085"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:stroke-[#00c694] transition-colors"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Featured Full Width Card */}
                <div
                  className="content-stretch flex gap-[10px] items-start overflow-clip px-[60px] py-[40px] relative rounded-[48px] shrink-0 w-full group shadow-xl shadow-[#00c694]/5 border border-white/40"
                  style={{
                    backgroundImage:
                      "linear-gradient(63.2373deg, rgb(198, 255, 217) 49.961%, rgb(187, 251, 169) 72.376%, rgba(1, 194, 127, 0.5) 94.791%)",
                  }}
                >
                  <div className="absolute -bottom-10 content-stretch flex flex-col items-start relative shrink-0">
                    {/* Featured decoration image */}
                    <div className="relative w-full max-w-[480px]">
                      <img
                        src={imgBeginStocks}
                        alt="Nhập môn đầu tư"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[541px] z-10">
                    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#101828] w-full">
                      <div className="flex flex-col font-normal justify-center max-w-[832px] relative shrink-0 text-[16px] w-full">
                        <p className="leading-[24px] uppercase tracking-wider font-normal">
                          CƠ BẢN
                        </p>
                      </div>
                      <div className="flex flex-col font-bold justify-center relative shrink-0 text-[36px] w-full">
                        <p className="leading-[42px]">Nhập môn đầu tư chứng khoán</p>
                      </div>
                    </div>
                    <div className="flex flex-col font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[#101828] w-[min-content]">
                      <p className="leading-[26px]">
                        Bắt đầu với các kiến thức cốt lõi dành cho nhà đầu tư mới.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#101820] content-stretch flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[10px] relative rounded-[32px] shrink-0 text-[#f7f9fc] shadow-lg shadow-black/20"
                    >
                      <span className="font-medium leading-[20px] text-[16px]">
                        Bắt đầu
                      </span>
                      <div className="size-5 bg-[#0ae685] rounded-full flex items-center justify-center">
                        <ArrowUpRight className="size-4 text-[#101828]" strokeWidth={3} />
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Item Grid */}
                <div
                  className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full"
                  data-name="div.grid"
                >
                  {[
                    {
                      title: "Cách đọc bảng giá chứng khoán",
                      tag: "Cơ bản",
                      color: "from-[#00c694] to-[#07756d]",
                      img: imgCard1,
                    },
                    {
                      title: "Các loại lệnh giao dịch cơ bản",
                      tag: "Cơ bản",
                      color: "from-[#00c694] to-[#07756d]",
                      img: imgCard2,
                    },
                    {
                      title: "Phân tích cơ bản doanh nghiệp",
                      tag: "Trung cấp",
                      color: "from-[#de704f] to-[#ed7858]",
                      img: imgCard3,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8 }}
                      className="bg-white content-stretch flex flex-col flex-1 gap-[4px] items-start p-[16px] relative rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#00c694]/20"
                    >
                      <div className="aspect-[160/90] relative rounded-[12px] shrink-0 w-full mb-4 overflow-hidden">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={item.img} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-semibold leading-[26px] text-[#101828] text-[18px] w-full line-clamp-2 min-h-[52px]">
                          {item.title}
                        </p>
                        <div className="content-stretch flex h-[28px] items-center relative rounded-[8px] shrink-0 w-full mt-2">
                          <p className="font-medium leading-[16px] text-[#667085] text-[12px]">
                            30/01/2026
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute top-6 right-6 bg-gradient-to-r ${item.color} rounded-[12px] px-3 py-1 shadow-sm`}
                      >
                        <p className="font-medium text-white text-[12px] uppercase">
                          {item.tag}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full pt-4"
                  data-name="div.grid"
                >
                  {[
                    {
                      title: "Phân tích kỹ thuật cho nhà đầu tư cá nhân",
                      tag: "Cơ bản",
                      color: "from-[#00c694] to-[#07756d]",
                      img: imgCard4,
                    },
                    {
                      title: "Tâm lý đầu tư và kỷ luật giao dịch",
                      tag: "Cơ bản",
                      color: "from-[#00c694] to-[#07756d]",
                      img: imgCard5,
                    },
                    {
                      title: "Phân tích cơ bản doanh nghiệp",
                      tag: "Trung cấp",
                      color: "from-[#de704f] to-[#ed7858]",
                      img: imgCard6,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -8 }}
                      className="bg-white content-stretch flex flex-col flex-1 gap-[4px] items-start p-[16px] relative rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#00c694]/20"
                    >
                      <div className="aspect-[160/90] relative rounded-[12px] shrink-0 w-full mb-4 overflow-hidden">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={item.img} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-semibold leading-[26px] text-[#101828] text-[18px] w-full line-clamp-2 min-h-[52px]">
                          {item.title}
                        </p>
                        <div className="content-stretch flex h-[28px] items-center relative rounded-[8px] shrink-0 w-full mt-2">
                          <p className="font-medium leading-[16px] text-[#667085] text-[12px]">
                            30/01/2026
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute top-6 right-6 bg-gradient-to-r ${item.color} rounded-[12px] px-3 py-1 shadow-sm`}
                      >
                        <p className="font-medium text-white text-[12px] uppercase">
                          {item.tag}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Tab 2 Content: Khoá học chứng khoán */}
          {activeTab === "Khoá học chứng khoán" && (
            <div className="px-[80px] py-[40px] flex flex-col items-center justify-center gap-6 min-h-[400px]">
              <div className="size-20 rounded-3xl bg-gradient-to-br from-[#00c694] to-[#07756d] flex items-center justify-center shadow-lg">
                <svg width="40" height="40" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3C2 2.44772 2.44772 2 3 2H5C5.55228 2 6 2.44772 6 3V19C6 19.5523 5.55228 20 5 20H3C2.44772 20 2 19.5523 2 19V3ZM9 3C9 2.44772 9.44772 2 10 2H12C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14H10C9.44772 14 9 13.5523 9 13V3ZM17 2C16.4477 2 16 2.44772 16 3V8C16 8.55228 16.4477 9 17 9H19C19.5523 9 20 8.55228 20 8V3C20 2.44772 19.5523 2 19 2H17Z" fill="white" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-[32px] font-bold text-[#101828] mb-3">Khoá học chứng khoán</h2>
                <p className="text-[18px] text-[#667085] max-w-[520px] leading-relaxed">
                  Khám phá các khoá học chứng khoán chuyên sâu, được thiết kế dành riêng cho nhà đầu tư cá nhân muốn nâng cao kiến thức và kỹ năng.
                </p>
              </div>
              <button className="bg-[#101820] text-white h-[44px] px-6 rounded-[32px] flex items-center gap-2 font-medium hover:bg-[#073038] transition-all shadow-sm">
                Sắp ra mắt
              </button>
            </div>
          )}

          {/* Tab 3 Content: Lịch sự kiện */}
          {activeTab === "Lịch sự kiện" && (
            <div className="px-[80px] py-[40px] flex flex-col items-center justify-center gap-6 min-h-[400px]">
              <div className="size-20 rounded-3xl bg-gradient-to-br from-[#00c694] to-[#07756d] flex items-center justify-center shadow-lg">
                <svg width="40" height="40" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H13V2C13 1.44772 13.4477 1 14 1C14.5523 1 15 1.44772 15 2V3H17C18.6569 3 20 4.34315 20 6V18C20 19.6569 18.6569 21 17 21H5C3.34315 21 2 19.6569 2 18V6C2 4.34315 3.34315 3 5 3H7V2ZM7 5H5C4.44772 5 4 5.44772 4 6V8H18V6C18 5.44772 17.5523 5 17 5H15V6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5ZM4 10V18C4 18.5523 4.44772 19 5 19H17C17.5523 19 18 18.5523 18 18V10H4Z" fill="white" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-[32px] font-bold text-[#101828] mb-3">Lịch sự kiện</h2>
                <p className="text-[18px] text-[#667085] max-w-[520px] leading-relaxed">
                  Theo dõi các sự kiện, hội thảo và webinar đầu tư được tổ chức bởi Kafi và các chuyên gia tài chính hàng đầu.
                </p>
              </div>
              <button className="bg-[#101820] text-white h-[44px] px-6 rounded-[32px] flex items-center gap-2 font-medium hover:bg-[#073038] transition-all shadow-sm">
                Sắp ra mắt
              </button>
            </div>
          )}
        </section>

        {/* Guides Section */}
        <section className="space-y-12 px-[80px] relative w-full overflow-hidden mt-6">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-6 w-full">
            <div className="space-y-3">
              <h2 className="text-[48px] font-bold leading-[56px] text-[#101828]">
                Hướng dẫn giao dịch
              </h2>
              <p className="text-[18px] text-[#667085] font-normal leading-[26px]">
                Giao dịch dễ dàng chỉ với vài bước đơn giản
              </p>
            </div>
            <button className="h-[44px] px-[16px] py-[10px] bg-[#101820] text-[#F7F9FC] rounded-[32px] flex items-center gap-[6px] hover:bg-black/90 transition-all shadow-lg shadow-black/10">
              Xem tất cả
              <div className="size-[24px] flex items-center justify-center">
                <ArrowUpRight className="size-[16px] text-white" />
              </div>
            </button>
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
              {[
                {
                  id: 1,
                  title: "Đăng ký sử dụng dịch vụ tài trợ giao dịch",
                  desc: "Hướng dẫn đăng ký sử dụng dịch vụ tài trợ giao dịch tại Kafi, bao gồm các bước đăng ký, xác thực thông tin...",
                  img: Guide1,
                  time: "5 min read",
                },
                {
                  id: 2,
                  title: "Ký kết hợp đồng và kích hoạt hạn mức",
                  desc: "Hướng dẫn ký hợp đồng và kích hoạt hạn mức tài trợ giao dịch tại Kafi, bao gồm các bước xác nhận điều khoản...",
                  img: Guide2,
                  time: "5 min read",
                },
                {
                  id: 3,
                  title: "Theo dõi tỷ lệ ký quỹ và trạng thái tài khoản",
                  desc: "Hướng dẫn theo dõi tỷ lệ ký quỹ và trạng thái tài khoản tại Kafi, bao gồm các thông tin về hạn mức, dư nợ...",
                  img: Guide3,
                  time: "5 min read",
                },
                {
                  id: 4,
                  title: "Tải và cài đặt ứng dụng Kafi X",
                  desc: "Hướng dẫn tải và cài đặt ứng dụng Kafi X cho nhà đầu tư chuyên nghiệp...",
                  img: Guide4,
                  time: "5 min read",
                },
              ].map((guide) => (
                <motion.div
                  key={guide.id}
                  className="bg-white border border-[#DDE2EC] rounded-[24px] overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={guide.img}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-[20px] flex-1 flex flex-col gap-[16px] justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="px-[8px] py-[4px] bg-[#F7F9FC] text-[#121212] rounded-[40px] text-[12px] font-medium border border-[#DDE2EC]">
                          Hướng dẫn
                        </span>
                        <span className="text-[12px] text-[#9AA5BD] font-medium">
                          {guide.time}
                        </span>
                      </div>
                      <h3 className="text-[18px] font-semibold leading-[26px] text-black line-clamp-2 min-h-[52px]">
                        {guide.title}
                      </h3>
                      <p className="text-[16px] leading-[24px] text-[#667085] font-normal line-clamp-2 opacity-80">
                        {guide.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-[4px] py-[10px] mt-auto">
                      <span className="text-[16px] font-semibold text-[#101828] group-hover:text-[#00c694] transition-colors">
                        Xem hướng dẫn
                      </span>
                      <div className="size-6 flex items-center justify-center transition-colors">
                        <ArrowUpRight className="size-[16px] text-[#101828] group-hover:text-[#00c694] transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="w-full px-4 lg:px-6 mt-6">
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
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
};

export default AcademyPage;
