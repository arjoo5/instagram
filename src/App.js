import React, { Component } from 'react';
import Header from './components/header';
import Posts from './components/posts/posts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Posts />
        </div>
      </div>

    );
  }
}

export default App;
