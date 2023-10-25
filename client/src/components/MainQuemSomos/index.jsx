import QuemSomosBannerUm from "../QuemSomosBannerUm";
import QuemSomosBannerDois from "../QuemSomosBannerDois";
import arthur from './arthur_img.jpg';
import nicolas from './nicolas_img.jpg';
import vinicius from './vinicius_img.png';
import styles from './MainQuemSomos.module.css';

export default function MainQuemSomos() {
  const equipe = [{id: 1, nome: 'Arthur Reis', imagem: arthur},
                  {id: 2, nome: 'Nicolas Nichnig', imagem: nicolas},
                  {id: 3, nome: 'Vinicius Feitas', imagem: vinicius}];

  return (
    <>
      <QuemSomosBannerUm/>
      <QuemSomosBannerDois/>
      <div className={styles.containerEquipe}>
      {equipe.map(integrante => (
        <div key={integrante.id} className={styles.integrante}>
          <img src={integrante.imagem} alt={`Imagem do integrante ${integrante.nome}`} className={styles.imagem_integrante}/>
          <h3 className={styles.nome_integrante}>{integrante.nome}</h3>
        </div>
      ))}
      </div>
    </>
  );
}
