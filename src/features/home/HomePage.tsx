import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { unsplashImages } from '../../core/site-config'
import { Icon } from '../../shared/Icon'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FaqSection } from './components/FaqSection'
import { PracticeSection } from './components/PracticeSection'
import { ProcessSection } from './components/ProcessSection'
import { TeamSection } from './components/TeamSection'
import { ValuesSection } from './components/ValuesSection'

export default function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = pageRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 26, opacity: 0, duration: 0.85, stagger: 0.11, ease: 'power3.out', clearProps: 'all' })
      gsap.from('.hero-portrait-wrap', { x: 40, opacity: 0, duration: 1.15, ease: 'power2.out', delay: 0.15, clearProps: 'all' })
      gsap.from('.hero-line', { scaleX: 0, transformOrigin: 'left center', duration: 1.1, delay: 0.5, ease: 'power2.inOut', clearProps: 'transform' })

      gsap.utils.toArray<HTMLElement>('.reveal-item', root).forEach((element) => {
        gsap.from(element, { y: 26, opacity: 0, duration: 0.68, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })

      if (window.innerWidth > 760 && window.matchMedia('(pointer: fine)').matches) {
        gsap.to('.hero-geometry', { y: -20, rotate: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 } })
        gsap.to('.about-photo', { yPercent: -3, ease: 'none', scrollTrigger: { trigger: '.about', start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
      }

      const processLine = root.querySelector<HTMLElement>('.process-rail-fill')
      if (processLine) {
        const horizontal = window.innerWidth > 760
        gsap.fromTo(processLine, horizontal ? { scaleX: 0 } : { scaleY: 0 }, {
          ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }),
          ease: 'none',
          scrollTrigger: { trigger: '.process-list', start: 'top 75%', end: 'bottom 70%', scrub: 0.6 },
        })
      }
    }, root)

    return () => context.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <p className="eyebrow light"><span /> ADVOCACIA · PROJETO DEMONSTRATIVO</p>
            <h1 id="hero-title">Compromisso com a justiça.<br /><em>Excelência em cada decisão.</em></h1>
            <p className="hero-text">Atuação jurídica estratégica, pautada pela ética, transparência e atenção às necessidades de cada cliente.</p>
            <div className="hero-actions"><a className="button button-gold" href="#atuacao">Conheça nossas áreas <Icon name="arrow" size={16} /></a><a className="button button-outline" href="#contato">Fale com nossa equipe <Icon name="arrow" size={16} /></a></div>
            <div className="hero-principle"><span className="hero-line" /><span>Ética <i>·</i> Clareza <i>·</i> Responsabilidade</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-geometry" aria-hidden="true"><span className="geometry-orbit orbit-one" /><span className="geometry-orbit orbit-two" /><span className="geometry-core" /></div>
            <figure className="hero-portrait-wrap"><img className="hero-portrait" src={unsplashImages.hero} width="880" height="1080" fetchPriority="high" alt="Retrato profissional ilustrativo; não representa integrante do escritório fictício" /><figcaption>Retrato ilustrativo · Unsplash</figcaption></figure>
            <span className="hero-visual-index" aria-hidden="true">A&amp;A <i>—</i> 01</span>
          </div>
        </div>
        <a className="scroll-cue" href="#escritorio"><span className="scroll-cue-line" /><span>Explore o escritório</span><Icon name="chevron" size={14} /></a>
        <span className="hero-vertical-label" aria-hidden="true">ALMEIDA &amp; ASSOCIADOS · ADVOCACIA</span>
      </section>
      <AboutSection />
      <PracticeSection />
      <ValuesSection />
      <TeamSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </div>
  )
}
