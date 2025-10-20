import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // 👈 ĐỔI BrowserRouter -> HashRouter
import HomePage from "./pages/HomePage";
import SearchLawyerPage from "./pages/SearchLawyerPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NewPages from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchLawyerPage />} />
          <Route path="/news" element={<NewPages />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;