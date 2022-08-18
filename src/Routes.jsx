import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './components/Header/Header'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    {/* adicionar, switch e route de cada page, footer */}
    </BrowserRouter>
  )
}

export default Routes
