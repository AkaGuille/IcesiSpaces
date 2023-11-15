import React, { Component } from "react";

class QuestionFour extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#3EC6FF" }}>
        <header>
          <img src="./logo1.svg" />
          <img src="./logo2.svg" />
        </header>
        <h1 style={{ color: "white" }}>Pregunta 4</h1>
        <div className="recuadro-medio" style={{ backgroundColor: "white", width: "300px", margin: "0 auto" }}>
          <h2 style={{ color: "#004A69" }}>Subtítulo</h2>
          <button onClick={() => {
            console.log("Anterior button clicked");
            console.log("RRRR");
            this.props.goToPreviousQuestion();
            }}>Anterior</button>

          <input type="range" min="1" max="10" />
          <button onClick={() => {
            console.log("Siguiente button clicked");
            this.props.goToNextQuestion();
            }}>Siguiente</button>

          <div>Pregunta 4 de 8</div>

          
        </div>
        <img src="./image1.png" />
      </div>
    );
  }
}

export default QuestionFour;