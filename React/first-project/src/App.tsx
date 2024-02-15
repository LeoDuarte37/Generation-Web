import React, { useState, useEffect } from 'react';
import Home from './pages/home/Home';
import './App.css';

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <>
      <Home
        title="Componente Home"
        description="Este é um componente Home que recebe props."
      />

      <img src="https://i.imgur.com/H88yIo2.png" className='img' alt="Imagem tela inicial"/> 

      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </>
  );
}

export default App;