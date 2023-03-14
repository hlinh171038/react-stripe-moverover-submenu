import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSideBar,openSubMenuBar,closeSubMenuBar} = useGlobalContext()

  const displaySideBar = (e)=>{
    let page =e.target.textContent;
    let coordinate = e.target.getBoundingClientRect();
    let center = (coordinate.left + coordinate.right)/2;
    let bottom = coordinate.bottom -3
    console.log(center,bottom);
    openSubMenuBar(page,{center,bottom});
  }

  const handleCloseSubLinks =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubMenuBar()

    }
  }
  return <div className='nav' onMouseOver={handleCloseSubLinks}>
            <div className="nav-center">
              <div className='nav-header'>
                <img src={logo} className="nav-logo" />
                <button className='btn toggle-btn'  onClick={openSideBar}>
                  <FaBars />
                </button>
              </div>
              <ul className='nav-links'>
                <li onMouseOver={displaySideBar}>
                  <button className='link-btn' >products</button>
                </li>
                <li onMouseOver={displaySideBar}>
                  <button className='link-btn'>developers</button>
                </li>
                <li onMouseOver={displaySideBar}>
                  <button className='link-btn'>company</button>
                </li>
              </ul>
            </div>
          </div>
}

export default Navbar
