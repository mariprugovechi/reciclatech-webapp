import { ReactNode } from "react"
import { FaCaretDown, FaCaretRight } from "react-icons/fa"
import { firstStyle, secondStyle } from "./style.css"

interface ButtonProps {
  style: 'first' | 'second'
  children: ReactNode
}

export function Title({ style, children }: ButtonProps) {
  return (
    <div className={style === 'first' ? firstStyle : secondStyle}>
      {children}
      {style === 'first' ? (
        <FaCaretRight />
      ) : (
        <FaCaretDown />
      )}
    </div>
  )
}