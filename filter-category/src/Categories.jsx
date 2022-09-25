import React from "react";

const Categories = ({ categories, filterCategories }) => {
  return (
    <div className="btn-container">
      {categories?.map((item, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterCategories(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
