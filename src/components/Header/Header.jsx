import React from 'react'
import S from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    function handleClientClick() {
        navigate('/clientes')
    }

    function handleFormClick() {
        navigate('/')
    }

  return (
    <header className={S.container}>
      <h1>FillForm</h1>
      <nav>
        {/* mudar para Link, precisa ser nav bar lateral*/}
        <a className={S.link} onClick={handleClientClick}>Clientes</a>
        <a className={S.link} onClick={handleFormClick}>Cadastro</a>
      </nav>
    </header>
  )
}

export default Header
