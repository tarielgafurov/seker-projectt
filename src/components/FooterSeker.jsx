import React from 'react'
import styled from 'styled-components'
import VisaImg from '../assets/Group 314.png'
import VisaImg1 from '../assets/icons/Vector (1).png'
import WhatsappImg from '../assets/icons/Vector (3).png'
import InstagramImg from '../assets/icons/Vector (5).png'
import TelegramImg from '../assets/icons/Vector (6).png'

const FooterSeker = () => {
  return (
    <FooterStyled>
      <DivStyled>
        <h4>Покупателям</h4>
        <FontStyled>
          <p>О нас</p>
          <p>Оплата</p>
          <p>Доставка</p>
          <p>Магазины</p>
        </FontStyled>
      </DivStyled>
      <DivModeStyled>
        <h4>Режим работы</h4>
        <FontStyled>
          <p>Ежедневно с 9:00 до 21:00</p>
          <p>Отдел продаж</p>
          <p>Будни с 9:00 до 21:00</p>
          <p>Доставка и сборка</p>
        </FontStyled>
      </DivModeStyled>
      <DivNumberStyled>
        <h4>Связаться с нами</h4>
        <FontStyled>
          <p>+996 708 112 610</p>
          <p>+996 773 838 618</p>
          <p>comfort.kg@gmail.com</p>
          <h4>Мы в соц. сетях</h4>
          <IconkaImg>
            <img src={WhatsappImg} alt="WhatsApp" />
            <img src={InstagramImg} alt="Instagram" />
            <img src={TelegramImg} alt="Telegram" />
          </IconkaImg>
        </FontStyled>
      </DivNumberStyled>
      <DivPaymentStyled>
        <h4>Способ оплаты</h4>
        <FontStyled>
          <p><img src={VisaImg1} alt="Visa Icon" /> <img src={VisaImg} alt="Visa Card" /></p>
          <p>Наличным в любом пункте самовывоза или картой</p>
          <p>© Comfort. 2022</p>
        </FontStyled>
      </DivPaymentStyled>
    </FooterStyled>
  )
}

export default FooterSeker

const FooterStyled = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 330px; 
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: #9292EF;
  padding-top: 40px; 
  border-radius: 10px 0 0 0;
  opacity: 1;
`

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 { 
    font-family: Montserrat;
    font-size: 16px; 
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }

  p {
    font-family: Montserrat;
    font-size: 14px; 
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`

const FontStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const DivModeStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;

  h4 {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }
  
  p {
    font-family: Montserrat;
    font-size: 14px; 
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`
 
const IconkaImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px; 
`

const DivNumberStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px; 
   
  h4 {
    font-family: Montserrat;
    font-size: 16px; 
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }
  
  p {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  }
`

const DivPaymentStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px; 
  height: 130px; 
  
  h4 {
    font-family: Montserrat;
    font-size: 16px; 
    font-weight: 700;
    line-height: 20px;
    text-align: left;
  }
  
  p {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;

    img {
      margin: 0;
      padding: 3px; 
    }
  }
`
