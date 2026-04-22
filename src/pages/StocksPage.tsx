import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import GrowthInvestment from "../components/Stocks/GrowthInvestment";
import SustainableAccumulation from "../components/Stocks/SustainableAccumulation";
import FinancialServices from "../components/Stocks/FinancialServices";
import TradingPlatforms from "../components/Stocks/TradingPlatforms";


export default function StocksPage() {
  const [activeTab, setActiveTab] = useState("Đầu tư tăng trưởng");

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-['Inter',sans-serif] text-[#101828]">
      <Header />

      {/* Stocks Banner Section */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <div className="w-full h-[360px] relative overflow-hidden bg-gradient-to-r from-[#00C694] to-[#07756D] rounded-[48px]">
          {/* Background Blurred Elements */}
          <div className="absolute inset-0 z-0">
            <img
              src="assets/stocks-banner-section-background.png"
              alt="Banner Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-12 lg:px-16">
            <div className="z-10">
              {/* Stocks Banner Section Title */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[56px] font-bold text-white leading-[1.2] whitespace-nowrap font-['Roboto',sans-serif]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Sản phẩm & dịch vụ
              </motion.h1>
            </div>

            {/* Floating Visual Elements */}
            <div className="relative flex-1 h-full hidden lg:block">
              {/* Central Arrow Graphic */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-[20%] top-[15%] -translate-y-1/2 size-[280px] flex items-center justify-center p-0"
              >
                <img
                  src="assets/central-arrow.png"
                  alt="Arrow Graphic"
                  className="size-full object-contain relative z-20 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                />
              </motion.div>

              {/* Floating Coins - Arranged like Figma */}
              {/* Top coin */}
              <motion.img
                src="assets/top-coin.png"
                initial={{ opacity: 0, y: 20, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="w-[120px] absolute right-[50%] top-[15%]"
              />
              {/* Far right coin */}
              <motion.img
                src="assets/right-coin.png"
                initial={{ opacity: 0, x: 20, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: 15 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="w-[160px] absolute right-[5%] top-[10%]"
              />
              {/* Bottom coin */}
              <motion.img
                src="assets/botton-coin.png"
                initial={{ opacity: 0, y: -20, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: -5 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-[220px] absolute right-[60%] -bottom-[25%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Component Section: Product Selection & Growth Content */}
      <main className="relative w-full px-4 lg:px-6 py-6 space-y-24">
        {/* Product Tab Selection Group */}
        <section className="space-y-8">
          {/* Product Tab Navigation */}
          <section className="sticky top-28 z-20 w-full flex justify-center py-4">
            <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
              {[
                {
                  id: "Đầu tư tăng trưởng",
                  icon: (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0C11.0563 0 11.1113 0.00571339 11.165 0.0146484C11.1738 0.0161084 11.1827 0.0168607 11.1914 0.0185547L11.2012 0.0205078C11.211 0.0225203 11.2207 0.025044 11.2305 0.0273438C11.251 0.032196 11.2717 0.0367993 11.292 0.0429688C11.3408 0.0578329 11.3873 0.0778027 11.4326 0.0996094C11.4466 0.106345 11.4609 0.11269 11.4746 0.120117C11.6203 0.198874 11.7441 0.312548 11.835 0.450195C11.8597 0.487681 11.8812 0.526617 11.9004 0.566406C11.9222 0.61159 11.9412 0.65838 11.9561 0.707031C11.9623 0.727318 11.9668 0.747986 11.9717 0.768555C11.9893 0.842936 12 0.92022 12 1V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V3.41406L1.70703 11.707C1.31651 12.0976 0.683493 12.0976 0.292969 11.707C-0.0975556 11.3165 -0.0975556 10.6835 0.292969 10.293L8.58594 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H11Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  id: "Tích lũy bền vững",
                  icon: (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9999 4.09961C17.1363 4.09986 18.8697 5.81835 18.8974 7.94824C18.9678 7.94525 19.0384 7.94234 19.1093 7.94434C19.9051 7.96685 20.6601 8.30516 21.207 8.88379C21.7536 9.4624 22.0478 10.2346 22.0253 11.0303C22.0028 11.8242 21.6659 12.5756 21.0898 13.1221L21.0907 13.123L16.5136 17.5C15.6005 18.5173 14.3285 19 12.9999 19H8.99992C8.61182 19 8.45721 19.1245 8.40032 19.2002C8.35868 19.2557 8.31092 19.3068 8.25871 19.3525L7.46282 20.0488L7.70696 20.293C8.09743 20.6835 8.09743 21.3165 7.70696 21.707C7.31644 22.0975 6.68342 22.0975 6.29289 21.707L0.292893 15.707C-0.0976311 15.3165 -0.0976311 14.6835 0.292893 14.293C0.683421 13.9025 1.31644 13.9025 1.70696 14.293L2.01164 14.5977L6.86223 9.92188C7.40648 9.25618 8.21858 9 8.99992 9H11.2294C11.1449 8.68083 11.0996 8.34573 11.0995 8C11.0995 5.84609 12.846 4.09961 14.9999 4.09961ZM19.0536 9.94336C18.8213 9.93679 18.5944 10.0114 18.412 10.1523L18.33 10.2227L17.7724 10.7402C17.6933 10.8202 17.611 10.8968 17.5253 10.9697L14.1308 14.123C14.0984 14.1531 14.0633 14.1791 14.0282 14.2041C13.4757 14.7127 12.754 15 11.9999 15H9.99992C9.44764 15 8.99992 14.5523 8.99992 14C8.99992 13.4477 9.44764 13 9.99992 13H11.9999C12.2651 13 12.5194 12.8946 12.707 12.707C12.8945 12.5195 12.9999 12.2652 12.9999 12C12.9999 11.7348 12.8945 11.4805 12.707 11.293C12.5194 11.1054 12.2651 11 11.9999 11H8.99992C8.61152 11 8.4571 11.1245 8.40032 11.2002C8.36829 11.2429 8.33229 11.2833 8.29387 11.3203L3.42668 16.0127L6.04485 18.6309L6.87883 17.9014C7.42292 17.2509 8.22665 17 8.99992 17H12.9999C13.8529 17 14.5634 16.6952 15.0478 16.1416L15.1083 16.0771L19.7089 11.6777L19.7128 11.6738C19.9059 11.4913 20.0188 11.2392 20.0263 10.9736C20.0338 10.708 19.9353 10.45 19.7529 10.2568C19.5705 10.064 19.319 9.95098 19.0536 9.94336ZM14.9999 6.09961C13.9506 6.09961 13.0995 6.95066 13.0995 8C13.0997 9.04916 13.9507 9.89941 14.9999 9.89941C15.4563 9.8993 15.8746 9.73792 16.2021 9.46973L16.3593 9.32324C16.6924 8.98108 16.8992 8.5153 16.8993 8C16.8993 6.95081 16.0491 6.09986 14.9999 6.09961ZM4.99992 0C7.20903 4.07808e-05 8.99992 1.79089 8.99992 4C8.99992 6.20911 7.20903 7.99996 4.99992 8C2.79079 8 0.999924 6.20914 0.999924 4C0.999924 1.79086 2.79079 0 4.99992 0ZM4.99992 2C3.89535 2 2.99992 2.89543 2.99992 4C2.99992 5.10457 3.89535 6 4.99992 6C6.10446 5.99996 6.99992 5.10454 6.99992 4C6.99992 2.89546 6.10446 2.00004 4.99992 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  id: "Dịch vụ tài chính",
                  icon: (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM11 4C11.5523 4 12 4.44772 12 5V6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H12V10H13C13.7957 10 14.5585 10.3163 15.1211 10.8789C15.6837 11.4415 16 12.2044 16 13C16 13.7957 15.6837 14.5585 15.1211 15.1211C14.5585 15.6837 13.7957 16 13 16H12V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V16H7C6.44772 16 6 15.5523 6 15C6 14.4477 6.44772 14 7 14H10V12H9C8.20435 12 7.44151 11.6837 6.87891 11.1211C6.3163 10.5585 6 9.79565 6 9C6 8.20435 6.3163 7.44151 6.87891 6.87891C7.44151 6.3163 8.20435 6 9 6H10V5C10 4.44772 10.4477 4 11 4ZM12 14H13C13.2652 14 13.5195 13.8946 13.707 13.707C13.8946 13.5195 14 13.2652 14 13C14 12.7348 13.8946 12.4805 13.707 12.293C13.5195 12.1054 13.2652 12 13 12H12V14ZM9 8C8.73478 8 8.48051 8.10543 8.29297 8.29297C8.10543 8.48051 8 8.73478 8 9C8 9.26522 8.10543 9.51949 8.29297 9.70703C8.48051 9.89457 8.73478 10 9 10H10V8H9Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  id: "Nền tảng giao dịch",
                  icon: (
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 8C20.6569 8 22 9.34315 22 11V17C22 18.6569 20.6569 20 19 20H17C15.3431 20 14 18.6569 14 17V11C14 9.34315 15.3431 8 17 8H19ZM17 10C16.4477 10 16 10.4477 16 11V17C16 17.5523 16.4477 18 17 18H19C19.5523 18 20 17.5523 20 17V11C20 10.4477 19.5523 10 19 10H17ZM15 0C15.7956 0 16.5585 0.316297 17.1211 0.878906C17.6837 1.44152 18 2.20435 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.73478 15.8946 2.48051 15.707 2.29297C15.5195 2.10543 15.2652 2 15 2H3C2.73478 2 2.4805 2.10543 2.29297 2.29297C2.10543 2.4805 2 2.73478 2 3V10C2 10.2652 2.10543 10.5195 2.29297 10.707C2.48051 10.8946 2.73478 11 3 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H10V15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17H6C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15H8V13H3C2.20435 13 1.44152 12.6837 0.878906 12.1211C0.316297 11.5585 0 10.7956 0 10V3C0 2.20435 0.316297 1.44152 0.878906 0.878906C1.44152 0.316297 2.20435 0 3 0H15Z"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`h-14 px-4 rounded-[28px] flex items-center gap-2 text-[14px] transition-all whitespace-nowrap ${activeTab === tab.id
                    ? "bg-white text-[#106070] font-bold"
                    : "text-[#344054] font-normal hover:text-[#101828]"
                    }`}
                >
                  {activeTab === tab.id ? (
                    <div className="bg-[#073038] text-[#0AE685] p-1.5 rounded-full shrink-0 flex items-center justify-center">
                      {tab.icon}
                    </div>
                  ) : (
                    <div className="text-[#344054] shrink-0">{tab.icon}</div>
                  )}
                  {tab.id}
                </button>
              ))}
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

          {/* Product Tab Content */}
          {activeTab === "Đầu tư tăng trưởng" && <GrowthInvestment />}
          {activeTab === "Tích lũy bền vững" && <SustainableAccumulation />}
          {activeTab === "Dịch vụ tài chính" && <FinancialServices />}
          {activeTab === "Nền tảng giao dịch" && <TradingPlatforms />}
        </section>
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
}
