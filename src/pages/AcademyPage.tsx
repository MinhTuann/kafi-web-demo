import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";
const academyTopBanner = "/kafi-web-demo/assets/academy-top-banner.png";

// Local components derived from Figma output
const IconArrowRightCorner: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div
    className={className || "bg-[#073038] relative rounded-[90px] size-[24px]"}
  >
    <div className="absolute flex inset-[20.5%_20.5%_20.49%_20.49%] items-center justify-center">
      <div className="flex-none h-[11px] rotate-45 w-[9px] bg-[#0ae685] rounded-sm" />
    </div>
  </div>
);

const AcademyPage: React.FC = () => {
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

      <main className="w-full flex flex-col items-center gap-0">
        {/* Sub header navigation */}
        <div
          className="content-stretch flex flex-col items-start py-[12px] relative shrink-0"
          data-name="Sub header"
        >
          <div
            className="bg-[rgba(255,255,255,0.2)] border border-white/40 backdrop-blur-md content-stretch flex items-center p-[6px] relative rounded-[33px] shrink-0 shadow-sm"
            data-name="Navigation"
          >
            <div
              className="bg-white content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[10px] relative rounded-[28px] shrink-0 shadow-sm"
              data-name="tabs subheader"
            >
              <IconArrowRightCorner className="bg-[#073038] relative rounded-[90px] shrink-0 size-[24px]" />
              <p className="font-bold leading-[20px] text-[#106070] text-[14px] whitespace-nowrap">
                Cẩm nang đầu tư
              </p>
            </div>
            <div
              className="content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[10px] relative rounded-[28px] shrink-0 hover:bg-white/40 transition-colors cursor-pointer"
              data-name="tabs subheader"
            >
              <div className="size-[24px] bg-[#344054]/20 rounded-md" />
              <p className="font-normal leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">
                Khoá học chứng khoán
              </p>
            </div>
            <div
              className="content-stretch flex gap-[8px] h-[56px] items-center px-[16px] py-[10px] relative rounded-[28px] shrink-0 hover:bg-white/40 transition-colors cursor-pointer"
              data-name="tabs subheader"
            >
              <div className="size-[24px] bg-[#344054]/20 rounded-md" />
              <p className="font-normal leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">
                Lịch sự kiện
              </p>
            </div>
            <div className="content-stretch flex items-center pl-[24px] relative shrink-0">
              <div className="bg-white content-stretch flex h-[56px] items-center px-[16px] py-[10px] relative rounded-[52px] shrink-0 border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="size-5 bg-gray-400 rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] not-italic pb-[40px] pt-[24px] px-[80px] relative shrink-0 w-full max-w-[1440px]">
          <div className="flex flex-col font-bold justify-center min-w-full relative shrink-0 text-[48px] text-[#101828] w-[min-content] whitespace-pre-wrap">
            <p className="leading-[56px] mb-0">{`Kiến thức nền tảng `}</p>
            <p className="leading-[56px]">cho hành trình đầu tư bền vững</p>
          </div>
          <div className="flex flex-col font-normal h-[68px] justify-center relative shrink-0 text-[18px] text-[#667085] w-[736px]">
            <p className="leading-[26px]">
              Cẩm nang đầu tư tại KAFI giúp bạn hiểu đúng bản chất của thị
              trường tài chính, từng sản phẩm đầu tư và cách quản lý rủi ro
              trong quá trình đầu tư.
            </p>
          </div>
        </div>

        {/* Filter and Grid Section */}
        <div
          className="content-stretch flex flex-col gap-[24px] items-start px-[80px] relative shrink-0 w-full max-w-[1440px]"
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
            <div
              className="content-stretch flex flex-col gap-[8px] items-end relative self-stretch shrink-0"
              data-name="Select"
            >
              <div className="bg-white border border-[#dde2ec] border-solid content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-[160px] px-[16px] py-[8px] relative rounded-[32px] cursor-pointer hover:border-[#00c694] transition-colors">
                <div className="size-5 bg-gray-300 rounded-sm" />
                <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#121212] text-[16px] whitespace-nowrap">
                  <p className="leading-[24px]">{`Tất cả `}</p>
                </div>
                <div className="size-5 bg-gray-300 rounded-full ml-auto" />
              </div>
            </div>
          </div>

          {/* Featured Full Width Card */}
          <div
            className="content-stretch flex gap-[10px] h-[428px] items-start overflow-clip px-[60px] py-[40px] relative rounded-[48px] shrink-0 w-full group shadow-xl shadow-[#00c694]/5 border border-white/40"
            style={{
              backgroundImage:
                "linear-gradient(63.2373deg, rgb(198, 255, 217) 49.961%, rgb(187, 251, 169) 72.376%, rgba(1, 194, 127, 0.5) 94.791%)",
            }}
          >
            <div className="content-stretch flex flex-col items-start pt-[64px] px-[64px] relative shrink-0 w-1/2 h-full">
              {/* Complex Placeholder Box Decoration */}
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 h-[260px] ml-[45px] mt-0 relative rounded-[26px] row-1 w-[388px] bg-white/20 border border-white/60 backdrop-blur-md shadow-2xl" />
                <div className="col-1 h-[288px] ml-[24px] mt-[32px] relative rounded-[24px] row-1 w-[432px] bg-white/40 border border-white/80 backdrop-blur-lg shadow-xl" />
                <div className="col-1 h-[300px] ml-0 mt-[64px] relative rounded-t-[24px] row-1 shadow-2xl w-[480px] bg-[#dbe8df]/80 border-t border-white" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] h-full items-start justify-center relative shrink-0 w-1/2 z-10">
              <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#101828] w-full">
                <div className="flex flex-col font-normal justify-center max-w-[832px] relative shrink-0 text-[16px] w-full opacity-60">
                  <p className="leading-[24px] uppercase tracking-wider font-bold">
                    CƠ BẢN
                  </p>
                </div>
                <div className="flex flex-col font-bold justify-center relative shrink-0 text-[36px] w-full">
                  <p className="leading-[42px]">Nhập môn đầu tư chứng khoán</p>
                </div>
              </div>
              <div className="flex flex-col font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[#101828] w-[min-content] opacity-80">
                <p className="leading-[26px]">
                  Bắt đầu với các kiến thức cốt lõi dành cho nhà đầu tư mới.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#101820] content-stretch flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[10px] relative rounded-[32px] shrink-0 text-white shadow-lg shadow-black/20"
              >
                <span className="font-medium leading-[20px] text-[16px]">
                  Bắt đầu
                </span>
                <div className="size-5 bg-[#0ae685] rounded-full flex items-center justify-center">
                  <div className="size-2 bg-black rounded-sm rotate-45" />
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
              },
              {
                title: "Các loại lệnh giao dịch cơ bản",
                tag: "Cơ bản",
                color: "from-[#00c694] to-[#07756d]",
              },
              {
                title: "Phân tích cơ bản doanh nghiệp",
                tag: "Trung cấp",
                color: "from-[#de704f] to-[#ed7858]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white content-stretch flex flex-col flex-1 gap-[4px] items-start p-[16px] relative rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#00c694]/20"
              >
                <div className="aspect-[16/9] relative rounded-[12px] shrink-0 w-full bg-[#f2f4f7] mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent flex items-center justify-center text-gray-400 italic font-medium px-4 text-center">
                    Thumb Placeholder
                  </div>
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
              },
              {
                title: "Tâm lý đầu tư và kỷ luật giao dịch",
                tag: "Cơ bản",
                color: "from-[#00c694] to-[#07756d]",
              },
              {
                title: "Phân tích cơ bản doanh nghiệp",
                tag: "Trung cấp",
                color: "from-[#de704f] to-[#ed7858]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white content-stretch flex flex-col flex-1 gap-[4px] items-start p-[16px] relative rounded-[20px] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#00c694]/20"
              >
                <div className="aspect-[16/9] relative rounded-[12px] shrink-0 w-full bg-[#f2f4f7] mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent flex items-center justify-center text-gray-400 italic font-medium px-4 text-center">
                    Thumb Placeholder
                  </div>
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

        {/* Instruction Section */}
        <div className="content-stretch flex flex-col gap-[48px] items-center overflow-clip px-[80px] py-[80px] relative shrink-0 w-full max-w-[1440px]">
          <div className="content-stretch flex gap-[56px] items-end justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[0] not-italic relative shrink-0">
              <h2 className="font-bold text-[48px] leading-[56px] text-[#101828]">
                Hướng dẫn giao dịch
              </h2>
              <p className="font-normal text-[18px] leading-[26px] text-[#667085]">
                Giao dịch dễ dàng chỉ với vài bước đơn giản
              </p>
            </div>
            <button className="bg-[#101820] content-stretch flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[10px] relative rounded-[32px] shrink-0 text-white hover:bg-[#073038] transition-colors shadow-lg shadow-black/10">
              <span className="font-medium leading-[20px] text-[16px]">
                Xem tất cả
              </span>
              <div className="size-5 bg-[#0ae685] rounded-full flex items-center justify-center">
                <div className="size-2 bg-black rounded-sm rotate-45" />
              </div>
            </button>
          </div>

          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
            {[
              {
                title: "Đăng ký sử dụng dịch vụ tài trợ giao dịch",
                desc: "Hướng dẫn đăng ký sử dụng dịch vụ tài trợ giao dịch tại Kafi, bao gồm các bước đăng ký, xác thực thông tin...",
              },
              {
                title: "Ký kết hợp đồng và kích hoạt hạn mức",
                desc: "Hướng dẫn ký hợp đồng và kích hoạt hạn mức tài trợ giao dịch tại Kafi, bao gồm các bước xác nhận điều khoản...",
              },
              {
                title: "Theo dõi tỷ lệ ký quỹ và trạng thái tài khoản",
                desc: "Hướng dẫn theo dõi tỷ lệ ký quỹ và trạng thái tài khoản tại Kafi, bao gồm các thông tin về hạn mức, dư nợ...",
              },
              {
                title: "Tải và cài đặt ứng dụng Kafi X",
                desc: "Hướng dẫn tải và cài đặt ứng dụng Kafi X cho nhà đầu tư chuyên nghiệp...",
              },
            ].map((guide, i) => (
              <div
                key={i}
                className="bg-white border border-[#dde2ec] border-solid content-stretch flex-1 flex flex-col items-center justify-end overflow-clip relative rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:border-[#00c694]/20 min-h-[420px]"
              >
                <div className="aspect-[16/9] relative shrink-0 w-full bg-[#f2f4f7] overflow-hidden border-b border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent flex items-center justify-center text-gray-300 italic text-sm">
                    Guide Asset
                  </div>
                </div>
                <div className="backdrop-blur-[50px] content-stretch flex flex-col flex-1 gap-[16px] items-start justify-between p-[20px] relative w-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                      <div className="bg-[#f7f9fc] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[40px] shrink-0">
                        <p className="font-medium text-[#121212] text-[12px] leading-[16px]">
                          Hướng dẫn
                        </p>
                      </div>
                      <span className="font-medium text-[#9aa5bd] text-[12px] leading-[16px]">
                        5 min read
                      </span>
                    </div>
                    <h4 className="font-semibold leading-[26px] text-black text-[18px] w-full line-clamp-2 min-h-[52px]">
                      {guide.title}
                    </h4>
                    <p className="font-normal leading-[24px] text-[#667085] text-[15px] line-clamp-2 opacity-80">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center py-[10px] relative rounded-[36px] mt-auto">
                    <span className="font-semibold leading-[24px] text-[#101828] text-[16px] group-hover:text-[#00c694] transition-colors">
                      Xem hướng dẫn
                    </span>
                    <div className="size-5 bg-black/10 rounded-full group-hover:bg-[#00c694]/20 flex items-center justify-center transition-colors">
                      <div className="size-2 bg-current rounded-sm rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
};

export default AcademyPage;
