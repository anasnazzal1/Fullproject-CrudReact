
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Footer from './component/footer/Footer'
import Contact from './pages/contact/Contact'

import CreateUser from './pages/create/CreateUser'
import Details from './pages/details/Details'
import Edit from './pages/edit/Edit'
import Header from './component/header/Header'
function App() {


  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/CreateUser' element={<CreateUser/>}/>
       <Route path='/details/:userid' element={<Details/>}/>
       <Route path='/Edit/:userid' element={<Edit/>}/>
    </Routes>
    <Footer/>
    </>

  )
}

export default App
