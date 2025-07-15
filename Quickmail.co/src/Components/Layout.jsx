import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Compose from "./Compose";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [sentEmails, setSentEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]); // If applicable

  const handleComposeSubmit = (data) => {
        const emails = {
        status: "sent"|| "draft",
      ...data,
      id: Date.now(),
      sentAt: new Date().toISOString()
      };
    if (emails.status === "sent") {
    setSentEmails(prev => [emails, ...prev]);
    } else if (emails.status === "draft") {
      setDraftEmails(prev => [emails, ...prev]);
    }
    setIsComposeOpen(false); 
               //   <Compose
            // isOpen={isComposeOpen}
            // onClose={() => setIsComposeOpen(false)}
            // onSubmit={handleComposeSubmit}
            // />

  // TODO: add logic to send email or store it
  };

  return (

    <div className="h-screen flex flex-col">
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex flex-1">
        <SideBar 
        isOpen={isOpen}
        sentcount={sentEmails.length}
        draftcount={draftEmails.length}
         />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
        <button className=" bg-red-600 text-white border-0  bottom-20 right-20 rounded-2xl p-4"
         style={{position:"fixed"}}
         onClick={() => setIsComposeOpen(true)}>
          compose
        </button>
        <div>
      <Compose
      isOpen={isComposeOpen}
      onClose={() => setIsComposeOpen(false)}
      onSubmit={handleComposeSubmit}
    />
      </div>
      </div>
    </div>
  );
}

export default Layout;