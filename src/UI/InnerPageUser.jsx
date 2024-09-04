import React from 'react'
import styled from 'styled-components';
import Image1 from '../assets/images/image 113.png'
import Image2 from '../assets/images/image 10 (1).png' 
import Image3 from '../assets/images/image 110.png'
import Image4 from '../assets/images/image 112.png'
import Image5 from '../assets/icons/Vector (1).png'





const images = [Image1, Image2, Image3,Image4,]; 


const InnerPageUser = () => {
  return (
      <div>
    <StyleGloball>

      <ImgStyle>
      <div>
      <img src={images[1]} alt="" />
      </div>
      </ImgStyle>
      <GlobalStyle>
        <StyleApple>
         <h1>Apple Iphone 15 Pro</h1>
         <img src={Image5} alt="" />
        </StyleApple>

        <Senna>
        <h4 style={{color:"#878787",fontSize:"24px"}}>256Gb</h4>
        <h2 style={{color:"#9292EF"}}>116 000 сом</h2>
        </Senna>

        <StyleColors>
        <h3>Цвет :</h3>
        <StyleDiv>
           <div style={{background: "#97938E"}}></div>
           <div style={{background:"#000000"}}></div>
           <div style={{background:"#0029FF"}}></div>
        </StyleDiv>
        </StyleColors>
        <StyleCounter>
        <h3>Количество :</h3>
        <button>🗑</button>
        <h2>2</h2>
        <button>+</button>
        </StyleCounter>
      </GlobalStyle>
    </StyleGloball>
       
      <StyleButton>
        <div>
          <img src={images[1]} alt="" />
        </div>
        <div>
          <img src={images[0]} alt="" />
        </div>
        <div>
          <img src={images[3]} alt="" />
        </div>
      <>
      <button style={{backgroundColor:"#9292EF", color:"#FFFFFF",border:"2px solid #9292EF", width:"230px"}}>В карзину</button>
      <button style={{border:"2px solid #9292EF",color:"#9292EF",width:"230px"}}>Купить сейчас</button>
      </>
      </StyleButton>
    </div>
  )
}

export default InnerPageUser

const StyleGloball = styled.div`
  display: flex;
  `


const GlobalStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  `
const StyleApple = styled.div`
width: 550px;
  display: flex;
  align-items: center;
  img{
    width: 30px;
    height: 23px;
    margin-left: 150px;
  }
`

const Senna = styled.div`
  margin-top: -15px;
`


const ImgStyle = styled.div`
width: 450px;
height: 400px;
background-color: #E7E0D6;
border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
margin-left: 40px;
margin-top: 20px;
img{
    /* width: 400px; */
    /* height: 400px; */
}
  `

const StyleColors = styled.div`
 
  width: 700px;
  margin-bottom: -25px;

  div{
    border-radius: 100px;
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }
  `
  const StyleDiv = styled.p`
    display: flex;
    justify-content: space-between;
    width: 110px;
  `
const StyleCounter = styled.div`
display: flex;
width: 400px;
align-items: center;
margin-bottom: -100px;
h2{
   margin-left: 10px;
}
button{
      background-color: #9292EF;
      width: 29px;
      height: 29px;
      border: 2px solid;
      font-size: 18px;
      color:#ffffff;
      border-radius: 5px;
      margin-left: 15px;
    }

  `

const StyleButton = styled.div`
    width: 1050px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      width: 100px;
      height: 102px;
      background-color: #E7E0D6;
      border-radius: 10px;
      margin-top:20px;
      margin-left: 25px;
      padding: 3px;
    }
    img{
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
    button{
      width: 200px;
      height: 55px;
      border-radius: 10px;
      opacity: 0px;
      font-size: 20px;
    }
  `