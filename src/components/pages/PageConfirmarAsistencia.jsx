import './PageConfirmarAsistencia.css'
import ConfirmaAsistencia from './../ConfirmaAsistencia'
import PropTypes from 'prop-types'

export default function PageConfirmarAsistencia(props) {
  return <div className="page-confirmar-asistencia page-full relative">
    <img
      src="/invitacion-a-boda/img/floreslila.png"
      width="240"
    />
    <ConfirmaAsistencia nombre={ props.nombre } pases={ props.pases }/>
    <img
      src="/invitacion-a-boda/img/floreslila.png"
      width="240"
    />
  </div>
}
PageConfirmarAsistencia.propTypes = {
  nombre: PropTypes.string.isRequired,
  pases: PropTypes.number.isRequired,
}
