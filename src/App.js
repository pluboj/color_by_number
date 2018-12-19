import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="ui stackable grid" 
        data-test="component-app"
        style={{padding: '30px'}}>
        <div className="two wide column">
          <Menu />
        </div>
        <div className="right floated twelve wide stretched column">
          <div className="ui segment" data-test="component-puzzle">
            puzzle goes here
          </div>
        </div>
        <div className="two wide computer only column"></div>
      </div>
    );
  }
}

export default App;
