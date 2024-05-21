import { Link } from 'react-router-dom'
import Container from './Container'
import { Cat } from '@phosphor-icons/react'

export default function Header() {
  return (
    <header className="py-4">
      <Container>
        <Link to="/" className="inline-flex items-center gap-2.5">
          CatWiki <Cat size={20} />
        </Link>
      </Container>
    </header>
  )
}
