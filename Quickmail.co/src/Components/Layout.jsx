import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import Compose from "./Compose";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [sentEmails, setSentEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]);
  const [inboxEmails, setInboxEmails] = useState([]);
  const [updatesEmails, setUpdatesEmails] = useState([]);
  const [promotionalEmails, setPromotionalEmails] = useState([]);

  useEffect(() => {
  setInboxEmails([
    { id: 1, subject: 'Welcome!', body: 'Your account is ready.' },
    { id: 2, subject: 'Invoice', body: 'Your payment was successful.' },
  ]);
  setUpdatesEmails([
    { id: 3, subject: 'App Update', body: 'Version 2.0 is live!' },
  ]);
  setPromotionalEmails([
    { id: 4, subject: '50% Off!', body: 'Special deal for you.' },
    { id: 5, subject: 'Black Friday Sale', body: 'Don’t miss out!' },
  ]);
}, []);
  useEffect(() => {
  const interval = setInterval(() => {
    const randomType = ["inbox", "updates", "promotional"][Math.floor(Math.random() * 3)];
    const newEmail = {
      id: Date.now(),
      subject: `New ${randomType} message`,
      body: `This is a simulated ${randomType} email.`,
    };

    if (randomType === "inbox") {
      setInboxEmails(prev => [newEmail, ...prev]);
    } else if (randomType === "updates") {
      setUpdatesEmails(prev => [newEmail, ...prev]);
    } else {
      setPromotionalEmails(prev => [newEmail, ...prev]);
    }
  }, 10000); // every 10 seconds

  return () => clearInterval(interval);
}, []);


  const handleComposeSubmit = (data) => {
        const emails = {
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
        inboxcount={inboxEmails.length}
        updatescount={updatesEmails.length}
        promotionalcount={promotionalEmails.length}
         />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet context={{ sentEmails, draftEmails }} />
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