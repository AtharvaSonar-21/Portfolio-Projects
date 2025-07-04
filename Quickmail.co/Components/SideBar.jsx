import React from 'react';

function SideBar() {

    const inbox = Math.floor(Math.random()*100+1);
    return(
        <>
            <div>
            <div className='bg-gray-100 h-screen w-2xs '>
                <div className='text-center p-4'>
                    <text className="text-xl font-semibold text-gray-800"> Quickmail.co</text>
                </div>
            <div>
            <div className='bg-gray-300 text-white p-4 m-2  rounded-4xl w-3xs text-left'>
                <button>Inbox
                <div className='flex bg-red-600 rounded-2xl px-1 ' style={{display: 'inline',
                    margin: '120px'

                }}>new{inbox} </div>
                </button>
                </div>
            </div>
            
            <button className='bg-gray-300 text-white p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Sent</span>
            </button>
            <button className='bg-gray-300 text-white p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Drafts</span>
            </button>
            <button className='bg-gray-300 text-white p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>labels</span>
            </button>


        </div>
        </div>
        </>

    )
    
}
export default SideBar;