import React, { Component } from "react";
import './questions.css';

class QuestionOne extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#3EC6FF" }}>
        <header>
          <img src='./stydylogo.png'/>
          <img src='./icesilogo.png'/>
        </header>
        <h1 style={{ color: "white" }}>Pregunta 1</h1>
        <div className="recuadro-medio" style={{ backgroundColor: "white", width: "300px", margin: "0 auto" }}>
          <h2 style={{ color: "#004A69" }}>Subtítulo</h2>
          <button onClick={() => {
            console.log("Anterior button clicked");
            this.props.goToPreviousQuestion();
            }}>Anterior</button>

          <input type="range" min="1" max="10" />
          <button onClick={() => {
            console.log("Siguiente button clicked");
            this.props.goToNextQuestion();
            }}>Siguiente</button>

          <div>Pregunta 1 de 8</div>

          
        </div>
        <img src="./image1.png" />
      </div>
    );
  }
}

export default QuestionOne;