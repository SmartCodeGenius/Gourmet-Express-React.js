import tomate from './tomateEmServico.svg';
import styles from './Suporte.module.css';

export default function Suporte() {
  return (
    <div className={styles.container}>
      <h1 className={styles.texto}>Página em desenvolvimento!</h1>
      <img src={tomate} alt='Tomate em serviço'/>
      <h1 className={styles.texto}>Disponível em breve em uma futura atualização!</h1>
    </div>
  );
}
