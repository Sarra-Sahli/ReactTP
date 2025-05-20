import React, { Suspense, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import Form from './components/Form';
import Counter from './components/Counter';
import ComFct from './components/ComFct';
import Event from './components/Event';
import Events from './components/Events';
import Products from './components/Products';
import TodoList from './components/ToDoList';
import Panier from './components/panier';

const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <Suspense fallback={<div>Loading ...</div>}>
      <nav>
        <Link to="/hello">Home</Link>
      </nav>
      {/* <h1>Ma Todo List</h1>
      <TodoList />
      <Counter />
      <Panier /> */}

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/events" element={<Events />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
