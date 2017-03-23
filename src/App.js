import React, { Component } from 'react';
import './App.css';
/* eslint-disable */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: ''
    }
    this.randomizer = this.randomizer.bind(this);
  }
  randomizer() {
    this.setState({
      randomIndex: Math.floor(Math.random() *  11)
    })
  }
  render() {
    {/* Sorry this is so messy
        I'll pull in an api next time? ;) */}
    const quotes = [' "' + "shout out to the theoretical physicist's" + '"' + " - Lil B",
                    ' "' + "I’m making gravy." + '"' + " - Dr. Steve Brule",
                    ' "' + "A man is a man because come on man." + '"' + " - anon",
                    ' "' + "Sounds beefy, Pops." + '"' + " - Speed",
                    ' "' + "Falling in love and having a relationship are two different things." + '"' + " - Keanu Reeves",
                    ' "' + "It's just better to be yourself than to try to be some version of what you think the other person wants." + '"' + " - Matt Damon",
                    ' "' + "Big Money, Big Cars" + '"' + " - TK",
                    ' "' + "It ain't no fun if the homies can't have none." + '"' + " - Beagle",
                    ' "' + "Shake Junt!" + '"' + " - Shane Heyl",
                    ' "' + "I'm an addict, I'm addicted to success. Thankfully, there's no rehab for success." + '"' + " - Lil Wayne",
                    ' "' + "We will not learn how to live together in peace by killing each other's children." + '"' + " - Jimmy Carter"];
    const quote = quotes[this.state.randomIndex];
    return (
      <div className="App">
        <div id="generator" className="generator">
          <p>{quote}</p>
          <button onClick={this.randomizer}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
