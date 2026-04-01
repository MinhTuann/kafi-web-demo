import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  MinusCircle,
  PlusCircle,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const heroTeamImage = "/kafi-web-demo/assets/support/hero-team.png";
const kaiFrontImage = "/kafi-web-demo/assets/support/kai-front.png";
const ctaPatternV2Image = "/kafi-web-demo/assets/support/8d95901a10d85f892705f9ddfc72fd73c1017c54.png";

const topTabs = [
  {
    id: "faq", label: "Câu hỏi thường gặp", icon: (
      // Arrow-up-right icon (active state indicator from Figma)
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 0C11.0563 0 11.1113 0.00571339 11.165 0.0146484C11.1738 0.0161084 11.1827 0.0168607 11.1914 0.0185547L11.2012 0.0205078C11.211 0.0225203 11.2207 0.025044 11.2305 0.0273438C11.251 0.032196 11.2717 0.0367993 11.292 0.0429688C11.3408 0.0578329 11.3873 0.0778027 11.4326 0.0996094C11.4466 0.106345 11.4609 0.11269 11.4746 0.120117C11.6203 0.198874 11.7441 0.312548 11.835 0.450195C11.8597 0.487681 11.8812 0.526617 11.9004 0.566406C11.9222 0.61159 11.9412 0.65838 11.9561 0.707031C11.9623 0.727318 11.9668 0.747986 11.9717 0.768555C11.9893 0.842936 12 0.92022 12 1V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V3.41406L1.70703 11.707C1.31651 12.0976 0.683493 12.0976 0.292969 11.707C-0.0975556 11.3165 -0.0975556 10.6835 0.292969 10.293L8.58594 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H11Z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    id: "forms",
    label: "Biểu mẫu & Chính sách",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1_7827)">
          <path d="M17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8947 16.2652 15 16 15H8C7.73478 15 7.48043 14.8947 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4805 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H16C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4805 17 13.7348 17 14ZM13 17H8C7.73478 17 7.48043 17.1054 7.29289 17.2929C7.10536 17.4805 7 17.7348 7 18C7 18.2652 7.10536 18.5196 7.29289 18.7071C7.48043 18.8947 7.73478 19 8 19H13C13.2652 19 13.5196 18.8947 13.7071 18.7071C13.8946 18.5196 14 18.2652 14 18C14 17.7348 13.8946 17.4805 13.7071 17.2929C13.5196 17.1054 13.2652 17 13 17ZM22 10.485V19C21.9984 20.3256 21.4711 21.5965 20.5338 22.5338C19.5964 23.4711 18.3256 23.9984 17 24H7C5.67441 23.9984 4.40356 23.4711 3.46622 22.5338C2.52888 21.5965 2.00159 20.3256 2 19V5.00002C2.00159 3.67443 2.52888 2.40358 3.46622 1.46624C4.40356 0.528905 5.67441 0.00161091 7 2.30487e-05H11.515C12.4346 -0.00234388 13.3456 0.177611 14.1952 0.529482C15.0449 0.881354 15.8163 1.39816 16.465 2.05002L19.949 5.53602C20.6012 6.18426 21.1184 6.95548 21.4704 7.805C21.8225 8.65451 22.0025 9.56545 22 10.485ZM15.051 3.46402C14.7363 3.15918 14.3829 2.89695 14 2.68402V7.00002C14 7.26524 14.1054 7.51959 14.2929 7.70713C14.4804 7.89467 14.7348 8.00002 15 8.00002H19.316C19.103 7.61721 18.8404 7.26417 18.535 6.95002L15.051 3.46402ZM20 10.485C20 10.32 19.968 10.162 19.953 10H15C14.2044 10 13.4413 9.68395 12.8787 9.12134C12.3161 8.55873 12 7.79567 12 7.00002V2.04702C11.838 2.03202 11.679 2.00002 11.515 2.00002H7C6.20435 2.00002 5.44129 2.31609 4.87868 2.8787C4.31607 3.44131 4 4.20437 4 5.00002V19C4 19.7957 4.31607 20.5587 4.87868 21.1213C5.44129 21.684 6.20435 22 7 22H17C17.7956 22 18.5587 21.684 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V10.485Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_1_7827">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Liên hệ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1_7830)">
          <path d="M20.9997 12.4238V10.9998C20.9997 8.61281 20.0515 6.32362 18.3637 4.63579C16.6758 2.94797 14.3867 1.99976 11.9997 1.99976C9.61276 1.99976 7.32357 2.94797 5.63575 4.63579C3.94792 6.32362 2.99971 8.61281 2.99971 10.9998V12.4238C1.95087 12.8856 1.09251 13.6937 0.568328 14.7128C0.0441491 15.7319 -0.114033 16.9002 0.120264 18.022C0.354561 19.1438 0.967114 20.1511 1.85538 20.8752C2.74364 21.5993 3.85369 21.9963 4.99971 21.9998C5.53014 21.9998 6.03885 21.789 6.41392 21.414C6.78899 21.0389 6.99971 20.5302 6.99971 19.9998V13.9998C6.99971 13.4693 6.78899 12.9606 6.41392 12.5855C6.03885 12.2105 5.53014 11.9998 4.99971 11.9998V10.9998C4.99971 9.14324 5.7372 7.36276 7.04996 6.05001C8.36271 4.73725 10.1432 3.99976 11.9997 3.99976C13.8562 3.99976 15.6367 4.73725 16.9495 6.05001C18.2622 7.36276 18.9997 9.14324 18.9997 10.9998V11.9998C18.4693 11.9998 17.9606 12.2105 17.5855 12.5855C17.2104 12.9606 16.9997 13.4693 16.9997 13.9998V19.9998C16.9997 20.5302 17.2104 21.0389 17.5855 21.414C17.9606 21.789 18.4693 21.9998 18.9997 21.9998C20.1457 21.9963 21.2558 21.5993 22.144 20.8752C23.0323 20.1511 23.6449 19.1438 23.8791 18.022C24.1134 16.9002 23.9553 15.7319 23.4311 14.7128C22.9069 13.6937 22.0485 12.8856 20.9997 12.4238ZM4.99971 19.9998C4.20406 19.9998 3.441 19.6837 2.87839 19.1211C2.31578 18.5585 1.99971 17.7954 1.99971 16.9998C1.99971 16.2041 2.31578 15.441 2.87839 14.8784C3.441 14.3158 4.20406 13.9998 4.99971 13.9998V19.9998ZM18.9997 19.9998V13.9998C19.7954 13.9998 20.5584 14.3158 21.121 14.8784C21.6836 15.441 21.9997 16.2041 21.9997 16.9998C21.9997 17.7954 21.6836 18.5585 21.121 19.1211C20.5584 19.6837 19.7954 19.9998 18.9997 19.9998Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_1_7830">
            <rect width="24" height="24" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
] as const;

