import "./PageFechas.css"
import FechaYMensaje from "../FechaYMensaje";

export default function PageFechas() {
  return <div className="pagefechas page-full relative overflow-hidden">
    <img src="/img/flores.png" alt="" className="position-top-right" width="240" />
    <div className="pagefechas__container relative">
      <p className="c-gold">Te invitamos a</p>
      <p className="c-blue-dark">Nuestra</p>
      <p className="c-blue-dark">Boda</p>
      <FechaYMensaje />
    </div>
  </div>
}
