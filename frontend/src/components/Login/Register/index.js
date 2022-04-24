import React, { useState } from "react";
import Navbar from "../../Navbar";
import axios from 'axios';

function Register() {

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleInput = (e) => {
    e.presist();
    setRegisterInput({...registerInput, [e.target.name]: e.target.value})
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      phone: registerInput.phone,
      password: registerInput.password,
    }

    axios.post('/api/register', data).then(response => {
      
    })

  }

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
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label>Nome Completo</label>
                    <input type="" name="name" onChange={handleInput} value={registerInput.name} className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="" name="email" onChange={handleInput} value={registerInput.email} className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Telefone</label>
                    <input type="" name="phone" onChange={handleInput} value={registerInput.phone} className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Senha</label>
                    <input type="" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
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