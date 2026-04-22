import { Download } from "lucide-react";
import ActionButton from "../ActionButton";


interface InvestmentRecommendationsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const PerformanceCard = ({ title, stocks, icon }: { title: string; stocks: any[]; icon: React.ReactNode }) => (
  <div className="bg-white rounded-[40px] p-10 flex-1 shadow-sm border border-gray-100 flex flex-col">
    <div className="flex flex-col gap-8 mb-10">
      <div className="flex items-start">
        {icon}
      </div>
      <h3 className="text-[36px] font-bold text-[#101828] leading-[1.15] max-w-[400px]">
        {title}
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {stocks.map((stock, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-6 py-6 rounded-[20px] transition-all hover:scale-[1.02] cursor-pointer ${
            stock.type === 'positive' ? 'bg-[#00C694] text-[#101828]' : 
            stock.type === 'warning' ? 'bg-[#FFB800] text-[#101828]' : 
            'bg-[#F25757] text-white'
          }`}
        >
          <span className="font-bold text-[18px]">{stock.code}</span>
          <span className="font-bold text-[18px]">{stock.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const RecommendationTable = () => {
  const tableData = [
    { code: "HPG", rec: "MUA", range: "27.4 – 28.2", target: "32", stop: "26.1", perf: "+4.80%", report: true },
    { code: "MBB", rec: "CHỜ MUA", range: "27 – 28.05", target: "31.5", stop: "26", perf: "+3.32%", report: true },
    { code: "STB", rec: "CHỜ MUA", range: "60.8 – 62.8", target: "71", stop: "57.6", perf: "+7.01%", report: true },
    { code: "SIP", rec: "MUA", range: "57.6 – 60.2", target: "67.5", stop: "55.7", perf: "+2.87%", report: true },
    { code: "POW", rec: "MUA", range: "13.1 – 13.5", target: "15.1", stop: "12.5", perf: "+7.11%", report: false },
    { code: "MWG", rec: "MUA", range: "87.7 – 90.3", target: "100.5", stop: "84.2", perf: "+18.75%", report: true },
    { code: "DGW", rec: "MUA", range: "~48", target: "54.5", stop: "45.4", perf: "+3.57%", report: true },
    { code: "PVS", rec: "MUA", range: "40.6 – 42.9", target: "48", stop: "39.5", perf: "-3.97%", report: true },
    { code: "TCB", rec: "MUA", range: "35 – 36", target: "41", stop: "33.7", perf: "+14.59%", report: true },
    { code: "VCB", rec: "MUA", range: "68 – 70", target: "83", stop: "65.3", perf: "+4.80%", report: true },
  ];

  return (
    <div className="flex gap-8 items-stretch px-16">
      {/* Banner Graphic Section */}
      <div className="w-[410px] shrink-0 bg-white rounded-[40px] flex flex-col items-center justify-start pt-12 relative overflow-hidden shadow-sm border border-gray-100">
        <img 
          src="/kafi-web-demo/assets/recommendations.png" 
          alt="Recommendations Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-[48px] font-bold leading-[1.1] text-[#101828]">
            Danh mục<br />khuyến nghị
          </h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex-1 bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[32px] font-bold text-[#101828]">Hiệu suất danh mục tuần</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-[14px] text-gray-500 font-medium">
                <th className="pb-4 font-semibold">Mã</th>
                <th className="pb-4 font-semibold">Khuyến nghị</th>
                <th className="pb-4 font-semibold">Vùng mua</th>
                <th className="pb-4 font-semibold">Giá mục tiêu</th>
                <th className="pb-4 font-semibold">Giá cắt lỗ</th>
                <th className="pb-4 font-semibold">Hiệu suất</th>
                <th className="pb-4 font-semibold text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {tableData.map((row, i) => (
                <tr key={i} className="text-[14px] hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 font-bold text-[#101828]">{row.code}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-md text-[12px] font-bold ${
                      row.rec === 'MUA' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                      {row.rec}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600 font-medium">{row.range}</td>
                  <td className="py-4 text-gray-600 font-medium">{row.target}</td>
                  <td className="py-4 text-gray-600 font-medium">{row.stop}</td>
                  <td className={`py-4 font-bold ${row.perf.startsWith('+') ? 'text-[#00C694]' : 'text-[#F25757]'}`}>
                    {row.perf}
                  </td>
                  <td className="py-4 text-right">
                    {row.report && (
                      <button className="bg-[#EBEFF5] px-3 py-1.5 rounded-full text-[12px] font-bold text-[#344054] hover:bg-[#106070] hover:text-white transition-all">
                        Bản báo hạch
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const LatestReports = ({ setActiveCategory }: { setActiveCategory: (category: string) => void }) => {
  const reports = [
    {
      id: 1,
      month: "12",
      year: "2025",
      type: "macro",
      category: "Vĩ mô tháng 12/2025",
      title: 'Kinh tế về đích " sát nút" ',
      summary:
        "Nền kinh tế Việt Nam xuất sắc vượt qua mục tiêu tăng trưởng đầu năm của Chính phủ, đạt tăng trưởng quý 4 đạt 8.46% YoY, lũy kế cả năm 2025 đạt 8.02%. ",
      date: "19/12/2025",
    },
    {
      id: 2,
      month: "01",
      year: "2025",
      type: "strategy",
      category: "Báo Cáo Chiến Lược Năm 2026",
      title: "Chiến Mã Tháo Cương",
      summary:
        "Nhìn lại năm 2025, thị trường chứng khoán Việt Nam đã cho thấy một sức bền đáng chú ý của dòng vốn nội, bất chấp những biến động địa chính trị phức tạp và áp lực bán ròng kỷ lục từ khối ngoại.",
      date: "21/01/2025",
    },
    {
      id: 3,
      month: "10",
      year: "2025",
      type: "macro",
      category: "Vĩ mô tháng 10/2025",
      title: "Tỷ giá biến động mạnh, NHNN tiếp tục bán USD kỳ hạn.",
      summary:
        "Thị trường tiền tệ tháng 9 ghi nhận những biến động đáng chú ý khi lãi suất có dấu hiệu tăng lại và tỷ giá dự báo giảm áp lực vào cuối năm, kéo theo các điều chỉnh trên thị trường lãi suất và trái phiếu.",
      date: "21/10/2025",
    },
  ];

  const menuItems = [
    "Báo cáo vĩ mô",
    "Báo cáo phân tích từ Kafi",
    "Báo cáo vĩ mô / chiến lược",
    "Báo cáo ngành - doanh nghiệp",
    "Báo cáo đặc biệt",
    "Danh mục khuyến nghị",
    "Quan điểm Kafi",
  ];

  return (
    <div className="max-w-[1280px] mx-auto mt-8 space-y-2">
      {/* Header (Node 274:13153) */}
      <div className="flex items-center justify-between h-[64px]">
        <h2 className="text-[36px] font-bold text-[#101828] tracking-tight">Báo cáo & nhận định mới nhất</h2>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-[14px] font-bold text-[#344054] hover:bg-gray-50 transition-all shadow-sm">
          <span className="text-[16px] opacity-60">⇅</span>
          <span>Mới nhất</span>
          <span className="text-[10px] opacity-40 ml-1">▼</span>
        </button>
      </div>

      <div className="flex gap-[24px] items-start">
        {/* Left Sidebar Content (Node 274:13157) */}
        <aside className="w-[302px] shrink-0">
          <div className="p-3 bg-white rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const isActive = item === "Báo cáo vĩ mô";
                if (isActive) {
                  return (
                    <ActionButton
                      key={item}
                      title={item}
                      onClick={() => {
                         if ((item as string) === "Báo cáo vĩ mô / chiến lược") setActiveCategory("Báo cáo vĩ mô / chiến lược");
                         else setActiveCategory("Khuyến nghị đầu tư");
                      }}
                      className="w-full !justify-between !px-5 !py-4 !rounded-[16px] !text-[15px] font-bold"
                    />
                  );
                }
                return (
                  <button
                    key={item}
                    onClick={() => {
                       if (item === "Báo cáo vĩ mô / chiến lược") setActiveCategory("Báo cáo vĩ mô / chiến lược");
                       else setActiveCategory("Khuyến nghị đầu tư");
                    }}
                    className="flex items-center justify-between px-5 py-4 rounded-[16px] transition-all text-[15px] group text-gray-500 hover:bg-gray-50 font-medium"
                  >
                    <span className="truncate">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="flex-1">
          <div className="flex flex-col">
            {reports.map((report, i) => (
              <div key={report.id} className={`flex gap-8 items-start py-8 transition-all cursor-pointer group ${i !== reports.length - 1 ? 'border-b border-gray-100' : ''}`}>
                {/* Report Thumbnail (210x210) */}
                <div className={`w-[210px] h-[210px] rounded-[32px] shrink-0 flex flex-col items-center pt-8 text-center relative overflow-hidden ${
                  report.type === 'macro' ? 'bg-[#E7FCFF]' : 'bg-[#E7FCEC]'
                }`}>
                   {/* Stripes Pattern Overlay */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                     backgroundImage: 'repeating-linear-gradient(90deg, #106070, #106070 1px, transparent 1px, transparent 8px)'
                   }} />
                   
                   <div className="relative z-10 space-y-1">
                      <span className="text-[9px] font-bold text-[#106070] tracking-[0.2em] uppercase opacity-70">
                        {report.type === 'macro' ? 'MACRO REPORT' : 'STRATEGY REPORT'}
                      </span>
                      <h4 className="text-[18px] font-black text-[#106070] leading-tight px-4">
                        {report.type === 'macro' ? 'BÁO CÁO VĨ MÔ' : 'BÁO CÁO CHIẾN LƯỢC'}
                      </h4>
                   </div>

                   {/* White Card Section */}
                   <div className="mt-auto mb-6 bg-white rounded-2xl p-4 w-[120px] shadow-sm relative z-10 flex flex-col items-center">
                      {report.type === 'macro' ? (
                        <>
                          <span className="text-[40px] font-black text-[#106070] leading-none">{report.month}</span>
                          <div className="w-8 h-[1px] bg-gray-100 my-2" />
                          <span className="text-[14px] font-bold text-gray-400">{report.year}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[11px] font-bold text-gray-400 block mb-1">NĂM</span>
                          <span className="text-[40px] font-black text-[#106070] leading-none">{report.year}</span>
                        </>
                      )}
                   </div>
                </div>

                <div className="flex-1 space-y-4 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-[#00C694]" />
                    <span className="text-[12px] font-bold text-[#00C694] uppercase tracking-wider">
                      {report.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[28px] font-bold text-[#101828] group-hover:text-[#106070] transition-colors leading-tight">
                      {report.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
                      {report.summary}
                    </p>
                  </div>
                  
                  <p className="text-[14px] text-gray-400 font-bold">{report.date}</p>
                </div>

                <div className="flex gap-3 self-center mr-2">
                  <button className="bg-[#EBEFF5] px-6 py-3 rounded-full text-[14px] font-bold text-[#344054] hover:bg-[#106070] hover:text-white transition-all whitespace-nowrap">
                    Xem online
                  </button>
                  <button className="bg-[#EBEFF5] p-2 rounded-full hover:bg-[#106070] hover:text-white transition-all flex items-center justify-center shrink-0">
                    <Download className="size-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportCTA = () => (
  <div className="w-full h-[440px] relative rounded-[48px] overflow-hidden flex items-center px-16">
    <img 
      src="/kafi-web-demo/assets/more-info.png" 
      alt="Support Background" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    
    <div className="relative z-10 max-w-[700px] space-y-8">
      <div className="space-y-4">
        <h2 className="text-[56px] font-bold leading-tight text-[#101828]">
          Bạn cần thêm thông tin?
        </h2>
        <p className="text-[18px] text-gray-700 leading-relaxed max-w-[500px] font-medium">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với đội ngũ hỗ trợ của Kafi. Chúng tôi luôn sẵn sàng trợ giúp!
        </p>
      </div>

      <ActionButton 
        title="Liên hệ bộ phận hỗ trợ" 
        onClick={() => {}} 
        className="w-fit"
      />
    </div>
  </div>
);

export default function InvestmentRecommendations({
  activeCategory,
  setActiveCategory,
}: InvestmentRecommendationsProps) {
  if (activeCategory !== "Khuyến nghị đầu tư") return null;

  return (
    <div className="space-y-16">
      {/* Section 1: Recommendation Table */}
      <RecommendationTable />

      {/* Section 2: Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-16">
        <PerformanceCard 
          title="Hiệu suất danh mục tuần" 
          stocks={[
            { code: "DGC", value: "+47,6%", type: "positive" },
            { code: "DPG", value: "+11,5%", type: "positive" },
            { code: "TNG", value: "+33,9%", type: "positive" },
            { code: "VIC", value: "+39,4%", type: "positive" },
            { code: "PVS", value: "+48,2%", type: "positive" },
            { code: "VNM", value: "+22,3%", type: "positive" },
            { code: "DCM", value: "+25,9%", type: "positive" },
            { code: "HPG", value: "+48,2%", type: "positive" },
            { code: "PVD", value: "+81,6%", type: "positive" },
            { code: "SBT", value: "+35,1%", type: "positive" },
          ]}
          icon={<img src="/kafi-web-demo/assets/weekly-performance.png" alt="Weekly Performance" className="h-[77px] object-contain" />}
        />
        <PerformanceCard 
          title="Mã được tìm kiếm nhiều nhất" 
          stocks={[
            { code: "VVS", value: "+61,6%", type: "negative" },
            { code: "VUA", value: "+61,6%", type: "positive" },
            { code: "FPT", value: "+61,6%", type: "warning" },
            { code: "VCB", value: "+61,6%", type: "positive" },
            { code: "VNM", value: "+61,6%", type: "positive" },
            { code: "HSB", value: "+61,6%", type: "negative" },
            { code: "HPG", value: "+61,6%", type: "warning" },
            { code: "TCB", value: "+61,6%", type: "positive" },
            { code: "MBB", value: "+61,6%", type: "negative" },
            { code: "VIC", value: "+61,6%", type: "warning" },
          ]}
          icon={<img src="/kafi-web-demo/assets/weekly-code-search.png" alt="Code Search" className="h-[77px] object-contain" />}
        />
      </div>

      {/* Section 3: Latest Reports (with Sidebar) */}
      <LatestReports 
        setActiveCategory={setActiveCategory} 
      />

      {/* Section 4: Support CTA */}
      <SupportCTA />
    </div>
  );
}
