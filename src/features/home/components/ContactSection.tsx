import { type FormEvent, useState } from 'react'
import { siteConfig } from '../../../core/site-config'
import { Icon } from '../../../shared/Icon'

export function ContactSection() {
  const [attempted, setAttempted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setAttempted(true)
  }

  return (
    <section id="contato" className="contact section-pad" aria-labelledby="contact-title">
      <div className="contact-ornament" aria-hidden="true"><span /><span /><span /></div>
      <div className="wrap contact-layout">
        <div className="contact-copy reveal-item"><p className="eyebrow light"><span /> Contato</p><h2 id="contact-title">Estamos à disposição<br />para <em>ouvir você.</em></h2><p className="contact-lead">Entre em contato com nossa equipe para obter informações sobre o atendimento.</p>
          <div className="contact-details"><p><Icon name="mail" size={19} /><span><small>E-MAIL DEMONSTRATIVO</small><b>{siteConfig.contact.email}</b></span></p><p><Icon name="phone" size={19} /><span><small>TELEFONE DEMONSTRATIVO</small><b>{siteConfig.contact.phone}</b></span></p></div>
          <p className="contact-demo-note">Os canais acima são fictícios e não recebem mensagens. O formulário desta página não envia nem armazena dados.</p>
          {siteConfig.contact.whatsAppUrl ? <a className="whatsapp-link" href={siteConfig.contact.whatsAppUrl} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Fale pelo WhatsApp</a> : <button className="whatsapp-link is-disabled" type="button" disabled aria-describedby="whatsapp-note"><Icon name="whatsapp" /> WhatsApp demonstrativo</button>}
          {!siteConfig.contact.whatsAppUrl && <small id="whatsapp-note" className="whatsapp-note">Link do WhatsApp não configurado.</small>}
        </div>
        <form className="contact-form reveal-item" onSubmit={handleSubmit} onChange={() => setAttempted(false)}>
          <div className="form-heading"><span>FALE CONOSCO</span><i /></div>
          <div className="form-row"><label htmlFor="contact-name">Nome completo<input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Seu nome" /></label><label htmlFor="contact-email">E-mail<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={160} placeholder="voce@exemplo.com" /></label></div>
          <div className="form-row"><label htmlFor="contact-phone">Telefone<input id="contact-phone" name="telephone" type="tel" autoComplete="tel" maxLength={24} placeholder="(00) 00000-0000" /></label><label htmlFor="contact-subject">Assunto<select id="contact-subject" name="subject" defaultValue="" required><option value="" disabled>Selecione um assunto</option><option>Direito Civil</option><option>Direito Trabalhista</option><option>Direito Empresarial</option><option>Direito de Família</option><option>Direito Imobiliário</option><option>Direito Previdenciário</option><option>Outro assunto</option></select></label></div>
          <label htmlFor="contact-message">Mensagem<textarea id="contact-message" name="message" rows={4} required maxLength={1200} placeholder="Descreva brevemente sua dúvida, sem incluir dados confidenciais." /></label>
          <label className="privacy-check"><input type="checkbox" name="privacy" required /><span>Li a <a href="#privacidade">política de privacidade demonstrativa</a>.</span></label>
          <div className="form-submit"><button className="button button-gold" type="submit">Validar formulário <Icon name="arrow" size={16} /></button><p>Sem transmissão de dados neste projeto demonstrativo.</p></div>
          {attempted && <p className="form-status" role="status" aria-live="polite">Campos validados neste navegador. O envio não está conectado; nenhuma informação foi enviada ou armazenada.</p>}
        </form>
      </div>
    </section>
  )
}
