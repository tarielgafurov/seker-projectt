import React from 'react';
import styled from 'styled-components';


const CheckboxGroup = ({text, children }) => {
  return (
    <Container>
      <h3>{text}</h3>
      {children}
    </Container>
  );
};

export default CheckboxGroup;


  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 300px;
    margin: auto;
  `;