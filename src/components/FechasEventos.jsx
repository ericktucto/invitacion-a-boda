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
/*
    <div className="seccion-fechas-eventos">
      <div className="svg-icon">
        <ConsejoSvg
          fill="#5A4584"
          height="60"
          width="60"
        />
      </div>
      <div className="titulo"><span>CONSEJO MATRIMONAL</span></div>
      <div>Complejo Polideportivo Nuevo Chancay</div>
      <div>Hora: 4:00 PM</div>
      <div className="btn-mapa">
        <AButton
          url="https://maps.app.goo.gl/keHLSLwd1iUyvJi66"
          text="UBICACIÓN"
          className="btn-mapa"
        />
      </div>
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
      <div className="titulo"><span>RECEPCION</span></div>
      <div>Complejo Polideportivo Nuevo Chancay</div>
      <div>Hora: 4:00 PM</div>
      <div className="btn-mapa">
        <AButton
          url="https://maps.app.goo.gl/keHLSLwd1iUyvJi66"
          text="UBICACIÓN"
          className="btn-mapa"
        />
      </div>
    </div>
    <div className="seccion-fechas-eventos">
      <ContractSvg
        fill="#5A4584"
        height="40"
        width="40"
      />
      <PaletaColores />
    </div>
  </div>
}
