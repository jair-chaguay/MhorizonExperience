import { useScroll } from "../../hooks/useScroll"
import { NAV_LINK_STYLES, NAV_ITEMS } from "../../utils/constants"

export const Header = () => {
    const isScrolled = useScroll(40);
    
    return (
        <header className={`fixed w-full top-0 z-250 bg-blue-200 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border-b border-transparent ${isScrolled ? 'py-3.75' : 'py-6.25'
            }`} id="navbar">
            <div className={`max-w-full mx-auto transition-all duration-500 flex justify-between items-center ${isScrolled ?
                'bg-[#171e27d9] backdrop-blur-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/5 py-3 px-7.5 rounded-full w-[90%] xl:w-full'
                : 'px-[5%] w--full'
                }`}>
                <img src="/images/mh.svg" alt="MHORIZON Experience" className="h-8.75 object-contain transition-all duration-500" />
                <nav className="hidden lg:flex gap-8 items-center">
                    {NAV_ITEMS.map((item) => (
                        <a key={item.href} href={item.href} className={NAV_LINK_STYLES}>
                            {item.label}
                        </a>
                    ))}
                    <a href="#campus" className="bg-[#32a09c26] text-cyan-200 py-2.5 px-6 rounded-full text-[0.95rem] font-bold flex items-center gap-2 border border-[#32a09c4d] transition-all duration-500 hover:bg-cyan-200 hover:text-white">
                        <i className="ph-bold ph-laptop" /> Campus Virtual
                    </a>
                </nav>
            </div>
        </header>
    )
}