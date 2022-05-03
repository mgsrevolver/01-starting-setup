import React from 'react'
import './Card.css'

function Button(props) {
  const Button = 'button ' + props.className
  return <button className="red">Test Button</button>
}

export default Button
