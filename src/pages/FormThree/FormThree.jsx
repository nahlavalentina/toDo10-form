import React from 'react'
import Fieldset from '../../components/Fieldset/Fieldset'
import Button from '../../components/Button/Button'

const FormThree = () => {
  return (
    <div>
      <Fieldset title='Data de Nascimento:'
      type='date'/>
      <Fieldset title='CPF:'
      type='number'/>
      <Fieldset title='Renda Mensal:'
      type='number'/>
      <Button text='Salvar'/>
    </div>
  )
}

export default FormThree
