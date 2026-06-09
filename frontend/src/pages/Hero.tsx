import { HeroN } from "../components/Hero/HeroN"
import { Stats } from "../components/Hero/Stats"
import { Header } from "../components/Nav/Header"

export const Hero = () => {
  return (
    <div>
      <Header />
        <HeroN/>
        <Stats/>
    </div>
        
  )
}
