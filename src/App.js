import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import Planificacion from './components/Planificacion';
import Cierre from './components/Cierre';
const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/planificacion' element={<Planificacion />} />
        
        <Route path='/cierre' element={<Cierre />} />
        {/* Puedes agregar más rutas para las otras fases */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
 