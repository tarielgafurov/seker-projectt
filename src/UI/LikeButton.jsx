

import React, { useState } from 'react';
import styled from 'styled-components';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Button liked={liked} onClick={toggleLike}>
      <svg viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </Button>
  );
};

export default LikeButton;

    
    const Button = styled.button`
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0;
      outline: none;
    
      svg {
        fill: ${props => (props.liked ? '#ed1010' : '#ccc')};
        width: 30px;
        height: 30px;
        transition: fill 0.2s ease-in-out;
      }
    
      &:hover svg {
        fill: ${props => (props.liked ? '#ec0f0f' : '#bbb')};
      }
    `;