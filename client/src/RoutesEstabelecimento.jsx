import { Route, Routes } from 'react-router-dom';
import SideBarEstabelecimento from './components/SideBarEstabelecimento';
import Estoque from './AuthPages/Estoque';
import { EstabelecimentoDetalhes } from './AuthPages/EstabelecimentoDetalhes';
import { useContext } from 'react';
import { EstabelecimentoContext } from './Context/EstabelecimentoMode';
import CriaProduto from './AuthPages/CriaProduto';

export default function RoutesEstabelecimento() {
  const { id, dentroDoEstabelecimento } = useContext(EstabelecimentoContext);

  return (
    <SideBarEstabelecimento id={id} dentroDoEstabelecimento={dentroDoEstabelecimento}>
      <Routes>
        <Route path={`/estabelecimento/${id}/pedidos`} element={<h1>Rota 'Pedidos' criada com sucesso :)</h1>} />
        <Route path={`/estabelecimento/${id}/detalhes`} element={<EstabelecimentoDetalhes/>} />
        <Route path={`/estabelecimento/${id}/estoque`} element={<Estoque/>} />
        <Route path={`/estabelecimento/${id}/criaProduto`} element={<CriaProduto/>} />
        <Route path={`/estabelecimento/${id}/graficos`} element={<h1>Rota 'Gráficos' criada com sucesso :)</h1>} />
        <Route path={`/estabelecimento/${id}/promocoes`} element={<h1>Rota 'Promoções' criada com sucesso :)</h1>} />
        <Route path={`/estabelecimento/${id}/funcionarios`} element={<h1>Rota 'Funcionários' criada com sucesso :)</h1>} />
        {/* <Route path='/estabelecimento/*' element={<button onClick={() => window.location.href = `/estabelecimento/${id}/pedidos`}>Essa página não existe :( Retornar</button>} /> */}
        {/* Adicione mais rotas específicas do estabelecimento aqui */}
      </Routes>
  </SideBarEstabelecimento>
  )
}