import React, { Component } from 'react';
import './App.css';

import Header from './header'
import Footer from './footer'
import JokeList from './JokeList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="">
          <JokeList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
