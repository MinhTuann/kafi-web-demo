import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import AnimatedProductIcon from "./AnimatedProductIcon";
import SupportingInfo from "./SupportingInfo";

const GrowthInvestment = () => {
  const [activeGrowthProduct, setActiveGrowthProduct] = useState("Cổ phiếu");
  const [activeFeeCategory, setActiveFeeCategory] = useState("Biểu phí");

  return (
    <>
      <section className="space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-6">
          {/* Đầu tư tăng trưởng */}
          <div className="bg-white rounded-[32px] p-16 relative overflow-hidden min-h-[474px] flex flex-col items-start justify-start border border-gray-100/50">
            {/* Background Blurs */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3">
              <img
                src="assets/stocks-top-logo-blur.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3">
              <img
                src="assets/stocks-background-abstract.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-6 relative z-10 max-w-[427px]">
              <h2 className="text-[48px] font-bold text-[#073038] leading-[1.1]">
                Đầu tư <br /> tăng trưởng
              </h2>
              <p className="text-[18px] text-[#073038] opacity-70 leading-relaxed max-w-[370px]">
                Kafi cung cấp các sản phẩm đầu tư tăng trưởng phù hợp với
                từng nhu cầu và mức độ kinh nghiệm – từ cổ phiếu cơ sở đến
                các sản phẩm có đòn bẩy và giải pháp đầu tư theo mục tiêu.
              </p>
            </div>
          </div>

          {/* Side Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cổ phiếu" },
              { title: "Chứng quyền" },
              { title: "Phái sinh" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-[48px] p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
              >
                <h3 className="text-[32px] font-bold text-[#101828]">
                  {item.title}
                </h3>
                <div className="flex-1 flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.15,
                      transition: {
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    className="max-h-[200px] w-full flex items-center justify-center origin-center"
                  >
                    <AnimatedProductIcon title={item.title} />
                  </motion.div>
                </div>
                <button className="h-12 px-6 rounded-full bg-[#101828] text-white font-bold flex items-center gap-2 self-start">
                  Tìm hiểu thêm
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Section: Product Discovery & Supporting Info */}
      <section className="space-y-24">
        {/* Product Discovery Section */}
        <section className="pt-[64px] pb-[40px] flex flex-col gap-[24px] items-center relative w-full">
          <div className="flex flex-col font-bold justify-center leading-[56px] min-w-full relative shrink-0 text-[48px] text-[#101828] text-center whitespace-pre-wrap">
            <h2>
              {`Khám phá các sản phẩm `} <br /> đầu tư tăng trưởng
            </h2>
          </div>

          {/* Product Discovery Tab Bar */}
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md flex gap-[12px] items-center p-[8px] rounded-full shrink-0 border border-white/20 shadow-lg transition-all duration-300">
            {[
              "Cổ phiếu",
              "Phái sinh",
              "Chứng quyền",
            ].map((p) => (
              <button
                key={p}
                onClick={() => setActiveGrowthProduct(p)}
                className={`flex gap-[12px] items-center px-[20px] py-[16px] relative rounded-[58px] shrink-0 transition-all ${activeGrowthProduct === p
                  ? "bg-[#00C694] font-semibold text-[#101828] shadow-sm"
                  : "bg-transparent font-normal text-[#101828] hover:bg-gray-50"
                  } leading-[24px] text-[16px] whitespace-nowrap`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Product Discovery Detail */}
          <div className="bg-white rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[500px] border border-gray-100 shadow-sm">
            {/* Left Column: Content */}
            <div className="p-[56px] lg:px-[64px] flex flex-col justify-center gap-[48px]">
              <div className="space-y-6">
                <h3 className="text-[48px] font-bold leading-[56px] text-[#101828]">
                  {activeGrowthProduct}
                </h3>
                <p className="text-[18px] leading-[26px] text-[#101828] max-w-[485px]">
                  {activeGrowthProduct === "Cổ phiếu"
                    ? "Đầu tư cổ phiếu mang lại cơ hội tăng trưởng dài hạn thông qua việc sở hữu một phần doanh nghiệp niêm yết trên thị trường chứng khoán."
                    : `Đầu tư ${activeGrowthProduct.toLowerCase()} giúp bạn đa dạng hóa danh mục và tận dụng các cơ hội sinh lời từ thị trường tài chính.`}
                </p>

                <div className="flex flex-col gap-[20px] pt-4">
                  {[
                    "Phù hợp với nhà đầu tư muốn tăng trưởng tài sản theo thời gian",
                    "Thanh khoản cao, dễ tiếp cận",
                    "Đa dạng ngành nghề và quy mô doanh nghiệp",
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-[20px]">
                      {i > 0 && (
                        <div className="h-[1px] w-full bg-gray-100" />
                      )}
                      <div className="flex items-center gap-[12px]">
                        <div className="bg-[#106070] size-[32px] rounded-full flex items-center justify-center shrink-0">
                          <Check
                            className="size-[18px] text-white"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-[18px] font-semibold leading-[26px] text-[#101828]">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-[#101820] text-[#F7F9FC] h-[44px] px-[24px] rounded-[32px] flex items-center justify-center gap-[8px] font-medium hover:bg-[#073038] transition-all self-start shadow-sm">
                Đầu tư ngay
                <div className="size-[24px] rounded-full bg-[#344054] flex items-center justify-center -">
                  <ArrowUpRight className="size-[16px] text-white" />
                </div>
              </button>
            </div>

            {/* Right Column: Visual */}
            <div className="relative p-[40px] flex items-center justify-center bg-white">
              <img
                src="/kafi-web-demo/assets/stock-product.png"
                alt="Product Interface"
                className="w-full h-auto object-contain z-10"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white rounded-[48px] py-[60px] flex flex-col gap-[32px] items-center relative w-full overflow-hidden">
          <div className="text-center space-y-2 px-[64px] relative z-10 w-full max-w-[832px]">
            <h2 className="text-[48px] font-bold leading-[56px] text-[#101828]">
              Đặc quyền vượt trội tại Kafi
            </h2>
            <p className="text-[18px] leading-[26px] text-[#101828]">
              Khám phá những đặc quyền nổi bật dành cho nhà đầu tư cổ phiếu
              tại Kafi.
            </p>
          </div>

          {/* Visual Center with Provided Asset */}
          <div className="w-full px-[64px] relative z-10">
            <div
              className="w-full h-[300px] lg:h-[540px] rounded-[24px] overflow-hidden flex items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(179.885deg, rgb(255, 255, 255) 61.562%, rgb(169, 251, 206) 80.947%, rgba(1, 194, 127, 0.5) 99.764%)",
              }}
            >
              <img
                src="/kafi-web-demo/assets/benefits-kafi.png"
                alt="Kafi Benefits"
                className="w-full h-full object-contain relative z-20"
              />
            </div>
          </div>

          {/* Feature Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] px-[64px] relative z-10 w-full">
            {[
              {
                title: "Nền tảng giao dịch thông minh",
                desc: "Hệ thống ổn định, tốc độ xử lý nhanh cùng công cụ theo dõi và quản lý danh mục ngay trên Kafi X.",
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 4H5.33333C4.59695 4 4 4.59695 4 5.33333V21.3333C4 22.0697 4.59695 22.6667 5.33333 22.6667H13.3333V25.3333H10.6667C10.2985 25.3333 10 25.6318 10 26C10 26.3682 10.2985 26.6667 10.6667 26.6667H21.3333C21.7015 26.6667 22 26.3682 22 26C22 25.6318 21.7015 25.3333 21.3333 25.3333H18.6667V22.6667H26.6667C27.403 22.6667 28 22.0697 28 21.3333V5.33333C28 4.59695 27.403 4 26.6667 4ZM26.6667 21.3333H5.33333V5.33333H26.6667V21.3333Z"
                      fill="#00C694"
                    />
                  </svg>
                ),
              },
              {
                title: "Chi phí giao dịch tối ưu",
                desc: "Mức phí cạnh tranh, linh hoạt theo từng giai đoạn và nhu cầu đầu tư, giúp tối ưu hiệu quả sinh lời.",
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16ZM16 8C16.5523 8 17 8.44772 17 9V10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H17V14H18C18.7957 14 19.5585 14.3163 20.1211 14.8789C20.6837 15.4415 21 16.2044 21 17C21 17.7957 20.6837 18.5585 20.1211 19.1211C19.5585 19.6837 18.7957 20 18 20H17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V20H12C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18H15V16H14C13.2044 16 12.4415 15.6837 11.8789 15.1211C11.3163 14.5585 11 13.7957 11 13C11 12.2044 11.3163 11.4415 11.8789 10.8789C12.4415 10.3163 13.2044 10 14 10H15V9C15 8.44772 15.4477 8 16 8ZM17 18H18C18.2652 18 18.5195 17.8946 18.707 17.707C18.8946 17.5195 19 17.2652 19 17C19 16.7348 18.8946 16.4805 18.707 16.293C18.5195 16.1054 18.2652 16 18 16H17V18ZM14 12C13.7348 12 13.4805 12.1054 13.293 12.293C13.1054 12.4805 13 12.7348 13 13C13 13.2652 13.1054 13.5195 13.293 13.707C13.4805 13.8946 13.7348 14 14 14H15V12H14Z"
                      fill="#00C694"
                    />
                  </svg>
                ),
              },
              {
                title: "Phân tích & tư vấn chuyên sâu",
                desc: "Báo cáo độc quyền từ đội ngũ phân tích giàu kinh nghiệm, giúp tối ưu hiệu quả sinh lời.",
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.6667 9.33333V25.3333C26.6667 26.8061 25.4728 28 24 28H8C6.52724 28 5.33333 26.8061 5.33333 25.3333V6.66667C5.33333 5.19391 6.52724 4 8 4H18.6667L26.6667 9.33333ZM24 25.3333V10.6667H17.3333V6.66667H8V25.3333H24ZM12 10.6667H14.6667V13.3333H12V10.6667ZM12 16H20V18.6667H12V16ZM12 21.3333H20V24H12V21.3333Z"
                      fill="#00C694"
                    />
                  </svg>
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#F7F9FC] rounded-[24px] p-[20px] flex flex-col gap-[16px] h-[176px] hover:shadow-md transition-all"
              >
                <div className="size-[32px] shrink-0">{f.icon}</div>
                <div className="space-y-2">
                  <h4 className="text-[24px] font-bold leading-[32px] text-black line-clamp-1">
                    {f.title}
                  </h4>
                  <p className="text-[16px] leading-[24px] text-[#667085] line-clamp-2">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Table Section */}
        <section
          id="phi-dich-vu"
          className="bg-white rounded-[48px] px-[64px] py-[80px] flex flex-col gap-[32px] items-start relative w-full overflow-hidden"
        >
          <div className="flex flex-col gap-[16px] items-start justify-center max-w-[659px] relative z-10 w-full">
            <h2 className="text-[48px] font-bold leading-[56px] text-[#101828]">
              Biểu phí & Chính sách
            </h2>
            <p className="text-[18px] leading-[26px] text-[#101828]">
              Chi tiết biểu phí và chính sách áp dụng cho từng sản phẩm giao
              dịch tại Kafi, được cập nhật theo từng thời kỳ.
            </p>
          </div>

          <div className="w-full h-px bg-gray-100 relative z-10"></div>

          <div className="flex flex-col xl:flex-row gap-[24px] items-start relative z-10 w-full">
            {/* Sidebar Navigation */}
            <aside className="w-full xl:w-[320px] flex flex-col gap-[4px] items-start shrink-0">
              {[
                "Biểu phí",
                "Lãi suất không kỳ hạn*",
                "Dịch vụ lưu ký",
                "Chuyển quyền sở hữu",
                "Giao dịch phái sinh",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFeeCategory(cat)}
                  className={`w-full flex items-center justify-between px-[16px] py-[10px] rounded-[12px] transition-all group ${activeFeeCategory === cat ||
                    (cat === "Biểu phí" && activeFeeCategory === "Biểu phí")
                    ? "bg-[#00c694] text-[#101828] font-semibold"
                    : "text-[#101828] hover:bg-gray-50 font-normal"
                    }`}
                >
                  <span className="text-[16px] leading-[24px]">{cat}</span>
                  {activeFeeCategory === cat && (
                    <div className="bg-[#073038] rounded-full size-[24px] flex items-center justify-center shrink-0">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                      >
                        <path
                          d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </aside>

            {/* Table Card */}
            <div className="flex-1 bg-white border border-[#D0D5DD] rounded-[24px] overflow-hidden flex flex-col min-h-[477px] w-full">
              <div className="bg-[#0B756E] py-[20px] px-[40px] text-center">
                <p className="text-[16px] font-normal leading-[24px] text-[#F7F9FC]">
                  Biểu phí giao dịch qua sàn
                </p>
              </div>

              <div className="flex-1 p-[24px] lg:p-[40px] flex flex-col gap-0 overflow-x-auto">
                <div className="min-w-[600px] flex flex-col">
                  {/* Table Header Row */}
                  <div className="flex items-center border-b border-dashed border-[#106070] pb-[20px] mb-[20px]">
                    <div className="w-[174px] shrink-0 pr-[40px]">
                      <p className="text-[16px] font-normal leading-[24px] text-[#101828]">
                        Loại chứng khoán
                      </p>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[16px] font-semibold leading-[24px] text-[#106070]">
                        Khách hàng chủ động giao dịch
                      </p>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[16px] font-semibold leading-[24px] text-[#106070]">
                        Khách hàng có nhân viên tư vấn đầu tư
                      </p>
                    </div>
                  </div>

                  {/* Table Body Row: Stocks & Funds */}
                  <div className="flex items-center border-b border-dashed border-[#106070] py-[24px]">
                    <div className="w-[174px] shrink-0 pr-[40px]">
                      <div className="text-[16px] font-normal leading-[24px] text-[#101828] space-y-0">
                        <p>Cổ phiếu</p>
                        <p>Chứng chỉ Quỹ</p>
                        <p>Chứng quyền (*)</p>
                      </div>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[24px] font-bold leading-[32px] text-[#106070]">
                        0,10%
                      </p>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[24px] font-bold leading-[32px] text-[#106070]">
                        0,15%
                      </p>
                    </div>
                  </div>

                  {/* Table Body Row: Bonds */}
                  <div className="flex items-center py-[24px]">
                    <div className="w-[174px] shrink-0 pr-[40px]">
                      <p className="text-[16px] font-normal leading-[24px] text-[#101828]">
                        Trái phiếu
                      </p>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[24px] font-bold leading-[32px] text-[#106070]">
                        0,10%
                      </p>
                    </div>
                    <div className="flex-1 px-[40px] text-center border-l border-dashed border-[#106070]/30 h-full flex items-center justify-center">
                      <p className="text-[#D0D5DD]">-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <SupportingInfo />
    </>
  );
};

export default GrowthInvestment;
