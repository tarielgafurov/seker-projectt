
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import FooterSeker from './FooterSeker'
import SekerProject from '../routes'
import Announcement from '../UI/Announcement'
import store from '../store/store'
import UserPageZapros from './users/UserPageZapros'
import InnerPageUser from '../UI/InnerPageUser'




const AppIphones = () => {
  return (
    <div> 
    <Provider store={store}>
    <BrowserRouter>
      <SekerProject/>
      <Announcement/>
      <UserPageZapros/>
      <InnerPageUser/>
      <FooterSeker/>
    </BrowserRouter>
  </Provider>
    </div>
  )
}

 export default AppIphones