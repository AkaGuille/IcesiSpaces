import React, { Component } from "react";
import './questions.css';
import studyLogo from './studylogo.png';
import icesiLogo from './icesilogo.png';
import owl from './owl.png';
import axios from 'axios';  // Importa axios



class QuestionEight extends Component {
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

  handleSurveyCompletion = () => {
    const datosEncuesta = {
      'cold_temperature': 9,
      'comfort': 8,
      'crowdedness': 3,
      'electrical_outlets': 10,
      'hot_temperature': 2,
      'lighting': 6,
      'noise': 2,
      'services': 4
    };

    axios.post('http://127.0.0.1:5000/api/recommendations', datosEncuesta)
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        // Aquí puedes manejar la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error('Error al enviar la encuesta:', error);
      });
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
        <h1 style={{ color: "white" }}>Enchufes</h1>
        <div className="recuadro-medio">
        <h3 style={{ color: "#004A69" }}>En una escala del 1 al 10, ¿Qué tan importante es para ti que haya <strong>disponibilidad de enchufes eléctricos</strong> en un espacio de estudio?</h3>
          <div className="slider">
            <button className="pagesButton" onClick={() => {
            console.log("Anterior button clicked");
            this.props.goToPreviousQuestion();
            }} style={{ cursor: "pointer" }}>{'<'}</button>

          <input className="sliderRange" type="range" min="1" max="10" value={sliderValue} onChange={this.handleSliderChange} />

          <button className="pagesButton" onClick={() => {
            console.log("Siguiente button clicked");
            this.props.goToNextQuestion();
            this.handleSurveyCompletion();
            }} style={{ cursor: "pointer" }}>{'>'}</button>
            </div>
          <div className="showSliderValue"><p>{sliderValue}</p></div>
            
          
          <div className="question">Pregunta 8 de 8</div>

          
        </div>
        <div id="lastImage">
          <img id="owlimage" style={{ position: "fixed",  top: "105%", left: "50%", transform: "translate(-50%, -50%)"}} src={owl} alt="Owl" />
        </div>
      </div>
    );
  }
}

export default QuestionEight;