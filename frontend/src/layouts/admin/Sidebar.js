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

          <Link class="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseProduct" aria-expanded="false" aria-controls="collapseProduct">
          <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
            Produtos
            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
          </Link>
          <div className='collapse' id="collapseProduct" aria-labelledby='headingOne' data-bs-parent="#sidenavAccordion">
            <nav className='sb-sidenav-menu-nested nav'>
              <Link className='nav-link' to="/admin/add-product">Adicionar Produto</Link>
              <Link className='nav-link' to="/admin/view-product">Visualizar Produtos</Link>
            </nav>
          </div>




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