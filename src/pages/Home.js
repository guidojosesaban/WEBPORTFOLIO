import React from "react";
import "../css/HomePage.css";

function Home() {
  return (
    <div className="HomePage">
      <div className="presentationCard">
        <div className="presentationCardTxtContainer">
          <h1>Full stack React Developer</h1>
          <p>
            Hi! I’m Guido Saban. A passionate Full Stack React developer
            residing in Buenos Aires, Argentina.
          </p>
        </div>
        <img className="presentationCard-img" src="./spaceman.jpg" alt="spaceman"></img>
      </div>
    </div>
  );
}

export default Home;
