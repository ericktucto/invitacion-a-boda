import './PaletaColores.css';
import TernoSvg from './svgs/TernoSvg';
import VestidoSvg from './svgs/VestidoSvg';

export default function PaletaColores() {
  const colores = ['violet', 'dark-violet', 'amethyst', 'lilac', 'blue', 'sky'];
  return <div className="paleta">
    <div className="titulo">
      <strong>Vestimenta</strong>
    </div>
    <div>Formal</div>
    <div>
      <VestidoSvg height="50" width="50" fill="var(--lilac)" />
      <TernoSvg height="50" width="50" fill="var(--blue)" />
    </div>
    <div className="w-100">
      (solo la novia va de blanco)
    </div>
  </div>
}
