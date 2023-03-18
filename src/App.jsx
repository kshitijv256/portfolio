import { useState } from 'react'
import './App.css'
import Intro from './components/intro'
import Modal from './components/modal'
import Nav from './components/nav'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <Modal show={show} setShow={setShow}/>
    <Nav/>
    <Intro />
    <Projects />
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
