
import React from 'react'
import ImgContact from '../../assets/icons/Vector.png'
import ImgLike from '../../assets/icons/Vector (7).png'
import ImgBasket from '../../assets/icons/Vector (8).png'
import styled from 'styled-components'
import LogoMenu from '../../UI/HeaderMenu/LogoMenu'
import ModalMenu from '../../UI/HeaderMenu/ModalMenu'
import SearchInput from '../../UI/SearchInput'
// import { useNavigate } from 'react-router'




const AdminHeader = () => {
//   const navigate = useNavigate()

  const SearchHandler =()=>{
    // navigate('/')
  }

  return (
    <ContainerSeker >
      <MenuStyle>
       <LogoMenu/>
      <ModalMenu/>
      </MenuStyle>
      <DivSekerStyled>
      <h3> Admin</h3>
      <p>твой лучший выбор</p>
      </DivSekerStyled>
      <SearchInput search={true}/>
      <DivIconkaStyled>
        <ContactDiv>
         <img src={ImgContact} alt=""/>
         <UserDiv >
        <p onClick={SearchHandler}>Выйти</p> 
      </UserDiv>
        </ContactDiv>
        <LikeDiv>
          <img src={ImgLike} alt="" />
          <p>Закладки</p>
        </LikeDiv>
        <BasketDiv>
          <img src={ImgBasket} alt="" />
          <p>Корзина</p>
        </BasketDiv>
      </DivIconkaStyled>
    </ContainerSeker>
)
}

export default AdminHeader 


const ContainerSeker = styled.div`
display: flex;
justify-content: space-between;
width: 1170px;
height: 56px;
margin: auto;
padding: 10px;
`

const MenuStyle = styled.div`
margin-top: 5px;
`

const DivSekerStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 150px;
height: 58px;
margin-top: 3px;

h3 {
  margin: 0;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0em;
}

p {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
}
`

const UserDiv = styled.div`
  margin-left: 5px;
` 

const DivIconkaStyled = styled.div`
display: flex;
width: 330px;
height: 60px;
justify-content: space-between;
`

const ContactDiv = styled.div`
width: 80px;
height: 50px;
display: flex;
justify-content: space-between;


img {
  width: 25.66px;
  height: 24.23px;
  margin-top: 10px;
}

p {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
`

const LikeDiv = styled.div`
width: 120.08px;
height: 21.62px;
display: flex;
justify-content: space-around;

img {
  width: 25.66px;
  height: 24.23px;
  margin-top: 10px;
}

p {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
`

const BasketDiv = styled.div`
width: 109.87px;
height: 25.53px;
display: flex;
justify-content: space-around;


img {
  width: 25.66px;
  height: 24.23px;
  margin-top: 11px;
}

p {
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
}
`