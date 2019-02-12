import React, { Component } from 'react';
import './App.css';
import data from './data';

class App extends Component {
  render() {
    let thisLanguage = data.javascript
    let thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
    let [thisQuestion, thisAnswer] = thisQuestionString.split(":")
    console.log(thisQuestion)
    console.log(thisAnswer)
    let questionCounter = 0;
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
          thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
          [thisQuestion, thisAnswer] = thisQuestionString.split(":")
        }
      }
    } );
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <div id="question">
              {thisQuestion}
            </div>
            <div id="answer" className="hidden">
              {thisAnswer}
            </div>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
