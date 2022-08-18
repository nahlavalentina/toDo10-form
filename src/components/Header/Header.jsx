import React from 'react'
import S from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={S.container}>
      <h1>FillForm</h1>
      <nav>
        <Link>Clientes</Link>
        <Link>Cadastro</Link>
      </nav>
    </header>
  )
}

export default Header
