import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import Desempenho from "./AuthPages/Desempenho";
import Configuracoes from "./AuthPages/Configuracoes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/Auth";
import { GetNomeContext } from "./Context/Nome";
import CriaEstabelecimento from "./AuthPages/CriaEstabelecimento";
import { EstabelecimentoContext } from "./Context/EstabelecimentoMode";
import RoutesEstabelecimento from "./RoutesEstabelecimento";

export default function RoutesAuth() {
  const { setAuth, EhAuth } = useContext(AuthContext);
  const { getNome, nome } = useContext(GetNomeContext);
  const { estabelecimentoMode, dentroDoEstabelecimento, idDefinido } = useContext(EstabelecimentoContext);

  useEffect(() => {
    getNome();
  }, [getNome]);

  if (!EhAuth) {
    return <Navigate to='/' />;
  }

  if (estabelecimentoMode) {
    return <RoutesEstabelecimento/>;
  }

  return (
    <SideBar setAuth={setAuth} nome={nome}>
      <Routes>
        <Route index path='/criaestabelecimento' element={<CriaEstabelecimento />} />
        <Route path='/estabelecimentos' element={<Estabelecimentos setEstabelecimentoMode={dentroDoEstabelecimento} setId={idDefinido} />} />
        <Route path='/desempenho' element={<Desempenho />} />
        <Route path='/configuracoes' element={<Configuracoes setAuth={setAuth} />} />
        <Route path="/*" element={<h1>Essa página não existe :(</h1>} />
      </Routes>
    </SideBar>
  );
}