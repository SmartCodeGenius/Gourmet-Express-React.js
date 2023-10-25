import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EstabelecimentoContext } from '../../Context/EstabelecimentoMode';

import styles from './Estoque.module.css';

export default function Estoque() {
  const [produtos, setProdutos] = useState([]);
  const { id } = useContext(EstabelecimentoContext);
  
  useEffect(() => {
    async function getProdutos() {
      try {
        const response = await fetch('http://localhost:5000/produtos', {
          method: 'GET',
          headers: { token: localStorage.token, 'Estabelecimento-ID': id }
        })
  
        const parseRes = await response.json();
        console.log(parseRes);
        setProdutos(parseRes);
  
      } catch (err) {
        console.error(err.message);
      }
    }
    getProdutos();
  }, [id]);
  
  if(produtos.length !== 0) {
    return(
      <section className={styles.background}>
        {produtos.map(produto => (
          <div key={produto.id_produto} className={styles.objProduto}>
            <div>
              <h2>{produto.nome_produto}</h2>
              <h3>R$ {produto.preco_produto}</h3>
            </div>
            <div>
              <Link>Editar</Link>
              <Link>Excluir</Link>
            </div>
          </div>
        ))}
      </section>
    )    
  }

  return (
    <div className={styles.background}>
      <Link className={styles.botaoCriarProduto} to={`/estabelecimento/${id}/criaProduto`}>Cadastrar Produto</Link>
    </div>
  )
}