import { useState } from 'react'
import './App.css'
import Header from './component/header' 
import Footer from './component/footer'
import Home from './page/Home'
import ServiceDetail from './page/ServiceDetail'

import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='header-cus'>
        <Header />
      </div>
      
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ServiceDetail' element={<ServiceDetail />} />
        </Routes>
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
     
   
 
    </div>
    
      
     
  )
}

export default App
