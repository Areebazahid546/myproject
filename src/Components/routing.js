import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Register from '../pages/Register'
import Users from '../pages/Users'
import Editpage from '../pages/Editpage'

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/users' element={<Users />} />
                <Route path='/edit/:id' element={<Editpage />} />

            </Routes>
        </>
    )
}

export default Routing
