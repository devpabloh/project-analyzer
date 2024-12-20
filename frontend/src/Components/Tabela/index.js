import styles from "./Tabela.module.css";

const Tabela = ({ projetos }) => {
  return (
    <table className={styles.containerTabela}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Status</th>
          <th>Data de Início</th>
          <th>Data de Fim</th>
          <th>Riscos</th>
          <th>Ambiente</th>
        </tr>
      </thead>
      <tbody>
        {projetos.length > 0 ? (
          projetos.map((projeto) => (
            <tr key={projeto.id}>
              <td>{projeto.nome}</td>
              <td>{projeto.status}</td>
              <td>{projeto.dataDeInicio}</td>
              <td>{projeto.dataDeFim}</td>
              <td>{projeto.riscos}</td>
              <td>{projeto.ambiente}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Nenhum projeto adicionado ainda.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tabela;
