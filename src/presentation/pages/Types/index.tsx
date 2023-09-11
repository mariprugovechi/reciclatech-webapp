import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { divStyle, sectionStyle } from "./style.css"
import { Title } from "@/presentation/components/Title"
import Link from "next/link"

export function TypesPage() {
  return (
    <section className={sectionStyle}>
      <Logo />
      <Container>
        <div className={divStyle}>
          <Link href="/tipos-lixo/lixo-eletronico">
            <Title style="first">
              Lixo eletrônico
            </Title>
          </Link>
          <Link href="/tipos-lixo/lixo-reciclavel">
            <Title style="first">
              Lixo reciclável
            </Title>
          </Link>
          <Link href="/tipos-lixo/como-separar">
            <Title style="first">
              Como separar o lixo
            </Title>
          </Link>
        </div>
      </Container>
      <Button>Próximo</Button>
    </section>
  )
}