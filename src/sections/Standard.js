import React from 'react';

import styled from 'styled-components';

// Create a <FullWidth> react component that renders a <section> with
// some padding and a papayawhip background
const Standard = styled.section`
  padding: 4em;
  background: papayawhip;
`;

Standard.displayName = 'Standard Section';

export default Standard