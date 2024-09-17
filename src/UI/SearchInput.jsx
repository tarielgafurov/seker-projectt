
import React from 'react'
import styled from 'styled-components'
import Image11 from '../assets/icons/Vector (2).png'

const SearchInput = (props) => {
  return (
    <Input1>
    <div>
      <input type="text" placeholder='Что вы ищете...?'/>
    </div>
    {props.search && <InputDiv>
        <div>
        <img src={Image11} alt="" />
        </div>
    </InputDiv>}
    </Input1>
  )
}

export default SearchInput

const Input1 = styled.div`
width: 460px;
height: 40px;
display: flex;
justify-content: center;
border-radius: 10px;
background-color: #F4F4F4;
margin-top: 5px;

input{
width: 390px;
background-color: #F4F4F4;
padding-left:20px;
font-size: 15px;
height: 40px;
outline: none;
border-radius: 10px;
border: none;
}
div{
display: flex;
flex-direction: column;
}
`
const InputDiv = styled.div`
width: 52.34px;
height: 40px;
border-radius: 0px 10px 10px 0px;
background-color: #9292EF;
display: flex;
align-items: center;
justify-content: center;

div{
img{
    width: 20.53px;
    height: 19.38px;
    cursor: pointer;
}
}
`