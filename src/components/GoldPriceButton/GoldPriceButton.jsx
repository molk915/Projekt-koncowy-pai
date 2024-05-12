import React, { useState } from "react";
import "./GoldPriceButton.css";

<<<<<<< HEAD
const GoldPriceButton = () => {
=======
const GoldenPriceButton = () => {
>>>>>>> ac7011014d611340f2cebb95b7e14332b9951bf1
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
<<<<<<< HEAD
    <div className="GoldPrice">
=======
    <div>
>>>>>>> ac7011014d611340f2cebb95b7e14332b9951bf1
      <button onClick={fetchGoldPrice}>Get Gold Price</button>
      {goldPrice && <p>Gold Price: {goldPrice}</p>}
    </div>
  );
};

<<<<<<< HEAD
export default GoldPriceButton;
=======
export default GoldenPriceButton;
>>>>>>> ac7011014d611340f2cebb95b7e14332b9951bf1
