import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  border-top-width: 1px;
  border-top-style: dotted;
  border-top-color: #ef7743;
  padding-top: 20px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`

class FullWidth extends React.Component {
  render() {
    return (
      <Section>
        {this.props.children}
      </Section>
    )
  }
}

export default FullWidth