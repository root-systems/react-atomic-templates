import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { SectionFullWidth, SectionStandard } from '../src/sections'

storiesOf('Sections', module)
  .add('Fullwidth', () => 
    <SectionFullWidth>hello</SectionFullWidth>
  )
  .add('Standard', () => 
  <SectionStandard>hello</SectionStandard>
)