import { CheckCircle, Award, Sparkles, Home, PhoneCall, Phone } from "lucide-react";
import { useState } from "react";

interface ResultViewProps {
  candidate: any;
  onBackToHome: () => void;
}

export default function ResultView({ candidate, onBackToHome }: ResultViewProps) {
  const [showTeacherModal, setShowTeacherModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-850 dark:text-slate-100 flex flex-col items-center justify-center p-6 transition-colors duration-200 select-none">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6">
        
        <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/45 animate-bounce">
          <CheckCircle size={48} />
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-55/10 text-emerald-600 dark:bg-emerald-950/25 dark:text-emerald-400">
            <Sparkles size={11} />
            Đã nộp bài thành công
          </span>
          <h1 className="text-3xl font-black text-[#002147] dark:text-white uppercase tracking-tight">
            Thank you for completing the test.
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Hệ thống đã nhận đầy đủ các câu trả lời, ghi âm phần thi nói và tự động đồng bộ kết quả của thí sinh <span className="font-bold text-indigo-600 dark:text-indigo-400">{candidate.fullName}</span>.
          </p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs space-y-2 text-left">
          <div className="flex justify-between">
            <span className="font-semibold text-slate-450 uppercase">Thí sinh:</span>
            <span className="font-bold text-slate-800 dark:text-slate-100">{candidate.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-450 uppercase">Số điện thoại:</span>
            <span className="font-bold text-slate-800 dark:text-slate-100">{candidate.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-450 uppercase">Giờ nộp bài:</span>
            <span className="font-mono text-slate-800 dark:text-slate-100 font-semibold">
              {candidate.submittedAt ? new Date(candidate.submittedAt).toLocaleString("vi-VN") : "Bây giờ"}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Giáo viên sẽ liên hệ trực tiếp với bạn qua số điện thoại đăng ký sau khi quá trình chấm điểm trực tiếp kết thúc. Chúc bạn một ngày tốt lành!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <button
            onClick={onBackToHome}
            id="back-to-home-btn"
            className="py-3 bg-[#002147] hover:bg-indigo-900 text-white font-bold text-xs tracking-wider rounded-xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Home size={14} />
            QUAY LẠI TRANG CHỦ
          </button>

          <button
            onClick={() => setShowTeacherModal(true)}
            id="contact-teacher-footer-btn"
            className="py-3 border border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60 font-bold text-xs tracking-wider rounded-xl transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <PhoneCall size={14} />
            LIÊN HỆ GIÁO VIÊN
          </button>
        </div>
      </div>

      {/* Teacher Contact Modal dialog */}
      {showTeacherModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
            onClick={() => setShowTeacherModal(false)}
          />
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 w-full max-w-sm space-y-4 animate-slide-in">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Phone size={18} className="text-indigo-600" />
              Thông tin liên hệ Giáo viên
            </h3>
            <p className="text-xs text-slate-500">
              Vui lòng gọi trực tiếp cho giáo viên quản lý phòng thi nếu bạn gặp trục trặc kỹ thuật hoặc sự cố đăng ký.
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center border border-slate-150 dark:border-slate-700">
              <p className="text-xs font-bold text-slate-450 uppercase tracking-wider">SỐ ĐIỆN THOẠI GIÁO VIÊN</p>
              <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono mt-1">0912 345 678</p>
            </div>
            <button
              onClick={() => setShowTeacherModal(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer"
            >
              ĐÓNG CỬA SỔ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
