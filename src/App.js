import React, { Component } from 'react';


// Components
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default App;

