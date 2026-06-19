import { ModalProvider } from "./components/ModalContext"; 
import { InscriptionModal } from "./components/InscriptionModal"; 
import { WhatsAppFloat } from "./components/WhatsAppFloat";

import { Contacto } from "./components/Contacto/Contacto"
import { Director } from "./components/Director/Director"
import { Faq } from "./components/Faq/Faq"
import { Cta } from "./components/Footer/Cta"
import { Footer } from "./components/Footer/Footer"
import { Modalidades } from "./components/Modalidades/Modalidades"
import { Noticias } from "./components/Noticias/Noticias"
import { Origen } from "./components/Origen/Origen"
import { Programa } from "./components/Programa/Programa"
import { ProgramaEsp } from "./components/Programa/ProgramaEsp"
import { Hero } from "./pages/Hero"
import { CookieBanner } from "./components/Analytics/CookieBanner";

function App() {
  return (
    <ModalProvider>
      
      <InscriptionModal /> 
      <WhatsAppFloat /> 
      <CookieBanner />
      <Hero/>   
      <Origen/>  
      <Programa/> 
      <ProgramaEsp/> 
      <Modalidades/>
      <Director/>
      <Noticias/>
      <Faq/>
      <Contacto/>
      <Cta/>
      <Footer/>
      
    </ModalProvider>
  )
}

export default App