import './TimerCuenta.css'
import PropTypes from "prop-types"
import  React, { useState, useEffect } from "react"

export default function ConfirmaAsistencia (props) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const targetDate = new Date("2024-12-15T00:00:00").getTime()
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now
      if (distance > 0) {
        const flag1 = 1000 * 60;
        const flag2 = 1000 * 60 * 60;
        const flag3 = 1000 * 60 * 60 * 24;

        function isLess10UsePrefixZero (n) {
          return n < 10 ? `0${n}` : n;
        }

        setCountdown({
          days:    isLess10UsePrefixZero(Math.floor(distance / flag3)),
          hours:   isLess10UsePrefixZero(Math.floor((distance % flag3) / flag2)),
          minutes: isLess10UsePrefixZero(Math.floor((distance % flag2) / flag1)),
          seconds: isLess10UsePrefixZero(Math.floor((distance % flag1) / 1000))
        })
      } else {
        clearInterval(timer)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return <div className="timer-cuenta">
    <img className="banner" src="/invitacion-a-boda/img/mirandonos.jpeg" alt="" />
    <div className="container-countdown">
      <div className="container-display">
        <div className="number">{ countdown.days }</div>
        <div className="dobledots">días</div>
        <div className="number">{ countdown.hours }</div>
        <div className="dobledots">horas</div>
        <div className="number">{ countdown.minutes }</div>
        <div className="dobledots">min</div>
        <div className="number">{ countdown.seconds }</div>
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
