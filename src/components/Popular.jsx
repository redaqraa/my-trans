import React from "react";

function Popular() {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">Check out our latest and best destinations.</p>
        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src="./assets/images/popular-1.jpg" alt="San miguel, Italy" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="card-subtitle">
                  <a href="#destination">Italy</a>
                </p>
                <h3 className="h3 card-title">
                  <a href="#destination">San miguel</a>
                </h3>
                <p className="card-text">Explore amazing views in Italy.</p>
              </div>
            </div>
          </li>
          {/* Add more destinations here */}
        </ul>
      </div>
    </section>
  );
}

export default Popular;
