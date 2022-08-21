import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Clients from './pages/Clients/Clients'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
    <Route path='/clientes' element={<Clients />}/>
    </Switch>
    {/* adicionar, switch e route de cada page, footer */}
    </BrowserRouter>
  )
}

export default Routes
