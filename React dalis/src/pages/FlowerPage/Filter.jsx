import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Filter = ({ onCategoryChange, onPriceChange }) => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    // Patikriname, ar yra išsaugoti filtrai local storage
    const storedCategoryFilter = localStorage.getItem("categoryFilter");
    const storedPriceFilter = localStorage.getItem("priceFilter");

    if (storedCategoryFilter) {
      setCategoryFilter(storedCategoryFilter);
      onCategoryChange(storedCategoryFilter);
    }

    if (storedPriceFilter) {
      setPriceFilter(storedPriceFilter);
      onPriceChange(storedPriceFilter);
    }
  }, []); 

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
    onCategoryChange(value);

    // Išsaugome pasirinkimą local storage
    localStorage.setItem("categoryFilter", value);
  };

  const handlePriceChange = (value) => {
    setPriceFilter(value);
    onPriceChange(value);

    // Išsaugome pasirinkimą local storage
    localStorage.setItem("priceFilter", value);
  };

  return (
    <div className="filter-options">
      <label>
        Filter by color: 
        <select value={categoryFilter} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">all</option>
            <option value="mix">🌈Mix</option>
            <option value="white">⚪White</option>
            <option value="yellow">🟡Yellow</option>
            <option value="red">🔴Red</option>
            <option value="pink">🌸Pink</option>
        </select>
      </label>
      <label>
        Sort by price: 
        <select value={priceFilter} onChange={(e) => handlePriceChange(e.target.value)}>
          <option value="all">None</option>
          <option value="lowest"> ↓ Low - High </option>
          <option value="highest"> ↑ High - Low</option>
        </select>
      </label>
      <Link to="/Flowers/addflower">+ Create New</Link>
    </div>
  );
};

export default Filter;
