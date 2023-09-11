import { ReactNode } from "react"
import { buttonStyle } from "./style.css"

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={buttonStyle}>
      {children}
    </button>
  )
}