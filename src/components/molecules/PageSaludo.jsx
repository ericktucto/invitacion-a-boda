import NamesED from './../NamesED'
import Music from './../atoms/Music'
import './PageSaludo.css'

export default function Page1() {
  return <div className="page1 page-full relative">
    <div className="w-100 h-100 background-photo"></div>
    <div className="message relative">
      <NamesED />
      <div>SI ME FALTA EL AMOR, NADA SOY;<br/>
        LO QUE DIOS HA UNIDO, NO LO SEPARE EL
        HOMBRE.</div>

      <div className="page1__footer">¡Nos casamos!</div>
      <Music url="/audio/music.m4a"/>
    </div>
  </div>
}
