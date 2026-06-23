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
      <div className="fixed inset-0 -z-10 h-full w-full bg-white">

        <div
          className="absolute inset-0 
            bg-size-[40px_40px] 
            bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div  className="relative z-10">
        <InscriptionModal />
        <WhatsAppFloat />
        <CookieBanner />
        <Hero />
        <Origen />
        <Programa />
        <ProgramaEsp />
        <Modalidades />
        <Director />
        <Noticias />
        <Faq />
        <Contacto />
        <Cta />
        <Footer />
      </div>

    </ModalProvider>
  )
}

export default App