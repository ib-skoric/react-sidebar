import React from 'react'
import { FaBars } from 'react-icons/fa'
import App from './App'
import { useGlobalContext } from './context'

const Home = () => {

  const {openSidebar, openModal} = useGlobalContext();

  return(
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars/>
      </button>
      <button className="btn" onClick={openModal}>Show Modal</button>
    </main>
    )
}

export default Home
