import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PowerPlatform from "./pages/PowerPlatform";
import ChessTrack from "./pages/ChessTrack";
import GameCenter from "./pages/GameCenter";
import BudgetPlanner from "./pages/BudgetPlanner";
import CineVibe from "./pages/CineVibe";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/power-platform" element={<PowerPlatform />} />
        <Route path="/chesstrack" element={<ChessTrack />} />
        <Route path="/gamecenter" element={<GameCenter />} />
        <Route path="/budget-planner" element={<BudgetPlanner />} />
        <Route path="/cinevibe" element={<CineVibe />} />
      </Routes>
    </BrowserRouter>
  );
}
