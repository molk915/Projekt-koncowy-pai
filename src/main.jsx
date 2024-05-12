import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import GoldPrice from "./GoldPrice.jsx";
import { LanguageProvider } from "./components/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/GoldPrice" element={<GoldPrice />} />
      </Routes>
    </Router>
  </LanguageProvider>
);