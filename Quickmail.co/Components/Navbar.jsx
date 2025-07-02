import React from 'react';
import { Menu, Bell, Settings, HelpCircle } from 'lucide-react';

function Navbar() {
    return (  
        <>
            <div className="flex justify-between items-center p-4 shadow-md bg-white">
      
      {/* Left Section: Logo + Menu */}
      <div className="flex items-center space-x-4">
        <i className = "color-black" class="ri-menu-line"></i>
        <span className="text-xl font-semibold text-gray-800"> Quickmail.co</span>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <i class="ri-search-line" className='flex bg-black '></i>
        <input
          type="text"
          placeholder="Search mail"
          className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Icons + Avatar */}
      <div className="flex items-center space-x-4">
        <HelpCircle className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
        <Settings className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer" />
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
      </div>
        </>
    );
}

export default Navbar;