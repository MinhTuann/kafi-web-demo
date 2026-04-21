import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ActionButton from "../ActionButton";

// Asset paths
const Guide1 = "/kafi-web-demo/assets/stocks/guide-1.png";
const Guide2 = "/kafi-web-demo/assets/stocks/guide-2.png";
const Guide3 = "/kafi-web-demo/assets/stocks/guide-3.png";
const Guide4 = "/kafi-web-demo/assets/stocks/guide-4.png";
const TestimonialUser = "/kafi-web-demo/assets/stocks/testimonial-user.png";
const TestimonialHung = "/kafi-web-demo/assets/stocks/testimonial-hung.png";
const TestimonialMaiAnh = "/kafi-web-demo/assets/stocks/testimonial-maianh.png";
const PhoneMockup = "/kafi-web-demo/assets/stocks/phone-mockup.png";

const SupportingInfo = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Lê Hùng",
      role: "Kỹ sư phần mềm",
      content:
        '"Với Kafi, tôi đã có thể mở rộng danh mục đầu tư của mình mà không phải lo lắng về vốn. Dịch vụ tài trợ giao dịch của họ thực sự thay đổi cách tôi tiếp cận thị trường."',
      image: TestimonialHung,
    },
    {
      name: "Phạm Mai Anh",
      role: "Nhà kinh doanh tự do",
      content:
        '"Điều tôi thích nhất ở Kafi là sự minh bạch và tốc độ giao dịch. Các gói Margin linh hoạt giúp tôi tối ưu hóa lợi nhuận trong những thời điểm thị trường biến động mạnh."',
      image: TestimonialMaiAnh,
    },
    {
      name: "Hoàng Nam",
      role: "Chuyên viên phân tích",
      content:
        '"Công cụ phân tích kỹ thuật và hệ thống báo cáo của Kafi rất chuyên sâu. Đây là nền tảng đáng tin cậy cho cả nhà đầu tư mới và chuyên nghiệp."',
      image: TestimonialUser,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      {/* Promotions Section */}
      <section className="space-y-12 px-[64px] py-[64px] relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 w-full">
          <div className="space-y-3">
            <h2 className="text-[48px] font-bold leading-[56px] text-black">
              Ưu đãi từ Kafi
            </h2>
            <p className="text-[18px] text-gray-900">
              Khám phá các ưu đãi hỗ trợ nhà đầu tư từ Kafi
            </p>
          </div>
          <button className="h-[44px] px-[16px] py-[10px] bg-[#101820] text-[#F7F9FC] rounded-[32px] font-medium flex items-center gap-[6px] hover:bg-black/90 transition-all">
            Xem tất cả
            <div className="size-[24px] flex items-center justify-center">
              <ArrowUpRight className="size-[20px]" />
            </div>
          </button>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] w-full">
            {[
              {
                id: 1,
                tag: "Ưu đãi giao dịch",
                title: "Miễn phí gói vay ký quỹ Margin",
                desc: "Miễn phí lãi vay margin cho khách hàng có dư nợ lên đến 100,000,000 VND.",
                img: "/kafi-web-demo/assets/margin.png",
                bg: "linear-gradient(180deg, #07756D 0%, #01B68C 72.596%, #0AE685 100%)",
              },
              {
                id: 2,
                tag: "Ưu đãi giao dịch",
                title: "Mở app mới. Mở vận năm mới",
                desc: "Hoàn 100% phí giao dịch trong 30 ngày đầu tiên. Nhận thêm lì xì lên đến 100,000 VND.",
                img: "/kafi-web-demo/assets/open-app.png",
                bg: "linear-gradient(90deg, #ECFDF3 0%, #FFFFFF 100%)",
              },
              {
                id: 3,
                tag: "Ưu đãi giao dịch",
                title: "Đầu tư linh hoạt cùng Margin T",
                desc: "Lãi suất ưu đãi hấp dẫn: Lãi suất áp dụng chỉ 5%/năm trong 10 ngày đầu tiên.",
                img: "/kafi-web-demo/assets/invest.png",
                bg: "linear-gradient(2.54deg, #0AE685 17.022%, #01B68C 20.539%, #063F48 31.655%)",
              },
              {
                id: 4,
                tag: "Ưu đãi giao dịch",
                title: "Đại tiệc không phí - Đầu tư hết ý",
                desc: "Giới thiệu thành công tối thiểu 03 bạn mới, kích hoạt ngay Miễn phí giao dịch.",
                img: "/kafi-web-demo/assets/party.png",
                bg: "#C6FFD9",
              },
            ].map((promo) => (
              <motion.div
                key={promo.id}
                className="h-[598px] rounded-[24px] overflow-hidden border border-[#DDE2EC] relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="absolute inset-0 w-full h-full object-fill"
                />

                {/* Glassmorphism Content Area */}
                <div className="absolute bottom-0 left-0 right-0 h-[250px] p-[24px] flex flex-col justify-end gap-[16px]">
                  <div className="flex items-center gap-[4px] py-[10px]">
                    <span className="text-[16px] font-semibold text-[#101828]">
                      Khám phá ngay
                    </span>
                    <div className="">
                      <ArrowUpRight className="size-[20px] text-[#101828]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls (Mockup for design fidelity) */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-[4px]">
              {[0, 1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className={`size-[6px] rounded-full ${i === 1 ? "bg-[#101828]" : "bg-[#101828]/50"}`}
                ></div>
              ))}
            </div>
            <div className="flex gap-[16px]">
              <button className="size-[44px] bg-[#EBEFF5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="size-[44px] bg-[#00C694] rounded-full flex items-center justify-center hover:bg-[#00b284] transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="space-y-12 px-[64px] py-[64px] relative w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 w-full">
          <div className="space-y-3">
            <h2 className="text-[48px] font-bold leading-[56px] text-black">
              Hướng dẫn giao dịch
            </h2>
            <p className="text-[18px] text-gray-900 font-normal">
              Giao dịch dễ dàng chỉ với vài bước đơn giản
            </p>
          </div>
          <button className="h-[44px] px-[16px] py-[10px] bg-[#101820] text-[#F7F9FC] rounded-[32px] font-medium flex items-center gap-[6px] hover:bg-black/90 transition-all">
            Xem tất cả
            <div className="size-[24px] flex items-center justify-center">
              <ArrowUpRight className="size-[20px]" />
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
                title: "Hướng dẫn rút tiền từ tài khoản",
                desc: "Hướng dẫn quy trình rút tiền, thời gian xử lý và các lưu ý quan trọng khi thực hiện giao dịch rút tiền.",
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
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-[8px] py-[4px] bg-[#F7F9FC] text-[#121212] rounded-[40px] text-[12px] font-medium border border-[#DDE2EC]">
                        Hướng dẫn
                      </span>
                      <span className="text-[12px] text-[#9AA5BD] font-medium">
                        {guide.time}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-semibold leading-[26px] text-black line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-[16px] leading-[24px] text-[#667085] font-normal line-clamp-2">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-[4px] py-[10px]">
                    <span className="text-[16px] font-semibold text-[#101828]">
                      Xem hướng dẫn
                    </span>
                    <div className="">
                      <ArrowUpRight className="size-[20px] text-[#101828]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls (Mockup for design fidelity) */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-[4px]">
              {[0, 1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className={`size-[6px] rounded-full ${i === 1 ? "bg-[#101828]" : "bg-[#101828]/50"}`}
                ></div>
              ))}
            </div>
            <div className="flex gap-[16px]">
              <button className="size-[44px] bg-[#EBEFF5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="size-[44px] bg-[#0AE685] rounded-full flex items-center justify-center hover:bg-[#09d27a] transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-[20px] relative w-full overflow-hidden">
        <div className="bg-[#00C694] rounded-[48px] h-[616px] flex flex-col items-center justify-center p-[48px] relative overflow-hidden">
          {/* Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/kafi-web-demo/assets/TestimonialBg.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-white text-[48px] font-bold leading-[56px] mb-[48px] relative z-10 text-center">
            Khách hàng Kafi nói gì?
          </h2>

          <div className="w-full max-w-[816px] relative z-10 h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-[#073038] border border-white/10 rounded-[32px] p-[12px] w-full flex items-stretch group shadow-2xl absolute inset-0"
              >
                {/* Visual Column */}
                <div className="w-[285px] h-[285px] bg-white rounded-[32px] overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#106070] to-[#073038]" />
                  {/* Decorative Gradients */}
                  <div className="absolute -bottom-20 -left-20 size-60 bg-[#00C694] blur-[60px] opacity-40 rounded-full" />
                  <div className="absolute -top-20 -right-20 size-40 bg-[#FDF299] blur-[40px] opacity-30 rounded-full" />
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="flex-1 pl-[24px] flex flex-col justify-center gap-[16px]">
                  <div className="w-[60px] opacity-60">
                    <svg
                      width="60"
                      height="42"
                      viewBox="0 0 60 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6 0C8.3 0 0 8.3 0 18.6V42H22.8V18.6H9.6C9.6 13.6 13.6 9.6 18.6 9.6V0ZM55.8 0C45.5 0 37.2 8.3 37.2 18.6V42H60V18.6H46.8C46.8 13.6 50.8 9.6 55.8 9.6V0Z"
                        fill="#00C694"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </div>
                  <p className="text-[18px] leading-[26px] text-white">
                    {testimonials[activeTestimonial].content}
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-[16px] font-semibold text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[14px] text-[#00C694]">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#00C694"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-[48px] left-[48px] right-[48px] flex items-center justify-between z-20">
            <div className="flex gap-[8px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`size-[8px] rounded-full transition-all duration-300 ${i === activeTestimonial ? "bg-white w-[24px]" : "bg-white/30"}`}
                ></button>
              ))}
            </div>
            <div className="flex gap-[16px]">
              <button
                onClick={prevTestimonial}
                className="size-[44px] bg-[#EBEFF5]/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="size-[44px] bg-[#00C694] rounded-full flex items-center justify-center hover:bg-[#00b284] transition-colors shadow-lg"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[20px] pb-[80px] relative w-full">
        <div
          className="rounded-[48px] min-h-[460px] flex items-center px-[60px] py-[40px] relative transition-all duration-700"
          style={{
            background:
              "linear-gradient(59deg, #FFFFFF 50%, #BBFBA9 72%, rgba(1, 194, 127, 0.5) 95%)",
          }}
        >
          <div className="space-y-8 max-w-[722px] relative z-10 py-[64px]">
            <div className="space-y-3">
              <h2 className="text-[48px] font-bold text-[#101828] leading-[56px]">
                Bắt đầu đầu tư ngay hôm nay
              </h2>
              <p className="text-[18px] text-[#667085] leading-[26px]">
                Mở tài khoản hoặc tải ứng dụng Kafi X để khám phá các cơ hội đầu tư.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ActionButton title="Mở tài khoản ngay" onClick={() => {}} />
            </div>
          </div>

          {/* Visuals - Desktop Only */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[4%] h-[100%] w-[24%] rounded-[24px] lg:block">
              <img
                src={PhoneMockup}
                alt="Kafi App"
                className="inset-0 object-cover"
              />
            </div>
          </div>

          {/* Floating Assets */}
          <div className="hidden lg:block">
            {/* Income Badge */}
            <motion.div
              className="absolute bottom-[30%] right-[10%] bg-white border-8 border-[#F2F4F5]/80 px-[18.397px] py-[12px] rounded-[18.397px] shadow-xl flex items-center justify-between gap-[9.198px] z-30 w-[343px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-[9.198px]">
                <div className="size-[42.926px] bg-[#D1FADF] rounded-full flex items-center justify-center shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="#0B756E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[18.685px] font-bold text-black whitespace-nowrap">
                  Thu nhập
                </p>
              </div>
              <p className="text-[18.685px] font-bold text-[#0B756E] whitespace-nowrap">
                +168,000,000 đ
              </p>
            </motion.div>

            {/* Coins and Graphics */}
            <motion.img
              src="/kafi-web-demo/assets/top-coin.png"
              className="absolute top-[45%] right-[29%] size-24 object-contain z-40"
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/kafi-web-demo/assets/botton-coin.png"
              className="absolute top-[55%] right-[28%] size-32 object-contain z-40"
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/kafi-web-demo/assets/bottom-coin-blured.png"
              className="absolute top-[75%] right-[40%] size-52 object-contain z-40"
              animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportingInfo;
