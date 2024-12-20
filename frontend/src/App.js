
import { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';

function App() {
  const [projetos, setProjetos] = useState([]) // Recebendo os projetos e lidando com suas atualizações de estado.
  return (
    <div className="App">
      <h1>Análise de projetos</h1>
      <Formulario/>
    </div>
  );
}

export default App;
