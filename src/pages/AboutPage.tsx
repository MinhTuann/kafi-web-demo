import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Database,
  HandHeart,
  UserRound,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopBanner from "../components/TopBanner";
import Shortcut from "../components/Shortcut";

const ASSET_BASE = "/kafi-web-demo/assets/about";

const heroImage = `${ASSET_BASE}/hero-team.png`;
const visionHero = `${ASSET_BASE}/vision-hero.png`;
const visionIcon = `${ASSET_BASE}/vision-icon.png`;
const missionIcon = `${ASSET_BASE}/mission-icon.png`;
const numbersTeam = `${ASSET_BASE}/numbers-team.jpg`;
const numbersSkyscraper = `${ASSET_BASE}/numbers-skyscraper.jpg`;
const numbersArrow = `${ASSET_BASE}/numbers-arrow.png`;
const numbersBubbles = `${ASSET_BASE}/numbers-bubbles.png`;
const awardsPodium = `${ASSET_BASE}/awards-podium.png`;
const awardsTrophy = `${ASSET_BASE}/awards-trophy.png`;
const awardGrowth = `${ASSET_BASE}/awards-growth.png`;
const awardInspire = `${ASSET_BASE}/awards-inspire.png`;
const awardExcellent = `${ASSET_BASE}/awards-excellent.png`;
const certHeroBg = `${ASSET_BASE}/cert-hero-bg.png`;
const certHeroPerson = `${ASSET_BASE}/cert-hero-person.png`;
const ctaBg = `${ASSET_BASE}/cta-bg.jpg`;
const ctaCoin = `${ASSET_BASE}/cta-coin.png`;

