import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="h-screen flex flex-col">
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex flex-1">
        <SideBar isOpen={isOpen} />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;