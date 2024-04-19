import React from "react";

function ItemImage({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt="Item"
      style={{ maxWidth: "200px", maxHeight: "200px" }}
    />
  );
}

export default ItemImage;
