import './App.css';
import Login from './components/Login/index'
import Register from './components/Login/Register/index'
import Home from './components/Home/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './components/Loading';


axios.defaults.baseURL = "http://localhost:8088/";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />
                <Route
                    path="/login"
                    element={ <Login /> }
                />
                <Route
                    path="/register"
                    element={ <Register /> }
                />
            </Routes>
        </BrowserRouter>
  );
}

export default App;