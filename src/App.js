import React, {useState} from 'react';
import './App.css';
import Formulario from './Componentes/Formulario';
import MasFormularios from './Componentes/MasFormularios/MasFormularios';
import Results from './Componentes/Results';
import Generador from './Componentes/Generador/generador';
import Lista from './Componentes/Lista/lista';

function App() {
  const [state, setState] = useState ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const [point, setPoint]=useState([])
  return (
    <div className="container">
      <Formulario inputs={state} setInputs={setState} />
      <Results data={state} />
      <MasFormularios/>
      <br/>
      <Generador point={point} setPoint={setPoint}/>
      <Lista point={point} setPoint={setPoint}/>
    </div>
  );
}

export default App;
