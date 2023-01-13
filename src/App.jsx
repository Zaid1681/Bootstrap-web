import { useState } from 'react'
import './App.css'
import { Navbar , Header , About, Services, Portfolio, Team, Contact, Footer } from './Container'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <About /> */}
      <div className="data__line"></div>
      <Services />
      <div className="data__line"></div>
      <Portfolio />
      <div className="data__line"></div>
      <Team />
      <div className="data__line"></div>
      <Contact />
      <Footer />




    </div>
  )
}

export default App
