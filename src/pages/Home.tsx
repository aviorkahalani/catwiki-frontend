import Container from '../components/Container'
import Benefits from '../components/home/Benefits'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <section>
      <Container>
        <Hero />
        <Featured />
        <Benefits />
      </Container>
    </section>
  )
}
