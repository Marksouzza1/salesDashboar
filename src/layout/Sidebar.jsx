import React from "react";
import styles from "../assets/css/Sidebar.module.css"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className={styles.sidebar}>
        <div className={styles.buttonContainer}>
            <button onClick={() => navigate('/Dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/Customers')}>Clientes</button>
            <button onClick={() => navigate('/produtos')}>Produtos</button>
        </div>

        </div>
        </>
    )
}

export default Sidebar