const leaderCards = [
  {
    name: "Lê Quang Trung",
    title: "Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-1.png`,
  },
  {
    name: "Nguyễn Việt Cường",
    title: "Phó Chủ tịch Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-2.png`,
  },
  {
    name: "Hà Hoàng Dũng",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-3.png`,
  },
  {
    name: "Trần Minh Tuấn",
    title: "Thành viên Hội đồng quản trị",
    image: `${ASSET_BASE}/leader-4.png`,
  },
  {
    name: "Trình Thanh Cần",
    title: "Thành viên HĐQT kiêm Tổng giám đốc",
    image: `${ASSET_BASE}/leader-5.png`,
  },
];

const certYears = ["2026", "2025", "2024", "2023", "2022"];

const certFaq = [
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "05/02/2026",
    cta: "Xem danh sách",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "04/01/2026",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "03/12/2025",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "16/10/2025",
  },
  {
    title: "Danh sách nhân sự có chứng chỉ hành nghề chứng khoán",
    date: "11/09/2025",
  },
];

export default function AboutPage() {
  const [activeLeadershipTab, setActiveLeadershipTab] =
    useState("Hội đồng quản trị");
  const [activeYear, setActiveYear] = useState("2026");
  const [openedFaq, setOpenedFaq] = useState(0);

  const activeLeaders = useMemo(() => leaderCards, [activeLeadershipTab]);

  return (
    <div className="min-h-screen bg-[#F2F4F7] text-[#101828] font-['Inter',sans-serif] overflow-x-hidden">
      <Header />

      {/* Top banner */}
      <section className="w-full px-4 lg:px-6 mt-6">
        <TopBanner
          title="Cùng bạn xây dựng tương lai tài chính"
          background={
            <div className="absolute h-full right-0 w-full">
              <img
                src={heroImage}
                alt="Kafi team"
                className="absolute inset-0 object-contain"
              />
            </div>
          }
        />
      </section>

      <main className="px-4 lg:px-6 pb-10 space-y-8">
        <section className="max-w-[880px] mx-auto -mt-14 relative z-20">
          <div className="bg-white/75 backdrop-blur-md border border-white rounded-full p-2 shadow-sm flex items-center gap-2 overflow-auto">
            {[
              "Về Kafi",
              "Lịch sử phát triển",
              "Giải thưởng",
              "Đội ngũ lãnh đạo",
              "Giấy phép",
            ].map((item, idx) => (
              <button
                key={item}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-[14px] transition ${
                  idx === 0
                    ? "bg-[#073038] text-[#F7F9FC] font-semibold"
                    : "text-[#344054] hover:bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="relative rounded-[32px] overflow-hidden h-[760px]">
            <img
              src={visionHero}
              alt="Kafi vision"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[170px] bg-gradient-to-t from-[#00c694d9] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#00c6945e] backdrop-blur-sm border-t border-white/20">
              <p className="text-white text-[32px] font-bold mb-2">“</p>
              <p className="text-white text-[36px] leading-[1.3] max-w-[640px]">
                Trở thành Công ty hàng đầu về tư vấn tài chính cá nhân và đầu tư
                tại Việt Nam.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[32px] overflow-hidden">
            <div className="p-8 border-b border-[#EDF1F5] relative">
              <img src={visionIcon} alt="Vision icon" className="size-[92px]" />
              <ArrowUpRight
                className="absolute right-8 top-8 text-[#00C694]"
                size={28}
              />
              <h2 className="text-[56px] leading-[1.05] font-bold mt-6">
                Tầm nhìn
              </h2>
              <p className="text-[28px] text-[#344054] mt-4 leading-[1.45]">
                Trở thành Công ty hàng đầu về tư vấn tài chính cá nhân và đầu tư
                tại Việt Nam.
              </p>
            </div>
            <div className="p-8 relative">
              <img
                src={missionIcon}
                alt="Mission icon"
                className="size-[92px]"
              />
              <ArrowUpRight
                className="absolute right-8 top-8 text-[#00C694]"
                size={28}
              />
              <h2 className="text-[56px] leading-[1.05] font-bold mt-6">
                Sứ mệnh
              </h2>
              <p className="text-[28px] text-[#344054] mt-4 leading-[1.45]">
                Xây dựng tư duy phát triển cho nhà đầu tư tài chính Việt Nam,
                hướng tới sự thịnh vượng và bền vững trong tương lai.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto bg-[#F4F6F9] rounded-[32px] p-8 lg:p-12">
          <h3 className="text-center text-[48px] font-bold">Giá trị cốt lõi</h3>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Thông thái",
                desc: "Giúp khách hàng hiểu trạng thái tài chính cá nhân, xây dựng và đạt được các mục tiêu với hiểu biết sâu rộng về thị trường từ đội ngũ chuyên gia Kafi.",
                icon: Database,
              },
              {
                title: "Đơn giản",
                desc: "Cung cấp các công cụ, giải pháp tài chính đơn giản, dễ sử dụng, hướng tới tối ưu hóa trải nghiệm khách hàng.",
                icon: UserRound,
              },
              {
                title: "Chuyên nghiệp",
                desc: "Giữ vững chuẩn mực nghề nghiệp, hành xử có trách nhiệm và đặt lợi ích khách hàng lên hàng đầu.",
                icon: HandHeart,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[24px] p-8 border border-[#E6EBF1]"
              >
                <item.icon className="text-[#0B756E]" size={44} />
                <h4 className="text-[36px] font-bold mt-6">{item.title}</h4>
                <p className="text-[24px] text-[#344054] mt-4 leading-[1.4]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto">
          <h3 className="text-center text-[56px] font-bold">
            Kafi qua những con số
          </h3>
          <p className="text-center text-[22px] text-[#344054] mt-4 max-w-[900px] mx-auto">
            Từng cột mốc tăng trưởng được xây dựng trên nền tảng minh bạch, năng
            lực chuyên môn và sự đồng hành lâu dài cùng nhà đầu tư.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[381px_1fr] gap-6">
            <div className="bg-white rounded-[24px] p-8">
              <div className="border-b border-[#E1E6EC] pb-8">
                <p className="text-[24px] text-[#667085] font-semibold">
                  VỐN ĐIỀU LỆ
                </p>
                <p className="text-[84px] font-bold leading-[1] mt-3">7,500</p>
                <p className="text-[44px] mt-2">Tỷ đồng</p>
              </div>
              <div className="pt-8">
                <p className="text-[24px] text-[#667085] font-semibold">
                  TỔNG TÀI SẢN
                </p>
                <p className="text-[110px] font-bold leading-[1] mt-3">
                  26,870
                </p>
                <p className="text-[44px] mt-2">Tỷ đồng</p>
              </div>
              <p className="text-[24px] mt-6 text-[#667085]">
                Tính đến 31/12/2025
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[286px_1fr] gap-6">
              <div className="bg-gradient-to-b from-[#0b6f88] to-[#00C694] rounded-[24px] p-6 text-white relative overflow-hidden">
                <img
                  src={numbersTeam}
                  alt="Numbers"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                <p className="relative text-[34px] leading-[1.4] mt-20">
                  Những con số phản ánh niềm tin và hành trình phát triển bền
                  vững của Kafi.
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-6 flex items-center gap-4 relative overflow-hidden">
                <img
                  src={numbersArrow}
                  alt="Arrow"
                  className="w-[250px] h-auto"
                />
                <div>
                  <p className="text-[84px] font-bold leading-none">300K+</p>
                  <p className="text-[48px] font-bold mt-2">
                    Nhà đầu tư tin tưởng
                  </p>
                  <p className="text-[30px] text-[#667085] mt-2">
                    Cộng đồng đầu tư đang phát triển mỗi ngày
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-6 flex items-center justify-between">
                <div>
                  <p className="text-[84px] font-bold leading-none">300+</p>
                  <p className="text-[48px] font-bold mt-2">
                    Đối tác chiến lược
                  </p>
                  <p className="text-[30px] text-[#667085] mt-2">
                    Định chế tài chính chuyên nghiệp
                  </p>
                </div>
                <img
                  src={numbersBubbles}
                  alt="Bubbles"
                  className="w-[170px] h-auto"
                />
              </div>
              <div className="rounded-[24px] overflow-hidden">
                <img
                  src={numbersSkyscraper}
                  alt="Skyscraper"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto py-10 grid grid-cols-1 xl:grid-cols-[1.07fr_0.93fr] gap-6">
          <div className="rounded-[32px] bg-[#00C694] p-10 relative overflow-hidden min-h-[780px]">
            <img
              src={awardsPodium}
              alt="Podium"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%]"
            />
            <img
              src={awardsTrophy}
              alt="Trophy"
              className="absolute right-[8%] top-[5%] w-[58%]"
            />
            <div className="relative z-10 max-w-[360px]">
              <p className="text-[28px]">Thành Tựu</p>
              <h3 className="text-[70px] font-bold leading-[1.05] mt-4">
                Giải thưởng
              </h3>
              <p className="text-[28px] mt-6 leading-[1.45]">
                Những giải thưởng Kafi đạt được phản ánh nỗ lực không ngừng
                trong việc nâng cao chất lượng dịch vụ, minh bạch hoạt động và
                trải nghiệm nhà đầu tư.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#101820] text-[#00C694] px-6 py-3 text-[22px] font-medium">
                Xem tất cả <ArrowUpRight size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                label: "Giải thưởng",
                title: "Tăng trưởng ấn tượng",
                detail: "Thương hiệu mạnh Việt Nam 2025",
                image: awardGrowth,
              },
              {
                label: "Giải thưởng",
                title: "Doanh nghiệp truyền cảm hứng",
                detail: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                image: awardInspire,
              },
              {
                label: "Giải thưởng",
                title: "Doanh nghiệp xuất sắc",
                detail: "Asia Pacific Enterprise Awards (APEA) Vietnam 2025",
                image: awardExcellent,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[24px] p-6 flex gap-6 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[92px] h-[180px] object-contain"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[28px] font-semibold">{item.label}</p>
                    <ArrowUpRight className="text-[#00C694]" />
                  </div>
                  <h4 className="text-[56px] leading-[1.05] font-bold mt-2">
                    {item.title}
                  </h4>
                  <div className="h-px bg-[#D6DCE4] my-4" />
                  <p className="text-[30px] leading-[1.3] text-[#344054]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto py-6">
          <h3 className="text-center text-[56px] font-bold">
            Những người lãnh đạo tại Kafi
          </h3>
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-full p-2 flex gap-2">
              {["Hội đồng quản trị", "Ban điều hành", "Ban kiểm soát"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveLeadershipTab(tab)}
                    className={`px-6 py-3 rounded-full text-[24px] ${
                      activeLeadershipTab === tab
                        ? "bg-[#00C694] font-semibold"
                        : "text-[#344054]"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activeLeaders.slice(0, 5).map((leader) => (
              <div
                key={leader.name}
                className="bg-[#DDE2EC] rounded-[32px] overflow-hidden h-[540px] relative"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0f172aaf] to-transparent">
                  <h4 className="text-[54px] font-bold text-[#F7F9FC] leading-[1.05]">
                    {leader.name}
                  </h4>
                  <p className="text-[30px] text-white/90 mt-2">
                    {leader.title}
                  </p>
                </div>
                <button className="absolute right-5 bottom-5 size-11 rounded-full bg-[#0AE685] text-[#073038] grid place-items-center">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            ))}
            <div className="bg-[#106070] rounded-[32px] p-6 lg:col-span-1">
              <h4 className="text-[74px] leading-[1.05] font-bold text-[#F7F9FC]">
                Diệp Thế Anh
              </h4>
              <p className="text-[30px] text-white/70 mt-2">
                Thành viên HĐQT kiêm Phó Tổng giám đốc
              </p>
              <div className="h-px bg-white/30 my-6" />
              <p className="text-[30px] text-[#F7F9FC] leading-[1.45]">
                Ông là chuyên gia phát triển công nghệ tại các định chế tài
                chính, với hơn 20 năm kinh nghiệm xây dựng và vận hành hệ thống
                công nghệ cho lĩnh vực chứng khoán; từng đảm nhiệm Giám đốc
                Nghiên cứu & Phát triển tại Chứng khoán SSI, Phó Tổng Giám đốc
                tại Chứng khoán ACB và Giám đốc Công nghệ (CTO) tại Chứng khoán
                HSC.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto bg-white rounded-[48px] p-8 lg:p-16">
          <h3 className="text-center text-[56px] font-bold">
            Đội ngũ nhân sự được cấp chứng chỉ hành nghề
          </h3>
          <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1fr_582px] gap-8 items-stretch">
            <div>
              <div className="bg-[#F7F9FC] rounded-full p-2 inline-flex gap-2 mb-5">
                {certYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-5 py-2.5 rounded-full text-[22px] ${
                      activeYear === year
                        ? "bg-[#073038] text-[#F7F9FC] font-semibold"
                        : "text-[#101828]"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {certFaq.map((row, idx) => {
                  const opened = idx === openedFaq;
                  return (
                    <div
                      key={`${row.title}-${idx}`}
                      className={`rounded-[16px] border-l-[6px] ${
                        opened
                          ? "border-[#00C694] bg-[linear-gradient(247deg,rgba(196,255,166,0.1),rgba(0,198,148,0.2))]"
                          : "border-[#E8EDF3] bg-white"
                      } p-6`}
                    >
                      <button
                        onClick={() => setOpenedFaq(opened ? -1 : idx)}
                        className="w-full flex items-start gap-3 text-left"
                      >
                        {opened ? (
                          <ChevronUp className="mt-1" />
                        ) : (
                          <ChevronDown className="mt-1" />
                        )}
                        <p className="text-[34px] font-semibold leading-[1.25]">
                          {row.title}
                        </p>
                      </button>
                      {opened && (
                        <div className="pl-10 mt-5 flex items-center justify-between gap-4">
                          <p className="text-[30px] text-[#344054]">
                            {row.date}
                          </p>
                          <button className="inline-flex items-center gap-2 rounded-full border border-[#00C694] px-5 py-2.5 text-[24px]">
                            {row.cta}
                            <ArrowUpRight
                              size={18}
                              className="text-[#0B756E]"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] overflow-hidden relative bg-[#00C694] min-h-[760px]">
              <img
                src={certHeroBg}
                alt="Certificate background"
                className="absolute inset-0 w-full h-full object-cover mix-blend-hard-light opacity-90"
              />
              <img
                src={certHeroPerson}
                alt="Certificate representative"
                className="absolute inset-0 w-full h-[70%] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-[#00c69470] backdrop-blur-sm border-t border-white/20">
                <h4 className="text-[48px] font-bold text-white">
                  Chứng chỉ hành nghề chứng khoán
                </h4>
                <p className="text-[28px] mt-3 text-[#F7F9FC] leading-[1.45]">
                  KAFI tự hào giới thiệu đội ngũ nhân sự chuyên môn được cấp
                  chứng chỉ hành nghề, mang đến cho khách hàng sự yên tâm trong
                  mỗi quyết định đầu tư.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto py-4">
          <div className="relative rounded-[48px] overflow-hidden bg-gradient-to-r from-[#0c6070] to-[#00c694] px-14 py-16">
            <img
              src={ctaBg}
              alt="CTA background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-darken"
            />
            <div className="relative z-10 max-w-[740px]">
              <h3 className="text-[64px] font-bold text-white leading-[1.1]">
                Bắt đầu hành trình đầu tư của bạn
              </h3>
              <p className="text-[30px] text-white/95 mt-4">
                Khám phá các sản phẩm và dịch vụ được thiết kế cho nhà đầu tư
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#00C694] text-[#101828] px-7 py-3 text-[28px] font-medium">
                Khám phá sản phẩm
                <ArrowUpRight size={20} className="text-[#0C6070]" />
              </button>
            </div>

            <img
              src={ctaCoin}
              alt="Coin"
              className="absolute right-[12%] bottom-[10%] w-[290px] opacity-90"
            />
            <div className="absolute right-[5%] top-[44%] rounded-[18px] border-[5px] border-white/70 bg-white px-6 py-3 flex items-center gap-3">
              <CircleDollarSign className="text-[#00C694]" />
              <span className="text-[30px] font-bold">Thu nhập</span>
              <span className="text-[30px] font-bold text-[#0B756E]">
                +168,000,000 đ
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Shortcut />
    </div>
  );
}
