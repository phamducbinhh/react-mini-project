import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (response && response.data.drinks) {
        const drinks = response.data.drinks;
        setCocktails(drinks);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const values = { cocktails, setSearchTerm, searchTerm };
  return (
    <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};
export { AuthProvider, useAuth };
