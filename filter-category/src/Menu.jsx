import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems?.map((item) => (
        <article className="menu-item" key={item.id}>
          <img src={item.image} alt={item.name} className="photo" />
          <div className="item-info">
            <header>
              <h4>{item.name}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p className="item-text">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
