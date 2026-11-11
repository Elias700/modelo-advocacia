import { institutionalValues } from '../data'
import { Icon } from '../../../shared/Icon'
import { unsplashImages } from '../../../core/site-config'

export function AboutSection() {
  return (
    <section id="escritorio" className="about section-pad" aria-labelledby="about-title">
      <div className="wrap about-layout">
        <div className="about-photo-wrap reveal-item">
          <img className="about-photo" src={unsplashImages.meeting} width="900" height="1100" loading="lazy" decoding="async" alt="Reunião profissional em ambiente de escritório contemporâneo" />
          <span className="image-caption">Imagem de ambiente · ilustrativa</span>
          <span className="about-photo-frame" aria-hidden="true" />
        </div>
        <div className="about-copy reveal-item">
          <p className="eyebrow"><span /> O escritório</p>
          <h2 id="about-title">Tradição, conhecimento<br />e <em>compromisso.</em></h2>
          <p className="about-lead">Uma relação jurídica responsável começa com escuta e informação clara.</p>
          <p className="about-text">Almeida &amp; Associados é uma identidade fictícia criada para demonstrar um site institucional. O conteúdo apresenta princípios de atendimento humanizado, discrição e análise cuidadosa, sem representar um escritório ou profissionais reais.</p>
          <div className="value-grid">
            {institutionalValues.map((value) => <article className="value-card" key={value.title}><Icon name={value.icon} size={20} /><div><h3>{value.title}</h3><p>{value.text}</p></div></article>)}
          </div>
        </div>
      </div>
      <div className="section-index wrap"><span>01</span><i /><span>INSTITUCIONAL</span></div>
    </section>
  )
}
