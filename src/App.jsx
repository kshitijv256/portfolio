import { useState } from 'react'
import './App.css'
import Intro from './components/intro'
import Modal from './components/modal'
import Nav from './components/nav'
import Projects from './components/projects'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <Nav/>
    <Intro />
    <Projects />
    </>
  )
}

export default App
