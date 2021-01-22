import React, {Component} from 'react';
import './App.css';
import Conversor from './components/Conversor';
function App() {
  return (
    <div className="App">
      <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="linha">
          <Conversor moedaA="ARS" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="ARS"></Conversor>
      </div>
      
    </div>
  );
}

export default App;
