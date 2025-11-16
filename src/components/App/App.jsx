import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import DetailPage from "./DetailPage.jsx";

export default function App() {
  return (
    <div className="mainContainer">
      <div className="mainDisplay">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
