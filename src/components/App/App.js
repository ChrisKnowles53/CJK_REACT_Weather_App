import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import DetailPage from "./DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:dayIndex" element={<DetailPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
