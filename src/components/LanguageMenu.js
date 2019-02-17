import React, { Component } from 'react';
// import data from './data';

class languageMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  menuMaker = () => {
    let languageHtml = this.props.languages.map((language,index) => (
      <React.Fragment><a href={language} key={language}>{language}</a> &nbsp;</React.Fragment>
      ))
    return <div className = "languageMenu" key="languageMenu">{languageHtml}</div>

  }
  /*
  this needs to get the language names from app.js and a callback function so it can set the language state.
  */
  render () {
    return (
      <React.Fragment>
        {this.menuMaker()}
      </React.Fragment>
    )
  }
}
export default languageMenu;
