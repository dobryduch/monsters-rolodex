import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'ms1'
        },
        {
          name: 'Banshee',
          id: 'ms2'
        },
        {
          name: 'Dracula',
          id: 'ms3'
        },
        {
          name: 'Buka',
          id: 'ms4'
        },
        {
          name: 'Dyziek',
          id: 'ms5'
        },
        {
          name: 'Joker',
          id: 'ms6'
        }
      ]
    }
  }


render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster  => (<h1 key={monster.id}> {monster.name} </h1>) )}
      </div>
    );
}
}
export default App;
