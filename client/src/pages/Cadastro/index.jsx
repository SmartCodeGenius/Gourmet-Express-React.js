import { Link } from "react-router-dom";
import styles from './Cadastro.module.css';
import { useState } from "react";

export default function Cadastro({ setAuth }) {

  const [inputs, setInputs] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const { email, senha, nome } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  }

  const onSubmitForm = async(e) => {
    e.preventDefault();

    try {

      const body = { nome, email, senha };
      
      const response = await fetch('http://localhost:5000/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const parseRes = await response.json();

      localStorage.setItem('token', parseRes.token);
      setAuth(true);
      window.location.href = '/estabelecimentos';

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cadastro</h1>
      <form className={styles.form} onSubmit={e => onSubmitForm(e)}>
      <input type='text' name='nome' placeholder='Coloque seu nome...' className={styles.input} value={nome} onChange={e => onChange(e)}/>
      <input type='email' name='email' placeholder='Coloque seu email...' className={styles.input} value={email} onChange={e => onChange(e)}/>
      <input type='password' name='senha' placeholder='Coloque sua senha...' className={styles.input} value={senha} onChange={e => onChange(e)}/>
      <button className={styles.botao}>Cadastrar</button>
      <Link to='/login' className={styles.login}>Já possui cadastro?</Link>
      </form>
    </div>
  );
}