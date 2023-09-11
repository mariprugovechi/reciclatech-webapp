import { ReactNode } from "react"
import { divStyle } from "./style.css"

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={divStyle}>
      {children}
    </div>
  )
}