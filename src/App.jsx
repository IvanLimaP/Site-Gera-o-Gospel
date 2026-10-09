import { useState } from 'react'
import './App.css'
import './styles/global.css'

import { Routes, Route } from "react-router-dom";


import Home from './pages/Home/Home';
import PageMusicas from './pages/PageMusicas/pageMusicas'
import PagePalavraGospel from './pages/PagePalavraGospel/pagePalavraGospel'



function App() {
  return (

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* MÚSICAS */}
        <Route
          path="/PageMusicas"
          element={<PageMusicas />}
        />

        {/* Palavra Gospel */}
        <Route 
        path="/PagePalavraGospel"
        element={<PagePalavraGospel />}
        />

      </Routes>

  );
}

export default App;
