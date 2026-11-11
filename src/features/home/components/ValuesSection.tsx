import { differentiators } from '../data'

export function ValuesSection() {
  return (
    <section className="principles section-pad" aria-labelledby="principles-title">
      <div className="wrap">
        <div className="principles-heading reveal-item"><p className="eyebrow"><span /> Princípios</p><h2 id="principles-title">Uma atuação jurídica<br />pautada em <em>princípios.</em></h2></div>
        <div className="principles-list">{differentiators.map((item) => <article className="principle-row reveal-item" key={item.number}><span className="principle-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="principle-mark" aria-hidden="true">↗</span></article>)}</div>
      </div>
    </section>
  )
}
