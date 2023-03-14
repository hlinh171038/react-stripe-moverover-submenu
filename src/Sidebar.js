import React from 'react'
import phoneImg from './images/phone.svg'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSideBar,openSideBar,closeSideBar} = useGlobalContext()
  return <div className={isSideBar ? 'sidebar-wrapper show':'sidebar-wrapper'}>
            <div className='sidebar'>
              <button className='close-btn' onClick={closeSideBar}>
                <FaTimes/>
              </button>
              <div className="sidebar-links">
                {sublinks.map(sub =>{
                  const {links,page}=sub
                  return <article>
                    <h4>{page}</h4>
                    <div className='sidebar-sublinks'>
                      {links.map(link=>{
                        const {label,icon,url} = link;
                        return <a href={url}>
                          {icon}
                          {label}
                        </a>
                      })}
                    </div>
                  </article>
                })}
              </div>
            </div>
        </div>
}

export default Sidebar
