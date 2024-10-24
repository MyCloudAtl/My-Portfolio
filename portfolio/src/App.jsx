import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
 
  return (
    <>
      <div className="App-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App
