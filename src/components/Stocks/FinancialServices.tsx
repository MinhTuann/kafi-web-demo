import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import SupportingInfo from "./SupportingInfo";

/**
 * FinancialServices component for the "Dịch vụ tài chính" tab.
 * Implements 4 distinct sections from Figma designs.
 */
const FinancialServices = () => {
    const [activeMarginTab, setActiveMarginTab] = useState("Margin ưu đãi");






    return (
        <div className="space-y-24">
            {/* Section 1: Hero / Margin Overview (Figma Node 274:14798) */}
            <section className="bg-white rounded-[64px] p-24 pt-32 relative overflow-hidden border border-gray-100 shadow-sm min-h-[800px] flex flex-col items-center text-center">
                <div className="space-y-6 relative z-10 max-w-[800px] mb-12">
                    <h2 className="text-[64px] font-bold text-[#101828] leading-tight">
                        Dịch vụ tài chính
                    </h2>
                    <p className="text-[18px] text-[#475467] leading-relaxed max-w-[650px] mx-auto">
                        Các giải pháp tài chính tại Kafi giúp nhà đầu tư chủ động nguồn vốn<br />và nâng cao hiệu quả đầu tư.
                    </p>
                </div>

                {/* Section Hero Graphic: Exactly the image provided */}
                <div className="relative w-full max-w-[1000px] mt-12 mb-8 px-4 flex justify-center">
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        src="/kafi-web-demo/assets/margin_plans_hero.png" 
                        alt="Kafi Margin Plans" 
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

                <button className="mt-16 bg-[#101828] text-white h-14 px-10 rounded-full flex items-center gap-2 hover:bg-[#073038] transition-all shadow-xl group relative">
                    Tìm hiểu thêm
                    <div className="size-6 rounded-full bg-[#00C694] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowUpRight className="size-3 text-[#101828]" strokeWidth={3} />
                    </div>
                </button>
            </section>

            {/* Section 2: Feature Details (Figma Node 274:14844) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[48px] overflow-hidden border border-gray-100 shadow-sm min-h-[700px]">
                {/* Left Column: Content */}
                <div className="p-16 space-y-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <h3 className="text-[48px] font-bold leading-[1.2] text-[#101828]">
                            Tại sao nên chọn <br /> tài trợ giao dịch?
                        </h3>
                        <p className="text-[18px] text-[#475467] leading-relaxed max-w-[485px]">
                            Tài trợ giao dịch (giao dịch ký quỹ) là dịch vụ cho phép nhà đầu tư sử dụng nguồn vốn vay để gia tăng quy mô giao dịch trên cơ sở tài sản hiện có.<br />Khi được sử dụng đúng cách, tài trợ giao dịch giúp:
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            "Tối ưu hiệu quả sử dụng vốn",
                            "Nâng cao khả năng triển khai chiến lược đầu tư",
                            "Gia tăng lợi nhuận trên vốn tự có",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                <div className="size-8 rounded-full bg-[#106070] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Check className="size-4 text-[#0AE685]" strokeWidth={3} />
                                </div>
                                <span className="text-[18px] font-semibold text-[#101828] leading-tight pt-1">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#101828] text-white h-14 px-10 rounded-full flex items-center gap-2 self-start hover:bg-[#073038] transition-all group">
                        Khám phá ngay !
                        <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Right Column: High-Fidelity Margin Visual */}
                <div className="relative h-full flex flex-col items-center justify-center overflow-hidden min-h-[600px]">
                    <img
                        src="/kafi-web-demo/assets/increase-margin.png"
                        alt="Increase Margin Illustration"
                        className="w-auto h-[80%] object-cover"
                    />
                </div>
            </section>

            {/* Section 3: Privileges (Figma Node 274:14952) */}
            <section className="space-y-16 px-16">
                <div className="text-center space-y-4 max-w-[832px] mx-auto px-6">
                    <h2 className="text-[48px] font-bold text-[#101828] leading-tight">
                        Đặc quyền vượt trội<br />Tài trợ giao dịch tại Kafi
                    </h2>
                    <p className="text-[18px] text-[#475467] leading-relaxed">
                        Kafi triển khai dịch vụ tài trợ giao dịch theo hướng<br />minh bạch – kiểm soát rủi ro – hỗ trợ ra quyết định có trách nhiệm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Minh bạch về hạn mức và tỷ lệ ký quỹ",
                            iconLayout: (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/transparent-deposit.png" 
                                        alt="Transparent Deposit Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                        {
                            title: "Chi phí giao dịch tối ưu",
                            iconLayout: (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/optimal-costs.png" 
                                        alt="Optimal Costs Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                        {
                            title: "Phân tích & tư vấn chuyên sâu",
                            iconLayout: (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/analysis-consultation.png" 
                                        alt="Analysis Consultation Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                    ].map((feature, i) => (
                        <div key={i} className="bg-white rounded-[40px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8 h-full group">
                            <div className="aspect-square rounded-[32px] bg-[#F9FAFB] flex items-center justify-center relative overflow-hidden shrink-0 w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent" />
                                <div className="w-full h-full group-hover:scale-110 transition-transform duration-500">
                                    {feature.iconLayout}
                                </div>
                            </div>
                            <h4 className="text-[20px] font-semibold text-[#101828] leading-tight px-4 text-center">
                                {feature.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Detailed Rates Carousel (Figma Node 274:15126) */}
            <section className="space-y-12 px-16">
                <div className="space-y-8">
                    <h2 className="text-[48px] font-bold text-[#101828] leading-tight max-w-[800px]">
                        Biểu lãi suất và danh mục<br />chứng khoán giao dịch ký quỹ
                    </h2>
                    
                    {/* Tab Navigation */}
                    <div className="flex bg-white p-1.5 rounded-full w-fit">
                        {["Biểu lãi suất", "Danh mục chứng khoán giao dịch ký quỹ"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveMarginTab(tab)}
                                className={`px-8 py-3 rounded-full text-[14px] font-bold transition-all ${
                                    activeMarginTab === tab || (activeMarginTab === "Margin ưu đãi" && tab === "Biểu lãi suất")
                                    ? "bg-[#00C694] text-[#101828] shadow-sm"
                                    : "text-[#667085] hover:text-[#101828]"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Margin T Section */}
                <div className="rounded-[48px] p-12 lg:p-16 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center relative overflow-hidden">
                    <div className="absolute inset-0">
                        <img 
                            src="/kafi-web-demo/assets/interest-rate.png" 
                            alt="Interest Rate Background" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="space-y-4 text-white">
                            <h3 className="text-[64px] font-bold leading-[1.1]">
                                Đòn bẩy linh hoạt <br /> Sinh lời vượt trội
                            </h3>
                            <p className="text-[20px] opacity-90 max-w-[450px]">
                                Đón đầu cơ hội, đầu tư linh hoạt cùng <br /> Margin T - Lãi suất chỉ từ:
                            </p>
                        </div>
                        <div className="text-[96px] font-bold text-white tracking-tighter">0%</div>
                        <button className="bg-[#101828] text-[#0AE685] h-14 px-8 rounded-full flex items-center gap-2 hover:bg-black transition-all">
                            Xem chi tiết
                            <div className="size-8 rounded-full bg-[#0AE685] flex items-center justify-center ml-2">
                                <ArrowUpRight className="size-4 text-[#101828]" />
                            </div>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {[
                            { name: "Margin T5", rate: "0%", desc: "Điều kiện: trong 5 ngày đầu tiên và 14%/năm từ ngày thứ 6 trở đi.", method: "Hình thức đăng ký: Trực tuyến" },
                            { name: "Margin T10", rate: "5%", desc: "Điều kiện: trong 10 ngày đầu tiên và 14% từ ngày thứ 11 trở đi.", method: "Hình thức đăng ký: Trực tuyến" },
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-[32px] p-8 flex flex-col justify-between min-h-[380px] shadow-xl">
                                <div className="space-y-6">
                                    <h4 className="text-[24px] font-bold text-[#00C694]">{card.name}</h4>
                                    <div className="bg-[#F9FAFB] rounded-2xl p-6 flex justify-between items-center border border-[#00C694]">
                                        <span className="text-[14px] text-[#667085] leading-tight">Lãi suất <br /> ưu đãi</span>
                                        <div className="w-px h-10 bg-[#00C694] mx-3" />
                                        <span className="text-[40px] font-bold text-[#101828]">{card.rate}<sub className="text-[16px] text-[#667085] bottom-0 font-medium">/năm</sub></span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex gap-3 items-start">
                                            <div className="size-5 rounded-full bg-[#106070] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 text-white" />
                                            </div>
                                            <p className="text-[14px] text-[#475467] leading-relaxed">{card.desc}</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="size-5 rounded-full bg-[#106070] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 text-white" />
                                            </div>
                                            <p className="text-[14px] text-[#475467] leading-relaxed">{card.method}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 w-full bg-[#101828] text-white h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-all">
                                    Đăng ký
                                    <ArrowUpRight className="size-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                        {/* Featured Carousel Dots */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                            {[0, 1, 2, 3].map((dot) => (
                                <div 
                                    key={dot} 
                                    className={`size-1 rounded-full transition-all ${dot === 0 ? "bg-[#101828]" : "bg-white/40"}`} 
                                />
                            ))}
                        </div>
                    </div>

                {/* Bottom Rates Grid */}
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {[
                            { 
                                name: "Margin standard", 
                                rate: "12%", 
                                cond: "Điều kiện: không áp dụng", 
                                method: "Hình thức đăng ký: mặc định cho tất cả Khách hàng" 
                            },
                            { 
                                name: "Margin-S25", 
                                rate: "9%", 
                                cond: "Điều kiện: tỷ trọng danh mục S25 từ 75% trở lên và có dư nợ cuối mỗi ngày <= 10 tỷ VND", 
                                method: "Hình thức đăng ký: trực tuyến" 
                            },
                            { 
                                name: "Margin-B10", 
                                rate: "9%", 
                                cond: "Điều kiện: Áp dụng cho khách hàng có dư nợ cuối mỗi ngày >= 10 tỷ VND và đầu tư theo danh mục B10.", 
                                method: "Hình thức đăng ký: trực tuyến" 
                            },
                            { 
                                name: "Margin-Zero", 
                                rate: "0%", 
                                cond: "Điều kiện: Khách hàng có dư nợ gốc cuối mỗi ngày đến 100 triệu VND", 
                                method: "Hình thức đăng ký: trực tuyến" 
                            },
                        ].map((card, i) => (
                            <div key={i} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[420px] hover:shadow-md transition-all">
                                <div className="space-y-6">
                                    <h4 className="text-[20px] font-bold text-[#00C694]">{card.name}</h4>
                                    <div className="bg-[#F9FAFB] border border-[#00C694] rounded-2xl p-5 flex justify-between items-center group">
                                        <span className="text-[13px] text-[#667085]">Lãi suất</span>
                                        <div className="w-px h-8 bg-[#00C694] mx-2" />
                                        <span className="text-[36px] font-bold text-[#101828]">{card.rate}<sub className="text-[15px] text-[#667085] bottom-0 font-medium">/năm</sub></span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-start">
                                            <div className="size-5 rounded-full bg-[#106070] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 text-white" strokeWidth={3} />
                                            </div>
                                            <p className="text-[13px] text-[#475467] leading-relaxed">{card.cond}</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="size-5 rounded-full bg-[#106070] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="size-3 text-white" strokeWidth={3} />
                                            </div>
                                            <p className="text-[13px] text-[#475467] leading-relaxed">{card.method}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 w-full bg-[#101828] text-white h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-all">
                                    Đăng ký
                                    <ArrowUpRight className="size-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-[#F9FAFB] rounded-2xl p-6 text-[13px] text-[#667085] leading-relaxed max-w-[1000px]">
                            Lãi suất gói được tính toán và áp dụng hàng ngày. Khách hàng thỏa điều kiện sẽ nhận lãi suất của gói mà Khách hàng tham gia, ngược lại sẽ áp dụng mức lãi suất 12%/năm của Margin-Standard.
                        </div>

                        {/* Bottom Navigation (Dots & Arrows) */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1.5">
                                {[0, 1, 2, 3].map((dot) => (
                                    <div 
                                        key={dot} 
                                        className={`size-1.5 rounded-full transition-all ${dot === 0 ? "bg-[#101828]" : "bg-gray-200"}`} 
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button className="size-12 rounded-full bg-gray-100 flex items-center justify-center text-[#101828] hover:bg-gray-200 transition-all">
                                    <ChevronLeft className="size-6" />
                                </button>
                                <button className="size-12 rounded-full bg-[#00C694] flex items-center justify-center text-white hover:bg-[#00B084] transition-all">
                                    <ChevronRight className="size-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SupportingInfo />
        </div>
    );
};

export default FinancialServices;
