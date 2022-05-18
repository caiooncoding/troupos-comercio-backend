import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading"></div>
          <Link className="nav-link" to="/admin/profile">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Categorias
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Painel Administrativo
      </div>
    </nav>
  )
}

export default Sidebar;