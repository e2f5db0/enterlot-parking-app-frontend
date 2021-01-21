import React, { useState, useEffect } from 'react'
import carparkService from './services/carparkService'
import './App.css'
import Footer from './components/Footer'
import Body from './components/Body'

const App = () => {

  const [carparks, setCarparks] = useState([])

  useEffect(() => {
    carparkService.getAll()
      .then((data) => {
        setCarparks(data)
      })
  }, [])

  return (
    <div className="App" >
      <div className='App-inline'>
        <Body carparks={carparks} />
      </div>
      <div className='App-inline'>
        <Footer />
      </div>
    </div>
  )
}

export default App
