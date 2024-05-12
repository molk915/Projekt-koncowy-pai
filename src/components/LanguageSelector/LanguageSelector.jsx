import React from 'react';
import { useLanguage } from "../LanguageContext";
import "../LanguageSelector/LanguageSelector.css"

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select className='LanguageSelector' value={language} onChange={handleChangeLanguage}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};

export default LanguageSelector;