import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Estilo global
import './index.css';

// Páginas
import PaginaInicial from './pages/PaginaInicial';
import Planos from './pages/Planos';
import QuemSomos from './pages/QuemSomos';
import Suporte from './pages/Suporte';
import PaginaNEncontrada from './pages/PaginaNEncontrada';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Estabelecimentos from './AuthPages/Estabelecimentos';

// Componentes
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';


export default function AppRoutes() {
  const [ehAutenticado, setEhAutenticado] = useState(false);

  const setAuth = (boolean) => {
    setEhAutenticado(boolean);
  }

  async function ehAuth() {
     try {
      
      const response = await fetch('http://localhost:5000/auth/eh-verificado', {
        method: 'GET',
        headers: {token: localStorage.token}
      });

      const parseRes = await response.json();
      
      parseRes === true ? setEhAutenticado(true) : setEhAutenticado(false);

     } catch (err) {
      console.error(err.message);
     }
  }

  useEffect(() => {
    ehAuth();
  }, []);
  
  return(
      <BrowserRouter>
        {!ehAutenticado ? <Navbar/> : ''}
        {ehAutenticado ? (
        <SideBar>
          <Routes>
            {/* Usuário com login */}
            <Route path='/estabelecimentos' element={<Estabelecimentos setAuth={setAuth}/>}/>
            <Route path="*" element={<PaginaNEncontrada/>}/>
          </Routes>
        </SideBar>) : ''}
          <Routes>

            {/* Usuário sem login */}
            <Route index path="/" element={!ehAutenticado ? <PaginaInicial/> : <Navigate to='/estabelecimentos'/>}/>
            <Route path='/login' element={!ehAutenticado ? <Login setAuth={setAuth}/> : <Navigate to='/estabelecimentos'/>}/>
            <Route path='/cadastro' element={!ehAutenticado ? <Cadastro setAuth={setAuth}/> : <Navigate to='/estabelecimentos'/>}/>
            <Route path="/planos" element={!ehAutenticado ? <Planos/> : <Navigate to='/estabelecimentos'/>}/>
            <Route path="/quemsomos" element={!ehAutenticado ? <QuemSomos/> : <Navigate to='/estabelecimentos'/>}/>
            <Route path="/suporte" element={!ehAutenticado ? <Suporte/> : <Navigate to='/estabelecimentos'/>}/>


            {/* Erro 404 - Página não encontrada*/}
            
          </Routes>
        {!ehAutenticado ? <Footer/> : ''}
      </BrowserRouter>
  );
}