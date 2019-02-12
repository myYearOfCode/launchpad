import React, { Component } from 'react';
import './App.css';
import data from './data';

let questionCounter = 0;
class App extends Component {
  render() {
    let thisLanguage = data.javascript
    let thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
    let [thisQuestion, thisAnswer] = thisQuestionString.split(":")

    document.addEventListener ("keydown", function (zEvent) {
      if (zEvent.metaKey  &&  zEvent.code === "Enter") {
        // DO STUFF HERE
        questionCounter += 1;
        console.log(questionCounter, (questionCounter % 2 !== 0))
        if (questionCounter % 2 !== 0){
          document.getElementById('answer').classList.add('visible')
          document.getElementById('answer').classList.remove('hidden')
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
              <div id="stats" className="secondary_text">
                {Math.floor(questionCounter/2.0)} cards
              </div>
              <div id="qaWrapper">
                <div id="question">
                {thisQuestion}
                </div>
                <div id="answer" className="hidden">
                  {thisAnswer}
                </div>
              </div>
              <div id="instructions" className="secondary_text">
                command-enter to advance
              </div>
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
