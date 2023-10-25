import styles from './PagEmDesenvolvimento.module.css';
import tomate from './tomateEmServico.svg'

export default function PagEmDesenvolvimento() {
  return (
    <div className={styles.container}>
      <h1 className={styles.texto}>Página em desenvolvimento!</h1>
      <img src={tomate} alt='Tomate em serviço'/>
      <h1 className={styles.texto}>Disponível em breve em uma futura atualização!</h1>
    </div>
  )
}
