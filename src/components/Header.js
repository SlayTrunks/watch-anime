

import { NavLink,Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'
// import Genre from './Genre'
import { useState } from 'react'
// import Body from './Genre'
// import Genre from './Genre'
import Body from './Body'



const Header = () => {
const [func,setFunc] = useState(false)
  const handleClick = () =>{
    setFunc(!func)
  }
 
 if(func){
  return(
    <nav className='responsive'>
      <Link to={'/'} className="res-logo">Sawid Anime</Link>
      <ul className='lists'>
        <li className='smth'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/genre'>Genre</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <div onClick={handleClick} className="burger2"><CiCircleRemove/></div>

    </nav>
  )
 }
  else{

    return (
      <>
      <nav>
        <Link to={'/'} className="logo">Sawid Anime</Link>
        <ul className='ul'>
          <li className='list'><NavLink to='/'>Home</NavLink></li>
          <li className='list'><NavLink to='/genre'>Genre</NavLink>
          
          </li>
          <li className='list'><NavLink to='/contact'>Contact Us</NavLink></li>
          
        </ul>
        <div onClick={handleClick} className="burger"><FaBars/></div>
      </nav>
     
     </>
    )
  }
}

export default Header
