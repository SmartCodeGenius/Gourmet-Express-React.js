import styles from './CriaEstabelecimento.module.css';
import { Link } from 'react-router-dom';

export default function CriaEstabelecimento() {
  return (
    <section className={styles.container}>
        <h1 className={styles.titulo}>Criar estabelecimento</h1>
        <form className={styles.form} onSubmit={{}}>
            <label>Nome do estabelecimento<strong style={{ color: 'red' }}>*</strong></label>
            <input type='text' className={styles.input}/>
            <label>Endereço<strong style={{ color: 'red' }}>*</strong></label>
            <input type='text' className={styles.input}/>
            <label>Descrição<strong style={{ color: 'red' }}>*</strong></label>
            <input type='text' className={styles.input} style={{ padding: '50px 10px', fontSize: 15 }} placeholder='Descreva seu restaurante de forma breve...'/>
            <div className={styles.opcoes}>
                <Link to='/estabelecimentos' className={styles.opcao} style={{ backgroundColor: '#FFF', color: '#000' }}>Cancelar</Link>
                <button className={styles.opcao} style={{ backgroundColor: '#7C0B0B' }}>Confirmar</button>
            </div>
        </form>
    </section>
  );
}