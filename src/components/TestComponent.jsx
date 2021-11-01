import React from 'react';
import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  /* background: ${(props) => props.theme.colors.color5Black}; */
  /* background: papayawhip; */
  /* color: blue; */
  /* color: ${(props) => props.theme.colors.primary}; */
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.color2Yellow};
`;

function TestComponent() {
  return (
    <div>
      <Wrapper>
        <Title>Hello worrrrld!</Title>
      </Wrapper>
    </div>
  );
}

export default TestComponent;
