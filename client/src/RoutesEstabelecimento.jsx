import { Route, Routes } from 'react-router-dom';
import SideBarEstabelecimento from './components/SideBarEstabelecimento';
import Estoque from './AuthPages/Estoque';
import { EstabelecimentoDetalhes } from './AuthPages/EstabelecimentoDetalhes';
import { useContext } from 'react';
import { EstabelecimentoContext } from './Context/EstabelecimentoMode';
import CriaProduto from './AuthPages/CriaProduto';
import Pedidos from './AuthPages/Pedidos';
import Graficos from './AuthPages/Graficos';
import Promocoes from './AuthPages/Promocoes';
import Funcionarios from './AuthPages/Funcionarios';

export default function RoutesEstabelecimento() {
  const { id, dentroDoEstabelecimento } = useContext(EstabelecimentoContext);

  return (
    <SideBarEstabelecimento id={id} dentroDoEstabelecimento={dentroDoEstabelecimento}>
      <Routes>
        <Route path={`/estabelecimento/${id}/pedidos`} element={<Pedidos/>} />
        <Route path={`/estabelecimento/${id}/detalhes`} element={<EstabelecimentoDetalhes/>} />
        <Route path={`/estabelecimento/${id}/estoque`} element={<Estoque/>} />
        <Route path={`/estabelecimento/${id}/criaProduto`} element={<CriaProduto/>} />
        <Route path={`/estabelecimento/${id}/graficos`} element={<Graficos/>} />
        <Route path={`/estabelecimento/${id}/promocoes`} element={<Promocoes/>} />
        <Route path={`/estabelecimento/${id}/funcionarios`} element={<Funcionarios/>} />
        <Route path='/*' element={<button onClick={() => window.location.href = `/estabelecimento/${id}/pedidos`}>Essa página não existe :( Retornar</button>} />
        {/* Adicione mais rotas específicas do estabelecimento aqui */}
      </Routes>
  </SideBarEstabelecimento>
  )
}