
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import SekerProject from '../routes'
import store from '../store/store'




const AppIphones = () => {
  return (
    <div> 
    <Provider store={store}>
    <BrowserRouter>
      <SekerProject/>
    </BrowserRouter>
  </Provider>
    </div>
  )
}

 export default AppIphones