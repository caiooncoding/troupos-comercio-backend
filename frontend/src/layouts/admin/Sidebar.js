import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const loggedUser = localStorage.getItem('auth_name')

  return (

    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading"></div>
          <Link className="nav-link" to="/admin/categories">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Categorias
          </Link>
          <Link className="nav-link" to="/admin/products">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Produtos
          </Link>
          <Link className="nav-link" to="/admin/users">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Usuários
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">{`Logado como: ${loggedUser}`}</div>
        Painel Administrativo
      </div>
    </nav>
  )
}

export default Sidebar;