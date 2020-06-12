import React from "react";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const App = () => {
  return (
    <div class="container main">
      <div className="row homi">
        <div className="container-fluid homi">
          <p className="text1">Bienvenido</p>
          <p className="text2">a la</p>
          <p className="text3">Agexda</p>
          <hr />
        </div>
      </div>

      <AwesomeSlider className="carousel">
        <div> <img className="pequena" src={process.env.PUBLIC_URL + "./images/agexda.png"} alt="lutherking" /></div>
        <div> <img className="pequena" src={process.env.PUBLIC_URL + "./images/agexda.png"} alt="lutherking" /></div>
        <div> <img className="pequena" src={process.env.PUBLIC_URL + "./images/agexda.png"} alt="lutherking" /></div>

      </AwesomeSlider>
    </div>
  );
};
export default App;
