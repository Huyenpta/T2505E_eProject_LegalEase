import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchLawyerPage from "./pages/SearchLawyerPage"; // Trang kết quả tìm kiếm
import LoginPage from "./pages/Login"; // 👈 IMPORT TRANG LOGIN
import RegisterPage from "./pages/Register"; // 👈 IMPORT TRANG REGISTER

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewPages from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<HomePage />} />

          {/* Trang Đăng nhập */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Trang Đăng ký */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Trang kết quả tìm kiếm */}
          <Route path="/search" element={<SearchLawyerPage />} />
          
          {/* Trang Tin tức */}
          <Route path="/news" element={<NewPages />} />
          
          {/* Trang Chi tiết Tin tức */}
          <Route path="/news/:id" element={<NewsDetail />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;