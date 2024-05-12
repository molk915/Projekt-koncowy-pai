import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "../LanguageContext";
import translations from '../Translations';

const Navbar = () => {
  const { language } = useLanguage();

  return (
    <nav className="navbar">
      <Link to="/">{translations[language].home}</Link>
      <Link to="/goldprice">{translations[language].goldPrice}</Link>
      <LanguageSelector />
    </nav>
  );
};

export default Navbar;