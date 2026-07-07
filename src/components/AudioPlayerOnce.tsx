import { useState, useRef, useEffect } from "react";
import { Play, Volume2, Lock, AlertCircle } from "lucide-react";

interface AudioPlayerOnceProps {
  src: string;
  id: string; // unique ID to identify the audio track, e.g., 'listening_part1' or 'listening_part2'
  hasBeenPlayed: boolean;
  onStartPlaying: () => void;
  onEnded: () => void;
}

export default function AudioPlayerOnce({
  src,
  id,
  hasBeenPlayed,
  onStartPlaying,
  onEnded,
}: AudioPlayerOnceProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (hasBeenPlayed) return;
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          onStartPlaying();
        })
        .catch((err) => {
          console.error("Audio playback failed:", err);
        });
    }
  };

  useEffect(() => {
    // Sync state if audio ends
    const audio = audioRef.current;
    if (!audio) return;

    const handleAudioEnded = () => {
      setIsPlaying(false);
      setProgress(100);
      onEnded();
    };

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("ended", handleAudioEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [onEnded]);

  return (
    <div
      id={`audio-container-${id}`}
      className="p-5 rounded-xl border border-blue-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
    >
      <audio
        ref={audioRef}
        src={src}
        controlsList="nodownload noplaybackrate"
        className="hidden"
      />

      <div className="flex-1">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-2">
          <Volume2 size={18} className="text-blue-600 dark:text-blue-400" />
          Hệ Thống Âm Thanh Độc Quyền (Play-Once System)
        </h4>
        <p className="text-xs text-blue-700/80 dark:text-blue-300/60 mt-1 max-w-xl">
          Tập tin âm thanh này chỉ được phép nghe <span className="font-bold underline text-red-600 dark:text-red-400">01 LẦN DUY NHẤT</span>. Bạn không thể Tạm dừng, Tua nhanh, Tua lại, Thay đổi tốc độ hoặc Tải về. Xin vui lòng tập trung lắng nghe.
        </p>

        {isPlaying && (
          <div className="mt-3 w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 dark:bg-blue-400 h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center">
        {!hasBeenPlayed ? (
          <button
            onClick={handlePlay}
            id={`play-button-${id}`}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            <Play size={16} fill="white" />
            PHÁT AUDIO
          </button>
        ) : (
          <div
            id={`audio-blocked-${id}`}
            className="flex items-center gap-2 text-gray-500 dark:text-slate-400 font-bold text-sm border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 px-4 py-2.5 rounded-xl cursor-not-allowed select-none"
          >
            <Lock size={15} />
            {isPlaying ? "Đang Phát..." : "Đã Nghe (Khóa)"}
          </div>
        )}
      </div>
    </div>
  );
}
