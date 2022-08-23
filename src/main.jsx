import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import './style/reset.css'

// pagina principal que renderiza componentes, paginas e rotas do site. Importa arquivo routes e está conectado com index.html

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
)
