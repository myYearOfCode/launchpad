import React, { Component } from 'react';
import './App.css';
import data from './data';


let questionCounter = 0;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numCards: 0
    }
  }
  render() {
    let thisLanguage = data.javascript
    let thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
    let [thisQuestion, thisAnswer] = thisQuestionString.split(":")

    document.addEventListener ("keyup",  (zEvent) => {
      // if (zEvent.metaKey  &&  zEvent.code === ArrowRight) {
      if (zEvent.keyCode === 40) { // I NEED a debounce!
        // "ArrowDown"
        // "ArrowLeft"
        // "ArrowRight"
        // "ArrowUp"
        questionCounter += 1;
        console.log(questionCounter, (questionCounter % 2 !== 0))
        if (questionCounter % 2 !== 0){
          document.getElementById('answer').classList.add('visible')
          document.getElementById('answer').classList.remove('hidden')
          console.log(this.state)
          this.setState({ numCards: this.state.numCards + 1})
        }
        else {
          thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)];
          document.getElementById('question').innerHTML = thisQuestionString.split(":")[0]
          document.getElementById('answer').classList.add('hidden')
          document.getElementById('answer').classList.remove('visible')
          document.getElementById('answer').innerHTML = thisQuestionString.split(":")[1]
        }
      }
    } );
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <div id="outerContainer">
              <div id="instructions" className="secondary_text">
                command-enter to advance
              </div>
              <div id="qaWrapper">
                <div id="question">
                {thisQuestion}
                </div>
                <div id="answer" className="hidden">
                  {thisAnswer}
                </div>
              </div>
              <div id="stats" className="secondary_text">
                {this.state.numCards} cards
              </div>
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
