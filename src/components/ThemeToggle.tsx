import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      id="theme-toggle"
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 transition-all duration-200 cursor-pointer flex items-center justify-center border border-gray-200 dark:border-slate-700 shadow-sm"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Sun size={18} className="text-amber-500 animate-spin-slow" /> : <Moon size={18} className="text-indigo-600" />}
    </button>
  );
}
