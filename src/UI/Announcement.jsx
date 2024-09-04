
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from '../assets/images/21438 1 (1).png'; 
import Image2 from '../assets/images/21438 1 (2).png'; 
import Image3 from '../assets/images/21438 1.png'; 

const images = [Image1, Image2, Image3]; 

const Announcement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    startAutoCycle();
    return () => clearInterval(intervalId);
  }, []);

  const startAutoCycle = () => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    setIntervalId(id);
  };

  const handleDotClick = (index) => {
    clearInterval(intervalId); 
    setCurrentImageIndex(index);
    startAutoCycle();
  };

  return (
    <ImageStyled>
      {images.map((image, index) => (
        <ImageContainer key={index} isActive={index === currentImageIndex}>
          <img src={image} alt={`Объявление ${index + 1}`} />
        </ImageContainer>
      ))}
      <PointStyle>
        {images.map((_, index) => (
          <Dot 
            key={index} 
            isActive={index === currentImageIndex}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to image ${index + 1}`}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && handleDotClick(index)}
          />
        ))}
      </PointStyle>
    </ImageStyled>
  );
};

export default Announcement;

const ImageStyled = styled.div`
  margin: auto;
  width: 1170px;
  height: 425px;
  position: relative;
  margin-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      height: auto;
    }
  }
`;

const PointStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? 'red' : 'gray')};
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;