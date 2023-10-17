import { Link } from "react-router-dom";
import styles from './Login.module.css';
import { useState } from "react";

export default function Login({ setAuth }) {

  const [inputs, setInputs] = useState({
    email: '',
    senha: ''
  });

  const { email, senha } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  }

  const onSubmitForm = async(e) => {
    e.preventDefault();

    try {

      const body = { email, senha };
      
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      if(parseRes === 'Senha ou Email incorreto') {
        return alert('Senha ou Email incorreto!');
      }

      localStorage.setItem('token', parseRes.token);
      setAuth(true);

      window.location.href = '/estabelecimentos';
    } catch (err) {
      console.error(err.message);
      setAuth(false);
    }
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Login</h1>
      <form className={styles.form} onSubmit={e => onSubmitForm(e)}>
      <input type='email' name='email' placeholder='Coloque seu email...' className={styles.input} value={email} onChange={e => onChange(e)}/>
      <input type='password' name='senha' placeholder='Coloque sua senha...' className={styles.input} value={senha} onChange={e => onChange(e)}/>
      <button className={styles.botao}>Entrar</button>
      <Link to='/cadastro' className={styles.login}>Não possui cadastro?</Link>
      </form>
    </div>
);
}