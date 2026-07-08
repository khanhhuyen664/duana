import { CheckCircle, Award, Sparkles, Home, PhoneCall, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { Language, translations } from "../locales";

interface ResultViewProps {
  candidate: any;
  onBackToHome: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function ResultView({ candidate, onBackToHome, lang, onLanguageChange }: ResultViewProps) {
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-850 dark:text-slate-100 flex flex-col items-center justify-center p-6 transition-colors duration-200 select-none">
      
      {/* Dynamic Language Toggle on Result Page */}
      <div className="absolute top-4 right-4 flex items-center gap-1 border border-slate-200 dark:border-slate-800 rounded-xl p-0.5 bg-white/50 dark:bg-slate-900/50">
        <button
          onClick={() => onLanguageChange("vi")}
          className={`px-2 py-1 text-[10px] font-bold rounded-lg transition-all ${
            lang === "vi"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          VI
        </button>
        <button
          onClick={() => onLanguageChange("en")}
          className={`px-2 py-1 text-[10px] font-bold rounded-lg transition-all ${
            lang === "en"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          EN
        </button>
      </div>

      <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-6 animate-scale-up">
        
        <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/45 animate-bounce">
          <CheckCircle size={48} />
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-55/10 text-emerald-600 dark:bg-emerald-950/25 dark:text-emerald-400">
            <Sparkles size={11} />
            {lang === "vi" ? "Đã nộp bài thành công" : "Submitted Successfully"}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#002147] dark:text-white uppercase tracking-tight">
            {lang === "vi" ? "CẢM ƠN BẠN ĐÃ HOÀN THÀNH BÀI THI!" : "Thank you for completing the test."}
          </h1>
          <p className="text-sm text-slate-505 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
            {lang === "vi" 
              ? `Hệ thống đã nhận đầy đủ các câu trả lời, ghi âm phần thi nói và tự động đồng bộ kết quả của thí sinh `
              : `The system has received all answers, voice recordings, and synchronized results for candidate `}
            <span className="font-extrabold text-indigo-600 dark:text-indigo-400">{candidate.fullName}</span>.
          </p>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-2xl text-xs space-y-2 text-left">
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400 uppercase">{lang === "vi" ? "Thí sinh:" : "Candidate:"}</span>
            <span className="font-bold text-slate-850 dark:text-slate-100">{candidate.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400 uppercase">{lang === "vi" ? "Số điện thoại:" : "Phone:"}</span>
            <span className="font-bold text-slate-850 dark:text-slate-100">{candidate.phoneNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-400 uppercase">{lang === "vi" ? "Giờ nộp bài:" : "Submitted at:"}</span>
            <span className="font-mono text-slate-805 dark:text-slate-205 font-semibold">
              {candidate.endTime ? new Date(candidate.endTime).toLocaleString(lang === "vi" ? "vi-VN" : "en-US") : "Now"}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {lang === "vi"
            ? "Giáo viên sẽ liên hệ trực tiếp với bạn qua số điện thoại đăng ký sau khi quá trình chấm điểm trực tiếp kết thúc. Chúc bạn một ngày tốt lành!"
            : "The administrator will contact you directly via your registered phone number after review and grading. Have a wonderful day!"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
          <button
            onClick={onBackToHome}
            id="back-to-home-btn"
            className="py-3 bg-[#002147] hover:bg-indigo-900 text-white font-bold text-xs tracking-wider rounded-xl shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Home size={14} />
            {t.backToHome}
          </button>

          <button
            onClick={() => setShowTeacherModal(true)}
            id="contact-teacher-footer-btn"
            className="py-3 border border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/60 font-bold text-xs tracking-wider rounded-xl transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <PhoneCall size={14} />
            {t.contactTeacherBtn}
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
              {t.contactTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {t.contactDesc}
            </p>
            <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl text-center border border-slate-150 dark:border-slate-800">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t.teacherUnit}</p>
              <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono mt-1">0912 345 678</p>
            </div>
            <button
              onClick={() => setShowTeacherModal(false)}
              className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer"
            >
              {t.closeWindow}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
