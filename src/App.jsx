import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Feature from './components/Feature/Feature'
import News from './components/News/News '
import Aboutus from './components/Aboutus/Aboutus'
import Looginn from './components/Looginn/Looginn'


const App = () => {
  return (
    <div className='app' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/Feature' element={<Feature/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Blog' element={<Aboutus/>}/>
        <Route path='/Looginn' element={<Looginn/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
