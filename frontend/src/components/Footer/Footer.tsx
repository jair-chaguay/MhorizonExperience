// Footer.tsx
import React from 'react';
import { FOOTER_DATA } from '../../types/ctFooter';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { brand, navigation, contact, bottomBar } = FOOTER_DATA;

  return (
    <footer className="bg-blue-200 pt-20 pb-10 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-slate-700/50 pb-16">

        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 mb-6 group">
            <img src="/images/mhAlter.svg" className='h-9' alt="" />
          </a>
          <p className="text-sm leading-relaxed mb-6 font-light text-slate-400">
            {brand.description}
          </p>
          <a
            href={brand.corporateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-bold text-sm hover:text-white transition-colors group inline-flex items-center gap-1"
          >
            {brand.corporateText}
            <ArrowRight className='group-hover:translate-x-1 transition-transform' />
          </a>
        </div>

        <div className="md:ml-auto">
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
            {navigation.title}
          </h4>
          <ul className="space-y-3 text-sm font-light text-slate-400">
            {navigation.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-brand transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 md:ml-auto">
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">
            {contact.title}
          </h4>
          <ul className="space-y-4 text-sm font-light text-slate-400">
            {contact.info.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id} className="flex items-center gap-3">
                  <Icon className="text-brand w-5 h-5" />

                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-360 mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium tracking-wide">
        <p>
          {bottomBar.copyright} · <a href={bottomBar.privacyUrl} className="hover:text-brand transition-colors">Política de Privacidad</a>
        </p>
        <p className="mt-4 md:mt-0">
          Respaldado por <a href={bottomBar.backedByUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors font-bold">MHORIZON&nbsp;Corp.</a>
        </p>
      </div>
    </footer>
  );
};