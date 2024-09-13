

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputImage from '../assets/images/ri_image-add-fill.png';

const ImagePages = ({ onImageChange, id }) => {
  const [img, setImg] = useState(null);
  const inputRef = useRef(null);

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
      onImageChange(id, true);
    }
  };

  const handleSelectInputClick = () => inputRef.current.click();

  const handleDeleteImage = () => {
    setImg(null);
    onImageChange(id, false);
  };

  return (
    <StyledDivInput>
      <StyledImgDiv>
        {img && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/70/70757.png"
            alt="delete"
            onClick={handleDeleteImage}
          />
        )}
        <img
          src="https://cdn-icons-png.flaticon.com/512/81/81948.png"
          alt="select"
          onClick={handleSelectInputClick}
        />
      </StyledImgDiv>
      <StyledInput>
        <StyledLabel htmlFor={`file-upload-${id}`}>
          {!img && <img src={InputImage} alt="upload" />}
        </StyledLabel>
        <HiddenInput ref={inputRef} id={`file-upload-${id}`} type="file" onChange={handleChangeImage} />
      </StyledInput>
      {img && <StyledImage src={img} alt="preview" />}
    </StyledDivInput>
  );
};






const ImageUploader = () => {
  const [imageStates, setImageStates] = useState([{ id: 1, hasImage: false }]);

  const handleImageChange = (id, hasImage) => {
    const newStates = imageStates.map((state) =>
      state.id === id ? { ...state, hasImage } : state
    );

    if (hasImage && imageStates.length < 3) {
      newStates.push({ id: newStates.length + 1, hasImage: false });
    } else if (!hasImage) {
      const remainingStates = newStates.filter((state) => state.id !== id);
      if (remainingStates.length === 0) {
        setImageStates([{ id: 1, hasImage: false }]);
        return;
      } else {
        setImageStates(remainingStates);
        return;
      }
    }

    setImageStates(newStates);
  };

  return (
    <ContainerDiv>
      {imageStates.map((state) => (
        <ImagePages
          key={state.id}
          id={state.id}
          onImageChange={handleImageChange}
          hasImage={state.hasImage}
        />
      ))}
    </ContainerDiv>
  );
};
export default ImageUploader;




const ContainerDiv = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start;
  margin-top: 30px;
  `;

  
  const StyledDivInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 278px;
    height: 260px;
    background-color: #d9d9d9;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    margin-left: 10px;
  
    &:hover {
      img {
        display: block;
      }
    }
  `;
  
  const StyledInput = styled.div`
    position: relative;
  `;
  
  const HiddenInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  `;
  
  const StyledLabel = styled.label`
    cursor: pointer;
    img{
      margin-top: 80px;
    }
  `;
  
  const StyledImage = styled.img`
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    object-fit: cover;
    border-radius: 15px;
    margin: 10px;
  `;
  
  const StyledImgDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 70px;
    position: absolute;
    top: 1px;
    margin-left: 248px;
    background-color: #c7c7c7b7;
    border-radius: 10px;
  
    img {
      width: 20px;
      height: 20px;
      padding: 5px;
      cursor: pointer;
      display: none;
    }
  `;