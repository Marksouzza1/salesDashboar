import styles from "../assets/css/Header.module.css"
const Header = () => {
    return (
       <>
       <div className={styles.header} >
        <div className={styles.headerContainer} >
            <h1>Bem vindo</h1>
            <h2>Sair</h2>
        </div>
       </div>
       </>
    )
    
}

export default Header