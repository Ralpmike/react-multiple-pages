import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import '../styles/NavStyles.css'

const Nav = ({navState, setNavState}) => {

      const handleClick = () =>{
        setNavState(!navState)
      }
  return (
    <div className='nav-items'>
      <header>
          <h1>Raphael</h1>
        <nav>
          <ul className={navState? 'nav-list show' : 'nav-list'}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='blog'>Blog</NavLink></li>
           <li> <NavLink to='instagram'>Instagram</NavLink></li>
          </ul>
        </nav>
        <div className='react-icons' onClick={handleClick}>
          {!navState ? <FaBars size={30} />:  <FaTimes  size={30}/>}
        </div>
      </header>
    </div>
  )
}

export default Nav