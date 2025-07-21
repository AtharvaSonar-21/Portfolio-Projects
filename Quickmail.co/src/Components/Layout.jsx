import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import Compose from "./Compose";
import GmailApi from "../Api Integration/GmailApi";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [sentEmails, setSentEmails] = useState([]);
  const [draftEmails, setDraftEmails] = useState([]);
  const [inboxEmails, setInboxEmails] = useState([]);
  const [updatesEmails, setUpdatesEmails] = useState([]);
  const [promotionalEmails, setPromotionalEmails] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Initial mock data
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

  // Simulate incoming emails every 10 seconds
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

    useEffect(() => {
    const count = inboxEmails.filter(email => !email.isRead).length;
    setUnreadCount(count);
  }, [inboxEmails]);

  

  // Handle Compose Submit
  const handleComposeSubmit = (data) => {
    const newEmail = {
      ...data,
      id: Date.now(),
      sentAt: new Date().toISOString()
    };

    if (newEmail.status === "sent") {
      setSentEmails(prev => [newEmail, ...prev]);
    } else if (newEmail.status === "draft") {
      setDraftEmails(prev => [newEmail, ...prev]);
    }

    setIsComposeOpen(false);
  };

  return (
    <div className="h-screen flex flex-col"style={{backgroundImage: `url(https://images.pexels.com/photos/2156/sky-earth-space-working.jpg)`, display : 'flex'}}>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <GmailApi/>
      <div className="flex flex-1">
        <SideBar 
          isOpen={isOpen}
          sentcount={sentEmails.length}
          draftcount={draftEmails.length}
          inboxcount={inboxEmails.length}
          updatescount={updatesEmails.length}
          promotionalcount={promotionalEmails.length}
          unreadCount={unreadCount}
        />

        <main className="flex-1 p-4 overflow-auto">
          <Outlet context={{ 
            sentEmails,
            draftEmails,
            inboxEmails,
            updatesEmails,
            promotionalEmails,
            setInboxEmails,
            setUpdatesEmails,
            setPromotionalEmails,
          }} />
        </main>

        <>
          <button 
            className="bg-red-600 text-white border-0 bottom-20 right-20 rounded-2xl p-4"
            style={{ position: "fixed" }}
            onClick={() => setIsComposeOpen(true)}
            aria-label="Compose new email"
          >
            Compose
          </button>

          <Compose
            isOpen={isComposeOpen}
            onClose={() => setIsComposeOpen(false)}
            onSubmit={handleComposeSubmit}
          />
        </>
      </div>
    </div>
  );
}

export default Layout;