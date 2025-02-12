import React from "react";

function Packages() {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packages</p>
        <h2 className="h2 section-title">Checkout Our Packages</h2>
        <p className="section-text">Check out our latest and best offers.</p>
        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <img src="./assets/images/packege-1.jpg" alt="Snowy Holiday" loading="lazy" />
              </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Enjoy a snowy holiday</h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="time"></ion-icon>
                      <p className="text">7D/6N</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="people"></ion-icon>
                      <p className="text">pax: 10</p>
                    </div>
                  </li>
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <ion-icon name="location"></ion-icon>
                      <p className="text">Snowy Mountains</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-price">
                <p className="price">$750 <span>/ per person</span></p>
                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
          {/* Add more packages here */}
        </ul>
      </div>
    </section>
  );
}

export default Packages;
