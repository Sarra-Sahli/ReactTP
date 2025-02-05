import React, { useState } from 'react';
import './style.css'; // Importez le fichier CSS


function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + step);
  };

  // Fonction pour décrémenter le compteur
  const decrement = () => {
    setCount(count - step);
  };
  const reset= ()=>
  {
    setCount(0)
  }

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button> {/* Ajoutez du texte au bouton Reset */}
    </div>
  );
}

export default Counter;