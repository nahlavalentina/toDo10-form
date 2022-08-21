import React from 'react'
import S from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={S.container}>
      <h1>FillForm</h1>
      <nav>
        {/* mudar para Link, precisa ser nav bar lateral*/}
        <a className={S.link}>Clientes</a>
        <a className={S.link}>Cadastro</a>
      </nav>
    </header>
  )
}

export default Header
