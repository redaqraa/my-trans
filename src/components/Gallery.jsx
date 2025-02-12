import React from "react";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photos From Travellers</h2>
        <p className="section-text">Share and publish your exciting adventures.</p>
        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="./assets/images/gallery-1.jpg" alt="Gallery image" />
            </figure>
          </li>
          <li className="gallery-item">
            <figure className="gallery-image">
              <img src="./assets/images/gallery-2.jpg" alt="Gallery image" />
            </figure>
          </li>
          {/* Add more gallery items */}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
