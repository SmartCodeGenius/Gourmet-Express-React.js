import styles from './MainPlanos.module.css'
import cereja from './cereja.svg'
import tomate from './tomate.svg'
import caixote from './caixote.svg'

export default function MainPlanos() {

  const planos = [{nome:'Plano Cereja', id:1, preco:35, icone:cereja },
                  {nome:'Plano Tomate', id:2, preco:70, icone:tomate }, 
                  {nome:'Plano Caixote', id:3, preco:105, icone:caixote }];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Os planos do Gourmet Express!</h1>
      <div className={styles.planosContainer}>
        {planos.map(plano => (
            <div className={styles.opcao}>
              <h2 className={styles.nomePlano} unselectable='on'>{plano.nome}</h2>
              <h1 className={styles.precoPlano} unselectable='on'>R${plano.preco}</h1>
              <h3 className={styles.porMes}>por mês</h3>
              {plano.icone === cereja ? 
              <img src={plano.icone} alt="" className={styles.iconeCereja}/> : <></>}
              {plano.icone === tomate ? 
              <img src={plano.icone} alt="" className={styles.iconeTomate}/> : <></>}
              {plano.icone === caixote ? 
              <img src={plano.icone} alt="" className={styles.iconeCaixote}/> : <></>}
            </div>
        ))}
      </div>
    </section>
  )
}
