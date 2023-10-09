import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Estabelecimentos({ setAuth }) {
  
  const [nome, setNome] = useState('');

  async function getNome() {
    try {
      const response = await fetch('http://localhost:5000/dashboard', {
        method: 'GET',
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setNome(parseRes.nome_usuario);

    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  useEffect(() => {
    getNome();
  }, []);

  return (
    <>
      <h1>Bem-vindo {nome}!</h1>
      <Link onClick={() => logout()} to='/'>Logout</Link>
    </>
  );
}
