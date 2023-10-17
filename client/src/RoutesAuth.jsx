import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth";

export default function RoutesAuth() {
  const { setAuth } = useContext(AuthContext);

  return (
    <SideBar>
        <Routes>
            <Route path='/estabelecimentos' element={<Estabelecimentos setAuth={setAuth}/>}/>
            <Route path="*" element={<h1>Essa página não existe :(</h1>}/>
        </Routes>
    </SideBar>
  );
}
