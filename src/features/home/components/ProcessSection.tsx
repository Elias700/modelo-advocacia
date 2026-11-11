import { processSteps } from '../data'
import { Icon } from '../../../shared/Icon'

export function ProcessSection() {
  return (
    <section id="atendimento" className="process section-pad" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-heading reveal-item"><div><p className="eyebrow light"><span /> Experiência e atendimento</p><h2 id="process-title">Clareza em cada<br /><em>etapa do caminho.</em></h2></div><p>Um fluxo ilustrativo para apresentar como uma relação de atendimento jurídico pode ser estruturada.</p></div>
        <div className="process-track"><span className="process-rail" aria-hidden="true"><i className="process-rail-fill" /></span><ol className="process-list">{processSteps.map((step) => <li className="process-step reveal-item" key={step.number}><span className="process-number">{step.number}</span><span className="process-dot"><Icon name="check" size={15} /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div>
        <p className="process-note">Etapas demonstrativas. O processo real depende das informações e procedimentos confirmados pelo escritório.</p>
      </div>
    </section>
  )
}
