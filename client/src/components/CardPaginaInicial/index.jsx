import styles from './CardPaginaInicial.module.css'

export default function CardPaginaInicial({ mensagem, botao, imagem }) {
  return (
    <div className={styles.cardContainer}>
        <div>
            <img src={imagem} alt='' className={styles.imagem}/>
        </div>
        <div className={styles.textoBackground}>
          <h3 className={styles.texto}>{mensagem}</h3>
        </div>
        <button className={styles.botao}>{botao}</button>
    </div>
  );
}
