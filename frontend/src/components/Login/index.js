import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  })

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: login.email,
      password: login.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('api/login', data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token)
          localStorage.setItem('auth_name', res.data.username)
          
          navigate('/')
        }
        else if (res.data.status === 401) {
          swal("Erro", res.data.message, 'warning')
        }
        else {
          setLogin({ ...login, error_list: res.data.validation_errors })
        }
      })
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
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleInput} value={login.email} className="form-control" />
                    <span>{login.error_list.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Senha</label>
                    <input type="password" name="password" onChange={handleInput} value={login.password} className="form-control" />
                    <span>{login.error_list.password}</span>
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