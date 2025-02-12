import React from "react";

function Header() {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <a href="tel:+212612345690" className="helpline-box">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>
              <p className="helpline-number">+212 612 34 56 90</p>
            </div>
          </a>
          <a href="#" className="logo">
            <img src="./assets/images/logo.png" alt="TransCO logo" />
          </a>
          <div className="header-btn-group">
            <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>
              <li>
                <a href="#destination" className="navbar-link" data-nav-link>
                  Destination
                </a>
              </li>
              <li>
                <a href="#package" className="navbar-link" data-nav-link>
                  Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="navbar-link" data-nav-link>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link" data-nav-link>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <a href="index.php">
            <button className="btn btn-primary">Log out</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
