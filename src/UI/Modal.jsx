import React, { useState } from "react";
import styled from "styled-components";
import gogle from "../assets/icons/gogle.png";
import aplle from "../assets/icons/apple.logo.png";


const Modal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); 

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = "E-mail талаасы талап кылынат";
    } else if (email.length < 5 ) {
      formErrors.email = "Туура эмес E-mail формат";
    }


    if (!password) {
      formErrors.password = "Пароль талаасы талап кылынат";
    } else if (password.length < 6) {
      formErrors.password = "Пароль кеминде 6 символ болушу керек";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Форма ийгиликтүү жөнөтүлдү!");
      }, 2000);
    } else {
      alert("Форманы туура толтуруңуз");
    }
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Title>Мой профиль</Title>
        <ModalContent>
          <Input
            type="text"
            placeholder="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}


          <Input
            type="password"
            placeholder="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}

          <GoogleButton>
            <img src={gogle} alt="" />Войти через Google
          </GoogleButton>
          <AppleButton>
            <img src={aplle} alt="" /> Войти через Apple
          </AppleButton>

          <LoginButton onClick={handleSubmit} disabled={loading}>
            {loading ? <Spinner /> : "Войти"}
          </LoginButton>
        </ModalContent>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  background-color: #d9d9d9;
  width: 400px;
  height: 450px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Title = styled.h3`
  color: #fc3a74;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 75%;
  outline: none;
  font-size: 16px;
  &:focus {
    border-color: #fc3a74;
  }
`;

const GoogleButton = styled.button`
      background-color: #ffffff;
      color: #000;
      border: none;
      border-radius: 10px;
      padding: 12px;
      width: 80%;
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
    &:hover {
       background-color: #f0f0f0;
     }
     img {
       width: 25px;
       margin-top: -3px;
     }
`;
const AppleButton = styled.button`
    background-color: #ffffff;
  color: #000;
  border: none;
  border-radius: 10px;
  padding: 12px;
  width: 80%;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
  img{
    width: 35px;
    margin-top: -3px;
  }
`

const LoginButton = styled.button`
  background-color: #fc3a74;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e92a63;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: -10px 0 10px;
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #fff;
  border-radius: 50%;
  width: 20px;     
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;  

