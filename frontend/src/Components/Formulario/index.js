import { useState } from "react";
import styles from "./Formulario.module.css";

const Formulario = ({ emAddProjetos }) => {
  const [projetos, setProjetos] = useState({
    nome: "",
    status: "",
    dataDeInicio: "",
    dataDeFim: "",
    riscos: "",
    ambiente: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Corrigindo o uso de "name"
    setProjetos((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emAddProjetos({ ...projetos, id: Date.now() }); // Passando o projeto ao App
    setProjetos({
      nome: "",
      status: "",
      dataDeInicio: "",
      dataDeFim: "",
      riscos: "",
      ambiente: "",
    });
  };

  return (
    <form className={styles.containerFormulario} onSubmit={handleSubmit}>
      <div className={styles.containerCampo}>
        <label htmlFor="nome">Nome do projeto:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={projetos.nome}
          onChange={handleChange}
          placeholder="Nome do projeto"
          required
        />
      </div>
      <div className={styles.containerCampo}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={projetos.status}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="desenvolvimento">Em desenvolvimento</option>
          <option value="testes">Em ambiente de testes</option>
          <option value="homologacao">Em ambiente de homologação</option>
          <option value="producao">Em ambiente de produção</option>
        </select>
      </div>
      <div className={styles.containerCampo}>
        <label htmlFor="dataDeInicio">Início do projeto:</label>
        <input
          type="date"
          id="dataDeInicio"
          name="dataDeInicio"
          value={projetos.dataDeInicio}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.containerCampo}>
        <label htmlFor="dataDeFim">Final do projeto:</label>
        <input
          type="date"
          id="dataDeFim"
          name="dataDeFim"
          value={projetos.dataDeFim}
          onChange={handleChange}
        />
      </div>
      <div className={styles.containerCampo}>
        <label htmlFor="riscos">Existe algum risco?</label>
        <textarea
          id="riscos"
          name="riscos"
          value={projetos.riscos}
          onChange={handleChange}
          placeholder="Se sim, qual?"
        />
      </div>
      <div className={styles.containerCampo}>
        <label htmlFor="ambiente">Observações:</label>
        <input
          type="text"
          id="ambiente"
          name="ambiente"
          value={projetos.ambiente}
          onChange={handleChange}
          placeholder="Observação sobre o ambiente (testes, homologação, etc.)"
        />
      </div>
      <button type="submit">Adicionar Projeto</button>
    </form>
  );
};

export default Formulario;
