import PropTypes from 'prop-types'

export default function AButton(props) {
  return <a
    className="btn btn-primary"
    href={ props.url }
    target="_blank"
  >{ props.text }</a>
}
AButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
