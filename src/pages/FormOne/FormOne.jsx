import React from 'react'
import Button from '../../components/Button/Button'
import Fieldset from '../../components/Fieldset/Fieldset'

const FormOne = () => {
  return (
    <div>
      <Fieldset title='Nome:'
      type='text'/>
      <Fieldset title='Sobrenome:'
      type='text'/>
      <Fieldset title='Email:'
      type='text'/>
      <Fieldset title='Telefone:'
      type='number'/>
      <Button text='Próximo'/>
    </div>
  )
}

export default FormOne
