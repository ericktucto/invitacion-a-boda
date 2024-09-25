import './App.css'
import PageSaludo from './components/molecules/PageSaludo'
import ConfirmaAsistencia from './components/ConfirmaAsistencia'
import GraciasDespedida from './components/GraciasDespedida'
import PageFechas from './components/molecules/PageFechas'
import PageBendiciones from './components/molecules/PageBendiciones'
import PageLugar from './components/molecules/PageLugar'

function App() {
  return (
    <>
      <PageSaludo />
      <PageFechas />
      <PageBendiciones />
      <PageLugar />
      <ConfirmaAsistencia />
      <GraciasDespedida />
    </>
  )
}

export default App
