
import React from 'react';
function Dummymail() {
    const dummyMails = [
        {
            id: 1,
            sender: "new@gmail.com",
            body: "Hi there, thanks for signing up to Quickmail.",
            date: "2024-06-01"
        },
        {
            id: 2,
            sender: "franv@example.com",
            subject: "Your Invoice",
            body: "Please find attached your invoice for May.",
            date: "2024-06-02"
        },
        {
            id: 3,
            sender: "carol@example.com",
            subject: "Meeting Reminder",
            body: "Don't forget our meeting tomorrow at 10am.",
            date: "2024-06-03"
        }
    ];

    return (
        <div className="h-screen w-full bg-gray-200 p-4 ">
            {/* <h2>Dummy Mails </h2> */}
            
            <div className='flex p-2 bg-white w-full h-20 rounded-2xl m-2'>
                <h1><b>mail 1</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
             <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 2</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
             <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 3</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
             <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 4</b></h1> <br />
                <h2>this is the mail</h2>
            </div> <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 5</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
             <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 6</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
            <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 7</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
            <div className='flex p-2 m-2 bg-white w-full h-20 rounded-2xl'>
                <h1><b>mail 8</b></h1> <br />
                <h2>this is the mail</h2>
            </div>
        </div>
    );

}

export default Dummymail;