import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form'; // Importez Form depuis le bon chemin
import Counter  from './components/counter';
import ComFct from "./components/ComFct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello />
      <Form labelle="FirstName" Name="FirstName" />
      <Form labelle="LastName" Name="LastName" />
     
      
      <Counter />
    </>
  );
}

export default App;