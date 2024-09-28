import AButton from "./atoms/AButton"
import './ConfirmaAsistencia.css'
import NoviaSvg from "./svgs/NoviaSvg"
import NovioSvg from "./svgs/NovioSvg"
import PropTypes from "prop-types"

export default function ConfirmaAsistencia (props) {
  return <div className="confirma-asistencia">
    <div className="titulo">Confirma tu asistencia</div>
    <div><strong className="c-blue-dark">TU COMPAÑIA ES MUY IMPORTANTE PARA
      NOSOTROS EN ESTE DÍA TAN ESPECIAL. ES POR ELLO QUE TE AGRADECEREMOS
      CONFIRMAR TU ASISTENCIA ANTES DEL
      <span className="c-gold"> 15 DE NOVIEMBRE</span></strong></div>
    <div className="botones-asistencia">
      <div className="boton-asistencia">
        <NoviaSvg fill="var(--gold)" width="70"/>
        <AButton
          url="https://wa.me/51919565407"
          text="A LA NOVIA"
        />
      </div>
      <div className="boton-asistencia">
        <NovioSvg fill="var(--gold)" width="70"/>
        <AButton
          url="https://wa.me/51945849083"
          text="AL NOVIO"
        />
      </div>
    </div>
    <div className="propietario">
      <div>{ props.nombre }</div>
      <div className="linea"></div>
    </div>
    <div><strong className="c-blue-dark">HEMOS RESERVADO PARA TI:
      <span className="c-gold"> { props.pases } PASE(S)</span></strong>
      <div><small className="c-blue-dark">Los novios no disponen de alojamientos para invitados</small></div>
    </div>
  </div>
}
ConfirmaAsistencia.propTypes = {
  nombre: PropTypes.string.isRequired,
  pases: PropTypes.number.isRequired,
}
