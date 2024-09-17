
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '../store'
import FooterSeker from './FooterSeker'
import SekerProject from '../routes'
import Announcement from '../UI/Announcement'




const AppIphones = () => {
  return (
    <div> 
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <SekerProject/>
      <Announcement/>
      <FooterSeker/>
    </BrowserRouter>
  {/* </Provider> */}
    </div>
  )
}

 export default AppIphones