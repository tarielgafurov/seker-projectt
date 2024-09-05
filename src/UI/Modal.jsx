import React from "react";
import styled from "styled-components";
const Modal = () => {
  return (
    <StyleModal>
      <StyleBox>
        <StyleH1>Мой профиль</StyleH1>
        <StyleBox>
          <StyleInput type="text" placeholder="E-mail" />
          <br />
          <br />
          <br />
          <StyleInput type="text" placeholder="Телефон номер" />
          <br />
          <br />
          <br />
          <StyleInput type="password" placeholder="Пароль" />
          <br />
          <StyleButton2> Войти через Google</StyleButton2>
          <StyleButton>Войти</StyleButton>
        </StyleBox>
      </StyleBox>
    </StyleModal>
  );
};

export default Modal;

const StyleModal = styled.div`
  background-color: #fffdf0;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  position: fixed;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-left: 500px;
  text-align: center;
`;
const StyleBox = styled.div`
  padding: 10px;
  margin-top: 30px;
`;
const StyleInput = styled.input`
  background-color: #dae9f7;
  border: none;
  outline: none;
  height: 40px;
  width: 290px;
  border-radius: 10px;
`;
const StyleButton = styled.button`
  background-color: #fc3a74;
  cursor: pointer;
  height: 40px;
  border: none;
  border-radius: 10px;
  width: 290px;
  margin-top: 13px;
  &:active{
     background-color: #fff0fc;
  }
`;
const StyleH1 = styled.h1`
  color: #fc3a74;
`
const StyleButton2 = styled.button`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
  rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:active{
    background-color: #00ffff4c;
  }
border: none;
  border-radius: 10px;
  width: 290px;    
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
`