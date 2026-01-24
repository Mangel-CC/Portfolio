import Navbar from "../components/Navbar"
import SpaceBackground from "../components/SpaceBackground"
import AnimatedBadge from '../components/AnimatedBadge'
import SocialMediaBtn from '../components/SocialMediaBtn'

function home() {

  return (
    <>
    <div>
      {/* Componente de fondo de estrellas */}
      <SpaceBackground />

      {/* Barra de navegación superior */}
      <Navbar />

      {/* Nombres */}
      <h1 className="jsx-e15e79b6c3dbeb19 font-mono font-bold text-4xl xs:text-[42px] iphone15promax:text-[44px] sm:text-[48px] ipad11:text-[54px] md:text-[58px] text-white leading-tight project-heading">
        Miguel Angel
      </h1>

      {/* Apellidos */}
      <h1 className="jsx-e15e79b6c3dbeb19 font-mono font-bold text-4xl xs:text-[42px] iphone15promax:text-[44px] sm:text-[48px] ipad11:text-[54px] md:text-[58px] text-red-500 leading-tight project-heading">
         Cortazar Castillo
      </h1>

      {/* Barra animada */}
      <AnimatedBadge/>

      {/* Botones de redes sociales */}
      <SocialMediaBtn/>
    
    </div>
    </>
  )
}

export default home
