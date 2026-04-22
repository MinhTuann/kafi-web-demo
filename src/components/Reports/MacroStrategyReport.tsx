import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ActionButton from "../ActionButton";

const reportTexture =
  "/kafi-web-demo/assets/reports/b9e79771ccb89cc036ab4d49b5e6a2d48890aced.png";
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

interface MacroStrategyReportProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function MacroStrategyReport({
  activeCategory,
  setActiveCategory,
}: MacroStrategyReportProps) {
  if (activeCategory !== "Báo cáo vĩ mô / chiến lược") return null;

  return (
    <div className="flex gap-12">
      {/* Sidebar */}
      <aside className="w-[280px] shrink-0">
        <div className="sticky top-56 flex flex-col gap-2">
          <div className="flex flex-col gap-1.5 p-2 bg-white rounded-[24px] border border-[#E2E8F0]">
            <ActionButton
              title="Báo cáo vĩ mô"
              onClick={() => setActiveCategory("Báo cáo vĩ mô / chiến lược")}
              className={`w-full !rounded-[12px] !px-5 !py-4 font-medium !justify-between ${
                activeCategory === "Báo cáo vĩ mô / chiến lược"
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
  );
}
