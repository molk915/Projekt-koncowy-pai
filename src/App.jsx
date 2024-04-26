import React, { useState } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm/ItemForm";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import ItemImage from "./components/ItemImage/ItemImage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [itemData, setItemData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const getItems = async (itemname, tier, enchants, quality, location) => {
    const apiUrl = `http://localhost:5000/${itemname}/${tier}/${enchants}/${quality}/${location}`;
    try {
      const response = await axios.get(apiUrl);
      if (response.data && response.data.length > 0) {
        const itemInfo =
          response.data[0].length > 0 ? response.data[0][0] : null;
        if (itemInfo) {
          setItemData({
            sellPriceMax: itemInfo.sell_price_max,
            sellPriceMin: itemInfo.sell_price_min,
            buyPriceMax: itemInfo.buy_price_max,
            buyPriceMin: itemInfo.buy_price_min,
          });
        }
        if (response.data[1]) {
          setImageUrl(response.data[1]);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <ItemForm onSubmit={getItems} />
      <ItemDetails itemData={itemData} />
      <ItemImage imageUrl={imageUrl} />
    </div>
  );
}

export default App;
