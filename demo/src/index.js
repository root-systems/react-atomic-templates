import React, {Component} from 'react'
import {render} from 'react-dom'

import { SectionFullWidth, SectionStandard} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>layout Demo</h1>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
