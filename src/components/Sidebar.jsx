import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { useStateContext } from '../contexts/ContextProvider'
import {links} from '../data/dummy'
import '../scss/Components/sidebar.scss'

const Sidebar = () => {
  const {activeMenu, setActiveMenu} = useStateContext()

  // Nav Links styling
  const activeLink = {
        textDecoration: "none",
        display: "flex", 
        alignItems: "center",
        gap: ".5rem",
        paddingLeft: "1.5rem",
        paddingTop: ".3rem",
        paddingBottom: ".25rem",
        borderRadius: "0.5rem",
  }
  
  const normalLink = {
    textDecoration: "none",
    color: "rgb(55 65 81)",
    display: "flex", 
    alignItems: "center",
    gap: ".5rem",
    paddingLeft: "1.5rem",
    paddingTop: ".3rem",
    paddingBottom: ".5rem",
    borderRadius: "0.5rem",
    margin: ".4rem"
  }
  

  // const normalLink = "flex, items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:light-gray m-2"

  return (
    <div className='sidebar-container md:overflow-hidden overflow-auto md:hover:overflow-auto'>
      {activeMenu && (
        <>
        <div className="logo-container">
          <Link className='dark:text-white text-slate-900' to="/" onClick={() => setActiveMenu(false)}>
            <SiShopware /> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button className='hover:bg-light-gray md:hidden block' type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

        <div className='sidebar-items-container mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  className='nav-link'
                  style={({isActive}) => isActive ? activeLink : normalLink}
                  // onClick={}
                  >
                    {link.icon}
                    <span>
                      {link.name}
                    </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  )
}

export default Sidebar