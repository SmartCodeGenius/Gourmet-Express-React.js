import erro from './error.webp';
import styles from './PaginaNEncontrada.module.css';

export default function PaginaNEncontrada() {
  return (
    <section className={styles.container}>
      <img src={erro} alt="Tomate cortado" className={styles.imagem}/>
      <h1 className={styles.textoDestaque}>Oops!</h1>
      <h2 className={styles.textoRecado}>Parece que você acessou um caminho inválido!</h2>
      <a href='/' className={styles.botao}>Voltar ao início</a>
    </section>
  );
}