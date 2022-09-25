import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://course-api.com/react-store-products"
      );
      const data = await response.json();
      setMenuItems(data);
      setCategories(data);
    };
    fetchData();
  }, []);

  const filterCategory = (categoryItem) => {
    if (categoryItem === "all") {
      setMenuItems(menuItems);
      return;
    }
    const newItems = categories.filter((c) => c.category === categoryItem);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
