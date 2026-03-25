import React from 'react';
import LogoBlack from '../assets/stocks/logo-black.png';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-white text-[#101828] py-16 px-6 lg:px-[120px] font-['Inter',sans-serif] ${className}`}>
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Top Section: Logo & Download */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-[#D0D5DD]/50">
          <div className="space-y-8 max-w-[460px]">
            <img src={LogoBlack} alt="Kafi" className="h-[40px] w-auto" />
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="mt-1 translate-y-[2px]">
                  <img src="/kafi-web-demo/assets/9cab69f98d64e5d5ef3c48bb9bb3e12e5f4117fe.svg" alt="" className="size-4" />
                </div>
                <div>
                  <p className="font-semibold text-base">Trụ sở</p>
                  <p className="text-[#101828] text-base leading-relaxed">
                    Tầng 14, Tòa nhà Sailing Tower, 111A Pasteur,<br />
                    Phường Sài Gòn, TP. Hồ Chí Minh.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="/kafi-web-demo/assets/0b72739864a5ed8d999ce11faeb0e2a6902b1deb.svg" alt="" className="size-4" />
                    <p className="text-base">Email</p>
                  </div>
                  <p className="text-base text-[#101828]">contact@kafi.vn</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="/kafi-web-demo/assets/9f68a6d31f62b970d636dc58467e9a9e08cfd902.svg" alt="" className="size-4" />
                    <p className="text-base">Điện thoại</p>
                  </div>
                  <p className="text-base text-[#101828]">1900.633.322</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Container */}
          <div className="space-y-4 max-w-[460px] w-full lg:w-auto">
            <p className="font-semibold text-base text-[#21272A]">Tải xuống ứng dụng Kafi X</p>
            <div className="flex gap-4 items-start">
              <div className="size-[156px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                <img src="/kafi-web-demo/assets/qr-code.png" alt="QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col gap-3 flex-1 lg:w-[200px]">
                <a href="#" className="flex items-center hover:brightness-95 transition-all group overflow-hidden">
                  <img src="/kafi-web-demo/assets/apple-download.png" alt="Download on the App Store" className="w-full h-full object-contain" />
                </a>
                <a href="#" className="flex items-center hover:brightness-95 transition-all group overflow-hidden">
                  <img src="/kafi-web-demo/assets/google-download.png" alt="GET IT ON Google Play" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-8 pb-12">
          {[
            {
              title: "Về Kafi",
              links: ["Giới thiệu", "Giải thưởng", "Tuyển dụng", "Kafi Partner", "Tin tức & báo chí"]
            },
            {
              title: "Quan hệ cổ đông",
              links: ["Thông tin tài chính", "Báo cáo thường niên", "Quản trị doanh nghiệp", "CBTT Chứng quyền", "Công bố thông tin khác"]
            },
            {
              title: "Sản phẩm",
              links: ["Cổ phiếu", "Phái sinh", "Chứng quyền", "GBI", "Trái phiếu", "Tài trợ giao dịch", "Kafi app / Kafi Web"]
            },
            {
              title: "Thị trường & Khuyến nghị",
              links: ["Khuyến nghị đầu tư", "Báo cáo thị trường", "Báo cáo vĩ mô/ chiến lược", "Doanh nghiệp", "Kafi livestream", "Cộng đồng nhà đầu tư"]
            },
            {
              title: "Học viện Kafi",
              links: ["Cẩm nang đầu tư", "Khoá học chứng khoán", "Lịch sự kiện"]
            },
            {
              title: "Hỗ trợ",
              links: ["Câu hỏi thường gặp", "Biểu mẫu", "Chính sách", "Liên hệ"]
            }
          ].map((col) => (
            <div key={col.title} className="space-y-6">
              <h5 className="font-bold text-lg text-[#101828]">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#344054] hover:text-[#00C694] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D0D5DD]/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-sm text-[#667085]">Copyright © 2026 Kafi Securities. All rights reserved.</p>
              <div className="flex gap-6">
                {["Về Kafi", "Quan hệ cổ đông", "Cơ hội sự nghiệp"].map((link) => (
                  <a key={link} href="#" className="text-sm font-semibold text-[#101828] hover:text-[#00C694] transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {[
                { name: 'Facebook', icon: '/kafi-web-demo/assets/9b3c1cf16b738b5a943a7c8bf9eec6529a6e6b9f.svg' },
                { name: 'Linkedin', icon: '/kafi-web-demo/assets/66e51ab29b74700f50ee25b0a9feab05347414a8.svg' },
                { name: 'Zalo', icon: '/kafi-web-demo/assets/96d2d2928d4d986d99ca2a7d6e29f0ca8aa9bff9.svg' },
                { name: 'Youtube', icon: '/kafi-web-demo/assets/470c3ad78243b1492f9ee9e819a9268ce50614a0.svg' },
                { name: 'TikTok', icon: '/kafi-web-demo/assets/91416ada6a030eb26a1cb6f922ab06cb3bb89ac9.svg' },
                { name: 'Instagram', icon: '/kafi-web-demo/assets/5504080f34435f79a3c49fafd262c71d57fe4e19.svg' }
              ].map((social) => (
                <a key={social.name} href="#" className="size-6 flex items-center justify-center">
                  <img src={social.icon} alt={social.name} className="size-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
