import { Link } from "react-router-dom";
import styles from './Login.module.css';
import { useContext } from "react";
import { JWTContext } from "../../Context/JWT";

export default function Login() {
  const { onChange, onSubmitForm, email, senha } = useContext(JWTContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Login</h1>
      <form className={styles.form} onSubmit={e => onSubmitForm(e)}>
        <div className={styles.inputs}>
          <input type='email' name='email' placeholder='Coloque seu email...' className={styles.input} value={email} onChange={e => onChange(e)}/>
          <input type='password' name='senha' placeholder='Coloque sua senha...' className={styles.input} value={senha} onChange={e => onChange(e)}/>
          <button className={styles.botao}>Entrar</button>
          <Link to='/cadastro' className={styles.login}>Não possui cadastro?</Link>
        </div>
      </form>
    </div>
);
}