import React from 'react'
import PropTypes from 'prop-types'
import './icon-lib.svg'

const SvgIcon = ({
  name,
  desc,
  fill,
  width,
  height,
  viewBox,
  refIconId,
  targetUrl
}) => (
  <a
    href={targetUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="track-group"
  >
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      aria-labelledby="title desc"
      fill={fill}
    >
      <title>{name}</title>
      <desc>{desc}</desc>
      <use xlinkHref={`#${refIconId}`} />
    </svg>
  </a>
)
SvgIcon.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  refIconId: PropTypes.string.isRequired,
  targetUrl: PropTypes.string
}
SvgIcon.defaultProps = {
  name: '',
  desc: '',
  width: '',
  height: '',
  viewBox: '',
  fill: '',
  targetUrl: ''
}
export default SvgIcon
