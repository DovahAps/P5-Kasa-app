import React from 'react';
import '../../sass/layout/header.scss';
import logoKasa from "../../assets/Desktop-Header.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>
      <nav className="nav">
        <a href="/" className="nav-link">Accueil</a>
        <a href="/about" className="nav-link">A Propos</a>
      </nav>
    </header>
  );
};
export default Header;