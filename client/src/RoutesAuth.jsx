import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Estabelecimentos from "./AuthPages/Estabelecimentos";
import PaginaNEncontrada from "./pages/PaginaNEncontrada";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth";

export default function RoutesAuth() {
  const { setAuth } = useContext(AuthContext);

  return (
    <SideBar>
        <Routes>
            <Route path='/estabelecimentos' element={<Estabelecimentos setAuth={setAuth}/>}/>
            <Route path="*" element={<PaginaNEncontrada/>}/>
        </Routes>
    </SideBar>
  );
}
