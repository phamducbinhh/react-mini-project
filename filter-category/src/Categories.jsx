import React from "react";

const Categories = ({ categories, filterCategory }) => {
  const newCategory = categories.map((item) => {
    return item.category;
  });
  //filter duplicates array
  const category = newCategory.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
  const newListCategory = ["all", ...category];

  return (
    <div className="btn-container">
      {newListCategory?.map((item, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;