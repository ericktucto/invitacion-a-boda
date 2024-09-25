import AButton from "./atoms/AButton"
import './ConfirmaAsistencia.css'

export default function ConfirmaAsistencia () {
  return <div className="confirma-asistencia">
    <div className="titulo">Confirma tu asistencia</div>
    <div>Por favor ayudamos confirmando tu asistencia</div>
    <AButton
      url="https://wa.me/5199999999"
      text="Confirmar asistencia"
    />
  </div>
}
