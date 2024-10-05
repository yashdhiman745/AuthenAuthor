import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bar from './Components/Bar'
import Signup from './Components/Signup'
import "./App.css";
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './PrivateRoute'
import Edituser from './Components/Edituser'

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Bar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route path="/edituser/:id" element={<Edituser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App