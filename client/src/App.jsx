import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./components/styles/style.scss"

import LoginPage from "./components/pages/loginpage.jsx"
import Page404 from "./components/pages/page404.jsx"
import Dashboard from "./components/pages/Dashboard.jsx"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* login page */}
          <Route path='/' element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard />} />

          {/* 404 page */}
          <Route path='*' element={<Page404 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
