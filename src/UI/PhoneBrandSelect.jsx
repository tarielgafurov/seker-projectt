import React, { useState } from 'react';
import styled from 'styled-components';

const PhoneBrandSelect = ({ width, height, onChange, padding, backgroundColor, color, border,borderRadius, outline,  ...props }) => {
  
    
  const [selectedValue, setSelectedValue] = useState('');

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectStyled width={width} height={height} {...props}>
      <select onChange={onChangeHandler} value={selectedValue}>
        {props.children}
      </select>
    </SelectStyled>
    
  );
};

export default PhoneBrandSelect;

const SelectStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  select {
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '30px'};
    height: ${(props) => props.height || '30px'};
    padding: ${(props) => props.padding || '5px'};  
    background-color: ${(props) => props.backgroundColor || '#FC3A74'};
    color: ${(props) => props.color || '#fff'}; 
    border-radius: ${(props) => props.borderRadius || "5px"};
    border: ${(props) => props.border || '1px'}
  }
`