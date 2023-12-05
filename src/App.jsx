import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Information from './pages/information/Information'
import NavbarTransparent from './components/navbar/NavbarTranparent'
import Photos from './pages/photos/Photos'
import Album from './pages/album/Album'
import Footer from './components/footer/Footer'
import Documental from './pages/documental/Documental'
import Pdf from './pages/pdf/Pdf'
import BlogPage from './pages/blog/BlogPage'


function App() {



  return (
    <>
      <HashRouter>


        <NavbarTransparent/>

        
        <Routes>
          <Route path='/'                 element={<Navigate to="/home" />} /> 
          <Route path='/home'             element={<Home/>} />
          <Route path='/information'      element={<Information/>} />
          <Route path='/fotografia'       element={<Photos/>} />
          <Route path='/album/:id'        element={<Album/>} />
          <Route path='/documental'       element={<Documental/>} />
          <Route path='/blog'             element={<BlogPage/>} />
          <Route path='/pdf'              element={<Pdf/>} />

          <Route path='*'                 element={<h1> 404 Esta ruta no existe</h1>} />
        </Routes>

        <Footer/>

        
      </HashRouter>
    </>
  )
}

export default App
