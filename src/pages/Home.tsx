import Container from '../components/Container'
import BenefitsPreview from '../components/home/BenefitsPreview'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'

export default function Home() {
  return (
    <section>
      <Container>
        <Hero />
        <Featured />
        <BenefitsPreview />
      </Container>
    </section>
  )
}
