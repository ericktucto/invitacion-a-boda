import "./PageBendiciones.css";

export default function PageBendiciones() {
  return <div className="page-full relative page-bendiciones">
    <img src="/img/banca.jpeg" alt="" />
    <div className="bendicion">
      <p className="mensaje-bendicion c-blue-dark">COMPARTIR NUESTRA BODA CON USTEDES, LO VA A CONVERTIR EN UN MOMENTO INOLVIDABLE.</p>
      <div className="padres">
        <h2 className="c-gold">Padres del novio</h2>
        <p className="c-blue-dark">JUAN MANUEL TUCTO LAUPA</p>
        <p className="c-blue-dark">JEMIMA CORZO OLÓRTEGUI</p>
        <h2 className="c-gold">Padres de la novia</h2>
        <p className="c-blue-dark">JULIO CÉSAR RUÍZ SÁNCHEZ</p>
        <p className="c-blue-dark">SANDRA ELENA RUÍZ CHUNGA</p>
      </div>
    </div>
  </div>
}
