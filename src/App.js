import React, { Component } from 'react';
import './App.css';
import data from './data';

class App extends Component {
  render() {
    let thisLanguage = data.javascript
    // console.log(thisLanguage)
    let thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
    let [thisQuestion, thisAnswer] =  thisQuestionString.split(":")
    console.log(thisQuestion)
    console.log(thisAnswer)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {thisQuestion}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
