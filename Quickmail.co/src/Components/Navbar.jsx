import React from 'react';
import { Bell, Settings, HelpCircle } from 'lucide-react';

function Navbar({toggleSidebar}) {
  return (
      <div className="flex justify-between items-center p-4 shadow-md bg-white/50 ">
        <div className="flex items-center space-x-4">
          <i className="ri-menu-line text-white text-xl cursor-pointer" onClick={toggleSidebar}></i>
          <h1 className="text-xl font-semibold text-white">Quickmail.co</h1>
        </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="flex items-center bg-white px-4 py-2 rounded-full border border-gray-300 shadow-sm w-full">
          <i className="ri-search-line text-gray-500 mr-2"></i>
          <input
            type="text"
            placeholder="Search mail"
            className="w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <HelpCircle className="w-5 h-5 text-white hover:text-yellow-300 cursor-pointer" />
        <Settings className="w-5 h-5 text-white hover:text-yellow-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-white hover:text-yellow-300 cursor-pointer" />
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-white"
        />
      </div>
    
    </div>
  );
}

export default Navbar;
