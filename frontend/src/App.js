import './App.css';
import Login from './components/Login/index'
import Register from './components/Login/Register/index'
import Home from './components/Home/index';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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