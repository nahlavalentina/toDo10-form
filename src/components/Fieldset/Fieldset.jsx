import React from 'react'

const Fieldset = (props) => {
  return (
    <fieldset>
      <label>{props.title}</label>
      <input type={props.type}/>
    </fieldset>
  )
}

export default Fieldset
