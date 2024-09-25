import PropTypes from 'prop-types'

export default function PauseSvg(props) {
return (<svg 
  fill={ props.fill } height={ props.height } width={ props.width }
  xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"><g><path fill={ props.fill } d="M204.8,76.8v358.4c0,42.24-34.56,76.8-76.8,76.8s-76.8-34.56-76.8-76.8V76.8 C51.2,34.56,85.76,0,128,0S204.8,34.56,204.8,76.8z M384,0c-42.24,0-76.8,34.56-76.8,76.8v358.4c0,42.24,34.56,76.8,76.8,76.8 s76.8-34.56,76.8-76.8V76.8C460.8,34.56,426.24,0,384,0z"></path></g></svg>)
}

PauseSvg.propTypes = {
  fill: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
