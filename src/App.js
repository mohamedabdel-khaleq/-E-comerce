import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Products from './component/Products'
import Contact from './component/Contact'

export default function App() {
  return (
  <Router>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path='/about' element={<About />}/>
       <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  </Router>
  )
}
