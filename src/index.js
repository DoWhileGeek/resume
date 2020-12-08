import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/main'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

ReactDOM.render(<Main />, document.getElementById('root'))
