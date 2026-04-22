
import { ArrowUpRight } from "lucide-react";

/**
 * TradingPlatforms component for the "Nền tảng giao dịch" tab.
 * Implements 3 distinct sections from Figma designs.
 */
const TradingPlatforms = () => {
    return (
        <div className="space-y-24">
            {/* Section 1: Hero / Introduction (Figma Node 274:10818) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Column: Content Card */}
                <div className="bg-white rounded-[48px] p-16 lg:p-24 space-y-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <span className="text-[#101828] font-semibold text-[16px] tracking-wide uppercase">Giới thiệu App Kafi X</span>
                        <h2 className="text-[48px] font-bold text-[#101828] leading-[1.1]">
                            Nền tảng giao dịch <br /> thông minh, toàn diện
                        </h2>
                        <p className="text-[18px] text-[#475467] leading-relaxed max-w-[550px]">
                            Giao diện trực quan, dễ sử dụng, hệ thống thông tin thị trường, thông tin đầu tư... được phân tầng rõ ràng giúp nhà đầu tư nhanh chóng nhận diện những cơ hội tiềm năng và hạn chế những rủi ro đầu tư.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[245px]">
                        <button className="bg-[#101828] text-white h-[56px] px-8 rounded-full flex items-center justify-between hover:bg-black transition-all group">
                            <span>Tải app Kafi X</span>
                            <div className="size-8 rounded-full bg-[#0AE685] flex items-center justify-center">
                                <ArrowUpRight className="size-5 text-[#101828]" strokeWidth={2.5} />
                            </div>
                        </button>
                        <button className="text-[#101828] h-[56px] px-8 rounded-full flex items-center justify-center border border-[#00C694] hover:bg-[#00C694]/5 transition-all">
                            Hướng dẫn trải nghiệm
                        </button>
                    </div>
                </div>

                {/* Right Column: Visual Card - High Fidelity Panel */}
                <div className="relative rounded-[48px] overflow-hidden min-h-[600px] shadow-sm">
                    <img 
                        src="/kafi-web-demo/assets/kafi-mobile.png" 
                        alt="Kafi Mobile App" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Section 2: Web Platform Detail (Figma Node 274:10873) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Left Column: Visual Card - High Fidelity Panel */}
                <div className="order-2 lg:order-1 relative rounded-[48px] overflow-hidden min-h-[600px] shadow-sm">
                    <img 
                        src="/kafi-web-demo/assets/kafi-web.png" 
                        alt="Kafi Web Platform" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Column: Content Card */}
                <div className="order-1 lg:order-2 bg-white rounded-[48px] p-16 lg:p-24 space-y-12 flex flex-col justify-center">
                    <div className="space-y-6">
                        <span className="text-[#101828] font-semibold text-[16px] tracking-wide uppercase">Giới thiệu Web Kafi X</span>
                        <h2 className="text-[48px] font-bold text-[#101828] leading-[1.1]">
                            Nền tảng giao dịch trực tuyến mạnh mẽ, linh hoạt.
                        </h2>
                        <p className="text-[18px] text-[#475467] leading-relaxed max-w-[550px]">
                            Giao diện trực quan, dễ thao tác trên trình duyệt, tích hợp đầy đủ thông tin thị trường, dữ liệu đầu tư và công cụ quản lý danh mục, giúp nhà đầu tư theo dõi, phân tích và giao dịch chủ động mọi lúc.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[256px]">
                        <button className="bg-[#101828] text-white h-[56px] px-8 rounded-full flex items-center justify-between hover:bg-black transition-all group">
                            <span>Truy cập Kafi X Web</span>
                            <div className="size-8 rounded-full bg-[#0AE685] flex items-center justify-center">
                                <ArrowUpRight className="size-5 text-[#101828]" strokeWidth={2.5} />
                            </div>
                        </button>
                        <button className="text-[#101828] h-[56px] px-8 rounded-full flex items-center justify-center border border-[#00C694] hover:bg-[#00C694]/5 transition-all">
                            Hướng dẫn trải nghiệm
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative w-full overflow-hidden rounded-[48px] min-h-[560px] flex flex-col justify-center p-12 lg:p-24 shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/kafi-web-demo/assets/invest-now.png" 
                        alt="Invest Now Background" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Area */}
                <div className="relative z-20 w-full max-w-[800px] space-y-10">
                    <h2 className="text-white text-[48px] font-bold leading-[1.1]">
                        Đầu tư chủ động mọi lúc, mọi <br /> nơi với Kafi X
                    </h2>
                    <p className="text-white/90 text-[20px] leading-relaxed max-w-[600px]">
                        Ứng dụng và website Kafi X được thiết kế dành cho các nhà giao dịch coi trọng tốc độ, độ tin cậy và khả năng kiểm soát.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-[#00C694] text-[#101828] h-[56px] px-8 rounded-full flex items-center justify-between gap-4 hover:bg-[#08B084] transition-all group min-w-[240px]">
                            <span>Truy cập Web Kafi X</span>
                            <div className="size-6 rounded-full bg-[#101828] flex items-center justify-center">
                                <ArrowUpRight className="size-3 text-[#00C694]" strokeWidth={4} />
                            </div>
                        </button>
                        <button className="bg-[#00C694] text-[#101828] h-[56px] px-8 rounded-full flex items-center justify-between gap-4 hover:bg-[#08B084] transition-all group min-w-[220px]">
                            <span>Tải app Kafi X</span>
                            <div className="size-6 rounded-full bg-[#101828] flex items-center justify-center">
                                <ArrowUpRight className="size-3 text-[#00C694]" strokeWidth={4} />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TradingPlatforms;
