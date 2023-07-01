import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Videobg from './assets/img/hou.mp4'

import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'

function App() {
  return (
    <div className="app-container">
      <video className='video-bg' src={Videobg} autoPlay muted loop />
      <div className="content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
