import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const shareholderBanner = "/kafi-web-demo/assets/share-holder-banner.png";
const sectionInfoBg = "/kafi-web-demo/assets/section-info-bg.png";

// ─── Types ────────────────────────────────────────────
interface ReportItem {
  title: string;
  date: string;
  label?: string;
}

interface YearGroup {
  year: number;
  quarters: { name: string; items: ReportItem[] }[];
}

// ─── Data ─────────────────────────────────────────────
const sidebarCategories = [
  "Báo cáo tài chính",
  "Báo cáo thường niên",
  "Quản trị doanh nghiệp",
  "Hồ sơ doanh nghiệp",
  "Đại hội cổ đông",
  "Công bố thông tin khác",
];

const yearGroups: YearGroup[] = [
  {
    year: 2025,
    quarters: [
      {
        name: "Quý 1",
        items: [
          { title: "Công văn công bố thông tin", date: "19/01/2026" },
          { title: "Báo cáo tài chính quý 1- 2025", date: "19/01/2026" },
          {
            title: "Công văn Giải trình lợi nhuận quý 1.2025",
            date: "19/01/2026",
          },
        ],
      },
      { name: "Quý 2", items: [] },
      { name: "Bán niên", items: [] },
      { name: "Quý 3", items: [] },
      { name: "Quý 4", items: [] },
    ],
  },
];

const collapsedYears = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010,
];

