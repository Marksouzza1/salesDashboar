import React from "react";
import styles from "../assets/css/Sidebar.module.css"

const Sidebar = () => {
    return (
        <>
        <div className={styles.sidebar}>
        <div className={styles.buttonContainer}>
            <button>Dashboard</button>
            <button>Clientes</button>
            <button>Produtos</button>
        </div>

        </div>
        </>
    )
}

export default Sidebar