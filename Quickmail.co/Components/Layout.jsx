import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (  
        <> 
        <Navbar/>
        <SideBar/>
        <Outlet/>
        </>
    );
}

export default Layout;