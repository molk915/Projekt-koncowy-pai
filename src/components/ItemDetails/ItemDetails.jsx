import React from "react";
import PropTypes from "prop-types";
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

ItemDetails.propTypes = {
  itemData: PropTypes.shape({
    sellPriceMax: PropTypes.number,
    sellPriceMin: PropTypes.number,
    buyPriceMax: PropTypes.number,
    buyPriceMin: PropTypes.number,
  }).isRequired,
};

export default ItemDetails;
