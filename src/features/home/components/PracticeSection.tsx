import { practiceAreas } from '../data'
import { Icon } from '../../../shared/Icon'

export function PracticeSection() {
  return (
    <section id="atuacao" className="practice section-pad" aria-labelledby="practice-title">
      <div className="wrap">
        <div className="section-heading reveal-item"><div><p className="eyebrow light"><span /> Áreas de atuação</p><h2 id="practice-title">Soluções jurídicas<br />para diferentes <em>necessidades.</em></h2></div><p>Conteúdo institucional informativo, sujeito à validação pelo escritório antes de qualquer publicação.</p></div>
        <div className="practice-grid">
          {practiceAreas.map((area, index) => <article className="practice-card reveal-item" key={area.title}>
            <div className="practice-card-top"><span className="practice-icon"><Icon name={area.icon} size={24} /></span><span className="card-index">{String(index + 1).padStart(2, '0')}</span></div>
            <h3>{area.title}</h3><p>{area.description}</p><a href="#contato">Saiba mais <Icon name="arrow" size={15} /></a>
          </article>)}
        </div>
        <p className="practice-note">As áreas e descrições são demonstrativas. Não indicam especialização ou serviços de profissionais reais.</p>
      </div>
    </section>
  )
}
