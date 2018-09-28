import React from 'react'
import ReactDOM from 'react-dom'
import AppDownload from '../lib/AppDownload/AppDownload'

const svgIconData = [
  {
    desc: 'AppStore Badge icon.',
    height: '40px',
    fill: '',
    name: 'Playstore',
    refIconId: 'icon-lib_icon-appstore',
    targetUrl:
      'https://app.appsflyer.com/id1275654918?pid=ios_footer_desktop&amp;c=art_site&amp;af_sub1&amp;rfid=361685',
    viewBox: '0 0 91 32',
    width: '101px'
  },
  {
    displayText: 'PlayStore',
    height: '40px',
    fill: '',
    name: 'PlayStore',
    refIconId: 'icon-lib_icon-playstore',
    targetUrl: 'https://play.google.com/store/apps/details?id=com.art.art',
    title: 'PlayStore',
    viewBox: '0 0 96 32',
    width: '108px'
  }
]

ReactDOM.render(
  <AppDownload badgeIcons={svgIconData} />,
  document.getElementById('app')
)
