
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import SekerProject from '../routes'
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
      <FooterSeker/>
    </BrowserRouter>
  </Provider>
    </div>
  )
}

 export default AppIphones