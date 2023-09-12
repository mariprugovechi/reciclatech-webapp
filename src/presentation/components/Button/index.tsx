import { ReactNode } from "react"
import classes from './style.module.scss'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={classes.btn_style}>
      {children}
    </button>
  )
}