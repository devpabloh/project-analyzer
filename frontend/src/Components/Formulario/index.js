/* Importando CSS */
import styles from "./Formulario.module.css"


/* Importando os hooks */
import {useState} from "react";

const Formulario = ({emAddProjetos})=>{
    const [projetos, setProjetos] = useState({
        id: Date.now(),
        nome: "",
        status: "",
        dataDeInicio: "",
        dataDeFim: "",
        riscos: "",
        ambiente: "",
    })

    const handleChange = (e)=> {
        const {nome, value} = e.target;
        setProjetos((prev)=> ({...prev, [nome]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emAddProjetos(projetos)
        setProjetos({
            id: Date.now(),
            nome: "",
            status: "",
            dataDeInicio: "",
            dataDeFim: "",
            riscos: "",
            ambiente: "",
        })
    }

    return(
        <form className={styles.containerFormulario} onSubmit={handleSubmit}>
            <input 
                type="text"
                nome="name"
                value={projetos.nome}
                onChange={handleChange}
                placeholder="Nome do projeto"
                required
            />
            <select 
                nome="status" 
                value={projetos.status}
                onChange={handleChange}
                required
            >
                <option 
                    value="">
                    Selecione uma opção
                </option>
                <option 
                    value="desenvolvimento">
                    Em desenvolvimento
                </option>
                <option 
                    value="testes">
                    Em ambiente de testes
                </option>
                <option
                    value="homologacao">
                    Em ambiente de homologação
                </option>
                <option 
                    value="producao">
                        Em ambient de produção
                </option>
            </select>
            <input 
                type="date"
                nome="dataDeInicio"
                value={projetos.dataDeInicio}
                onChange={handleChange}
            />
            <input 
                type="date"
                nome="dataDeFim"
                value={projetos.dataDeFim}
                onChange={handleChange}
            />
            <textarea 
                nome="riscos" 
                value={projetos.riscos}
                onChange={handleChange}
                placeholder="Existe algum risco?"
            >

            </textarea>
            <input type="text" />
            <button type="submit">Adicionar projeto</button>
        </form>
    )
}

export default Formulario;