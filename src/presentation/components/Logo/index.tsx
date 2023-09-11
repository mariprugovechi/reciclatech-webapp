import Image from "next/image";
import { divStyle } from "./style.css";

export function Logo() {
  return (
    <div className={divStyle}>
      <Image
        alt='Reciclatech'
        src='/logo.png'
        width={155}
        height={50}
      />
    </div>
  )
}