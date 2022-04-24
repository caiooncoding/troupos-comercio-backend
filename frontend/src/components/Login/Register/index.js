import React from "react";
import Navbar from "../../Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="'col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Registro</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Nome Completo</label>
                    <input type="" name="nome" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="" name="email" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Telefone</label>
                    <input type="" name="telefone" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Senha</label>
                    <input type="" name="senha" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirme a Senha</label>
                    <input type="" name="confirme_senha" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">Registre-se</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;