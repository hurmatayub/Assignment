import React from 'react'
import { Navbar } from './Components/Navbar'
import All from './pages/All'
import Premium from './pages/Premium'
import Formal from './pages/Formal'
import Casual from './pages/Casual'
import Contact from './pages/Contact'


function App() {


  return (
      <div>
        <Navbar />
        <All />
        <Premium />
        <Formal />
        <Casual />
        <Contact />
      </div>
  )
}

export default App


   
