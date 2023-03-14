import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'
const Submenu = () => {
  const {isSubMenu,openSubMenuBar,location,page} = useGlobalContext()
  const containerRef = useRef(null)
  const [columns,setColumns] = useState('col-2')

  useEffect(()=>{
    setColumns('col-2');
    let submenu = containerRef.current;
    const {center,bottom} = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if(page.links.length===3){
      setColumns('col-3')
    }
    if(page.links.length===4){
      setColumns('col-4')
    }
  },[location])
  return <div className={isSubMenu ? 'submenu show':'submenu'} ref={containerRef}>
            <h4>{page.page}</h4>
            <div className={`submenu-center ${columns}`}>
              {page.links.map((link,index)=>{
                const {label,icon,url} = link
                return <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              })}
            </div>
        </div>
}

export default Submenu
