import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GetNomeContext } from "../../Context/getNome";

export default function Configuracoes({ setAuth }) {
  const { nome, getNome } = useContext(GetNomeContext);

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  }

  useEffect(() => {
    getNome();
  }, [getNome]);

  return (
    <>
      <h1>Bem-vindo {nome}!</h1>
      <Link onClick={() => logout()} to='/'>Logout</Link>
    </>
  );

}