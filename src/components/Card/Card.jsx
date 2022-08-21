import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.address}</h4>
    </div>
  )
}

export default Card
