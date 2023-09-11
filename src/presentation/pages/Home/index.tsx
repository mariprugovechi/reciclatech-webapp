import { Button } from "@/presentation/components/Button"
import { Container } from "@/presentation/components/Container"
import { Logo } from "@/presentation/components/Logo"
import { sectionStyle, paragraphStyle } from "./style.css"
import Link from "next/link"

export function HomePage() {
  return (
    <section className={sectionStyle}>
      <Logo />
      <Container>
        <>
          <p>Bem-vindo ao</p>
          <p className={paragraphStyle}>Aqui sua contribuição faz a diferença no cuidado com o meio ambiente. </p>
          <p>Junte-se a nós para criar um futuro mais sustentável, onde cada dispositivo eletrônico descartado corretamente se transforma em uma oportunidade de preservar recursos preciosos e reduzir impactos nocivos.</p>
          <p className={paragraphStyle}>Explore nosso guia de reciclagem, encontre pontos de coleta próximos a você e acompanhe seu progresso na jornada rumo a um planeta mais limpo.</p>
          <p>Cada ação conta! Juntos, estamos construindo um amanhã mais verde e consciente.</p>
        </>
      </Container>
      <Link href="/tipos-lixo">
        <Button>Começar</Button>
      </Link>
    </section>
  )
}