import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [activeTopic, setActiveTopic] = useState('account');

  const topics = [
    { id: 'account', label: 'Tài khoản' },
    { id: 'stocks', label: 'Cổ Phiếu' },
    { id: 'bonds', label: 'Trái Phiếu' },
    { id: 'derivatives', label: 'Phái Sinh' },
    { id: 'covered-warrants', label: 'Chứng quyền' },
    { id: 'trading-support', label: 'Giao dịch ký quỹ' },
    { id: 'money-transfer', label: 'Giao dịch tiền' },
    { id: 'fees', label: 'Biểu phí' },
    { id: 'account-management', label: 'Quản Lý Tài Khoản' },
  ];

  const faqs = [
    { question: 'Làm sao mở tài khoản?', answer: 'Mở tài khoản tại KAFI rất đơn giản. Bạn chỉ cần truy cập nền tảng giao dịch, điền thông tin cá nhân và xác minh danh tính. Quá trình này thường hoàn tất trong vài phút.' },
    { question: 'Ai có thể mở tài khoản tại Kafi?', answer: 'Tổ chức, Khách hàng cá nhân trong nước đủ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự theo quy định của pháp luật Việt Nam.' },
    { question: 'Mất bao lâu để mở một tài khoản giao dịch thực?', answer: 'Thông thường chỉ mất vài phút sau khi hoàn tất xác thực thông tin.' },
    { question: 'Tôi có thể mở nhiều tài khoản không?', answer: 'Mỗi khách hàng chỉ được mở một tài khoản chứng khoán tại KAFI.' },
    { question: 'Mở tài khoản tại Kafi có mất phí không?', answer: 'Việc mở tài khoản tại Kafi hiện không thu phí.' },
  ];

  const popularQuestions = [
    { title: 'Làm thế nào để mở tài khoản chứng khoán online tại KAFI?', isOpen: true },
    { title: 'Làm thế nào để đăng ký dịch vụ giao dịch ký quỹ tại Kafi?', isOpen: false },
    { title: 'Biểu phí giao dịch tại KAFI được áp dụng như thế nào?', isOpen: false },
    { title: 'Cách nạp tiền / rút tiền?', isOpen: false },
    { title: 'Quên mật khẩu / khóa tài khoản?', isOpen: false },
  ];

  return (
    <div className="bg-[#f7f9fc] min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1400px] mx-auto mt-4 px-4 h-[400px]">
          <div className="w-full h-full bg-gradient-to-r from-[#00c694] to-[#07756d] rounded-[48px] overflow-hidden relative flex items-center px-16">
            {/* Background Illustration Placeholder */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <div className="w-[80%] h-[70%] bg-white/20 rounded-[32px] border border-white/30 shadow-2xl flex items-center justify-center text-white/50 italic font-bold text-2xl rotate-2">
                HERO ASSET
              </div>
            </div>

            <div className="relative z-10 w-full max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-5xl font-bold leading-tight mb-8"
              >
                Chúng tôi có thể giúp<br />bạn như thế nào?
              </motion.h1>
              
              {/* Search Box Placeholder */}
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-[32px] flex items-center gap-4 border border-white/20 w-fit">
                 <div className="bg-white text-[#101828] px-10 py-4 rounded-[24px] font-medium cursor-pointer shadow-lg">
                    Tìm kiếm câu hỏi...
                 </div>
                 <div className="bg-[#0ae685] w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                    <div className="w-6 h-6 border-2 border-black rounded-full" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-header Navigation Tabs */}
        <section className="flex justify-center mt-[-30px] relative z-20">
          <div className="bg-white border border-gray-100 p-2 rounded-[40px] shadow-2xl flex items-center gap-1 backdrop-blur-xl">
            {[
              { id: 'faq', label: 'Câu hỏi thường gặp', icon: true },
              { id: 'docs', label: 'Biểu mẫu & Chính sách', icon: false },
              { id: 'contact', label: 'Liên Hệ', icon: false },
            ].map((tab) => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-[32px] cursor-pointer transition-all flex items-center gap-2 ${activeTab === tab.id ? 'bg-[#f7f9fc] text-[#101828] font-bold shadow-sm' : 'text-[#667085] hover:bg-gray-50'}`}
              >
                {tab.icon && <div className="w-5 h-5 bg-[#073038] rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-[#0ae685] rounded-sm rotate-45" /></div>}
                <span className="text-sm">{tab.label}</span>
              </div>
            ))}
            <div className="w-12 h-12 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 rounded-full transition-colors">
               <div className="w-5 h-5 border-2 border-current rounded-full" />
            </div>
          </div>
        </section>

        {/* Popular Questions Section */}
        <section className="max-w-[1400px] mx-auto px-4 py-20 flex gap-8">
          {/* Character Illustration Placeholder */}
          <div className="w-[450px] aspect-[4/5] bg-gradient-to-b from-[#0ae685] to-[#c6ffd9] rounded-[48px] relative overflow-hidden flex flex-col items-center justify-end p-8">
             <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-30" />
             <div className="w-64 h-80 bg-white/40 backdrop-blur-md rounded-full shadow-2xl border border-white/50 mb-4 flex items-center justify-center text-[#073038] font-black text-6xl">
                KAI
             </div>
             <div className="bg-[#101820] text-white p-6 rounded-[24px] shadow-2xl border border-white/10 w-full">
                <p className="text-sm font-medium opacity-70 mb-1">Xin chào tôi là Kai!</p>
                <p className="font-bold">Tôi có thể giúp gì cho bạn?</p>
             </div>
          </div>

          {/* Featured FAQ List */}
          <div className="flex-1 bg-white rounded-[48px] p-12 border border-gray-100 shadow-sm self-center">
             <h2 className="text-4xl font-bold text-[#101828] mb-10">Câu hỏi nổi bật</h2>
             <div className="flex flex-col gap-2">
                {popularQuestions.map((q, i) => (
                  <div key={i} className={`p-6 rounded-[24px] transition-all border ${q.isOpen ? 'bg-[#f7f9fc] border-[#0ae685]/30' : 'bg-transparent border-transparent hover:bg-gray-50'}`}>
                    <div className="flex justify-between items-center cursor-pointer">
                      <h3 className={`text-lg font-semibold ${q.isOpen ? 'text-[#101828]' : 'text-[#344054]'}`}>{q.title}</h3>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${q.isOpen ? 'border-[#0ae685] text-[#0ae685]' : 'border-gray-300 text-gray-400'}`}>
                        {q.isOpen ? '-' : '+'}
                      </div>
                    </div>
                    {q.isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 text-[#667085] leading-relaxed"
                      >
                         <p>Bạn có thể mở tài khoản trực tiếp trên ứng dụng Kafi X hoặc website MyKafi. Chỉ mất 3-5 phút để hoàn tất quy trình eKYC một cách nhanh chóng.</p>
                         <button className="text-[#0ae685] font-bold mt-2 hover:underline">Xem thêm</button>
                      </motion.div>
                    )}
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ by Topic Section */}
        <section className="bg-[#f7f9fc] py-20 px-4">
           <div className="max-w-[1400px] mx-auto">
              <h2 className="text-4xl font-bold text-[#101828] mb-12">Câu hỏi theo chủ đề</h2>
              
              <div className="flex gap-8">
                 {/* Topic Sidebar */}
                 <div className="w-[300px] bg-white rounded-[32px] p-4 shadow-sm h-fit">
                    {topics.map((t) => (
                       <div 
                         key={t.id}
                         onClick={() => setActiveTopic(t.id)}
                         className={`px-6 py-4 rounded-[20px] cursor-pointer transition-all flex justify-between items-center ${activeTopic === t.id ? 'bg-[#00c694] text-white font-bold shadow-lg shadow-[#00c694]/20' : 'text-[#667085] hover:bg-gray-50'}`}
                       >
                          <span>{t.label}</span>
                          {activeTopic === t.id && <div className="w-2 h-2 bg-white rounded-sm rotate-45" />}
                       </div>
                    ))}
                 </div>

                 {/* Questions List */}
                 <div className="flex-1 bg-white rounded-[32px] p-12 shadow-sm">
                    <div className="flex flex-col">
                       {faqs.map((faq, i) => (
                         <div key={i} className="py-8 border-b border-gray-100 last:border-0">
                            <h4 className="text-xl font-bold text-[#101828] mb-4">{i + 1}. {faq.question}</h4>
                            <p className="text-[#667085] leading-relaxed max-w-3xl ml-6">
                               {faq.answer}
                            </p>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact CTA Section */}
        <section className="max-w-[1400px] mx-auto px-4 pb-20">
           <div className="w-full h-[320px] bg-[#073038] rounded-[48px] relative overflow-hidden flex flex-col items-center justify-center text-center p-12">
              <div className="absolute inset-0 bg-[#00c694]/10" />
              {/* Pattern Placeholder */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="relative z-10">
                 <h2 className="text-white text-4xl font-bold mb-4">Không tìm thấy câu trả lời?</h2>
                 <p className="text-white/60 text-lg mb-8 max-w-2xl">Đội hỗ trợ khách hàng của KAFI luôn sẵn sàng trả lời mọi câu hỏi của bạn</p>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-[#101820] text-white px-10 py-5 rounded-[40px] font-bold text-lg shadow-2xl border border-white/10 hover:bg-black transition-colors"
                 >
                    Liên hệ bộ phận hỗ trợ
                 </motion.button>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      {/* Floating Shortcuts Sidebar Placeholder */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 bg-white/20 backdrop-blur-lg p-2 rounded-[24px] border border-white/30 shadow-2xl">
         {[0,1,2,3,4].map(i => (
           <div key={i} className="w-12 h-12 rounded-[16px] bg-white shadow-lg flex items-center justify-center text-[#667085] cursor-pointer hover:bg-[#0ae685] hover:text-[#073038] transition-all">
              <div className="w-5 h-5 bg-current rounded-sm opacity-50" />
           </div>
         ))}
      </div>
    </div>
  );
};

export default SupportPage;
