import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PowerPlatform from "./pages/PowerPlatform";
import ChessTrack from "./pages/ChessTrack";
import GameCenter from "./pages/GameCenter";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/power-platform" element={<PowerPlatform />} />
        <Route path="/chesstrack" element={<ChessTrack />} />
        <Route path="/gamecenter" element={<GameCenter />} />
      </Routes>
    </BrowserRouter>
  );
}
