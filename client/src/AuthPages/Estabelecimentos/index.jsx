import { RiAddCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './Estabelecimentos.module.css';

export default function Estabelecimentos() {
  return(
    <Link className={styles.container} to='/criaestabelecimento'>
      <h1 className={styles.botao}><RiAddCircleFill/></h1>
      <h2 className={styles.registrarNovo}>Registrar novo estabelecimento</h2>
      <h3 className={styles.possuiRegistro}>Já possui registro?</h3>
    </Link>
  )
}
