
import React from 'react';
import { useState } from 'react';
import Layout from './Layout';

function Dummymail({isOpen, setmail,mail=[]}) {
    const baseClass = "transition-all duration-300 bg-white shadow-md h-full overflow-y-auto";
        
    const [selectedEmail,setselectedEmail] = useState(null)
    const [readMail,setreadMail] = useState(new Set());
    const dummyMails = mail.length ? mail : [
        { id: 1, sender: "alice@example.com", subject: "Welcome!", preview: "Thanks for joining us...", time: "10:30 AM" },
        { id: 2, sender: "bob@project.com", subject: "Project update", preview: "Here's the latest progress...", time: "9:20 AM" },
        { id: 3, sender: "support@service.com", subject: "Your ticket is resolved", preview: "We're glad to help you...", time: "Yesterday" },
        { id: 4, sender: "news@digest.com", subject: "Daily News", preview: "Top headlines for today...", time: "Yesterday" },
        { id: 5, sender: "noreply@bank.com", subject: "Transaction Alert", preview: "You spent ₹500 on Amazon...", time: "2 days ago" },
        { id: 6, sender: "team@quickmails.com", subject: "You're invited", preview: "Join our beta testing group...", time: "3 days ago" },
        { id: 7, sender: "atharvasonar@mail.com", subject: "Learn Modern Web Development From Back End to Front", preview : "Here are this week's five freeCodeCamp resources that are worth your time:" , time: '4 days ago' }
    ];
    return (
        <div className=" flex h-screen w-full p-4 ">
            {/* <h2>Dummy Mails </h2> */}
            <div className=' w-full  rounded-2xl mb-2'>
                {dummyMails.map((dummyMails)=> (
                    <div
                    key={dummyMails.id}
                    onClick={()=> {
                        setselectedEmail(dummyMails)
                        setreadMail(prev => new Set(prev).add(dummyMails.id))
                    }}
                    className="bg-white p-4 m-2 rounded-2xl shadow-lg 
                    hover:shadow-md transition duration-200 flex 
                    justify-between items-start
                    cursor-pointer"
                    >
                        <div>
                            <h3 className='text-sm text-gray-600'>{dummyMails.sender}</h3>
                            <h2 className='text-md font-semibold'>{dummyMails.subject}</h2>
                            <p className='text-sm text-gray-500'>{dummyMails.preview}</p>
                        </div>
                        <div className='flex text-gray-400 p-1 rounded-md'>{readMail.has(dummyMails.id) ? 'read' : 'unread'}</div>
                        <span className='text-xs text-gray-400'>{dummyMails.time}</span>
                    </div>
                ))}
                
            </div>

    { /* Email Detail View */}
        {selectedEmail && (
      <div className="absolute top-0 right-0 
      w-full h-full bg-white p-6 shadow-lg 
      rounded-l-2xl overflow-y-autotransition-transform duration-300">
                <button onClick={() => {
                setselectedEmail(null) 
                `${isOpen}` && setmail(null)}}

                    className='flex text-white bg-blue-500 p-2 m-5 rounded-2xl'>
                    ← Back    
                </button>
                <div className='p-10 m-5'>
                <h2 className="text-2xl font-bold">{selectedEmail.subject}</h2>
                <p className="text-gray-600 mb-4">From: {selectedEmail.sender}</p>
                <p>{selectedEmail.body}</p>
                </div>
            </div>
        )}
        </div>
);

}

export default Dummymail;