import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../IconTemplate/IconTemplate'

/* istanbul ignore if */
if (process.env.BROWSER) {
  require('./AppDownload.styl') // eslint-disable-line global-require
}

const AppDownload = ({ badgeIcons }) => (
  <div className="footer-apps">
    <h2>Download the App</h2>
    <div>
      {badgeIcons.map(icon => (
        <Icon {...icon} />
      ))}
    </div>
  </div>
)

AppDownload.propTypes = {
  badgeIcons: PropTypes.array.isRequired
}

export default AppDownload
