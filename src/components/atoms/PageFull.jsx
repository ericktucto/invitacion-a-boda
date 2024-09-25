import PropTypes from 'prop-types'
import './PageFull.css'

export default function PageFull(props) {
  return <div className="page-full relative">
    { props.children }
  </div>
}
PageFull.propTypes = {
  children: PropTypes.node
}
