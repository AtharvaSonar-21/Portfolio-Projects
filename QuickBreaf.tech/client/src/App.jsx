import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import CountryNews from './Components/CountryNews';
import Top_Headlines from './Components/Top_Headlines';
import All_News from './Components/All_News';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Home page - all news */}
          <Route path="/" element={<All_News />} />

          {/* Top headlines by category */}
          <Route path="/top-headlines/:category?" element={<Top_Headlines />} />

          {/* News by country */}
          <Route path="/country/:iso" element={<CountryNews />} />

          {/* Login page */}
          <Route path="/login" element={<Login onLogin={(user) => console.log(user)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
