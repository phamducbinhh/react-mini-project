import React from "react";
import CocktaiList from "./CocktaiList";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktaiList />
    </main>
  );
};

export default Home;
