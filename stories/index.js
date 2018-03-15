import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { SectionFullWidth, SectionStandard } from '../src/index'

storiesOf('Sections', module)
  .add('Standard', () => <SectionFullWidth>hello</SectionFullWidth>)
