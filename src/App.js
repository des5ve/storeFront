import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import React from 'react'
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    
    </div>
  );
}

export default App;
