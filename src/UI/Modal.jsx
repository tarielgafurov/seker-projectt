import React from "react";
import styled from "styled-components";
const Modal = () => {
  return (
    <Bakdrop>
      <StyleModal>
        <StyleBox>
          <StyleBox>
          <StyleH4>Мой профиль</StyleH4>
            <StyleInput type="text" placeholder="E-mail" />
            <br />
            <br />
            <StyleInput type="text" placeholder="Телефон номер" />
            <br />
            <br />
            <StyleInput type="password" placeholder="Пароль" />
            <br />
            <StyleButton2> Войти через Google</StyleButton2>
            <StyleButton>Войти</StyleButton>
          </StyleBox>
        </StyleBox>
      </StyleModal>
    </Bakdrop>   
  );
};

export default Modal;
const Bakdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const StyleModal = styled.div`
padding: 5px;
  background-color: #d9d9d9;
  margin-top: 100px;
  width: 390px;
  height: 365px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-left: 500px;
  text-align: center;
`;
const StyleBox = styled.div``;

const StyleInput = styled.input`
  background-color: #ffffff;
  border: none;
  outline: none;
  height: 20px;
  width: 270px;
  border-radius: 10px;
  padding: 10px;
`;
const StyleButton2 = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:active {
    background-color: #00ffff4c;
  }
  border: none;
  border-radius: 10px;
  width: 290px;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
`;

const StyleButton = styled.button`
  background-color: #fc3a74;
  color: #fff0fc;

  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 10px;
  width: 290px;
  margin-top: 18px;
  &:active {
    background-color: #fff0fc;
  }
`;
const StyleH4 = styled.h3`
  color: #fc3a74;


`

