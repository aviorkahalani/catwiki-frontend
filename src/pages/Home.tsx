import Container from '../components/Container'
import BenefitsPreview from '../components/home/BenefitsPreview'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import { useFetchCatBreedsQuery } from '../store'

export default function Home() {
  const { data: breeds, isLoading } = useFetchCatBreedsQuery()

  return (
    <section>
      <Container>
        <Hero />
        <Featured breeds={breeds} isLoading={isLoading} />
        <BenefitsPreview />
      </Container>
    </section>
  )
}
