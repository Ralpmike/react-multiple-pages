import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer-item'>
        <p>2024 all rights reserved.</p>
      <div className='footer-socials'>
        <FaFacebook size={30} color='brown'/>
        <FaInstagramSquare size={30} color='brown'/>
        <FaTwitterSquare size={30} color='brown'/>
        <FaGithub size={30} color='brown'/>
      </div>
    </div>
  )
}

export default Footer