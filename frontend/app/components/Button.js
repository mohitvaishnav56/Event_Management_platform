'use client'
import { Router, useRouter } from 'next/navigation'
import React from 'react'
const Button = ({className, text, path}) => {
  const router = useRouter();
  const redirect = () => {
    router.push(`${path.toString()}`);
  }
  return (
    <button onClick={() => redirect({path})} className={`py-1.5 px-4 ${className}` }>
        {text}
    </button>
  )
}

export default Button