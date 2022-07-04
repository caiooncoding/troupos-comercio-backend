import './App.css';
import Login from './components/Login/index'
import Register from './components/Login/Register/index'
import Home from './components/Home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './layouts/admin/Main';
import Categories from './components/Categories';
import Products from './components/Products';
import Users from './components/Users';
import ViewProduct from './components/Products/view';
import Development from './components/development/index';
import EditCategory from './components/Categories/edit';
import EditProduct from './components/Products/edit';


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
                    element={ <Development /> }
                />

                <Route 
                    path="/home"
                    element={ <Home /> }
                />
                
                <Route 
                    path="/login"
                    element={<Login/>}
                />

                <Route 
                    path="/register"
                    element={<Register/>}
                />

                <Route
                    path="/admin"
                    element={ <Main/> }
                />
                <Route
                    path="/admin/categories"
                    element={ <Categories/> }
                />

                <Route 
                    path='/admin/edit-category/:id'
                    element={ <EditCategory/> }
                />

                <Route
                    path="/admin/add-product"
                    element={ <Products/> }
                />
                <Route
                    path="/admin/view-product"
                    element={ <ViewProduct/> }
                />

                <Route 
                    path='/admin/edit-product/:id'
                    element={ <EditProduct/> }
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