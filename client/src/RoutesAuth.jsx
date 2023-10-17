import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import Desempenho from "./AuthPages/Desempenho";
import Configuracoes from "./AuthPages/Configuracoes";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth";

export default function RoutesAuth() {
  const { setAuth } = useContext(AuthContext);

  return (
    <SideBar>
        <Routes>
            <Route path='/estabelecimentos' element={<Estabelecimentos/>}/>
            <Route path='/desempenho' element={<Desempenho/>}/>
            <Route path='/configuracoes' element={<Configuracoes setAuth={setAuth}/>}/>
            <Route path="*" element={<h1>Essa página não existe :(</h1>}/>
        </Routes>
    </SideBar>
  );
}
