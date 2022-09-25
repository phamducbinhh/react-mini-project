import React from "react";
import { useAuth } from "../Context/UseContext";
import Cocktail from "./Cocktail";

const CocktaiList = () => {
  const { cocktails } = useAuth();
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails?.map((item) => {
          return <Cocktail key={item.idDrink} item={item} />;
        })}
      </div>
    </section>
  );
};

export default CocktaiList;
