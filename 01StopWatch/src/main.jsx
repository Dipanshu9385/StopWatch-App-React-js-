import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Stopwatch} from './Component'
import MainTimer from './Component/Comp/MainTimer.jsx'
import Date from './Component/Comp/Date.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Stopwatch/>
      },
      {
        path:"Timer",
        element:<MainTimer/>
      },
      {
        path:"Date",
        element:<Date/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
