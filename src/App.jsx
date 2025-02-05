import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form'; // Importez Form depuis le bon chemin
import Counter  from './components/counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello />
      <Form labelle="FirstName" Name="FirstName" />
      <Form labelle="LastName" Name="LastName" />
    </>
  );
}

function Appcounter() {
  return (
    <div>
      <h1>Compteur</h1>
      
      <Counter initialCount={0} step={1} />
    
    </div>
  );
}
import ListManager from './components/ListManager'; // Importez le composant ListManager

function AppList() {
  // Liste initiale des éléments
  const initialItems = ['React', 'Angular', 'VueJs'];

  return (
    <div>
      <h1>  Gestionnaire de liste</h1>
   
      <ListManager variant="primary" initialItems={initialItems} placeholder="Ajouter a la liste" />
    </div>
  );
}

export default AppList;



  /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */