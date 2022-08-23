import React from 'react'
import S from './Success.module.css'

const Success = () => {
    // tela final em caso de sucesso em todas as etapas do formulario

  return (
    <div className={S.container}>
      <h3>Usuário cadastrado com sucesso!</h3>
    </div>
  )
}

export default Success
