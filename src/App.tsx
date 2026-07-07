import { useState, useEffect } from "react";
import HomeView from "./components/HomeView";
import PlacementTest from "./components/PlacementTest";
import ResultView from "./components/ResultView";
import AdminPanel from "./components/AdminPanel";

enum ViewState {
  HOME = "home",
  TEST = "test",
  RESULT = "result",
  ADMIN = "admin"
}

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [candidate, setCandidate] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Read initial preference
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  // Keep HTML class in sync for Tailwind's "dark" selector
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Handle registration response from HomeView
  const handleRegistered = (candidateData: any) => {
    setCandidate(candidateData);
    // Clear admin session to enforce password re-entry if admin logs back in
    localStorage.removeItem("adminToken");
    if (candidateData.submitted || candidateData.status === "COMPLETED") {
      setView(ViewState.RESULT);
    } else {
      setView(ViewState.TEST);
    }
  };

  // Handle submission from PlacementTest
  const handleFinished = (finalCandidate: any) => {
    setCandidate(finalCandidate);
    setView(ViewState.RESULT);
  };

  return (
    <div className="font-sans antialiased min-h-screen">
      {view === ViewState.HOME && (
        <HomeView
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          onRegistered={handleRegistered}
          onAdminOpen={() => setView(ViewState.ADMIN)}
        />
      )}

      {view === ViewState.TEST && candidate && (
        <PlacementTest
          candidate={candidate}
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          onFinished={handleFinished}
        />
      )}

      {view === ViewState.RESULT && candidate && (
        <ResultView
          candidate={candidate}
          onBackToHome={() => {
            setCandidate(null);
            setView(ViewState.HOME);
          }}
        />
      )}

      {view === ViewState.ADMIN && (
        <AdminPanel
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          onClose={() => setView(ViewState.HOME)}
          onLoginAsStudent={(studentCandidate) => {
            setCandidate(studentCandidate);
            // Clear admin session so they must enter the password to log back in
            localStorage.removeItem("adminToken");
            if (studentCandidate.status === "COMPLETED") {
              setView(ViewState.RESULT);
            } else {
              setView(ViewState.TEST);
            }
          }}
        />
      )}
    </div>
  );
}
