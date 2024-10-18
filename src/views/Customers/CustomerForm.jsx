import styles from "../../assets/css/CustomerForm.module.css"

const CustomerForm = () => {


    return (
      <>
      <div className={styles.formContainer} > 
        <h1>Cadastro de Cliente</h1>
        <label htmlFor="nome">Nome</label>
        <input placeholder="Nome" />
        <input placeholder="Telefone" />
        <input placeholder="Email" />
        <input placeholder="CPF" />
      </div>
      </>  
    )
}
export default CustomerForm