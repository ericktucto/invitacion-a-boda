import './TimerCuenta.css'
import PropTypes from "prop-types"
import { useState, useEffect } from "react"

export default function ConfirmaAsistencia(props) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const targetDate = new Date("2024-12-14T10:30:00").getTime()
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = now - targetDate
      if (distance > 0) {
        const flag1 = 1000 * 60;
        const flag2 = 1000 * 60 * 60;
        const flag3 = 1000 * 60 * 60 * 24;

        function isLess10UsePrefixZero(n) {
          return n < 10 ? `0${n}` : n;
        }

        const currentDate = new Date(now);
        const targetDateObj = new Date(targetDate);

        let months =
          currentDate.getFullYear() * 12 +
          currentDate.getMonth() -
          (targetDateObj.getFullYear() * 12 + targetDateObj.getMonth());

        if (currentDate.getDate() < targetDateObj.getDate()) {
          months -= 1;
        }

        const remainingDistance = distance - months * 30 * flag3;

        setCountdown({
          months: isLess10UsePrefixZero(months),
          days: isLess10UsePrefixZero(Math.floor(remainingDistance / flag3)),
          hours: isLess10UsePrefixZero(Math.floor((remainingDistance % flag3) / flag2)),
          minutes: isLess10UsePrefixZero(Math.floor((remainingDistance % flag2) / flag1)),
          seconds: isLess10UsePrefixZero(Math.floor((remainingDistance % flag1) / 1000))
        })
      } else {
        clearInterval(timer)
        setCountdown({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return <div className="timer-cuenta">
    <img className="banner" src="/invitacion-a-boda/img/mirandonos.jpeg" alt="" />
    <div className="container-countdown">
      <div className="titulo">Todo nuestro tiempo juntos</div>
      <div className="container-display">
        <div className="number">{countdown.months}</div>
        <div className="number">{countdown.days}</div>
        <div className="number">{countdown.hours}</div>
        <div className="number">{countdown.minutes}</div>
        <div className="number">{countdown.seconds}</div>
        <div className="dobledots">meses</div>
        <div className="dobledots">días</div>
        <div className="dobledots">horas</div>
        <div className="dobledots">min</div>
        <div className="dobledots">seg</div>
      </div>
    </div>
    <img
      src="/invitacion-a-boda/img/floreslila.png"
      width="240"
    />
  </div>
}
ConfirmaAsistencia.propTypes = {
  nombre: PropTypes.string.isRequired,
  pases: PropTypes.number.isRequired,
}
