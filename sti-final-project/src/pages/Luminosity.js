import React, { Component } from "react";

import Slider from "./Slider";

class Luminosity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  render() {
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          background: "#3EC6FF",
        }}
      >
        <header>
          <div style={{ display: "flex" }}>
            <img src="logo1.png" alt="Logo 1" />
            <img src="logo2.png" alt="Logo 2" />
          </div>
        </header>
        <main>
          <h2>¿Qué tan iluminado te gusta trabajar?</h2>
          <div style={{ backgroundColor: "#ffffff", textAlign: "center" }}>
            <p>¿Te gusta trabajar en un ambiente iluminado o con poca luz?</p>
            <Slider />
          </div>
        </main>
        <footer>
          <img src="imagen.png" alt="Imagen" />
        </footer>
      </div>
    );
  }
}

export default Luminosity;