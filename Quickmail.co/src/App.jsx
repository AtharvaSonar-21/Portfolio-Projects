import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from '../Components/Navbar';
import Inbox from './src/pages/Inbox';
import Sent from '../pages/Sent';
import Drafts from '../pages/Drafts';
import SideBar from '../Components/SideBar';
import Dummymail from '../Components/Dummymail';

import

function App() {

  return (
    <>
    <Navbar/>
    <div className='flex'>
      <SideBar/>
      <Dummymail/>
      
    </div>
    
   
   
    
    </>
  )
}

export default App
