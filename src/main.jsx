import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { registerSW } from 'virtual:pwa-register'

import config from './config'
// console.log(config)

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
