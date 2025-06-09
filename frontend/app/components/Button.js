import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={`py-1.5 px-4 ${className}` }>
        {text}
    </button>
  )
}

export default Button