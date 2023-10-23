import { Link } from 'react-router-dom';
import NavBarLink from '../NavBarLink';
import logo from './logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const opcoes = [
    {nome: 'Início', url: '/', id: 1},
    {nome: 'Planos', url: 'planos', id: 2},
    {nome: 'Quem somos', url: 'quemsomos', id: 3},
    {nome: 'Suporte', url: 'suporte', id: 4},
  ];

  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <img src={logo} className={styles.logo} alt="Logo da Gourmet Express"/>
      </Link>
      <ul className={styles.containerNavbar}>
      {opcoes.map((opcao) => (
        <NavBarLink link={opcao} key={opcao.id} estiloLink={styles.link} estiloBarra={styles.barraNavbar}/>
      ))}
      <Link className={styles.entrar} to='/login'>Entrar</Link>
      </ul>
    </nav>
  );
}