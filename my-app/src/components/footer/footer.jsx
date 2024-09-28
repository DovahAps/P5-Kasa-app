import React from 'react';
import '../../sass/layout/footer.scss';
import logo from "../../assets/Desktop-Footer.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt='kasa footer' className='footer-logo'/>
      <p>© 2024 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;