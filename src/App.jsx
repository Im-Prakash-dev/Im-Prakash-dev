import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import LocalRouter from './router/Router'

const App = () => {
  return (
    <Router>
    <div className=' overflow-x-hidden text-neutral-300 antialiased 
     selection:text-cyan-300 selection:bg-cyan-950'>
      <div className="maincontainer flex gap-3 mx-auto  absolute top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="sidebar">
          <Navbar/>
        </div>
        <div className="content ">
          <LocalRouter/>
        </div>
      </div>
    </div>
    </Router>

  )
}

export default App;