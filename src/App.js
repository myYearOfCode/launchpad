import React, { Component } from 'react';
import './App.css';
import data from './data';
import LanguageMenu from './components/LanguageMenu';

// TODO:
/*
keep track of questions to prevent duplicates from showing up.
*/
// code below converted array data to json data.
// let myObject = {}
// for (let language in data) {
//   myObject[language] = {}
//   console.log(language)
//   data[language].forEach((question, index) => {
//     console.log(`************ ${question} **************`)
//     myObject[language][index] = {'question' : question.split("~")[0], 'answer' : question.split("~")[1]}
//   })
// }
// // console.dir(myObject)
// console.log(JSON.stringify(myObject))

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numCards: 0,
      language: 'ruby'
    }
  }

  showAnswer = () => {
    document.getElementById('answer').classList.add('visible')
    document.getElementById('answer').classList.remove('hidden')
  }

  hideAnswer = () => {
    document.getElementById('answer').classList.add('hidden')
    document.getElementById('answer').classList.remove('visible')
  }

  getNewQuestion = (language) => {
    this.questionString = language[Math.floor(Math.random() * language.length)]
    this.setState({
      currentQuestion: this.questionString.split("~")[0],
      currentAnswer: this.questionString.split("~")[1],
      currentQuestionString: this.questionString
    })
    this.updateCounters();
  }

  updateCounters = () => {
   let counter = JSON.parse(window.localStorage.getItem('total_count'));
   window.localStorage.setItem('total_count', JSON.stringify(counter + 1));
   let session_counter = JSON.parse(window.localStorage.getItem('session_counter'));
   window.localStorage.setItem('session_counter', JSON.stringify(session_counter + 1));
  }

  componentWillMount = () => {
    //reset session_counter
    window.localStorage.setItem('session_counter', JSON.stringify(0));
    // let language = data.[language] // eventually have a picker
    this.getNewQuestion(data[this.state.language]) // for first run only
    document.addEventListener ("keydown",  (zEvent) => {
      // console.log(zEvent.keyCode)
      if (zEvent.metaKey  &&  zEvent.keyCode === 13) {
        this.hideAnswer()
        setTimeout(this.getNewQuestion(data[this.state.language]),100)
        this.setState({ numCards: this.state.numCards + 1})
      }
      if (zEvent.metaKey  &&  zEvent.keyCode === 191) {
        // questionCounter += 1;
        setTimeout(this.showAnswer, 100)
      }
      // console.log(this.state)
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <LanguageMenu /> */}
            <div id="outerContainer">
              <div id="instructions" className="secondary_text">
                <div id = "language">
                  <h1>
                    {this.state.language}
                  </h1>
                </div>
                '⌘ /'	to show answer, '⌘ enter'	to advance to next card
              </div>
              <div id="qaWrapper">
                <div id="question" className="distributeEvenly">
                {this.state.currentQuestion}
                </div>
                <form className="distributeEvenly">
                  <textarea rows="10" cols="50">
                  </textarea>
                </form>
                <div id="answer" className="hidden distributeEvenly">
                  {this.state.currentAnswer}
                </div>
              </div>
              <div id="stats" className="secondary_text">
                {this.state.numCards} cards
              </div>
            </div>

        </header>
      </div>
    );
  }
}

export default App;