const topicTabs = [
  { id: "account", label: "Tài khoản" },
  { id: "stock", label: "Cổ Phiếu" },
  { id: "bond", label: "Trái Phiếu" },
  { id: "derivative", label: "Phái Sinh" },
  { id: "warrant", label: "Chứng quyền" },
  { id: "margin", label: "Giao dịch ký quỹ" },
  { id: "cash", label: "Giao dịch tiền" },
  { id: "fees", label: "Biểu phí" },
  { id: "manage", label: "Quản Lý Tài Khoản" },
] as const;

const highlightedQuestions = [
  "Làm thế nào để mở tài khoản chứng khoán online tại KAFI?",
  "Làm thế nào để đăng ký dịch vụ giao dịch ký quỹ tại Kafi?",
  "Biểu phí giao dịch tại KAFI được áp dụng như thế nào?",
  "Cách nạp tiền / rút tiền?",
  "Quên mật khẩu / khóa tài khoản ?",
];

const topicFaqById: Record<string, Array<{ q: string; a: string }>> = {
  account: [
    {
      q: "Làm sao mở tài khoản?",
      a: "Mở tài khoản tại KAFI rất đơn giản. Bạn chỉ cần truy cập nền tảng giao dịch, điền thông tin cá nhân và xác minh danh tính.",
    },
    {
      q: "Ai có thể mở tài khoản tại Kafi?",
      a: "Tổ chức, khách hàng cá nhân trong nước đủ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự theo quy định của pháp luật Việt Nam.",
    },
    {
      q: "Mất bao lâu để mở một tài khoản giao dịch thực?",
      a: "Thông thường chỉ mất vài phút sau khi hoàn tất xác thực thông tin.",
    },
    {
      q: "Tôi có thể mở nhiều tài khoản không?",
      a: "Mỗi khách hàng chỉ được mở một tài khoản chứng khoán tại KAFI.",
    },
    {
      q: "Mở tài khoản tại Kafi có mất phí không?",
      a: "Việc mở tài khoản tại Kafi hiện không thu phí.",
    },
  ],
  stock: [
    {
      q: "Khung giờ giao dịch cổ phiếu là gì?",
      a: "Giao dịch cổ phiếu niêm yết diễn ra theo từng phiên trên HOSE, HNX và UPCOM theo quy định hiện hành của Sở giao dịch.",
    },
    {
      q: "Lệnh ATO và ATC được dùng khi nào?",
      a: "ATO dùng trong phiên khớp lệnh mở cửa, ATC dùng trong phiên khớp lệnh đóng cửa.",
    },
  ],
  bond: [
    {
      q: "Trái phiếu phù hợp với ai?",
      a: "Trái phiếu phù hợp với nhà đầu tư ưu tiên dòng tiền ổn định, mức biến động thấp hơn cổ phiếu.",
    },
    {
      q: "Có thể bán lại trái phiếu trước hạn không?",
      a: "Tùy sản phẩm và điều khoản phát hành, bạn có thể bán lại trên thị trường thứ cấp hoặc theo chương trình mua lại.",
    },
  ],
  derivative: [
    {
      q: "Phái sinh là gì?",
      a: "Phái sinh là công cụ tài chính có giá trị dựa trên tài sản cơ sở, thường dùng để phòng ngừa rủi ro hoặc giao dịch ngắn hạn.",
    },
    {
      q: "Tôi cần gì để giao dịch phái sinh?",
      a: "Bạn cần tài khoản phái sinh, ký quỹ ban đầu và nắm rõ cơ chế lãi/lỗ theo ngày của hợp đồng.",
    },
  ],
  warrant: [
    {
      q: "Chứng quyền có bảo đảm là gì?",
      a: "Chứng quyền là sản phẩm cho phép nhà đầu tư mua quyền, không phải nghĩa vụ, mua hoặc bán tài sản cơ sở trong tương lai.",
    },
    {
      q: "Rủi ro lớn nhất của chứng quyền là gì?",
      a: "Chứng quyền có thể hết hạn vô giá trị nếu biến động giá tài sản cơ sở không theo kỳ vọng.",
    },
  ],
  margin: [
    {
      q: "Làm thế nào để đăng ký giao dịch ký quỹ?",
      a: "Bạn đăng ký trực tiếp trên ứng dụng/web Kafi hoặc tại quầy, sau đó xác nhận điều khoản và hạn mức được cấp.",
    },
    {
      q: "Tỷ lệ ký quỹ được theo dõi như thế nào?",
      a: "Bạn có thể theo dõi real-time trên tài khoản. Hệ thống sẽ cảnh báo khi tỷ lệ về ngưỡng an toàn.",
    },
  ],
  cash: [
    {
      q: "Nạp tiền mất bao lâu để vào tài khoản?",
      a: "Thông thường tiền được ghi nhận ngay hoặc trong vài phút tùy kênh ngân hàng.",
    },
    {
      q: "Tôi có thể rút tiền ngoài giờ hành chính không?",
      a: "Yêu cầu rút có thể tạo 24/7, thời điểm xử lý thực tế theo quy định ngân hàng và lịch thanh toán.",
    },
  ],
  fees: [
    {
      q: "Biểu phí giao dịch được xem ở đâu?",
      a: "Bạn có thể xem tại mục Biểu phí trên website Kafi hoặc trong ứng dụng.",
    },
    {
      q: "Có phát sinh thêm phí ẩn không?",
      a: "Kafi minh bạch mức phí theo biểu phí công bố. Các khoản phát sinh đều được hiển thị rõ trước khi xác nhận giao dịch.",
    },
  ],
  manage: [
    {
      q: "Làm sao đổi số điện thoại nhận OTP?",
      a: "Bạn cần xác thực chủ tài khoản và cập nhật thông tin theo hướng dẫn tại ứng dụng hoặc quầy giao dịch.",
    },
    {
      q: "Tài khoản bị khóa thì xử lý thế nào?",
      a: "Liên hệ tổng đài/hỗ trợ trực tuyến để được xác minh và mở khóa theo quy trình bảo mật.",
    },
  ],
};

