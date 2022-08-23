import React from 'react'

const Card = (props) => {
    {!!client ? client.name : ''}
  return (
    <div>
    <article>
        <small>Nome:</small>
        <p>{props.name} {props.last}</p>
    </article>
    <article>
        <small>Email:</small>
        <p>{props.email}</p>
    </article>
    <article>
        <small>CEP:</small>
        <p>{props.cep}</p>
    </article>
    <article>
        <small>Endereço:</small>
        <p>{props.address}</p>
    </article>
</div>  
  )
}

export default Card
