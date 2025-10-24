import { useState } from 'react'
import './Button.css'

export const Button = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="button" onClick={ () => setCount((count) => count + 1) }>
        count is { count }
      </button>
    </>
  )
}