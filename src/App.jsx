import './App.css'
import PageSaludo from './components/molecules/PageSaludo'
import PageFechas from './components/molecules/PageFechas'
import PageBendiciones from './components/molecules/PageBendiciones'
import PageLugar from './components/molecules/PageLugar'
import PageConfirmarAsistencia from './components/pages/PageConfirmarAsistencia'
import PageTexto from './components/pages/PageTexto'
import { useEffect, useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')
  const [pases, setPases] = useState(0)
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    setNombre(search.get("nombre", ""))
    setPases(+search.get("pases", 0))
  }, [nombre, pases]);
  return (
    <>
      <PageSaludo />
      <PageFechas />
      <PageBendiciones />
      <PageLugar />
      <PageConfirmarAsistencia nombre={nombre} pases={pases}/>
      <PageTexto />
    </>
  )
}

export default App
