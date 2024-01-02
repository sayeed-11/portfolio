import React, { useState,useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  const sideBar = useRef(null);
  const [isTrue, setIstrue] = useState(false);
  
  useEffect(() => {
    if(isTrue){
      sideBar.current.style.left = '0%';
    } else{
      sideBar.current.style.left = '-100%';
    }
  },[isTrue])

  const slideBar = () => {
      setIstrue(!isTrue);
  }
  return (
    <div className='nav-container'>
      <div className="nabvar">
        <div className="logo">
          <h1>hrithik</h1>
        </div>
        <div className="icon" onClick={slideBar}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="nav-content" ref={sideBar}>
          <ul>
            <li onClick={slideBar}><Link to={'/'} className='link'>Home</Link></li>
            <li onClick={slideBar}><Link to={'about'} className='link'>About</Link></li>
            <li onClick={slideBar}><Link to={'portfolio'} className='link'>Portfolio</Link></li>
            <li onClick={slideBar}><Link to={'resume'} className='link'>Resume</Link></li>
            <li onClick={slideBar}><Link to={'contact'} className='link'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
