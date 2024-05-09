import React from "react";
import PropTypes from "prop-types";
import "./ItemImage.css";

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

ItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ItemImage;
