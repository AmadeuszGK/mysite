import React from "react";

const NotFoundPage = () => (
  <div style={{ height: 100 + "vh" }} className="error-site">
    <div className="canvas-container">
      <canvas id="stars" width="300" />
      <div className="canvas-text">
        <h1>BŁĄD 404</h1>
        <p>UPSS! WYGLĄDA NA TO, ŻE ZABŁĄDZIŁEŚ</p>
        <a className="link-home" href="https://amadeuszgrzesiak.com">
          POWRÓT NA STRONĘ GŁÓWNĄ
        </a>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
