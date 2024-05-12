import React from 'react';
import Navbar from './components/Navbar/Navbar';
import GoldPriceButton from './components/GoldPriceButton/GoldPriceButton';
import "./GoldPrice.css";

const GoldPrice = () => {
  return (
    <>
    <Navbar/>
      <div className='Gold'>
        <GoldPriceButton/>
      </div>
    </>
  );
}

export default GoldPrice;