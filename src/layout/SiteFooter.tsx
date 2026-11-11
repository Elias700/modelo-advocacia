import { practiceAreas } from '../features/home/data'
import { siteConfig } from '../core/site-config'
import { Icon } from '../shared/Icon'

const copyrightYear = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-column footer-about">
          <a className="footer-brand" href="#inicio"><span className="footer-monogram">A<span>&amp;</span>A</span><span><b>ALMEIDA &amp; ASSOCIADOS</b><small>ADVOCACIA</small></span></a>
          <p>Projeto demonstrativo de identidade institucional para advocacia. Conteúdo ilustrativo, sem vínculo com profissionais ou escritório real.</p>
          <span className="footer-demo-badge"><i /> DEMONSTRAÇÃO</span>
        </div>
        <div className="footer-column"><h2>Navegação</h2><a href="#escritorio">O escritório</a><a href="#atuacao">Áreas de atuação</a><a href="#equipe">Nossa equipe</a><a href="#atendimento">Atendimento</a><a href="#perguntas">Perguntas frequentes</a></div>
        <div className="footer-column"><h2>Áreas ilustrativas</h2>{practiceAreas.map((area) => <a href="#atuacao" key={area.title}>{area.title}</a>)}</div>
        <div className="footer-column footer-contact"><h2>Contato demonstrativo</h2><p><Icon name="mail" size={16} /> {siteConfig.contact.email}</p><p><Icon name="phone" size={16} /> {siteConfig.contact.phone}</p><span className="contact-muted">Canais fictícios, não monitorados.</span><a className="footer-contact-link" href="#contato">Ir ao formulário <Icon name="arrow" size={14} /></a></div>
      </div>
      <div className="wrap privacy-wrap"><details id="privacidade" className="privacy-details"><summary>Política de privacidade demonstrativa</summary><p>Esta página é um protótipo. O formulário não transmite, processa nem armazena as informações digitadas. Não há integração de analytics ou cookies próprios. Fontes e fotografias são carregadas de serviços externos, que podem receber dados técnicos de conexão conforme suas próprias políticas. Esta nota não substitui uma política de privacidade para uma operação real.</p></details></div>
      <div className="footer-bottom"><div className="wrap"><span>© {copyrightYear} Almeida &amp; Associados · Projeto demonstrativo</span><div className="footer-credit">{siteConfig.portfolioUrl ? <a href={siteConfig.portfolioUrl} target="_blank" rel="noreferrer">Desenvolvido por ER Web <Icon name="arrow" size={13} /></a> : <span>Desenvolvido por ER Web</span>}</div></div></div>
    </footer>
  )
}
