import React, { Component } from 'react';

// Api connector
import api from './services/api'

// Styles
import './styles.css';

// Components
import Header from './components/header'
import Main from './pages/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div >
    )
  }
}

export default App;
