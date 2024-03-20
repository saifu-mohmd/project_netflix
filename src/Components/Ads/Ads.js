import React from "react";
import "../Ads/Ads.css";

function Ads() {
  return (
    <section className="ad-container">
      <div className="ad-section">
        <div className="ad-left-section">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/netflix-app-icon.png"
            alt="Netflix Small Logo"
            className="netflix-ads-logo"
          />
        </div>
        <div className="ad-right-section">
          <h2>
            Plans Starting At
            <br />
            6.99$/month
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quia
            maiores similique esse aliquam delectus sint? Neque modi repellendus
            doloribus similique nobis, sapiente accusantium praesentium
            perspiciatis voluptate quam eveniet reprehenderit.
          </p>
          <button className="button">Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default Ads;
