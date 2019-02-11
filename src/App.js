import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

class App extends Component {
  render() {
    let thisLanguage = data.javascript
    // console.dir(data.javascript)
    // console.log(data[0].javascript)
    // console.log(typeof(data))
    // data.forEach(language => {
      // if (language === 'javascript'){
        // console.log(language)
      // }
    // })
    console.log(thisLanguage)
    let thisQuestionString = thisLanguage[Math.floor(Math.random() * thisLanguage.length)]
    let [thisQuestion, thisAnswer] =  thisQuestionString.split(":")
    console.log(thisQuestion)
    console.log(thisAnswer)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
