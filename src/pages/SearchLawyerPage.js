import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 thêm để đọc query string
import Header from "../components/Header";
import Footer from "../components/Footer";
import categoriesData from "../data/categories.json";
import specializationsData from "../data/specializations.json";
import citiesData from "../data/cities.json";
import lawyersData from "../data/lawyers.json";
import lawyerSpecializationsData from "../data/lawyer_specialization.json";
import "../App.css";

const SearchLawyerPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredLawyers, setFilteredLawyers] = useState([]);

  // Lọc specialization theo category
  const filteredSpecializations = specializationsData.filter(
    (s) => s.category === selectedCategory
  );

  const handleSearch = (keyword = "") => {
    let results = lawyersData;

    // 🔍 Lọc theo từ khóa (tên luật sư)
    if (keyword) {
      results = results.filter((lawyer) =>
        lawyer.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    // Lọc theo specialization
    if (selectedSpecialization) {
      const spec = specializationsData.find(
        (s) => s.name === selectedSpecialization
      );

      if (spec) {
        const lawyerIds = lawyerSpecializationsData
          .filter((ls) => ls.specialization_id === spec.specialization_id)
          .map((ls) => ls.lawyer_id);

        results = results.filter((lawyer) =>
          lawyerIds.includes(lawyer.lawyer_id)
        );
      }
    }

    // Lọc theo category
    if (selectedCategory) {
      const specIdsInCategory = specializationsData
        .filter((s) => s.category === selectedCategory)
        .map((s) => s.specialization_id);

      const lawyerIdsInCategory = lawyerSpecializationsData
        .filter((ls) => specIdsInCategory.includes(ls.specialization_id))
        .map((ls) => ls.lawyer_id);

      results = results.filter((lawyer) =>
        lawyerIdsInCategory.includes(lawyer.lawyer_id)
      );
    }

    // Lọc theo city
    if (selectedCity) {
      results = results.filter(
        (lawyer) =>
          lawyer.city?.toLowerCase().trim() ===
          selectedCity.toLowerCase().trim()
      );
    }

    // Gắn specialization_name
    results = results.map((lawyer) => {
      const lawyerSpecIds = lawyerSpecializationsData
        .filter((ls) => ls.lawyer_id === lawyer.lawyer_id)
        .map((ls) => ls.specialization_id);

      const lawyerSpecs = specializationsData
        .filter((s) => lawyerSpecIds.includes(s.specialization_id))
        .map((s) => s.name);

      return {
        ...lawyer,
        specialization_name: lawyerSpecs.join(", "),
      };
    });

    setFilteredLawyers(results);
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSpecialization("");
    setSelectedCity("");
    setSearchKeyword("");
    setFilteredLawyers([]);
  };

  // ✅ Tự động đọc query từ URL khi chuyển từ Header hoặc HeroSection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword") || "";
    const category = params.get("category") || "";
    const city = params.get("city") || "";

    setSearchKeyword(keyword);
    setSelectedCategory(category);
    setSelectedCity(city);

    if (keyword || category || city) {
      handleSearch(keyword);
    }
  }, [location.search]);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Bộ lọc bên trái */}
          <div className="col-md-3 mb-4">
            <div className="p-3 border rounded shadow-sm">
              <h5 className="fw-bold mb-3">🔎 Find a Lawyer</h5>

              {/* Category */}
              <label className="fw-bold">Category</label>
              <select
                className="form-select mb-3"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSpecialization("");
                }}
              >
                <option value="">-- Choose Category --</option>
                {categoriesData.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* Specialization */}
              <label className="fw-bold">Specialization</label>
              <select
                className="form-select mb-3"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                disabled={!selectedCategory}
              >
                <option value="">-- Choose Specialization --</option>
                {filteredSpecializations.map((s) => (
                  <option key={s.specialization_id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>

              {/* City */}
              <label className="fw-bold">City / Province</label>
              <select
                className="form-select mb-4"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">-- Choose City --</option>
                {citiesData.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              {/* Buttons */}
              <div className="d-flex gap-2">
                <button
                  className="btn btn-warning w-50"
                  onClick={() => handleSearch(searchKeyword)}
                >
                  Search
                </button>
                <button
                  className="btn btn-outline-secondary w-50"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Kết quả bên phải */}
          <div className="col-md-9">
            <h3 className="fw-bold mb-4">
              {filteredLawyers.length > 0
                ? "Search Results"
                : "Select filters or search to find lawyers"}
            </h3>

            {filteredLawyers.length > 0 ? (
              <div className="row">
                {filteredLawyers.map((lawyer) => (
                  <div key={lawyer.lawyer_id} className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={lawyer.image || "images/default-avatar.png"}
                        alt={lawyer.name}
                        className="card-img-top"
                        style={{ height: "220px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{lawyer.name}</h5>
                        <p className="text-muted mb-1">
                          {lawyer.specialization_name ||
                            "No specialization listed"}
                        </p>
                        <p className="card-text" style={{ fontSize: "0.9rem" }}>
                          {lawyer.profile_summary}
                        </p>
                      </div>
                      <div className="card-footer bg-white border-0">
                        <p className="mb-2">
                          <strong>City:</strong> {lawyer.city || "N/A"}
                        </p>
                        <button className="btn btn-warning w-100 btn-sm">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">No lawyers found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchLawyerPage;
