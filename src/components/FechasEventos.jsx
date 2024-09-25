import AButton from "./atoms/AButton"
import './FechasEventos.css'
import PaletaColores from "./PaletaColores"
import ConsejoSvg from "./svgs/ConsejoSvg"
import ContractSvg from "./svgs/ContractSvg"

/*
    <div className="seccion-fechas-eventos">
      <div className="svg-icon">
        <ContractSvg
          fill="#5A4584"
          height="40"
          width="40"
        />
      </div>
      <div className="titulo">MATRIMONIO CIVIL</div>
      <div>14 / 12 / 24 </div>
    </div>
    */
export default function FechasEventos() {
  return <div className="contenedor-fechas-eventos">
    <div className="seccion-fechas-eventos">
      <div className="svg-icon">
        <ConsejoSvg
          fill="#5A4584"
          height="60"
          width="60"
        />
      </div>
      <div className="titulo">CEREMONIA</div>
      <div>Calle Simón Bolivar S/N Mz. 59 Lt. 16-17, Bernal, Piura</div>
      <div>Hora: 3:00 PM</div>
      <div className="btn-mapa">
        <AButton
          url="https://maps.app.goo.gl/1skG8mNehRjjm5Lo9"
          text="MAPA"
          className="btn-mapa"
        />
      </div>
    </div>
    <div className="seccion-fechas-eventos">
      <div className="titulo">RECEPCION</div>
      <div>Complejo Polideportivo Bernal</div>
      <div>Hora: 5:00 PM</div>
      <div className="btn-mapa">
        <AButton
          url="https://maps.app.goo.gl/keHLSLwd1iUyvJi66"
          text="MAPA"
          className="btn-mapa"
        />
      </div>
    </div>
    <div className="seccion-fechas-eventos">
      <PaletaColores />
    </div>
  </div>
}
