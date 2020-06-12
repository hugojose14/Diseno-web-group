import React from "react";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const App = () => {
  return (
    <div className="container mainp">
      <div className="container main">
        <div className="row homi">
          <div className="container-fluid homi">
            <img className="edit" src={process.env.PUBLIC_URL + "/images/agexda1.png"} alt="lutherking2" />
          </div>
        </div>

        <AwesomeSlider organicArrows={false} buttons={true} className="carousel">
          <div className="pequena"> <img className="pequena" src={process.env.PUBLIC_URL + "/images/agexda.png"} alt="lutherking" /></div>
          <div className="pequena"> <img className="pequena" src={process.env.PUBLIC_URL + "/images/agexda.png"} alt="lutherking" /></div>
          <div className="pequena"> <img className="pequena" src={process.env.PUBLIC_URL + "/images/agexda.png"} alt="lutherking" /></div>

        </AwesomeSlider>
      </div>

    </div>
  );
};
export default App;
