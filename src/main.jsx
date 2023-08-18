import React from 'react'
import ReactDOM from 'react-dom/client'

import {Routes,Route,BrowserRouter, Router} from "react-router-dom";

import Todo from './todo/Todo.jsx'
import Home from './Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
