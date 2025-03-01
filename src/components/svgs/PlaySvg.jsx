import PropTypes from 'prop-types'

export default function PlaySvg(props) {
return <svg 
  fill={ props.fill } height={ props.height } width={ props.width }
  version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 47.604 47.604" ><g><path fill={ props.fill } d="M43.331,21.237L7.233,0.397c-0.917-0.529-2.044-0.529-2.96,0c-0.916,0.528-1.48,1.505-1.48,2.563v41.684 c0,1.058,0.564,2.035,1.48,2.563c0.458,0.268,0.969,0.397,1.48,0.397c0.511,0,1.022-0.133,1.48-0.397l36.098-20.84 c0.918-0.529,1.479-1.506,1.479-2.564S44.247,21.767,43.331,21.237z"></path></g></svg>
}
PlaySvg.propTypes = {
  fill: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
