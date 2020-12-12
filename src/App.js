import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startingText: "Default text",
      textType: "default"
      
    };

    this.generateGood = this.generateGood.bind(this);
    this.generateBad = this.generateBad.bind(this);
  }

  generateGood() {
    this.setState({startingText: "hello this is very long", textType: "default"}, () => this.setState({startingText: "Good", textType: "generated-post"}));
  }

  generateBad() {
    this.setState({startingText: "", textType: "default"}, () => this.setState({startingText: "Bad", textType: "generated-post"}));
  }
  render() {
    return (
      <div className="App">
        <div className = "box">
          <section id="generator-title">
            <h2>Here is a title.</h2>
          <div id="button">
            <button onClick={this.generateGood}>+ Generate good</button>
            <button onClick={this.generateBad}>+ Generate bad</button>
          </div>
          </section>
          <div>
            <p id={this.state.textType}>{this.state.startingText}</p>
          </div>
        </div>
        <div className = "box">
          <h2>Here is a title.</h2>
          <p>Hello here is some text</p>
        </div>
        <div className = "box">
          <h2>Here is a title.</h2>
          <p>Hello here is some text</p>
        </div>
        <div className = "box">
          <h2>Here is a title.</h2>
          <p>Hello here is some text</p>
        </div>
        <div className = "box">
          <h2>Here is a title.</h2>
          <p>Hello here is some text</p>
        </div>
        <div className = "box">
          <h2>Here is a title.</h2>
          <p>Hello here is some text</p>
        </div>
      </div>
    );
  }
}

export default App;
