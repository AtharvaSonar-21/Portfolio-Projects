import { useOutlet, useOutletContext } from "react-router-dom";
import Dummymail from "../Components/Dummymail.jsx";
import { useState,useEffect } from "react";

const Inbox = () => {
    const {inboxEmails,setInboxEmails} = useOutletContext();
    const [readMail, setReadMail] = useState(new Set())
    const markAsRead = (id) => {
    setReadMail((prev) => new Set(prev).add(id));
    };
    const dummyMails = [
        { id: 1, sender: "alice@example.com", subject: "Welcome!", preview: "Thanks for joining us...", time: "10:30 AM" },
        { id: 2, sender: "bob@project.com", subject: "Project update", preview: "Here's the latest progress...", time: "9:20 AM" },
        { id: 3, sender: "support@service.com", subject: "Your ticket is resolved", preview: "We're glad to help you...", time: "Yesterday" },
        { id: 4, sender: "news@digest.com", subject: "Daily News", preview: "Top headlines for today...", time: "Yesterday" },
        { id: 5, sender: "noreply@bank.com", subject: "Transaction Alert", preview: "You spent ₹500 on Amazon...", time: "2 days ago" },
        { id: 6, sender: "team@quickmails.com", subject: "You're invited", preview: "Join our beta testing group...", time: "3 days ago" },
        { id: 7, sender: "atharvasonar@mail.com", subject: "Learn Modern Web Development From Back End to Front", preview : "Here are this week's five freeCodeCamp resources that are worth your time:" , time: '4 days ago' }
    ];

        useEffect(() => {
        if (inboxEmails.length === 0) {
            setInboxEmails(dummyMails);
        }
    }, [inboxEmails, setInboxEmails]);

    const handleEmailClick = (emailId) => {
    setInboxEmails(prev =>
    prev.map(email =>
      email.id === emailId ? { ...email, isRead: true } : email
    )
  );
};
    return(
        <>
        <div>
            {inboxEmails && inboxEmails.length > 0 && (

            <Dummymail
            mail={inboxEmails}
            readMail = {readMail}
            markAsRead={markAsRead}
            setmail={setInboxEmails}/>
            )}
        </div>

        </>

    )
}
export default Inbox;
