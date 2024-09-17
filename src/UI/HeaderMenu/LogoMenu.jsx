
import React, { useState } from 'react'
import styled from 'styled-components'
import ModalMenu from './ModalMenu'

const LogoMenu = () => {
    const [click,setClick] = useState(false)
    const clickHandler = ()=>{
      setClick(true)  
    }

    const closeHandler=()=>{
      setClick(false)
    }


  return (
  <div>
    <KvadratStyle onClick={clickHandler}>
      <SekerStyle>
            <LiniaStyle1>

            </LiniaStyle1>

            <LiniaStyle2>

            </LiniaStyle2>

            <LiniaStyle3>

            </LiniaStyle3>
        </SekerStyle>
    </KvadratStyle>
 {click && <ModalMenu modal={click} onCloseHandler={closeHandler}/> }
  </div>
    
  )
}

export default LogoMenu


const KvadratStyle = styled.div`
    width: 40px;
    height: 40px;
    background: #9292EF;
    border-radius: 10px 10px 10px 10px;
`

const SekerStyle = styled.div`
   
    border-radius: 5px; 
    width: 43.11px;
    height: 42px;
    background: #9292EF;
    border-bottom-color: #12120f;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;    
    margin-top: 5px;
    align-items: self-start;
    margin-top: 5px;
    `
    const LiniaStyle1 = styled.div`
    width:20px ;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    `

    const LiniaStyle2 = styled.div`
    width:30px ;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    `

    const LiniaStyle3 = styled.div`
    width:35px ;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    `