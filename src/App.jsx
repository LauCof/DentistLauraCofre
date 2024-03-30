import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs"
import {Route, Routes} from "react-router-dom"
import React, {useState} from "react";
import './index.css'

function App() {
  
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Página no encontrada...</h1>}/>
        </Routes>
          <Footer/>
        
      </>
  );
}

export default App;
