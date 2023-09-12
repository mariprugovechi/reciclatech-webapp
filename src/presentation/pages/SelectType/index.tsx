import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import classes from './style.module.scss'
import Image from "next/image"

export function SelectTypePage() {
  return (
    <section className={classes.section_style}>
      <Logo />
      <div className={classes.type_style}>
        <Image
          alt=""
          src='/icone1.png'
          width={30}
          height={75}
        />
        <Button>Lixo eletrônico</Button>        
      </div>
      <div className={classes.type_style}>
      <Image
        alt=""
        src='/icone2.png'
        width={84}
        height={75}
      />
      <Button>Lixo reciclável</Button>
      </div>
    </section>
  )
}