import CardPaginaInicial from '../CardPaginaInicial';
import styles from './Cards.module.css'

export default function Cards({ mensagemA, botaoA, imagemA, mensagemB, botaoB, imagemB }) {
  return (
    <div className={styles.containerCards}>
        <CardPaginaInicial mensagem={mensagemA} botao={botaoA} imagem={imagemA}/>
        <CardPaginaInicial mensagem={mensagemB} botao={botaoB} imagem={imagemB}/>
    </div>
  );
}
