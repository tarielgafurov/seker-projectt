import React, { useState } from 'react'
import InnerPageUser from '../../UI/InnerPageUser'
import { useDispatch } from 'react-redux'
import { getProductById } from '../../store/autSlice/serPageSlice'

 export const UserPageZapros = () => {

const [inner,setInner] = useState(false)
const dispatch = useDispatch()


const innerPage = ()=>{
  setInner(true)
}



  const btn=()=>{
    dispatch(getProductById(1))
  }
  const userPageBtn = ()=>{
    innerPage(btn())
  }
  
  
  return (
    <div>
      <button onClick={userPageBtn}>Кнопка</button>
      { inner && <InnerPageUser/>  }
      
    </div>
  )
}

export default UserPageZapros