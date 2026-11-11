import { useState } from 'react'
import { faqItems } from '../data'
import { Icon } from '../../../shared/Icon'

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  return (
    <section id="perguntas" className="faq section-pad" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <div className="faq-heading reveal-item"><p className="eyebrow"><span /> Dúvidas comuns</p><h2 id="faq-title">Perguntas<br /><em>frequentes.</em></h2><p>Respostas demonstrativas, a revisar pelo escritório antes da publicação.</p></div>
        <div className="faq-list">{faqItems.map((item, index) => {
          const isOpen = openItem === index
          const answerId = `faq-answer-${index + 1}`
          return <article className={`faq-item reveal-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <h3><button id={`faq-question-${index + 1}`} type="button" className="faq-question" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenItem(isOpen ? null : index)}><span><i>{String(index + 1).padStart(2, '0')}</i>{item.question}</span><Icon className="faq-chevron" name="chevron" size={18} /></button></h3>
            <div className="faq-panel" id={answerId} role="region" aria-labelledby={`faq-question-${index + 1}`} aria-hidden={!isOpen} inert={!isOpen}>
              <div className="faq-panel-inner"><p>{item.answer}</p></div>
            </div>
          </article>
        })}</div>
      </div>
    </section>
  )
}
