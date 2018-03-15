import React from 'react';

import styled from 'styled-components';

// Create a <FullWidth> react component that renders a <section> with
// some padding and a papayawhip background
const FullWidth = styled.section`
  padding: 4em;
  background: papayawhip;
`;

FullWidth.displayName = 'Fullwidth Section';

export default FullWidth