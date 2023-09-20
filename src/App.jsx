import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {Navbar, Footer, Sidebar, ThemeSettings} from './components'
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line} from "./pages"

import { useStateContext } from './contexts/ContextProvider'
import './scss/App.scss'

function App() {
  const { activeMenu } = useStateContext()

  return (
    <div className='app-container'>
      <BrowserRouter>
        <div className='setting-icon-container dark:bg-main-dark-bg'>
          <div>
            <TooltipComponent content='Settings' position='Top'>
              <button className='hover:drop-shadow-xl hover:bg-light-gray'>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
        {/* sidebar */}
        {activeMenu ? (
          <div className='sidebar active dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='sidebar w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}
        {/* Navbar */}
        <div className={
          `navbar-container dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "active" : ""}`
          } style={activeMenu ? {marginLeft: "19.5rem"} : {marginLeft: "0"}}>
            <div className='navbar md:static bg-main-bg dark:bg-main-dark-bg'>
              <Navbar />
            </div>
        </div>


        <div>
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce />}/>
            <Route path='/ecommerce' element={<Ecommerce />}/>

            {/* Pages */}
            <Route path='/orders' element={<Orders />}/>
            <Route path='/employees' element={<Employees />}/>
            <Route path='/customers' element={<Customers />}/>

            {/* Apps */}
            <Route path='/kanban' element={<Kanban />}/>
            <Route path='/editor' element={<Editor />}/>
            <Route path='/calendar' element={<Calendar />}/>
            <Route path='/color-picker' element={<ColorPicker />}/>

            {/* Charts */}
            <Route path='/line' element={<Line />}/>
            <Route path='/area' element={<Area />}/>
            <Route path='/bar' element={<Bar />}/>
            <Route path='/pie' element={<Pie />}/>
            <Route path='/financial' element={<Financial />}/>
            <Route path='/color-mapping' element={<ColorMapping />}/>
            <Route path='/pyramid' element={<Pyramid />}/>
            <Route path='/stacked' element={<Stacked />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
