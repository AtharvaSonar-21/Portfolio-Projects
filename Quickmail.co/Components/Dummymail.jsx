
import { Dice1 } from 'lucide-react';
import React from 'react';
function Dummymail() {
    const dummyMails = [
        { id: 1, sender: "alice@example.com", subject: "Welcome!", preview: "Thanks for joining us...", time: "10:30 AM" },
        { id: 2, sender: "bob@project.com", subject: "Project update", preview: "Here's the latest progress...", time: "9:20 AM" },
        { id: 3, sender: "support@service.com", subject: "Your ticket is resolved", preview: "We're glad to help you...", time: "Yesterday" },
        { id: 4, sender: "news@digest.com", subject: "Daily News", preview: "Top headlines for today...", time: "Yesterday" },
        { id: 5, sender: "noreply@bank.com", subject: "Transaction Alert", preview: "You spent ₹500 on Amazon...", time: "2 days ago" },
        { id: 6, sender: "team@quickmails.com", subject: "You're invited", preview: "Join our beta testing group...", time: "3 days ago" },
        { id: 7, sender: "atharvasonar@mail.com", subject: "Learn Modern Web Development From Back End to Front", preview : "Here are this week's five freeCodeCamp resources that are worth your time:" , time: '4 days ago' }
    ];
    return (
        <div className="h-screen w-full bg-gray-200 p-4 ">
            {/* <h2>Dummy Mails </h2> */}
            
            <div className=' w-full  rounded-2xl mb-2'>
                {dummyMails.map(mail=> (
                    <div
                    key={mail.id}
                    className="bg-white p-4 m-2 rounded-2xl shadow-sm hover:shadow-md transition duration-200 flex justify-between items-start cursor-pointer"
                    >
                        <div>
                            <h3 className='text-sm text-gray-600'>{mail.sender}</h3>
                            <h2 className='text-md font-semibold'>{mail.subject}</h2>
                            <p className='text-sm text-gray-500'>{mail.preview}</p>
                        </div>
                        <span className='text-xs text-gray-400'>{mail.time}</span>
                    </div>
                ))}
                
            </div>
        </div>
    );

}

export default Dummymail;