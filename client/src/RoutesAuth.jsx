import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import Desempenho from "./AuthPages/Desempenho";
import Configuracoes from "./AuthPages/Configuracoes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Context/Auth";
import { GetNomeContext } from "./Context/getNome";
import CriaEstabelecimento from "./AuthPages/CriaEstabelecimento";

export default function RoutesAuth() {
  const { setAuth, EhAuth } = useContext(AuthContext);
  const { getNome, nome } = useContext(GetNomeContext);

  useEffect(() => {
    getNome();
  }, [getNome]);

  if(!EhAuth) {
    return <Navigate to='/'/>
  }

  return (
    <SideBar setAuth={setAuth} nome={nome}>
        <Routes>
            <Route path='/estabelecimentos' element={<Estabelecimentos/>}/>
            <Route path='/desempenho' element={<Desempenho/>}/>
            <Route path='/configuracoes' element={<Configuracoes setAuth={setAuth}/>}/>
            <Route path='/criaestabelecimento' element={<CriaEstabelecimento/>}/>
            <Route path="*" element={<h1>Essa página não existe :(</h1>}/>
        </Routes>
    </SideBar>
  );
}
