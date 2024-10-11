import styles from "../assets/css/Header.module.css"
import userImg from "../assets/img/user.png"
const Header = () => {
    return (
       <>
    <div className={styles.header} >
        <div className={styles.headerContainer} >
         <img src={userImg} alt= "user" className={styles.userImg} />
            <div className={styles.userInfo}>
             <h1>Olá, Fulano</h1>
                <h2>Sair</h2>
            </div>
        </div>
     <button className={styles.addButton}>Adicionar</button>
    </div>
    </>
    )
};
export default Header