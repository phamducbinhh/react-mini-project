import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import { AuthProvider } from "./Context/UseContext";
import LayoutMain from "./Layout/LayoutMain";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
