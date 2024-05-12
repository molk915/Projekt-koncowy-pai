import React, { useState } from "react";
import "./GoldPriceButton.css";
import { useLanguage } from "../LanguageContext";
import translations from "../Translations";

const GoldPriceButton = () => {
  const { language } = useLanguage();

  const [goldPrice, setGoldPrice] = useState(null);

  const fetchGoldPrice = async () => {
    try {
      const response = await fetch("http://localhost:5000/gold");
      const data = await response.json();
      if (data && data.gold_price) {
        setGoldPrice(data.gold_price);
      } else {
        console.error("Invalid gold data received:", data);
      }
    } catch (error) {
      console.error("Error fetching gold price:", error);
    }
  };

  return (
    <div className="GoldPrice">
      <button onClick={fetchGoldPrice}>{translations[language].getGoldPrice}</button>
      {goldPrice && <p>{translations[language].goldPrice}: {goldPrice}</p>}
    </div>
  );
};

export default GoldPriceButton;