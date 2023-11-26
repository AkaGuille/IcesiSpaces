import React, { Component } from "react";
import './questions.css';
import studyLogo from './studylogo.png';
import icesiLogo from './icesilogo.png';
import owl from './owl.png';

class QuestionSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 1,
    };
  }

  handleSliderChange = (event) => {
    const sliderValue = event.target.value;
    this.setState({ sliderValue });
  };
  render() {
    const { goToNextQuestion, goToPreviousQuestion } = this.props;
    const { sliderValue } = this.state;
    return (
      <div style={{ backgroundColor: "#3EC6FF" }}>
        <header>
          <img id="studylogo" src={studyLogo} alt="Study Logo" />
          <img src={icesiLogo} alt="Ice Logo" />
        </header>
        <h1 style={{ color: "white" }}>Servicios</h1>
        <div className="recuadro-medio">
        <h3 style={{ color: "#004A69" }}>En una escala del 1 al 10, ¿Qué tan importante es para ti que haya <strong>servicios</strong> como baños o cafeterías cerca del espacio de estudio?</h3>
          <div className="slider">
            <button className="pagesButton" onClick={() => {
            console.log("Anterior button clicked");
            this.props.goToPreviousQuestion();
            }} style={{ cursor: "pointer" }}>{'<'}</button>

          <input className="sliderRange" type="range" min="1" max="10" value={sliderValue} onChange={this.handleSliderChange} />

          <button className="pagesButton" onClick={() => {
            console.log("Siguiente button clicked");
            this.props.goToNextQuestion();
            }} style={{ cursor: "pointer" }}>{'>'}</button>
            </div>
          <div className="showSliderValue"><p>{sliderValue}</p></div>
            
          

          <div className="question">Pregunta 7 de 8</div>

          
        </div>
        <div id="lastImage">
          <img id="owlimage" style={{ position: "fixed",  top: "105%", left: "50%", transform: "translate(-50%, -50%)"}} src={owl} alt="Owl" />
        </div>
      </div>
    );
  }
}

export default QuestionSeven;