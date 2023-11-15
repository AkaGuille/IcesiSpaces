import React, { Component } from "react";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import QuestionSix from "./QuestionSix";
import QuestionSeven from "./QuestionSeven";
import QuestionEight from "./QuestionEight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: "QuestionOne",
      currentQuestion: 0,
    };
  }

  goToNextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  goToPreviousQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
    });
  };

  render() {
    const screens = [
      <QuestionOne goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionTwo goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionThree goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionFour goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionFive goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionSix goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionSeven goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
      <QuestionEight goToNextQuestion={this.goToNextQuestion} goToPreviousQuestion={this.goToPreviousQuestion}/>,
    ];

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {screens[this.state.currentQuestion]}
      </div>
    );
  }
}

export default App;