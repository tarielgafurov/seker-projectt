
import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1px solid;
`;

const Icon = ({ color }) => {
  return <StyledIcon color={color} />;
};

export default Icon;