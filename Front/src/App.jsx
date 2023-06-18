import { useState } from 'react';

import logo from './img/Logo.png';

import pagefun from "./components/pagefun";

import "./App.css";

import LocForm from './components/LocForm';

function App() {
  const [todos, setLocation] = useState([
    {
      id: 1,
      text: "Localidade",
      category: "Info",
      isCompleted: false,
    },
  ]);

  return( 
    <div className="app">
      <img src={logo} className="app-logo" alt="logo" />
      <div className='front-spot'>
        {todos.map((todo) => (
          <pagefun todo={todo}/>
        ))}
      </div>
      <LocForm />
    </div>
  );
}

export default App;
