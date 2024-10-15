import React from "react";
import styles from "../assets/css/Sidebar.module.css"
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
        <div className={styles.sidebar}>
        <div className={styles.buttonContainer}>
        <button
                    className={location.pathname === '/dashboard' ? styles.active : ''}
                    onClick={() => navigate('/dashboard')}
                >Dashboard</button>
            <button className={location.pathname === '/Customers' ? styles.active : ''}
                 onClick={() => navigate('/Customers')}>Clientes</button>
            <button className={location.pathname === '/produtos' ? styles.active : ''}
                 onClick={() => navigate('/produtos')}>Produtos</button>
        </div>

        </div>
        </>
    )
}

export default Sidebar