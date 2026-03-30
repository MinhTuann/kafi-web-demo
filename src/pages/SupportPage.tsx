import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  BookOpenText,
  CircleHelp,
  FileText,
  Headphones,
  MinusCircle,
  PlusCircle,
  Search,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';

const heroTeamImage = '/kafi-web-demo/assets/support/hero-team.png';
const kaiFrontImage = '/kafi-web-demo/assets/support/kai-front.png';
const ctaPatternImage = '/kafi-web-demo/assets/support/hero-support.png';

const topTabs = [
  { id: 'faq', label: 'Câu hỏi thường gặp', icon: CircleHelp },
  { id: 'forms', label: 'Biểu mẫu & Chính sách', icon: FileText },
  { id: 'contact', label: 'Liên hệ', icon: Headphones },
] as const;

const topicTabs = [
  { id: 'account', label: 'Tài khoản' },
  { id: 'stock', label: 'Cổ Phiếu' },
  { id: 'bond', label: 'Trái Phiếu' },
  { id: 'derivative', label: 'Phái Sinh' },
  { id: 'warrant', label: 'Chứng quyền' },
  { id: 'margin', label: 'Giao dịch ký quỹ' },
  { id: 'cash', label: 'Giao dịch tiền' },
  { id: 'fees', label: 'Biểu phí' },
  { id: 'manage', label: 'Quản Lý Tài Khoản' },
] as const;

const highlightedQuestions = [
  'Làm thế nào để mở tài khoản chứng khoán online tại KAFI?',
  'Làm thế nào để đăng ký dịch vụ giao dịch ký quỹ tại Kafi?',
  'Biểu phí giao dịch tại KAFI được áp dụng như thế nào?',
  'Cách nạp tiền / rút tiền?',
  'Quên mật khẩu / khóa tài khoản ?',
];

const topicFaqById: Record<string, Array<{ q: string; a: string }>> = {
  account: [
    {
      q: 'Làm sao mở tài khoản?',
      a: 'Mở tài khoản tại KAFI rất đơn giản. Bạn chỉ cần truy cập nền tảng giao dịch, điền thông tin cá nhân và xác minh danh tính.',
    },
    {
      q: 'Ai có thể mở tài khoản tại Kafi?',
      a: 'Tổ chức, khách hàng cá nhân trong nước đủ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự theo quy định của pháp luật Việt Nam.',
    },
    {
      q: 'Mất bao lâu để mở một tài khoản giao dịch thực?',
      a: 'Thông thường chỉ mất vài phút sau khi hoàn tất xác thực thông tin.',
    },
    {
      q: 'Tôi có thể mở nhiều tài khoản không?',
      a: 'Mỗi khách hàng chỉ được mở một tài khoản chứng khoán tại KAFI.',
    },
    {
      q: 'Mở tài khoản tại Kafi có mất phí không?',
      a: 'Việc mở tài khoản tại Kafi hiện không thu phí.',
    },
  ],
  stock: [
    {
      q: 'Khung giờ giao dịch cổ phiếu là gì?',
      a: 'Giao dịch cổ phiếu niêm yết diễn ra theo từng phiên trên HOSE, HNX và UPCOM theo quy định hiện hành của Sở giao dịch.',
    },
    {
      q: 'Lệnh ATO và ATC được dùng khi nào?',
      a: 'ATO dùng trong phiên khớp lệnh mở cửa, ATC dùng trong phiên khớp lệnh đóng cửa.',
    },
  ],
  bond: [
    {
      q: 'Trái phiếu phù hợp với ai?',
      a: 'Trái phiếu phù hợp với nhà đầu tư ưu tiên dòng tiền ổn định, mức biến động thấp hơn cổ phiếu.',
    },
    {
      q: 'Có thể bán lại trái phiếu trước hạn không?',
      a: 'Tùy sản phẩm và điều khoản phát hành, bạn có thể bán lại trên thị trường thứ cấp hoặc theo chương trình mua lại.',
    },
  ],
  derivative: [
    {
      q: 'Phái sinh là gì?',
      a: 'Phái sinh là công cụ tài chính có giá trị dựa trên tài sản cơ sở, thường dùng để phòng ngừa rủi ro hoặc giao dịch ngắn hạn.',
    },
    {
      q: 'Tôi cần gì để giao dịch phái sinh?',
      a: 'Bạn cần tài khoản phái sinh, ký quỹ ban đầu và nắm rõ cơ chế lãi/lỗ theo ngày của hợp đồng.',
    },
  ],
  warrant: [
    {
      q: 'Chứng quyền có bảo đảm là gì?',
      a: 'Chứng quyền là sản phẩm cho phép nhà đầu tư mua quyền, không phải nghĩa vụ, mua hoặc bán tài sản cơ sở trong tương lai.',
    },
    {
      q: 'Rủi ro lớn nhất của chứng quyền là gì?',
      a: 'Chứng quyền có thể hết hạn vô giá trị nếu biến động giá tài sản cơ sở không theo kỳ vọng.',
    },
  ],
  margin: [
    {
      q: 'Làm thế nào để đăng ký giao dịch ký quỹ?',
      a: 'Bạn đăng ký trực tiếp trên ứng dụng/web Kafi hoặc tại quầy, sau đó xác nhận điều khoản và hạn mức được cấp.',
    },
    {
      q: 'Tỷ lệ ký quỹ được theo dõi như thế nào?',
      a: 'Bạn có thể theo dõi real-time trên tài khoản. Hệ thống sẽ cảnh báo khi tỷ lệ về ngưỡng an toàn.',
    },
  ],
  cash: [
    {
      q: 'Nạp tiền mất bao lâu để vào tài khoản?',
      a: 'Thông thường tiền được ghi nhận ngay hoặc trong vài phút tùy kênh ngân hàng.',
    },
    {
      q: 'Tôi có thể rút tiền ngoài giờ hành chính không?',
      a: 'Yêu cầu rút có thể tạo 24/7, thời điểm xử lý thực tế theo quy định ngân hàng và lịch thanh toán.',
    },
  ],
  fees: [
    {
      q: 'Biểu phí giao dịch được xem ở đâu?',
      a: 'Bạn có thể xem tại mục Biểu phí trên website Kafi hoặc trong ứng dụng.',
    },
    {
      q: 'Có phát sinh thêm phí ẩn không?',
      a: 'Kafi minh bạch mức phí theo biểu phí công bố. Các khoản phát sinh đều được hiển thị rõ trước khi xác nhận giao dịch.',
    },
  ],
  manage: [
    {
      q: 'Làm sao đổi số điện thoại nhận OTP?',
      a: 'Bạn cần xác thực chủ tài khoản và cập nhật thông tin theo hướng dẫn tại ứng dụng hoặc quầy giao dịch.',
    },
    {
      q: 'Tài khoản bị khóa thì xử lý thế nào?',
      a: 'Liên hệ tổng đài/hỗ trợ trực tuyến để được xác minh và mở khóa theo quy trình bảo mật.',
    },
  ],
};

