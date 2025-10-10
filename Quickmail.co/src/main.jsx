import  Inbox  from '../src/Pages/Inbox.jsx';
import Drafts from '../src/Pages/Drafts.jsx';
import Sent from '../src/Pages/Sent.jsx';
import Promotional from '../src/Pages/Promotional.jsx'
import Updates from '../src/Pages/Updates.jsx';
import React from 'react'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Layout from './Components/Layout.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes} from 'react-router-dom';
import App from './App.jsx';
import  Home  from './Home Page/Home.jsx'


// this is first method to use the react router


// const router = createBrowserRouter(
//   [ 
//     {
//       path: '/',
//       element: <Layout/>,
//       children : [
//         {
//           path:"",
//           element : <Inbox/>
//         },
//         {
//           path:'drafts',
//           element : <Drafts/>
//         }
//         ,{
//           path : 'sent',
//           element : <Sent/>

//         },
//         {
//           path : 'promotional',
//           element: <Promotional/>
//         }
//         ,
//         {
//           path : 'updates',
//           element: <Updates/>
//         }
        
//       ]
         
      
//     }

//   ]
// )

// Second Method 

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path = '/' element = {<Layout/>}>
      <Route index element ={<Inbox/>}></Route>
      <Route path = 'sent' element ={<Sent/>}></Route>
      <Route path = 'drafts' element ={<Drafts/>}></Route>
      <Route path = 'promotional' element ={<Promotional/>}></Route>
      <Route path = 'updates' element ={<Updates/>}></Route>
      </Route >
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
