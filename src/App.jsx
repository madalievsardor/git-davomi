import React from 'react'
import Section from './components/Section'
import Navbar from "./components/Navbar"
import Header from './components/Header'
import Section2 from './components/Section2'
import { Section3 } from './components/Section3'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
    <Section/>
    <Section2/>
    <Section3/>
    </div>
  )
}

export default App