import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import logo from './ge_logo.svg'

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.gmContainer}>
        <img src={logo} alt="Logo do Gourmet Express" className={styles.logo} />
        <p>O melhor serviço de comida que utilizará!</p>
        <Link className={styles.botao} to='/cadastro'>Faça parte!</Link>
      </div>
    </section>
  );
}
