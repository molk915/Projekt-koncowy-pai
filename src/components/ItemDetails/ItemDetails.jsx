import React from "react";
import "./ItemDetails.css";

function ItemDetails({ itemData }) {
  if (!itemData) return null;

  return (
    <div>
      <p>Max Sell Price: {itemData.sellPriceMax}</p>
      <p>Min Sell Price: {itemData.sellPriceMin}</p>
      <p>Max Buy Price: {itemData.buyPriceMax}</p>
      <p>Min Buy Price: {itemData.buyPriceMin}</p>
    </div>
  );
}

export default ItemDetails;
