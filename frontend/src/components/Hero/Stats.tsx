import { STAT_ITEMS } from "../../types/stats.constants"

export const Stats = () => {
  return (
    <section className="bg-[#32A09C] py-3.75 relative z-10 w-full">
      <div className="max-w-310 mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 lg:gap-3.75 text-center text-white items-center">
        {STAT_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center justify-center"
            data-aos="fade-up" 
            data-aos-delay={item.aosDelay}
          >
            <i className={`${item.icon} text-[1.8rem] mb-1.25 text-white opacity-100`}></i>
            
            <h3 className="text-white text-[1.2rem] mb-0.5 font-extrabold font-Jakarta leading-[1.2] tracking-[-0.02em]">
              {item.title}
            </h3>

            <p className="m-0 text-[0.75rem] font-semibold uppercase tracking-[1px] font-Inter text-white">
              {item.subtitle}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
