import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchLawyerPage from "./pages/SearchLawyerPage"; // 👈 nhớ import trang tìm kiếm
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<HomePage />} />

          {/* Trang kết quả tìm kiếm */}
          <Route path="/search" element={<SearchLawyerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
