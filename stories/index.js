import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import SectionStandard from '../src/sections/Standard'
import SectionFullWidth from '../src/sections/FullWdith'

storiesOf('Sections', module)
  .add('Fullwidth', () => 
    <SectionFullWidth>hello</SectionFullWidth>
  )
  .add('Standard', () => 
  <SectionStandard>hello</SectionStandard>
)