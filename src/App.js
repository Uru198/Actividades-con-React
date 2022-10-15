import React, {useState} from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import Results from './Componentes/Results';

function App() {
  const [state, setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  return (
    <div className="App">
      <Formulario inputs={state} setInputs={setState} />
      <Results data={state} />
    </div>
  );
}

export default App;
