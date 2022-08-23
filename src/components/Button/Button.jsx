import React from 'react'
import S from './Button.module.css'

const Button = (props) => {

    // component reutilizável em todas as pages form
  return (
   <button className={S.button} onClick={props.onclick}>
    {props.text}
   </button>
  )
}

export default Button
