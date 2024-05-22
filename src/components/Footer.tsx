import { Link } from 'react-router-dom'
import Container from './Container'
import { Cat } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="pt-4">
      <Container className="flex flex-wrap items-center justify-between gap-2.5 rounded-t-lg bg-gray-800 p-5 text-white">
        <Link to="/" className="flex items-center gap-2.5 font-mono text-xl">
          CatWiki <Cat size={20} />
        </Link>
        <p className="text-sm font-light opacity-70">
          ©️ Created By Avior Kahalani - 2024
        </p>
      </Container>
    </footer>
  )
}
