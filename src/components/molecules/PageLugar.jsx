import "./PageLugar.css";
import FechasEventos from "../FechasEventos";
import RegalosNovios from "../RegalosNovios";

export default function PageLugar() {
  return <div className="page-full relative pagelugar">
    <div className="flores">
      <img
        src="/invitacion-a-boda/img/flores.png"
        className="position-top-left"
      />
      <img
        src="/invitacion-a-boda/img/flores.png"
        className="position-top-right"
      />
    </div>
    <FechasEventos />
    <RegalosNovios />
  </div>
}
