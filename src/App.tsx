import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Country from './component/Country'
import Nav from './component/Nav'
import Weather from './component/Weather'

const App = () => {
  const navigate = useNavigate()

  return (
    <div>
      
      <Routes>
        <Route path='/country' element={<Country/>}/>
        <Route path='/weather/:capital' element={<Weather/>}/>
        <Route path='/' element={<Nav navigate={navigate}/>}/>
      </Routes>
    </div>
  )
}

export default App