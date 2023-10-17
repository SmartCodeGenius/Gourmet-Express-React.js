import { BiRestaurant } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { SlLogout } from 'react-icons/sl';

import styles from './SideBar.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function SideBar({ children, nome, setAuth }) {
  const [selecionado, setSelecionado] = useState(false);

  const alternar = () => setSelecionado(!selecionado);

  const menuItem = [
    {
      path: '/estabelecimentos',
      name: 'Estabelecimentos',
      icon: <BiRestaurant/>
    },
    {
      path: '/desempenho',
      name: 'Desempenho',
      icon: <BsGraphUp/>
    },
    {
      path: '/configuracoes',
      name: 'Configurações',
      icon: <CiSettings/>
    },
  ]

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    window.location.href = '/'
  }

  return (
    <div className={styles.container}>
      <div style={{ width: selecionado ? '300px' : '50px' }} className={styles.sidebar}>
        <div className={styles.sessao_top}>
          <h1 style={{ display: selecionado ? 'block' : 'none' }} className={styles.logo}>{nome}</h1>
          <div style={{ marginLeft: selecionado ? '100px' : '0px' }} className={styles.bars}>
            <FaBars onClick={alternar}/>
          </div>
        </div>
        <div className={styles.link_container}>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={styles.link} activeclassName='active'>
              <div className={styles.icone}>{item.icon}</div>
              <div style={{ display: selecionado ? 'block' : 'none' }} className={styles.link_texto}>{item.name}</div>
            </NavLink>
          ))}
          <Link onClick={() => logout()} className={styles.link} activeclassName='active'>
            <div className={styles.icone}><SlLogout/></div>
            <div style={{ display: selecionado ? 'block' : 'none' }} className={styles.link_texto}>Logout</div>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
