import React, { useState } from "react";

function ItemForm({ onSubmit }) {
  const [itemname, setItemName] = useState("Bag");
  const [tier, setTier] = useState("4");
  const [enchants, setEnchants] = useState("0");
  const [location, setLocation] = useState("Bridgewatch");
  const [quality, setQuality] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(itemname, tier, enchants, quality, location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Item Prices</h1>
      <input
        type="text"
        value={itemname}
        onChange={(e) => setItemName(e.target.value)}
        className="input-field"
      />
      <select
        value={tier}
        onChange={(e) => setTier(e.target.value)}
        className="select-box"
      >
        <option value="4">Tier 4</option>
        <option value="5">Tier 5</option>
        <option value="6">Tier 6</option>
        <option value="7">tier 7</option>
        <option value="8">tier 8</option>
      </select>
      <select
        value={enchants}
        onChange={(e) => setEnchants(e.target.value)}
        className="select-box"
      >
        <option value="0">Enchants 0</option>
        <option value="1">Enchants 1</option>
        <option value="2">Enchants 2</option>
        <option value="3">Enchants 3</option>
        <option value="4">Enchants 4</option>
      </select>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="select-box"
      >
        <option value="Caerleon">Caerleon</option>
        <option value="Bridgewatch">Bridgewatch</option>
        <option value="Martlock">Martlock</option>
        <option value="Thetford">Thetford</option>
        <option value="FortSterling">Fort Sterling</option>
        <option value="Lymhurst">Lymhurst</option>
      </select>
      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        className="select-box"
      >
        <option value="0">quality 1</option>
        <option value="1">quality 2</option>
        <option value="2">quality 3</option>
        <option value="3">quality 4</option>
        <option value="4">quality 5</option>
      </select>

      <button type="submit" className="button">
        Get Items
      </button>
    </form>
  );
}

export default ItemForm;
