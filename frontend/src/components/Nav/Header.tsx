
export const Header = () => {
    const navLinks = "relative text-gray-200 font-medium text-[0.95rem] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:text-cyan-200 after:content-[''] after:absolute after:left-0 after:-bottom-[5px] after:h-[2px] after:w-0 after:bg-text-cyan-200 after:transition-all after:duration-300 hover:after:w-full"
  
    return (
    <header className="fixed py-6.25 px-0 w-full top-0 z-250 border-b bg-blue-200" id="navbar">
        <div className = "max-w-310 my-0 mx-auto px-[5%] flex justify-between items-center">
            <img src="/images/mh.svg" alt="MHORIZON Experience" className="h-8.75 object-contain"/>
             <nav className="flex gap-8 items-center">
                <a href="#origen" className= {navLinks}>
                    ¿Qué Somos?
                </a>
                <a href="#programa" className={navLinks}>
                    Programa Tributario
                </a>
                <a href="#beneficios" className={navLinks}>
                    Propuesta de Valor
                </a>
                <a href="#noticias" className={navLinks}>
                    Informativos
                </a>
                <a href="#campus" className={navLinks}>
                    <i className=""/> Campus Virtual
                </a>
             </nav>
            
        </div>

    </header>
  )
}
