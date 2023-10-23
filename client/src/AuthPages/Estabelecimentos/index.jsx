import { RiAddCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './Estabelecimentos.module.css';
import { useEffect, useState } from 'react';
import img_estabelecimento from './assets/img_estabelecimento.png';

export default function Estabelecimentos({ setEstabelecimentoMode, setId }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  async function getEstabelecimentos() {
    try {
      const response = await fetch('http://localhost:5000/estabelecimento', {
        method: 'GET',
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      console.log(parseRes);
      setEstabelecimentos(parseRes);

    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect(() =>{
    getEstabelecimentos();
  }, []);

  const redirecionaParaEstabelecimento = () => {
    setEstabelecimentoMode(true)
  }

  if (estabelecimentos.length !== 0) {
    return (
      <section className={styles.container_estabelecimentosCadastrados}>
        {estabelecimentos.map(estabelecimento => (
          <Link key={estabelecimento.id_estabelecimento} to={`/estabelecimento/${estabelecimento.id_estabelecimento}/pedidos`} onClick={() => {redirecionaParaEstabelecimento(estabelecimento.id_estabelecimento); setId(estabelecimento.id_estabelecimento)}} className={styles.container_estabelecimento}>
            <img src={img_estabelecimento} alt='' className={styles.imagem}/>
            <h1 className={styles.nome_estabelecimento}>{estabelecimento.nome_estabelecimento}</h1>
            <div className={styles.linhaDivisoria}></div>
            <p className={styles.descricao_estabelecimento}>{estabelecimento.descricao_estabelecimento}</p>
          </Link>
        ))}
        <Link to='/criaestabelecimento' style={{ maxWidth: '200px', textAlign: 'center', color: '#000' }}>
          <RiAddCircleFill className={styles.botao} style={{ fontSize: '30px' }}/>
          <h2 style={{ fontSize: '20px' }}>Adicionar outro estabelecimento</h2>
        </Link>
      </section>
    );
  }

  return(
    <Link className={styles.container} to='/criaestabelecimento'>
      <h1 className={styles.botao}><RiAddCircleFill/></h1>
      <h2 className={styles.registrarNovo}>Registrar novo estabelecimento</h2>
      <h3 className={styles.possuiRegistro}>Já possui registro?</h3>
    </Link>
  )
}