import { teamProfiles } from '../data'
import { Icon } from '../../../shared/Icon'
import { unsplashImages } from '../../../core/site-config'

export function TeamSection() {
  return (
    <section id="equipe" className="team section-pad" aria-labelledby="team-title">
      <div className="wrap">
        <div className="team-heading reveal-item"><div><p className="eyebrow"><span /> Nossa equipe</p><h2 id="team-title">Profissionais dedicados<br />à sua <em>confiança.</em></h2></div><p>Retratos e perfis fictícios, incluídos apenas para demonstrar a composição visual desta seção.</p></div>
        <div className="team-grid">
          {teamProfiles.map((person) => <article className="team-card reveal-item" key={person.name}>
            <div className="team-portrait-wrap"><img className="team-portrait" src={unsplashImages.team[person.image]} width="720" height="840" loading="lazy" decoding="async" alt={`Retrato ilustrativo associado ao perfil fictício de ${person.name}`} /><span className="portrait-label">Retrato ilustrativo</span></div>
            <div className="team-info"><span className="team-area">{person.area}</span><h3>{person.name}</h3><p>{person.description}</p><a href="#contato" aria-label={`Informações de contato demonstrativas sobre ${person.name}`}><Icon name="arrow" size={15} /></a></div>
          </article>)}
        </div>
        <p className="team-disclaimer">Os retratos são fotografias de terceiros licenciadas pelo Unsplash e não representam as pessoas fictícias nomeadas. Perfis ilustrativos; não indicam profissionais ou vínculos reais.</p>
      </div>
    </section>
  )
}
