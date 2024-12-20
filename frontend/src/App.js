
import { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Tabela from './Components/Tabela';

function App() {
  const [projetos, setProjetos] = useState([]) // Recebendo os projetos e lidando com suas atualizações de estado.
  const AdicionarProjeto = ()=>{
    setProjetos((prevProjetos)=>[...prevProjetos, projetos])
  }

  const RemoverProjeto = (id)=>{
    setProjetos((prevProjetos)=> prevProjetos.filter((proj)=> proj.id !== id))
  }

  return (
    <div className="App">
      <h1>Análise de projetos</h1>
      <Formulario aoAdicionarProjeto={AdicionarProjeto}/>
      <Tabela projetos={projetos} aoRemoverProjeto={RemoverProjeto}/>
    </div>
  );
}

export default App;
