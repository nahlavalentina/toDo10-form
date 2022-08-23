import React from 'react'
import S from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    //componente fixo do site, em todas as páginas

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
        {/* como utiliza o navigate, não precisa da tag link importada do react router dom*/}
        <a className={S.link} onClick={handleClientClick}>Clientes</a>
        <a className={S.link} onClick={handleFormClick}>Cadastro</a>
      </nav>
    </header>
  )
}

export default Header