export default function SupportPage() {
  const [activeTopTab, setActiveTopTab] = useState<(typeof topTabs)[number]['id']>('faq');
  const [activeTopic, setActiveTopic] = useState<(typeof topicTabs)[number]['id']>('account');
  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const topicFaq = useMemo(() => topicFaqById[activeTopic] ?? [], [activeTopic]);

  return (
    <div className="min-h-screen bg-[#F3F5F8] text-[#101828] font-['Inter',sans-serif] overflow-x-hidden">
      <Header />

      {/* Top banner */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Chúng tôi có thể giúp bạn như thế nào?"
          background={
            <div className="absolute h-full w-full">
              <img src={heroTeamImage} alt="" className="absolute inset-0 object-fill" />
            </div>
          }
        />
      </section>

      <main className="px-4 lg:px-6 pt-4 pb-10 space-y-8">
        <section className="max-w-[900px] mx-auto -mt-14 relative z-20 px-2 lg:px-0">
          <div className="rounded-full p-1.5 bg-white/70 border border-white/80 backdrop-blur-xl shadow-[0_20px_48px_-30px_rgba(0,0,0,0.35)] flex items-center gap-1.5 overflow-x-auto">
            {topTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTopTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTopTab(tab.id)}
                  className={`h-11 px-4 rounded-full whitespace-nowrap text-[13px] font-semibold transition flex items-center gap-2 ${active
                    ? 'bg-white text-[#106070] shadow'
                    : 'text-[#667085] hover:bg-white/65'
                    }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
            <button className="ml-auto size-10 rounded-full bg-white grid place-items-center text-[#667085]">
              <Search size={18} />
            </button>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-[420px_minmax(0,1fr)] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-[28px] bg-gradient-to-b from-[#00c694] to-[#c8f6ff] p-6 min-h-[520px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.36),transparent_55%)]" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="self-end max-w-[220px] bg-[#073038] text-white rounded-[16px] px-4 py-2.5 shadow">
                <p className="text-[11px] leading-[1.35]">Xin chào tôi là Kai</p>
                <p className="text-[12px] font-semibold">Tôi có thể giúp gì cho bạn?</p>
              </div>

              <div className="h-[360px] mx-auto mt-3">
                <img src={kaiFrontImage} alt="Kai mascot" className="h-full w-auto object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="bg-white rounded-[28px] border border-[#E8ECF1] p-5 lg:p-7"
          >
            <h2 className="text-[34px] lg:text-[40px] leading-[1.15] font-bold text-[#101828]">Câu hỏi nổi bật</h2>
            <div className="mt-4 divide-y divide-[#ECF0F4]">
              {highlightedQuestions.map((question, idx) => {
                const opened = idx === expandedQuestion;
                return (
                  <button
                    key={question}
                    onClick={() => setExpandedQuestion(opened ? -1 : idx)}
                    className="w-full text-left py-4 flex items-start justify-between gap-3"
                  >
                    <div>
                      <p className="text-[16px] font-semibold text-[#101828]">{question}</p>
                      {opened && (
                        <p className="text-[14px] text-[#667085] mt-2 max-w-[760px]">
                          Bạn có thể mở tài khoản trực tiếp thông qua app/Web KAFI. Quy trình eKYC nhanh,
                          an toàn và chỉ mất vài phút để hoàn thành.
                        </p>
                      )}
                    </div>
                    {opened ? (
                      <MinusCircle size={18} className="text-[#00C694] mt-0.5 shrink-0" />
                    ) : (
                      <PlusCircle size={18} className="text-[#98A2B3] mt-0.5 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section className="max-w-[1440px] mx-auto bg-white rounded-[28px] border border-[#E8ECF1] p-5 lg:p-7">
          <h3 className="text-[30px] lg:text-[38px] leading-[1.2] font-bold text-[#101828]">Câu hỏi theo chủ đề</h3>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-4 lg:gap-6">
            <aside className="bg-[#F6F8FB] rounded-[16px] p-2.5 h-fit">
              {topicTabs.map((topic) => {
                const active = activeTopic === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTopic(topic.id)}
                    className={`w-full rounded-[12px] px-3.5 py-3 text-[13px] text-left transition flex items-center justify-between ${active
                      ? 'bg-[#00C694] text-[#073038] font-semibold shadow'
                      : 'text-[#344054] hover:bg-white'
                      }`}
                  >
                    <span>{topic.label}</span>
                    {active && <span className="size-2 rounded-full bg-[#073038]" />}
                  </button>
                );
              })}
            </aside>

            <div className="rounded-[16px] border border-[#E9EEF4] overflow-hidden">
              {topicFaq.map((item, index) => (
                <article
                  key={`${item.q}-${index}`}
                  className="p-4 lg:p-5 border-b border-[#ECF0F4] last:border-b-0"
                >
                  <h4 className="text-[16px] font-semibold text-[#101828]">
                    {index + 1}. {item.q}
                  </h4>
                  <p className="text-[14px] text-[#667085] mt-2 leading-[1.55]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#00c694] to-[#06ad86] p-8 lg:p-12">
            <img
              src={ctaPatternImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen"
            />
            <div className="relative z-10 text-center max-w-[680px] mx-auto">
              <h3 className="text-[#101828] text-[34px] lg:text-[48px] leading-[1.1] font-bold">
                Không tìm thấy câu trả lời?
              </h3>
              <p className="mt-3 text-[#073038] text-[15px] lg:text-[16px]">
                Đội hỗ trợ khách hàng của KAFI luôn sẵn sàng trả lời mọi câu hỏi của bạn.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#101828] text-white px-5 py-3 text-[14px] font-semibold hover:bg-black transition">
                Liên hệ bộ phận hỗ trợ
                <ArrowUp size={14} className="rotate-45" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer className="pt-12" />

      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 p-2.5 bg-white/55 border border-white backdrop-blur-xl rounded-l-[18px] shadow-[0_16px_40px_-26px_rgba(0,0,0,0.5)]">
        <button className="size-10 rounded-[10px] bg-white text-[#073038] grid place-items-center shadow-sm">
          <BookOpenText size={18} />
        </button>
        <button className="size-10 rounded-[10px] bg-white text-[#073038] grid place-items-center shadow-sm">
          <FileText size={18} />
        </button>
        <button className="size-10 rounded-[10px] bg-gradient-to-r from-[#00C694] to-[#07756D] text-white grid place-items-center shadow-sm">
          <Headphones size={18} />
        </button>
        <button className="size-10 rounded-[10px] bg-gradient-to-r from-[#00C694] to-[#07756D] text-white grid place-items-center shadow-sm">
          <CircleHelp size={18} />
        </button>
        <button className="size-10 rounded-[10px] bg-white text-[#073038] grid place-items-center shadow-sm">
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}
