

import React from 'react';
import styled from 'styled-components';

function Button({
 color,
 width,
 height,
 borderRadius,
 padding,
 backgroundColor,
 fontSize,
 children,
 onClick,
 img,
 disabled,
 fontweight,
 ...props
}) {
 const onClickHandler = () => {
  onClick && onClick();
 }

 return (
  <ButtonStyled
   $backgroundColor={backgroundColor} 
   {...props}
   disabled={disabled}
   width={width}
   height={height}
   borderRadius={borderRadius}
   padding={padding}
   fontSize={fontSize}
   fontweight={fontweight}
   onClick={onClickHandler}
   color={color}
  >
   {img && <img src={img} alt='icon' />} {children}
  </ButtonStyled>
 );
}

export default Button;

const ButtonStyled = styled.button`
 width: ${props => props.width || ''};
 height: ${props => props.height || ''};
 background-color: ${props => props.disabled ? "#b3b1b1" : props.$backgroundColor || '#9292EF'};
 font-size: ${props => props.fontSize || '16px'};
 font-weight: ${props => props.fontweight || '16px'};
 padding: ${props => props.padding || '10px 30px'};
 border-radius: ${props => props.borderRadius || '16px'};
 color: ${props => props.disabled ? "#4a4a4a" : props.color || 'black'};
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: ${props => props.justifyContent || 'center'};
 border: ${props => props.border || "none"};
`;