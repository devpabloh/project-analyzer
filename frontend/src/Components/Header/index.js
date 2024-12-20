
import styles from "./Header.module.css"
import logoATI from "../../assets/logos/ATI-PE.png"

const Header = ()=>{
    return(
        <header className={styles.containerHeader}>
            <img src={logoATI} alt="logo da agencia de tecnologia de informação de Pernambuco" />
        </header>
    )
}

export default Header