export default function SupportPage() {
  const [activeTopTab, setActiveTopTab] =
    useState<(typeof topTabs)[number]["id"]>("faq");
  const [activeTopic, setActiveTopic] =
    useState<(typeof topicTabs)[number]["id"]>("account");
  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const topicFaq = useMemo(
    () => topicFaqById[activeTopic] ?? [],
    [activeTopic],
  );

  return (
    <div className="min-h-screen bg-[#F3F5F8] text-[#101828] font-['Inter',sans-serif]">
      <Header />

      {/* Top banner */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Chúng tôi có thể giúp bạn như thế nào?"
          background={
            <div className="absolute h-full w-full">
              <img
                src={heroTeamImage}
                alt=""
                className="absolute inset-0 object-fill"
              />
            </div>
          }
        />
      </section>

      <main className="relative w-full px-4 lg:px-6 py-6 space-y-12">
        {/* Product Tab Selection Group */}
        <section className="space-y-8">
          {/* Sub header navigation — StocksPage style */}
          <section className="sticky top-28 z-20 w-full flex justify-center py-4">
            <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-md p-1.5 rounded-full inline-flex items-center gap-1 shadow-lg border border-white/20">
              {topTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTopTab(tab.id)}
                  className={`h-14 px-4 rounded-[28px] flex items-center gap-2 text-[14px] leading-[20px] transition-all whitespace-nowrap ${activeTopTab === tab.id
                    ? "bg-white text-[#106070] font-bold shadow-sm"
                    : "text-[#101828] font-normal hover:text-[#101828]"
                    }`}
                >
                  {activeTopTab === tab.id ? (
                    <div className="bg-[#106070] text-[#0AE685] p-1.5 rounded-full shrink-0 flex items-center justify-center">
                      {tab.icon}
                    </div>
                  ) : (
                    <div className="text-[#374957] shrink-0">{tab.icon}</div>
                  )}
                  {tab.label}
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

          {activeTopTab === "faq" && (
            <>
              {/* Câu hỏi nổi bật Section — Figma node 1:7835 */}
              <section className="px-[80px] grid grid-cols-1 xl:grid-cols-[536px_minmax(0,1fr)] gap-6 items-center">
                {/* Left Column: Kai Mascot Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-[32px] h-[768px] overflow-hidden flex flex-col cursor-pointer shadow-xl group"
                  style={{
                    backgroundImage: `
                    radial-gradient(circle at 333px 429px, rgba(187,251,169,0.7) 0%, rgba(187,251,169,0) 58%),
                    radial-gradient(circle at 267px 529px, rgba(183,242,217,0.7) 0%, rgba(194,250,223,0) 58%),
                    linear-gradient(180deg, #00C694 34.6%, #CCFCFF 102.6%)
                  `
                  }}
                >
                  {/* Decorative Pattern / Mask */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute h-full w-full mix-blend-soft-light filter blur-[30px]" />
                  </div>

                  {/* Speech Bubble — Figma node 1:7841 */}
                  <div className="absolute bg-[#106070] z-10 left-[50%] translate-x-4 px-5 py-3 rounded-br-[24px] rounded-tl-[24px] rounded-tr-[24px] top-[141px] shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-300">
                    <p className="text-[14px] font-semibold text-white leading-[20px]">
                      Xin chào tôi là Kai! <br />
                      Tôi có thể giúp gì cho bạn?
                    </p>
                  </div>

                  {/* Kai Mascot & Background Circle */}
                  <div className="flex-1 relative flex items-end justify-center w-full mt-36 ml-32">
                    <img
                      src={kaiFrontImage}
                      alt="Kai mascot"
                      className="relative z-10 w-[766px] max-w-none transform translate-y-12 -translate-x-[115px] group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Right Column: Accordion Card */}
                <div className="bg-white rounded-[32px] border border-[#DDE2EC] p-10 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.06)] min-h-[768px] flex flex-col">
                  <h2 className="text-[36px] font-bold text-[#101828] mb-12 px-6">
                    Câu hỏi nổi bật
                  </h2>

                  <div className="flex-1">
                    {highlightedQuestions.map((question, idx) => {
                      const opened = idx === expandedQuestion;
                      return (
                        <div
                          key={question}
                          className="bg-white border-b border-[#DDE2EC]/50 last:border-b-0"
                        >
                          <button
                            onClick={() => setExpandedQuestion(opened ? -1 : idx)}
                            className="w-full text-left py-6 px-6 flex items-start gap-8 group transition-all"
                          >
                            <span className={`text-[20px] font-semibold leading-[28px] transition-all flex-1 ${opened ? 'text-[#101828]' : 'text-[#101828] hover:text-[#00C694]'}`}>
                              {question}
                            </span>
                            <div className={`mt-1 transition-all ${opened ? 'text-[#00C694]' : 'text-[#101828]/40 group-hover:text-[#00C694]'}`}>
                              {opened ? (
                                <MinusCircle size={24} />
                              ) : (
                                <PlusCircle size={24} />
                              )}
                            </div>
                          </button>

                          <AnimatePresence>
                            {opened && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 pt-0">
                                  <p className="text-[16px] text-[#475467] leading-[26px] font-normal">
                                    {idx === 0 ? (
                                      <>
                                        Bạn có thể mở tài khoản trực tuyến thông qua App/Web KAFI X theo hướng dẫn, hoặc đến trực tiếp quầy giao dịch.
                                        <a href="#" className="ml-2 font-bold text-[#101828] underline decoration-solid decoration-[#101828] underline-offset-4">
                                          Xem thêm
                                        </a>
                                      </>
                                    ) : (
                                      "Bạn có thể thực hiện thao tác trực tiếp trên giao diện ứng dụng hoặc website Kafi. Vui lòng làm theo trình tự các bước để hoàn thành nhanh chóng."
                                    )}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Câu hỏi theo chủ đề Section — Figma node 1:7882 */}
              <section className="px-[80px] mt-12 mb-24">
                <div className="bg-white rounded-[32px] border border-[#DDE2EC] px-10 py-14 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[36px] font-bold text-[#101828] mb-12">
                    Câu hỏi theo chủ đề
                  </h2>

                  <div className="flex gap-10 items-start min-h-[600px]">
                    {/* Left Column: Sidebar Menu — Figma node 1:7890 */}
                    <div className="w-[302px] flex flex-col gap-3 shrink-0">
                      {topicTabs.map((tab) => {
                        const isActive = activeTopic === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTopic(tab.id as any)}
                            className={`flex items-center gap-3 h-14 px-4 py-2.5 rounded-xl transition-all w-full text-left ${
                              isActive
                                ? "bg-[#00c694] text-[#101828]"
                                : "bg-transparent text-[#475467] hover:bg-[#F7F9FC]"
                            }`}
                          >
                            <span className={`text-[16px] flex-1 ${isActive ? "font-semibold" : "font-normal"}`}>
                              {tab.label}
                            </span>
                            {isActive && (
                              <div className="size-6 bg-[#073038] rounded-full flex items-center justify-center">
                                <ArrowUpRight className="size-3.5 text-[#0AE685]" strokeWidth={3} />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Vertical Indicator — Figma node 1:7901 */}
                    <div className="w-1 bg-[#F2F2F2] self-stretch rounded-full relative shrink-0">
                      <motion.div
                        className="absolute w-full bg-[#DDE2EC] rounded-full"
                        style={{ height: "30%", top: "0%" }} // Simple thumb for now
                      />
                    </div>

                    {/* Right Column: FAQ Panel — Figma node 1:7904 */}
                    <div className="flex-1 bg-[#F7F9FC] border border-[#00C694]/5 rounded-[24px] overflow-hidden">
                      <div className="p-10 flex flex-col gap-10">
                        {topicFaq.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-3 group">
                            {/* Question with numbering */}
                            <div className="flex gap-4 items-start">
                              <span className="text-[20px] font-semibold text-[#101828] shrink-0 leading-[28px]">
                                {idx + 1}.
                              </span>
                              <h3 className="text-[20px] font-semibold text-[#101828] leading-[28px]">
                                {item.q}
                              </h3>
                            </div>

                            {/* Answer with indentation */}
                            <div className="pl-[34px]">
                              <p className="text-[16px] text-[#475467] leading-relaxed">
                                {item.a}
                              </p>
                            </div>

                            {/* Divider like Figma imgLine135 */}
                            {idx < topicFaq.length - 1 && (
                              <div className="h-px w-full bg-[#DDE2EC] mt-6 opacity-50" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </section>

        {/* Global CTA Section — Figma node 1:7942 */}
        <section className="px-[80px] py-[40px] mt-12 mb-24">
          <div className="relative overflow-hidden rounded-[48px] bg-[#00C694] py-[64px] text-center flex flex-col items-center justify-center min-h-[360px]">
            {/* Background Pattern — imgImage2289 */}
            <img
              src={ctaPatternV2Image}
              alt=""
              className="absolute right-0 top-[-160px] h-[671px] w-auto opacity-100 pointer-events-none"
            />
            
            <div className="relative z-10 max-w-[832px] mx-auto flex flex-col gap-10 items-center">
              <div className="space-y-4">
                <h3 className="text-black text-[48px] font-bold leading-[56px]">
                  Không tìm thấy câu trả lời?
                </h3>
                <p className="text-black text-[18px] leading-[26px]">
                  Đội hỗ trợ khách hàng của KAFI luôn sẵn sàng trả lời mọi câu hỏi của bạn
                </p>
              </div>

              <div className="flex justify-center">
                <button className="bg-[#101820] text-[#F7F9FC] px-10 py-4 rounded-full font-medium text-[18px] hover:bg-black transition-all hover:shadow-xl active:scale-95">
                  Liên hệ bộ phận hỗ trợ
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer className="pt-12" />

      <Shortcut />
    </div>
  );
}
