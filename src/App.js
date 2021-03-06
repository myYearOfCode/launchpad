import React, { Component } from 'react';
import './App.css';
import data from './data';
import * as data2 from './data2.json';
import LanguageMenu from './components/LanguageMenu';

// TODO:
/*
//keep track of questions to prevent duplicates from showing up.
//wipe text box on submission
build into components the right way.
make % counts for both languages.
show previous questions
auto-generate buttons for new subjects
make "shuffle mode"
set colors for backgrounds that changes per language (to subliminally set space)
possibly grading?
make text field size bigger
*/



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numCards: 0,
      language: 'javascript'
    }
  }

  handleLanguageChange = (e) => {
    // console.log(e.target.classList[0])
    if (this.state.language !== e.target.classList[0]){
      this.setState({language: e.target.classList[0]})
      this.loadNewLanguage();
    }
  }

  loadNewLanguage = () => {
    window.localStorage.setItem('questionsRemaining', JSON.stringify(this.shuffle(Object.keys(data2.default[this.state.language]))));
    this.getNewQuestionLocally()
  }

  showAnswer = () => {
    document.getElementById('answer').classList.add('visible')
    document.getElementById('answer').classList.remove('hidden')
  }

  hideAnswer = () => {
    document.getElementById('answer').classList.add('hidden')
    document.getElementById('answer').classList.remove('visible')
  }

  getNewQuestionLocally = () => {
    if (document.readyState === 'complete') {
      document.getElementsByClassName('textarea')[0].value = "" // reset text box
    }
    let questionsRemaining = JSON.parse(window.localStorage.getItem('questionsRemaining'));
    let question;
    let answer;
    if (questionsRemaining.length > 0) {
      let currentQuestion = data2.default[this.state.language][questionsRemaining.pop()]
      window.localStorage.setItem('questionsRemaining', JSON.stringify(questionsRemaining));
      question = currentQuestion['question']
      answer = currentQuestion['answer']
    } else if (questionsRemaining.length === 0) {
      question = "You have completed the set of cards! Play again?"
      answer = "The answer to this question is always yes."
    } else {
      question = "Something weird happened"
      answer = "Hold on."
    }
    this.setState({
      currentQuestion: question,
      currentAnswer: answer,
    })
    this.updateCounters();
  }

  shuffle = (array) => {
  	var currentIndex = array.length;
  	var temporaryValue, randomIndex;
  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
  		// Pick a remaining element...
  		randomIndex = Math.floor(Math.random() * currentIndex);
  		currentIndex -= 1;
  		// And swap it with the current element.
  		temporaryValue = array[currentIndex];
  		array[currentIndex] = array[randomIndex];
  		array[randomIndex] = temporaryValue;
  	}
  	return array;
  };

  updateCounters = () => {
   let counter = JSON.parse(window.localStorage.getItem('total_count'));
   window.localStorage.setItem('total_count', JSON.stringify(counter + 1));
   let session_counter = JSON.parse(window.localStorage.getItem('session_counter'));
   window.localStorage.setItem('session_counter', JSON.stringify(session_counter + 1));
  }

  componentWillMount = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
    window.localStorage.setItem('session_counter', JSON.stringify(0)); // reset session_counter
    window.localStorage.setItem('questionsRemaining', JSON.stringify(this.shuffle(Object.keys(data2.javascript))));
    this.getNewQuestionLocally() // for first run only
    document.addEventListener ("keydown",  (zEvent) => {
      if (zEvent.metaKey  &&  zEvent.keyCode === 13) {
        if (JSON.parse(window.localStorage.getItem('questionsRemaining')).length > 0){
          this.hideAnswer()
          setTimeout(this.getNewQuestionLocally(),100)
          this.setState({ numCards: this.state.numCards + 1})
        } else { // end of cards has been hit. reset it
          setTimeout(this.getNewQuestionLocally(),100)
          window.localStorage.setItem('questionsRemaining', JSON.stringify(this.shuffle(Object.keys(data2.javascript))));
        }

      }
      if (zEvent.metaKey  &&  zEvent.keyCode === 191) {
        setTimeout(this.showAnswer, 100)
      }
      // console.log(this.state)
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

            <div id="outerContainer">
              <div id = "language" className="secondary_text">
                <h1>
                  {this.state.language}
                </h1>
              </div>

              <LanguageMenu
                languages={Object.keys(data)}
                handleLanguageChange={this.handleLanguageChange}
              />
              <div id="instructions" className="secondary_text">
                '⌘ /'	to show answer, '⌘ enter'	to advance to next card
              </div>
              <div id="qaWrapper">
                <div id="question" className="distributeEvenly">
                {this.state.currentQuestion}
                </div>
                <form className="distributeEvenly">
                  <textarea rows="10" cols="50" className="textarea">
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
