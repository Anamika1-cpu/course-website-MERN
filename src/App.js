import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Layout/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Courses from './components/Courses/Courses'

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>

    </Routes>
  </Router>
}

export default App