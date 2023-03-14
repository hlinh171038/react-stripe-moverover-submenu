import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

 const AppProvider = ({children}) =>{
    const [isSideBar,setIsSideBar] = useState(false)
    const [isSubMenu,setIsSubMenu] = useState(false)
    const [location,setLocation] = useState({})
    const [page,setPage] = useState({page:'',links:[]})

    const openSideBar =()=>{
        setIsSideBar(true)
    }
    const closeSideBar =()=>{
        setIsSideBar(false)
    }
    const openSubMenuBar =(text,coordinate)=>{
        const specificPage = sublinks.find(item=> {
            return item.page===text
        });
        setPage(specificPage);
        setLocation(coordinate);
        setIsSubMenu(true)
    }
    const closeSubMenuBar =()=>{
        setIsSubMenu(false)
    }
    return <AppContext.Provider 
                value={{
                    isSideBar,
                    isSubMenu,
                    openSideBar,
                    closeSideBar,
                    openSubMenuBar,
                    closeSubMenuBar,
                    location,
                    page
                }}
            >
        {children}
    </AppContext.Provider>
}

 const useGlobalContext =() =>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};
