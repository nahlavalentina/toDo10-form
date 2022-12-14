import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Clients from './pages/Clients/Clients'
import FormOne from './pages/FormOne/FormOne'
import FormThree from './pages/FormThree/FormThree'
import FormTwo from './pages/FormTwo/FormTwo'
import Success from './pages/Success/Success'

// importa o componente principal header para mantê-lo fixado na página e, dentro de switch, tem todas as rotas das páginas para fazer o building funcionar, criando as conexões necessárias e validando as páginas.

const Routes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
    <Route path='/' element={<FormOne />}/>
    <Route path='/dados-2' element={<FormTwo />}/>
    <Route path='/dados-finalizar' element={<FormThree />}/>
    <Route path='/clientes' element={<Clients />}/>
    <Route path='/sucesso' element ={<Success />}/>
    </Switch>
    {/* adicionar, switch e route de cada page, footer */}
    </BrowserRouter>
  )
}

export default Routes
