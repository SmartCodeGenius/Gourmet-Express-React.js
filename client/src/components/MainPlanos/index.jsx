import styles from './MainPlanos.module.css'
import cereja from './cereja.svg'
import tomate from './tomate.svg'
import caixote from './caixote.svg'
import { useState } from 'react'

export default function MainPlanos() {
  const [ativo] = useState([false, false, false]);

  const planos = [{nome:'Plano Cereja', id:1, preco:35, selecionado:ativo[0], icone:cereja },
                  {nome:'Plano Tomate', id:2, preco:70, selecionado:ativo[1], icone:tomate }, 
                  {nome:'Plano Caixote', id:3, preco:105, selecionado:ativo[2], icone:caixote }];

  

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Selecione o plano!</h1>
      <div className={styles.planosContainer}>
        {planos.map(plano => (
            <div className={styles.opcao} onClick={() => alert(plano.id)}>
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
      <button className={styles.botao}>Confirmar assinatura</button>
    </section>
  )
}