// ─── Year Accordion Row ───────────────────────────────
const YearAccordionRow: React.FC<{ year: number; defaultOpen?: boolean }> = ({
  year,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const data = yearGroups.find((g) => g.year === year);
  const [activeQuarter, setActiveQuarter] = useState(
    data?.quarters[0]?.name || "Quý 1",
  );
  const activeItems =
    data?.quarters.find((q) => q.name === activeQuarter)?.items || [];

  return (
    <div className="border-b border-[#f2f4f5]">
      {/* Year header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-6 w-full h-[80px] group cursor-pointer hover:bg-[#f7f9fc]/50 transition-colors"
      >
        <span className="font-bold text-[24px] leading-[32px] text-black text-left">
          {year}
        </span>
        {data && data.quarters.some((q) => q.items.length > 0) && (
          <div className="flex items-center flex-1 gap-4">
            <ChevronRight className="size-6 text-black/60" />
            <div className="bg-[#f2f4f5] border border-[#f2f4f5] rounded-[32px] p-1 flex items-center gap-0 mr-4">
              {data.quarters.map((q) => (
                <button
                  key={q.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveQuarter(q.name);
                    if (!open) setOpen(true);
                  }}
                  className={`px-4 py-2 rounded-[52px] text-[16px] font-semibold leading-[24px] whitespace-nowrap transition-all ${activeQuarter === q.name
                      ? "bg-[#073038] text-[#f7f9fc]"
                      : "text-[#101828] hover:bg-white/60"
                    }`}
                >
                  {q.name}
                </button>
              ))}
            </div>
            <div className="flex-1" />
          </div>
        )}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {open ? (
            <ChevronUp className="size-6 text-black/60" />
          ) : (
            <ChevronDown className="size-6 text-black/60" />
          )}
        </motion.div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {open && activeItems.length > 0 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-3">
              {activeItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 py-4 ${idx < activeItems.length - 1
                      ? "border-b border-[#f2f4f5]"
                      : ""
                    } group/item hover:bg-[#f7f9fc]/40 transition-colors rounded-xl px-2 -mx-2`}
                >
                  {/* Info */}
                  <div className="flex-1 flex flex-col gap-1">
                    {item.label && (
                      <div className="inline-flex self-start mb-1">
                        <span className="bg-[#f7f9fc] rounded-full px-2 py-1 text-[12px] font-medium text-[#121212] leading-[16px]">
                          {item.label}
                        </span>
                      </div>
                    )}
                    <p className="font-semibold text-[18px] leading-[26px] text-black">
                      {item.title}
                    </p>
                    <p className="font-normal text-[14px] leading-[20px] text-[#707070]">
                      {item.date}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <button className="bg-[#ebeff5] h-[36px] px-4 rounded-[32px] flex items-center justify-center hover:bg-[#073038] hover:text-white transition-all">
                    <span className="font-semibold text-[14px] leading-[20px]">
                      Xem online
                    </span>
                  </button>
                  <button className="bg-[#ebeff5] size-[36px] rounded-full flex items-center justify-center hover:bg-[#073038] hover:text-white transition-all">
                    <Download className="size-5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Collapsed Year Row (no data, just title) ─────────
const CollapsedYearRow: React.FC<{ year: number }> = ({ year }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#f2f4f5]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-6 w-full h-[80px] group cursor-pointer hover:bg-[#f7f9fc]/50 transition-colors"
      >
        <span className="font-bold text-[24px] leading-[32px] text-black flex-1 text-left">
          {year}
        </span>
        <ChevronDown
          className={`size-6 text-black/60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[14px] text-[#707070] pb-4 px-2 italic">
              Chưa có dữ liệu
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Page Component ──────────────────────────────
const ShareholderPage: React.FC = () => {
  const [activeSidebar, setActiveSidebar] = useState("Báo cáo tài chính");
  const [yearFilter] = useState("Tất cả năm");

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] text-[#101828] flex flex-col items-center">
      <Header />

      {/* Hero Banner */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Quan hệ cổ đông"
          background={
            <div className="absolute h-full right-0 w-[68%]">
              <img
                src={shareholderBanner}
                alt=""
                className="absolute h-full w-full object-fill"
              />
            </div>
          }
        />
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white rounded-[48px] p-10 lg:p-[5vw] mt-0">
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
          {/* ── Sidebar ── */}
          <aside className="w-[302px] shrink-0 sticky top-32">
            <div className="border border-[#f0f0f0] rounded-[24px] p-3">
              <nav className="flex flex-col gap-2">
                {sidebarCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSidebar(cat)}
                    className={`text-left px-4 py-3 rounded-[12px] text-[16px] leading-[24px] transition-all ${activeSidebar === cat
                        ? "bg-[#00c694] font-semibold text-[#101828]"
                        : "font-normal text-[#101828] hover:bg-[#f7f9fc]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Content ── */}
          <div className="flex-1 pl-10 flex flex-col gap-2">
            {/* Title + Year Filter */}
            <div className="flex items-center justify-between h-[64px]">
              <h1 className="font-bold text-[36px] leading-[42px] text-black">
                {activeSidebar}
              </h1>
              <div className="relative">
                <button className="bg-white border border-[#dde2ec] rounded-[32px] h-[48px] px-4 flex items-center gap-3 hover:border-[#00c694] transition-colors">
                  <span className="text-[16px] text-[#121212] leading-[24px]">
                    {yearFilter}
                  </span>
                  <ChevronDown className="size-5 text-[#121212]/60" />
                </button>
              </div>
            </div>

            {/* Year Accordion — 2025 (with data, expanded) */}
            <div className="flex flex-col">
              <YearAccordionRow year={2025} defaultOpen />
              {/* Collapsed years */}
              {collapsedYears.map((year) => (
                <CollapsedYearRow key={year} year={year} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — "Bạn cần thêm thông tin?" */}
      <section className="w-full px-4 lg:px-[5vw] mb-20">
        <div className="bg-[#c6ffd9] rounded-[48px] relative overflow-hidden flex flex-col items-center justify-center text-center py-16 px-8">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-80">
            <img
              src={sectionInfoBg}
              alt=""
              className="absolute h-full right-0 top-[-40%] w-[200%] max-w-none"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-4 items-center max-w-[832px]">
              <h2 className="font-bold text-[48px] leading-[56px] text-black">
                Bạn cần thêm thông tin?
              </h2>
              <p className="text-[18px] text-black leading-[26px]">
                Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với đội ngũ hỗ
                trợ của Kafi. <br />
                Chúng tôi luôn sẵn sàng trợ giúp!
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#073038] h-[56px] px-6 rounded-[32px] flex items-center justify-center gap-1 text-[#f2f4f5] shadow-lg hover:bg-black transition-colors"
            >
              <span className="font-medium text-[18px] leading-[24px]">
                Liên hệ bộ phận hỗ trợ
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Right Sidebar (Sticky Shortcuts) */}
      <Shortcut />
    </div>
  );
};

export default ShareholderPage;
