import cls from './Button.module.css'
import type { ReactNode, MouseEventHandler } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  variant?: ButtonVariant
}

export const Button = ({ onClick, children, variant = 'primary' }: ButtonProps) => {

  return (
    <button className={ `${ cls.button } ${ cls[variant] }` } onClick={ onClick }>
      { children }
    </button>
  )
}