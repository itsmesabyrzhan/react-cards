import { useState } from 'react'
import cls from './Button.module.css'

export const Button = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className={ cls.button } onClick={ () => setCount((count) => count + 1) }>
        count is { count }
      </button>
    </>
  )
}