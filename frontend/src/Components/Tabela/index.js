import styles from "./Tabela.module.css"

const Tabela = ({projetos, aoRemoverProjeto})=> {
    return(
        <table className={styles.containerTabela}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Data de inicio</th>
                    <th>Data de fim</th>
                    <th>Riscos</th>
                    <th>Ambiente</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {projetos.map((projeto)=> (
                    <tr key={projeto.id}>
                        <td>{projeto.nome}</td>
                        <td>{projeto.status}</td>
                        <td>{projeto.dataDeInicio}</td>
                        <td>{projeto.dataDeFim || "N/A"}</td>
                        <td>{projeto.riscos || "Nenhum"} </td>
                        <td>{projeto.ambiente}</td>
                        <td>
                            <button onClick={()=> aoRemoverProjeto(projeto.id)}>Remover</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela