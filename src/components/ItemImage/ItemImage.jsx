import React from "react";
import "./ItemImage.css";

function ItemImage({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt="Item"
    />
  );
}

export default ItemImage;
