import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.png" alt="TransCO logo" />
            </a>
            <p className="footer-text">Journey to explore the world.</p>
          </div>
          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>
            <p className="contact-text">Feel free to contact and reach us !!</p>
            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+01123456790" className="contact-link">+01 (123) 4567 90</a>
              </li>
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info.transCO.com" className="contact-link">info.TransCO.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="#">TransCO</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
