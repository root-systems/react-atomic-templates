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

const ContentArea = styled.div`
    margin: 0 auto!important;
    padding: 0;
    max-width:  68.75em!important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

class Standard extends React.Component {
  render() {
    return (
      <Section>
        <ContentArea>
          {this.props.children}
        </ContentArea>
      </Section>
    )
  }
}

export default Standard
