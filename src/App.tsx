import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import UsuarioCadastro from './paginas/cadastro/UsuarioCadastro';
import { Provider } from 'react-redux';
import store from './store/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import CadastroCategorias from './components/categorias/cadastroCategorias/CadastroCategorias';




function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/home'element={<Home />}/>
        <Route path='/login'element={<Login />}/>
        <Route path='/cadastro'element={<UsuarioCadastro />}/>
        <Route path='/categorias'element={<ListaCategorias />}/>
        <Route path='/cadastrocategorias'element={<CadastroCategorias />}/>
      </Routes>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
