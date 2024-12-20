import { useState } from "react";
import Formulario from "./Components/Formulario";
import Tabela from "./Components/Tabela"
import './App.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
  const [projetos, setProjetos] = useState([]);

  const emAddProjetos = (novoProjeto) => {
    setProjetos((prevProjetos) => [...prevProjetos, novoProjeto]);
  };

  return (
    <div className="App">
      <Header/>
      <main className="containerMain">
        <h1>Gestão de Projetos</h1>
        {/* Renderizando o Formulário */}
        <Formulario emAddProjetos={emAddProjetos} />
        {/* Renderizando a Tabela */}
        <Tabela projetos={projetos} />
      </main>
      <Footer/>
    </div>
  );
};

export default App;

