import React from "react";
import "./ItemDetails.css";
import { useLanguage } from "../LanguageContext";
import translations from "../Translations";

function ItemDetails({ itemData }) {
  if (!itemData) return null;

  const { language } = useLanguage();

  return (
    <div className="ItemDetails">
      <h2>{translations[language].itemDetails}</h2>
      <p>{translations[language].maxSellPrice}: {itemData.sellPriceMax}</p>
      <p>{translations[language].minSellPrice}: {itemData.sellPriceMin}</p>
      <p>{translations[language].maxBuyPrice}: {itemData.buyPriceMax}</p>
      <p>{translations[language].minBuyPrice}: {itemData.buyPriceMin}</p>
    </div>
  );
}

export default ItemDetails;
