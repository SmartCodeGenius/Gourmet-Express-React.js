import { Link } from "react-router-dom";
import styles from './Cadastro.module.css';
import { useState } from "react";

export default function Cadastro({ setAuth }) {

  const [senhaErro, setSenhaErro] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const [inputs, setInputs] = useState({
    nome: '',
    email: '',
    senha: '',
    senhaConfirmacao: ''
  });

  const { email, senha, senhaConfirmacao, nome } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  }

  function senhaEhValida(password) {
    const regex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  }

  const ativaSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  }

  const onSubmitForm = async(e) => {
    e.preventDefault();

    if (!senhaEhValida(senha)) {
      setSenhaErro('A senha deve conter pelo menos 8 caracteres e um símbolo especial.');
      return;
    }

    if (senha !== senhaConfirmacao) {
      setSenhaErro('As senhas não correspondem.');
      return;
    }

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
        <input type='text' name='nome' placeholder='Coloque seu nome...' className={styles.input} value={nome} onChange={e => onChange(e)} />
        <input type='email' name='email' placeholder='Coloque seu email...' className={styles.input} value={email} onChange={e => onChange(e)} />
        <p style={{ color: '#777777' }}>A senha precisa ter 8 caracteres e um símbolo especial</p>
        <div className={styles.senhaContainer}>
          <input
            type={senhaVisivel ? 'text' : 'password'}
            name='senha'
            placeholder='Coloque sua senha...'
            className={styles.input}
            style={{ padding: '10px 10.8em' }}
            value={senha}
            onChange={e => onChange(e)}
          />
          <button type="button" className={styles.visibilidadeBotaoSenha} onClick={ativaSenhaVisivel}>
            {senhaVisivel ? 'Esconder senha' : 'Mostrar senha'}
          </button>
        </div>
        <input type='password' name='senhaConfirmacao' placeholder='Confirme sua senha...' className={styles.input} value={senhaConfirmacao} onChange={e => onChange(e)} />
        {senhaErro && <p className={styles.erro}>{senhaErro}</p>}
        <button className={styles.botao}>Cadastrar</button>
        <Link to='/login' className={styles.login}>Já possui cadastro?</Link>
      </form>
    </div>
  );
}