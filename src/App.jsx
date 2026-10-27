import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Home from './Pages/Home'
import { BrowserRouter } from 'react-router'
import Routing from './Routing'



function App() {
  return (
  
    
    <Provider store = { store }>
      <BrowserRouter>
       <Routing/>
      </BrowserRouter>
     
    </Provider>
  )
}

export default App
