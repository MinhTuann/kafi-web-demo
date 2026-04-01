import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Download, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";
import ActionButton from "../components/ActionButton";
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
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M3.02332 1.00012L9.09288 1.00011M9.09288 1.00011L9.09289 7.06969M9.09288 1.00011L1.00012 9.09287" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      ),
    },
    {
      name: "Báo cáo vĩ mô / chiến lược",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13.9999 2V6C13.9999 6.53043 14.2107 7.03914 14.5857 7.41421C14.9608 7.78929 15.4695 8 15.9999 8H19.9999M15.9999 22H17.9999C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7892 21.0391 19.9999 20.5304 19.9999 20V7L14.9999 2H5.99995C5.46952 2 4.96081 2.21071 4.58574 2.58579C4.21066 2.96086 3.99995 3.46957 3.99995 4V7.5M4.01695 11.512C3.40532 12.0548 2.9111 12.7169 2.56464 13.4576C2.21818 14.1983 2.02679 15.002 2.00222 15.8194C1.97765 16.6368 2.12043 17.4506 2.42178 18.2108C2.72313 18.9709 3.17669 19.6615 3.75462 20.2401C4.33254 20.8186 5.02263 21.2729 5.7825 21.5751C6.54238 21.8772 7.35599 22.0209 8.1734 21.9972C8.9908 21.9735 9.79472 21.7829 10.5358 21.4372C11.2769 21.0916 11.9395 20.5981 12.4829 19.987M8.99995 16C8.73473 16 8.48038 15.8946 8.29284 15.7071C8.10531 15.5196 7.99995 15.2652 7.99995 15V11C7.99995 10.448 8.44995 9.992 8.99495 10.083C10.2253 10.2899 11.3605 10.8751 12.2427 11.7573C13.1248 12.6395 13.7101 13.7747 13.9169 15.005C14.0079 15.549 13.5519 16 12.9999 16H8.99995Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6.34425 5.29306C6.43723 5.38593 6.51099 5.49622 6.56131 5.61762C6.61163 5.73901 6.63754 5.86914 6.63754 6.00056C6.63754 6.13197 6.61163 6.2621 6.56131 6.3835C6.51099 6.50489 6.43723 6.61518 6.34425 6.70806C4.84369 8.20887 4.0007 10.2443 4.0007 12.3666C4.0007 14.4889 4.84369 16.5242 6.34425 18.0251C6.43976 18.1173 6.51594 18.2276 6.56835 18.3497C6.62076 18.4717 6.64835 18.6029 6.6495 18.7357C6.65065 18.8684 6.62535 19.0001 6.57507 19.123C6.52479 19.2459 6.45054 19.3576 6.35665 19.4515C6.26275 19.5453 6.1511 19.6196 6.0282 19.6699C5.90531 19.7202 5.77363 19.7455 5.64085 19.7443C5.50807 19.7432 5.37685 19.7156 5.25485 19.6632C5.13284 19.6107 5.0225 19.5346 4.93025 19.4391C1.02325 15.5331 1.02325 9.19906 4.93025 5.29306C5.11778 5.10559 5.37209 5.00027 5.63725 5.00027C5.90241 5.00027 6.15672 5.10559 6.34425 5.29306ZM19.0763 5.29306C22.9823 9.20006 22.9823 15.5331 19.0763 19.4391C18.8887 19.6267 18.6344 19.7322 18.3691 19.7323C18.1038 19.7324 17.8494 19.6271 17.6617 19.4396C17.4741 19.252 17.3686 18.9977 17.3685 18.7324C17.3685 18.4671 17.4737 18.2127 17.6613 18.0251C19.1618 16.5242 20.0048 14.4889 20.0048 12.3666C20.0048 10.2443 19.1618 8.20887 17.6613 6.70806C17.4736 6.52042 17.3682 6.26592 17.3682 6.00056C17.3682 5.73519 17.4736 5.4807 17.6613 5.29306C17.8489 5.10542 18.1034 5 18.3687 5C18.6341 5 18.8886 5.10542 19.0763 5.29306ZM9.31125 8.16706C9.49872 8.35458 9.60404 8.60889 9.60404 8.87406C9.60404 9.13922 9.49872 9.39353 9.31125 9.58106C8.9472 9.94507 8.65842 10.3772 8.4614 10.8528C8.26437 11.3285 8.16297 11.8382 8.16297 12.3531C8.16297 12.8679 8.26437 13.3776 8.4614 13.8533C8.65842 14.3289 8.9472 14.761 9.31125 15.1251C9.4041 15.218 9.47773 15.3283 9.52795 15.4496C9.57817 15.571 9.604 15.7011 9.60395 15.8324C9.60391 15.9638 9.57799 16.0938 9.52768 16.2151C9.47737 16.3365 9.40366 16.4467 9.31075 16.5396C9.21784 16.6324 9.10755 16.706 8.98618 16.7563C8.86482 16.8065 8.73475 16.8323 8.6034 16.8323C8.47205 16.8322 8.342 16.8063 8.22066 16.756C8.09933 16.7057 7.98909 16.632 7.89625 16.5391C6.78608 15.4288 6.16239 13.9231 6.16239 12.3531C6.16239 10.783 6.78608 9.27727 7.89625 8.16706C7.98912 8.07408 8.09941 8.00032 8.22081 7.95C8.34221 7.89967 8.47233 7.87377 8.60375 7.87377C8.73517 7.87377 8.86529 7.89967 8.98669 7.95C9.10809 8.00032 9.21838 8.07408 9.31125 8.16706ZM16.2692 8.16706C17.3794 9.27727 18.0031 10.783 18.0031 12.3531C18.0031 13.9231 17.3794 15.4288 16.2692 16.5391C16.0806 16.7212 15.828 16.822 15.5658 16.8197C15.3037 16.8175 15.0528 16.7123 14.8674 16.5269C14.682 16.3415 14.5769 16.0907 14.5746 15.8285C14.5723 15.5663 14.6731 15.3137 14.8553 15.1251C15.2193 14.761 15.5081 14.3289 15.7051 13.8533C15.9021 13.3776 16.0035 12.8679 16.0035 12.3531C16.0035 11.8382 15.9021 11.3285 15.7051 10.8528C15.5081 10.3772 15.2193 9.94507 14.8553 9.58106C14.6731 9.39245 14.5723 9.13985 14.5746 8.87766C14.5769 8.61546 14.682 8.36465 14.8674 8.17924C15.0528 7.99383 15.3037 7.88866 15.5658 7.88638C15.828 7.8841 16.0806 7.9849 16.2692 8.16706ZM12.0833 10.9371C12.4811 10.9371 12.8626 11.0951 13.1439 11.3764C13.4252 11.6577 13.5833 12.0392 13.5833 12.4371C13.5833 12.8349 13.4252 13.2164 13.1439 13.4977C12.8626 13.779 12.4811 13.9371 12.0833 13.9371C11.6854 13.9371 11.3039 13.779 11.0226 13.4977C10.7413 13.2164 10.5833 12.8349 10.5833 12.4371C10.5833 12.0392 10.7413 11.6577 11.0226 11.3764C11.3039 11.0951 11.6854 10.9371 12.0833 10.9371Z" fill="currentColor" />
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
      <main className="relative w-full px-4 lg:px-6 py-6 space-y-24">
        {/* Sticky Liquid Glass Tab Bar */}
        <section className="sticky top-28 z-30 w-full flex justify-center px-4 lg:px-6 py-4">
          <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-[6px] rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20 transition-all duration-300">
            {reportCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`h-[56px] px-6 rounded-[52px] flex items-center gap-2.5 transition-all duration-300 whitespace-nowrap ${activeCategory === cat.name
                  ? "bg-white text-[#106070] font-bold shadow-lg scale-100"
                  : "text-[#344054] font-medium hover:bg-white/10 hover:scale-[1.02]"
                  }`}
              >
                <div
                  className={`shrink-0 flex items-center justify-center transition-all duration-300 ${activeCategory === cat.name
                    ? "bg-[#106070] text-[#0AE685] size-8 rounded-full shadow-md shadow-[#106070]/20"
                    : "text-[#344054] size-6"
                    }`}
                >
                  <div
                    className={`transition-all duration-300 flex items-center justify-center ${activeCategory === cat.name ? "size-4" : "size-5"
                      } ${cat.name === "Báo cáo vĩ mô / chiến lược" ? "" : ""}`}
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
            <div className="sticky top-56 flex flex-col gap-2">
              <div className="flex flex-col gap-1.5 p-2 bg-white rounded-[24px] border border-[#E2E8F0]">
                <ActionButton
                  title="Báo cáo vĩ mô"
                  onClick={() => setActiveCategory("Báo cáo vĩ mô / chiến lược")}
                  className={`w-full !rounded-[12px] !px-5 !py-4 font-medium !justify-between ${activeCategory === "Báo cáo vĩ mô / chiến lược"
                    ? ""
                    : "!bg-white !text-gray-500 hover:!bg-[#073038] hover:!text-white"
                    }`}
                />
                <button className="text-left px-5 py-4 rounded-[12px] text-gray-500 hover:bg-gray-50 transition-all">
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
      <section className="w-full px-4 lg:px-6 mt-6 mb-32">
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
