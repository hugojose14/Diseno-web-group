import React from "react";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const App = () => {
  return (
    <div class="container">
      <h3>
        Bienvenido a la <span>Agexda</span>
      </h3>
      <hr />

      <AwesomeSlider class="carousel">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </AwesomeSlider>
    </div>
  );
};
export default App;
