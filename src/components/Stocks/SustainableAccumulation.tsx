import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Search } from "lucide-react";
import ActionButton from "../ActionButton";
import SupportingInfo from "./SupportingInfo";

/**
 * SustainableAccumulation component for the "Tích lũy bền vững" tab.
 * Implements 5 distinct sections from Figma designs.
 */
const SustainableAccumulation = () => {
    const [activeProductTab, setActiveProductTab] = useState("Bond");
    const [activeKnowledgeTab, setActiveKnowledgeTab] = useState("Tổng quan Kafi Bond");

    return (
        <div className="space-y-24">
            {/* Section 1: Hero / Featured Products (Figma Node 274:9363) */}
            <section className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr_1fr] gap-6">
                {/* Left Card: Introduction */}
                <div className="bg-[#F9FAFB] rounded-[48px] p-16 relative overflow-hidden min-h-[480px] flex flex-col justify-center border border-gray-100 group">
                    {/* Abstract Background (3D Steps Image) */}
                    <div className="absolute inset-0 pointer-events-none select-none">
                        <img 
                            src="/kafi-web-demo/assets/sustainable-accumulation-steps.png" 
                            alt="" 
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>

                    <div className="space-y-8 relative z-10 max-w-[420px]">
                        <h2 className="text-[56px] font-bold text-[#101828] font-['Roboto',sans-serif] leading-[1.1]">
                            Tích lũy <br /> bền vững
                        </h2>
                        <p className="text-[18px] text-[#475467] leading-relaxed">
                            Kafi cung cấp các sản phẩm đầu tư tăng trưởng phù hợp với từng nhu cầu và mức độ kinh nghiệm của nhà đầu tư – từ cổ phiếu cơ sở đến các sản phẩm có đòn bẩy và giải pháp đầu tư theo mục tiêu.
                        </p>
                    </div>
                </div>

                {/* Product Card 1: Bond */}
                <div className="bg-white border border-gray-100 rounded-[48px] p-10 flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-500">
                    <div className="text-center space-y-2">
                        <h3 className="text-[24px] font-bold text-[#101828] leading-tight">Bond</h3>
                        <p className="text-[24px] text-[#475467] font-medium">Tích lũy trái phiếu</p>
                    </div>
                    
                    {/* Illustration: Bond Data Image */}
                    <div className="relative size-56 flex items-center justify-center">
                        <img 
                            src="/kafi-web-demo/assets/bond-data.png" 
                            alt="Bond Data Illustration" 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <button className="h-[44px] px-6 rounded-full bg-[#101828] text-white text-[16px] font-extralight flex items-center gap-2 hover:bg-[#073038] transition-all shadow-sm">
                        Tìm hiểu thêm
                        <ArrowUpRight className="size-4" />
                    </button>
                </div>

                {/* Product Card 2: Smart Portfolio */}
                <div className="bg-white border border-gray-100 rounded-[48px] p-10 flex flex-col items-center justify-between group hover:shadow-xl transition-all duration-500">
                    <div className="text-center space-y-2">
                        <h3 className="text-[24px] font-bold text-[#101828] leading-tight">Smart Portfolio</h3>
                        <p className="text-[24px] text-[#475467] font-medium">Danh mục thông minh</p>
                    </div>

                    {/* Illustration: Smart Portfolio Data Image */}
                    <div className="relative size-56 flex items-center justify-center">
                        <img 
                            src="/kafi-web-demo/assets/smart-portfolio-data.png" 
                            alt="Smart Portfolio Illustration" 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <button className="h-[44px] px-6 rounded-full bg-[#101828] text-white text-[16px] font-extralight flex items-center gap-2 hover:bg-[#073038] transition-all shadow-sm">
                        Tìm hiểu thêm
                        <ArrowUpRight className="size-4" />
                    </button>
                </div>
            </section>

            {/* Section 2: Explore Products Header (Figma Node 274:9459) */}
            <section className="flex flex-col gap-12 items-center">
                <div className="text-center space-y-6">
                    <h2 className="text-[48px] font-bold text-[#101828] leading-tight">
                        Khám phá các sản phẩm <br /> Tích lũy bền vững
                    </h2>
                </div>

                {/* Tab Bar: Pill Shape */}
                <div className="bg-white p-2 rounded-full inline-flex items-center gap-2 shadow-sm border border-gray-100">
                    {["Bond", "Smart Portfolio"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveProductTab(tab)}
                            className={`h-14 px-10 rounded-full text-[16px] transition-all whitespace-nowrap ${activeProductTab === tab
                                ? "bg-[#00C694] text-[#101828] font-bold shadow-sm"
                                : "text-[#475467] font-normal hover:text-[#101828] hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </section>

            {/* Section 3: Feature Details (Figma Node 274:9466) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[48px] overflow-hidden border border-gray-100 shadow-sm min-h-[700px]">
                {/* Left Column: Content */}
                <div className="p-16 space-y-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <h3 className="text-[48px] font-bold leading-[1.2] text-[#101828]">
                            Tại sao nên chọn tích lũy với trái phiếu tại Kafi?
                        </h3>
                        <p className="text-[18px] text-[#475467] leading-relaxed max-w-[485px]">
                            KAFI cung cấp các sản phẩm đầu tư tăng trưởng phù hợp với từng nhu cầu và mức độ kinh nghiệm của nhà đầu tư – từ cổ phiếu cơ sở đến các sản phẩm có đòn bẩy và giải pháp đầu tư theo mục tiêu.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            "Sử dụng tiền nhàn rỗi hiệu quả, dòng tiền không bị gián đoạn",
                            "Nhận khoản thu đều theo kỳ, dễ kiểm soát và chủ động kế hoạch chi tiêu",
                            "Giữ ổn định tổng tài sản, hạn chế biến động không cần thiết.",
                            "Phù hợp với chiến lược tích lũy lâu dài",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                <div className="size-8 rounded-full bg-[#106070] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Check className="size-4 text-[#0AE685]" strokeWidth={3} />
                                </div>
                                <span className="text-[18px] font-semibold text-[#101828] leading-tight pt-1">{item}</span>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#101828] text-white h-14 px-10 rounded-full flex items-center gap-2 self-start hover:bg-[#073038] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Đầu tư ngay
                        <ArrowUpRight className="size-5 text-white" />
                    </button>
                </div>

                {/* Right Column: High-Fidelity Bond Visual */}
                <div className="relative h-full flex items-center justify-center p-6 overflow-hidden min-h-[600px]">
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="/kafi-web-demo/assets/bond.png" 
                        alt="Kafi Bond Visual" 
                        className="w-full h-full object-contain relative z-10"
                    />
                    
                    {/* Shadow Decoration */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-40" />
                </div>
            </section>

            {/* Section 4: Privileges (Figma Node 274:9539) */}
            <section className="space-y-16 px-16">
                <div className="text-center space-y-4 max-w-[832px] mx-auto px-6">
                    <h2 className="text-[48px] font-bold text-[#101828] leading-tight">
                        Đặc quyền vượt trội Kafi Bond
                    </h2>
                    <p className="text-[18px] text-[#475467] leading-relaxed">
                        Kafi Bond được xây dựng theo hướng minh bạch thông tin – dễ tiếp cận – đúng quy định, giúp nhà đầu tư hiểu rõ sản phẩm trước khi đưa ra quyết định.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Lãi suất tích lũy hấp dẫn, gia tăng giá trị tài sản bền vững",
                            renderIllustration: () => (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/increase-invest.png" 
                                        alt="Increase Invest Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                        {
                            title: "Hiểu đầy đủ điều khoản phát hành, kỳ hạn, lãi suất và rủi ro",
                            renderIllustration: () => (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/transparent-invest.png" 
                                        alt="Transparent Invest Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                        {
                            title: "Theo dõi danh mục trái phiếu tập trung, thuận tiện",
                            renderIllustration: () => (
                                <div className="relative w-full h-full">
                                    <img 
                                        src="/kafi-web-demo/assets/focus-invest.png" 
                                        alt="Focus Invest Illustration" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        },
                    ].map((feature, i) => (
                        <div key={i} className="bg-white rounded-[40px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-8 h-full group">
                            <div className="aspect-square rounded-[32px] bg-[#F9FAFB] flex items-center justify-center relative overflow-hidden shrink-0 w-full">
                                {feature.renderIllustration()}
                            </div>
                            <h4 className="text-[20px] font-semibold text-[#101828] leading-tight px-4 text-center">
                                {feature.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5: Bond Knowledge / FAQ (Figma Node 274:9690) */}
            <section className="bg-white rounded-[48px] p-16 space-y-12 border border-gray-100 shadow-sm">
                <div className="space-y-4 max-w-[783px]">
                    <h2 className="text-[48px] font-bold text-[#101828]">
                        Kafi Bond và những điều cần biết
                    </h2>
                    <p className="text-[18px] text-[#475467] leading-relaxed">
                        Mọi hoạt động đầu tư trái phiếu tại Kafi được thực hiện theo đúng quy định pháp luật hiện hành và chính sách nội bộ đã được công bố.
                    </p>
                </div>

                <div className="h-px w-full bg-gray-100" />

                <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-12">
                    {/* Navigation Sidebar */}
                    <aside className="space-y-2">
                        {[
                            "Tổng quan Kafi Bond",
                            "Giao dịch Kafi Bond",
                            "Lợi suất & thời hạn nắm giữ",
                            "Trái tức (Coupon)",
                            "Chính sách & quy định",
                            "Thông tin khác",
                        ].map((item) => (
                            activeKnowledgeTab === item ? (
                                <ActionButton 
                                    key={item}
                                    title={item} 
                                    onClick={() => setActiveKnowledgeTab(item)}
                                    className="w-full !justify-between !rounded-2xl !px-6 !py-4 font-bold shadow-sm"
                                />
                            ) : (
                                <button
                                    key={item}
                                    onClick={() => setActiveKnowledgeTab(item)}
                                    className="w-full text-left px-6 py-4 rounded-2xl transition-all flex items-center justify-between group text-[#475467] hover:bg-[#F9FAFB] hover:text-[#101828]"
                                >
                                    <span>{item}</span>
                                </button>
                            )
                        ))}
                    </aside>

                    {/* Content Detail Area (Scrollable Style) */}
                    <div className="bg-[#F9FAFB] rounded-[32px] p-12 min-h-[500px]">
                        <div className="space-y-12 max-w-[848px]">
                            {activeKnowledgeTab === "Tổng quan Kafi Bond" ? (
                                <>
                                    <div className="space-y-6">
                                        <h3 className="text-[24px] font-bold text-[#101828]">Kafi Bond là gì?</h3>
                                        <div className="space-y-4">
                                            <p className="text-[18px] text-[#475467] leading-relaxed">
                                                Kafi Bond là nền tảng giao dịch giúp nhà đầu tư dễ dàng mua bán trái phiếu tại Kafi.
                                            </p>
                                            <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#475467] leading-relaxed">
                                                <li>Nền tảng giao dịch thông qua cơ chế đặt lệnh và khớp lệnh trên Sở giao dịch CK Hà Nội (HNX)</li>
                                                <li>KH sẽ luôn nhận đúng số tiền đã cam kết mà không cần theo dõi lịch trả Coupon.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gray-200" />

                                    <div className="space-y-6">
                                        <h3 className="text-[24px] font-bold text-[#101828]">Loại trái phiếu áp dụng</h3>
                                        <p className="text-[18px] text-[#475467] leading-relaxed">
                                            Danh mục trái phiếu được Kafi lựa chọn từ các TCPH uy tín trên thị trường Việt Nam trên HNX.
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-gray-200" />

                                    <div className="space-y-6">
                                        <h3 className="text-[24px] font-bold text-[#101828]">Điều kiện tham gia</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-[18px] text-[#475467] leading-relaxed">
                                            <li>Có tài khoản GD Chứng khoán tại Kafi, và</li>
                                            <li>Hoàn tất xác minh danh tính (eKYC), và</li>
                                            <li>Xác nhận T&C tham gia Kafi Bond</li>
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-6">
                                    <h3 className="text-[24px] font-bold text-[#101828]">{activeKnowledgeTab}</h3>
                                    <p className="text-[18px] text-[#475467] leading-relaxed">
                                        Thông tin chi tiết về nội dung này đang được cập nhật để cung cấp cái nhìn chính xác nhất cho nhà đầu tư.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <SupportingInfo />
        </div>
    );
};

export default SustainableAccumulation;
