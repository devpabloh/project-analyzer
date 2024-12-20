import style from "./Footer.module.css"
import logoPernambuco from "../../assets/logos/GovPERGB.png"

const Footer = ()=>{
    return(
        <footer className={style.containerFooter}>
            <img src={logoPernambuco} alt="Logo Estado de Pernambuco" />
        </footer>
    )
}

export default Footer