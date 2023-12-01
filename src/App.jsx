import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Information from './pages/information/Information'
import NavbarTransparent from './components/navbar/NavbarTranparent'
import Photos from './pages/photos/Photos'


function App() {



  return (
    <>
      <HashRouter>

        <NavbarTransparent/>
        
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} /> 
          <Route path='/home'         element={<Home/>} />
          <Route path='/information'  element={<Information/>} />
          <Route path='/fotografia'   element={<Photos/>} />
          <Route path='/documental'   element={<Information/>} />
          <Route path='/blog'         element={<Information/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
