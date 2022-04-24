import React from "react";
import Navbar from "../Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="'col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="" name="email" className="form-control" value="" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Senha</label>
                    <input type="" name="senha" className="form-control" value="" />
                  </div>
                  <div className="d-flex mb-3 justify-content-between">
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    <button className="btn btn-primary"><a href="/register">Registre-se</a></button>
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

export default Login;