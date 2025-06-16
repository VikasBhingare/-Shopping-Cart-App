// import React from 'react'
// import './Footer.css'
// const Footer = () => {
//   return (
//     <div className='footer'>
//       &copy; copyright V-Shop
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { BiLogoShopify } from "react-icons/bi";

import './Footer.css'; // Make sure to create this file

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>V-Shop <BiLogoShopify /></h2>
      <p>Your one-stop shop for everything!</p>
          
          </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@v-shop.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 V-shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
