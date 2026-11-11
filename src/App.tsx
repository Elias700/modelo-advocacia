import SiteFooter from './layout/SiteFooter'
import SiteHeader from './layout/SiteHeader'
import HomePage from './features/home/HomePage'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo"><HomePage /></main>
      <SiteFooter />
    </>
  )
}
