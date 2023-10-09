import styles from "./Banner.module.css";
import logo from './ge_logo.svg'

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.gmContainer}>
        <img src={logo} alt="Logo do Gourmet Express" className={styles.logo} />
        <p>O melhor serviço de comida que utilizará!</p>
        <button className={styles.botao} onClick={() => alert("Oi mãe!")}>Faça parte!</button>
      </div>
    </section>
  );
}
