
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;


const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  cursor: pointer;
  border: 2px solid #ff4081;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    background-color: #ff4081;
    clip-path: polygon(14% 44%, 0% 65%, 50% 100%, 100% 28%, 80% 7%, 41% 72%);
  }
`;

const CheckBox = ({ checked, onChange,  label }) => (
  <Label>
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox checked={checked} />
      {label}
    </CheckboxWrapper>
  </Label>
);

export default CheckBox;