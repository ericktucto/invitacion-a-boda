import "./PageLugar.css";
import FechasEventos from "../FechasEventos";
import RegalosNovios from "../RegalosNovios";

export default function PageLugar() {
  return <div className="page-full relative pagelugar">
    <img src="/img/flores.png" alt="" className="position-top-right" width="240" />
    <img src="/img/flores.png" alt="" className="position-top-left" width="240" />
    <FechasEventos />
    <RegalosNovios />
  </div>
}
