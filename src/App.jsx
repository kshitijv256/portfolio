import { useState } from 'react'
import './App.css'
import Intro from './components/intro'
import Modal from './components/modal'
import Nav from './components/nav'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    <Nav/>
    <Intro />
    </>
  )
}

export default App
