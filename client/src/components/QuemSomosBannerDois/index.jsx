import styles from './QuemSomosBannerDois.module.css';

export default function QuemSomosBannerUm() {
  return (
    <section className={styles.container}>
        <div className={styles.containerInformacoes}>
            <div>
                <h1 className={styles.titulo}>Por que criar o Gourmet Express?</h1>
                <p className={styles.texto}>Foi observado que, muitos estabelecimentos lidam com o fato de, realizar muitas ações em curto tempo à mão, gerando demora, filas e a possibilidade de gerar péssima experiência aos clientes e funcionários, com isso, Gourmet Express foi pensado para solucionar tais problemas.</p>
            </div>
            <div>
                <h1 className={styles.titulo}>Como funciona o Gourmet Express?</h1>
                <p className={styles.texto}>Através da assinatura de um plano, o dono do estabelecimento pode criar um ambiente virtual do estabelecimento, onde tanto os funcionários pelo site, quanto os clientes pelo app, podem realizar ações dentro.</p>
            </div>
        </div>
    </section>
  )
}