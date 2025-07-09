import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top: Navbar */}
      <Navbar />

      {/* Bottom: Sidebar + Page Content */}
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;