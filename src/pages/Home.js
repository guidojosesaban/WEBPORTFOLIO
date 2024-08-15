import React from "react";
import "../css/HomePage.css";

function Home() {
  return (
    <div className="HomePage">
      <div className="presentationCard">
        <div className="presentationCardTxtContainer">
          <h1>Full Stack React Developer</h1>
          <p>
            Hi! I’m Guido Saban. A passionate Full Stack React developer
            residing in Buenos Aires, Argentina.
          </p>
          <div className="socialContact">
            <a href="www.google.com" target="_blank" className="socialContact-icon">
              <img src="./linkedin.svg" alt="linkedin"></img>
            </a>
            <a href="www.google.com" target="_blank" className="socialContact-icon">
              <img src="./github.svg" alt="github"></img>
            </a>

            <a href="www.google.com" target="_blank" className="socialContact-contactBtn">
              <p>Contact</p>
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
