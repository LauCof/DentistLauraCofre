import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer>
      <div>
      <button onClick={() => navigate(-1)} className='espacio'>BACK</button>
      </div>
      <p>Powered by</p>
      <img src="/public/images/DH.png" alt='DH-logo' width={100} />
      <div className="social-icons" width={10}>
      <a href="#"><img src='/public/images/ico-facebook.png' alt= 'facebook' /></a>
      <a href="#"><img src='/public/images/ico-instagram.png' alt= 'instagram' /></a>
      <a href="#"><img src='/public/images/ico-tiktok.png' alt= 'tiktok' /></a>
      <a href="#"><img src='/public/images/ico-whatsapp.png' alt= 'whatsapp' /></a>
      </div>     
  </footer>

    
  )
}

export default Footer
