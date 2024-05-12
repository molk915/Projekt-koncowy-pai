import React, { useState } from "react";
import "./GoldPriceButton.css";

const GoldenPriceButton = () => {
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
    <div>
      <button onClick={fetchGoldPrice}>Get Gold Price</button>
      {goldPrice && <p>Gold Price: {goldPrice}</p>}
    </div>
  );
};

export default GoldenPriceButton;
