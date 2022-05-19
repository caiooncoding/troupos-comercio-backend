import './App.css';
import Login from './components/Login/index'
import Register from './components/Login/Register/index'
import Home from './components/Home/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Main from './layouts/admin/Main';
import Categories from './components/Categories';
import Products from './components/Products';
import Users from './components/Users';


axios.defaults.baseURL = "http://localhost:8088/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
})

function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />
                
                <Route 
                    path="/login">
                    {localStorage.getItem('auth_token' ?  <Navigate to="/" /> : <Login/>)}
                </Route>

                <Route 
                    path="/register">
                    {localStorage.getItem('auth_token' ? <Navigate to="/" /> : <Register/>)}
                </Route>

                <Route
                    path="/admin"
                    element={ <Main/> }
                />
                <Route
                    path="/admin/categories"
                    element={ <Categories/> }
                />
                <Route
                    path="/admin/products"
                    element={ <Products/> }
                />
                <Route
                    path="/admin/users"
                    element={ <Users/> }
                />
                

            </Routes>
        </BrowserRouter>
  );
}

export default App;