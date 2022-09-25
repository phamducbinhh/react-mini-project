import React, { useState } from "react";
import Categories from "./Categories";
import item from "./data";
import Menu from "./Menu";

const App = () => {
  //lấy ra tất cả các danh mục categories
  const allCategories = ["all", ...new Set(item.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(item);
  const [categories, setCategories] = useState(allCategories);

  //hàm filter categories
  const filterCategories = (categoryitems) => {
    if (categoryitems === "all") {
      setMenuItems(item);
      return;
    }
    //lọc ra các phần tử trong mảng có cùng categoryitems
    const newItems = item.filter((item) => item.category === categoryitems);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
