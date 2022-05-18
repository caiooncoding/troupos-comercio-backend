import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand ps-3" to="/admin">Painel Administrativo</Link>
    </nav>
  )
}

export default Navbar;