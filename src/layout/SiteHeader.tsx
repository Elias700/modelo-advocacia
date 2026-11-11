import { useEffect, useRef, useState } from 'react'
import { Icon } from '../shared/Icon'

const links = [
  ['#inicio', 'Home'],
  ['#escritorio', 'O escritório'],
  ['#atuacao', 'Áreas de atuação'],
  ['#equipe', 'Nossa equipe'],
  ['#perguntas', 'Perguntas frequentes'],
] as const

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`header-wrap${scrolled ? ' is-scrolled' : ''}`}>
      <div className="demo-strip">Projeto demonstrativo · conteúdo ilustrativo</div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Almeida e Associados, início" onClick={closeMenu}>
          <span className="brand-monogram" aria-hidden="true">A<span>&amp;</span>A</span>
          <span className="brand-copy"><strong>ALMEIDA <i>&amp;</i> ASSOCIADOS</strong><small>ADVOCACIA</small></span>
        </a>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={23} />
        </button>
        <nav id="site-navigation" className={`navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          {links.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contato" onClick={closeMenu}>Entre em contato <Icon name="arrow" size={15} /></a>
        </nav>
      </header>
    </div>
  )
}
