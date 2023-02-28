

import { NavLink,Link } from 'react-router-dom'
// import Genre from './Genre'
import { useState } from 'react'
// import Body from './Genre'
// import Genre from './Genre'
import Body from './Body'



const Header = () => {

  
 

  return (
    <>
    <nav>
      <Link to={'/'} className="logo">Sawid Anime</Link>
      <ul className='ul'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/genre'>Genre</NavLink>
        
        </li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        
      </ul>
    </nav>
   
   </>
  )
}

export default Header
