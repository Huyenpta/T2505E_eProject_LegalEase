import React, { useState, useEffect } from "react";
import categoriesData from "../data/categories.json"; // 👈 import file JSON
import "../App.css";

const HeroSection = () => {
  const [categories, setCategories] = useState([]);

  // Giả lập load từ "API" (ở đây là JSON)
  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <section className="hero-banner">
      <div className="container">
        <h1 className="hero-title">
          Find the Right Lawyer
          <br /> for Your Legal Issue!
        </h1>
        <p className="hero-subtitle">Fast, Free and Confidential</p>

        <form className="hero-form">
          <select>
            <option>Choose a Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <input type="text" placeholder="ZIP Code or Location" />
          <button className="hero-btn">Search for Attorneys →</button>
        </form>

        <p className="hero-footer">
          Can't find a category? <a href="#">Click here</a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
