import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  
  return (
    <>
    <div className={'navbar'}> 
      <div className='iconDH'>
      <img src='/public/DH.ico' alt='DH icono'></img>
      <h2>OdontoDH</h2>
      <div/>
      <nav className='nav-bar'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
      </nav>
      </div>
            
    </div>
    </>
  )
}

export default Navbar