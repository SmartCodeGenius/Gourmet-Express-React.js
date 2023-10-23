import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import SideBarEstabelecimento from "./components/SideBarEstabelecimento";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import Desempenho from "./AuthPages/Desempenho";
import Configuracoes from "./AuthPages/Configuracoes";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Context/Auth";
import { GetNomeContext } from "./Context/Nome";
import CriaEstabelecimento from "./AuthPages/CriaEstabelecimento";
import { EstabelecimentoDetalhes } from "./AuthPages/EstabelecimentoDetalhes";

export default function RoutesAuth() {
  const { setAuth, EhAuth } = useContext(AuthContext);
  const { getNome, nome } = useContext(GetNomeContext);
  const [estabelecimentoMode, setEstabelecimentoMode] = useState(false); // Estado para controlar o modo de estabelecimento
  const [id, setId] = useState('');

  const dentroDoEstabelecimento = (boolean) => {
      setEstabelecimentoMode(boolean);
  }

  const idDefinido = (boolean) => {
    setId(boolean);
  }

  useEffect(() => {
    getNome();
  }, [getNome]);

  if (!EhAuth) {
    return <Navigate to='/' />;
  }

  // Lógica para definir o modo de estabelecimento (true ou false)
  // Por exemplo, com base em alguma condição
  // Você deve definir 'estabelecimentoMode' com true ou false aqui

  if (estabelecimentoMode) {
    return (
      <SideBarEstabelecimento id={id}>
        <Routes>
          <Route path={`/estabelecimento/${id}/pedidos`} element={<h1>Rota 'Pedidos' criada com sucesso :)</h1>} />
          <Route path={`/estabelecimento/${id}/estoque`} element={<h1>Rota 'Estoque' criada com sucesso :)</h1>} />
          <Route path={`/estabelecimento/${id}/graficos`} element={<h1>Rota 'Gráficos' criada com sucesso :)</h1>} />
          <Route path={`/estabelecimento/${id}/promocoes`} element={<h1>Rota 'Promoções' criada com sucesso :)</h1>} />
          <Route path={`/estabelecimento/${id}/funcionarios`} element={<h1>Rota 'Funcionários' criada com sucesso :)</h1>} />
          <Route path='*' element={<><h1>Essa página não existe :(</h1><button onClick={() => window.location.href = `/estabelecimento/${id}/pedidos`}>Retornar</button></>} />
          {/* Adicione mais rotas específicas do estabelecimento aqui */}
        </Routes>
      </SideBarEstabelecimento>
    );
  }

  return (
    // Conjunto padrão de rotas
    <SideBar setAuth={setAuth} nome={nome}>
      <Routes>
        <Route index path='/criaestabelecimento' element={<CriaEstabelecimento />} />
        <Route path='/estabelecimentos' element={<Estabelecimentos setEstabelecimentoMode={dentroDoEstabelecimento} setId={idDefinido} />} />
        <Route path='/estabelecimento/:id' element={<EstabelecimentoDetalhes />} />
        <Route path='/desempenho' element={<Desempenho />} />
        <Route path='/configuracoes' element={<Configuracoes setAuth={setAuth} />} />
        <Route path="*" element={<h1>Essa página não existe :(</h1>} />
      </Routes>
    </SideBar>
  );
}