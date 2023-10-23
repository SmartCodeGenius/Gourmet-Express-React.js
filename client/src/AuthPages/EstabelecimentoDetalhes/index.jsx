import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function EstabelecimentoDetalhes() {
    const { id } = useParams(); // Obtém o parâmetro 'id' da URL

    const [estabelecimento, setEstabelecimento] = useState({});
  
    useEffect(() => {
      // Certifique-se de que 'id' seja um número antes de fazer a solicitação.
      const estabelecimentoId = parseInt(id, 10);
  
      // Verifique se 'estabelecimentoId' é um número válido.
      if (!isNaN(estabelecimentoId)) {
        // Faça a solicitação com 'estabelecimentoId'.
        const buscarEstabelecimento = async () => {
          try {
            const response = await fetch(`http://localhost:5000/estabelecimento/${estabelecimentoId}`, {
              method: 'GET',
              headers: { token: localStorage.token }
            });
  
            const parseRes = await response.json();
            setEstabelecimento(parseRes);
          } catch (err) {
            console.error(err.message);
          }
        };
  
        buscarEstabelecimento();
      } else {
        console.error("ID inválido");
      }
    }, [id]);

  return (
    <div>
      <h1>{estabelecimento.nome_estabelecimento}</h1>
      <p>{estabelecimento.descricao_estabelecimento}</p>
      {/* Adicione mais detalhes aqui */}
    </div>
  );
}