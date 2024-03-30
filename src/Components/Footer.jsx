import React from 'react'

const Footer = () => {
  return (
    <footer>
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
