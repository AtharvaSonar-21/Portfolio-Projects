import React from 'react';

function SideBar() {

    let inbox = Math.floor(Math.random()*10+1);
    let updates =  Math.floor(Math.random()*100+1);
    let promotional =  Math.floor(Math.random()*100+1);
    let sent = 0
    let draft = 0 
    return(
        <>
            <div>
            <div className='bg-gray-100 h-screen w-2xs '>
                <div className='text-center p-4'>
                    <text className="text-xl font-semibold text-gray-800"> Quickmail.co</text>
                </div>
            

            
                <button className='bg-gray-300 p-4 m-2  rounded-4xl w-3xs text-left'>Inbox
                <div className='bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '120px'

                }}>new{inbox} </div>
                </button>

                
            
            
            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Updates</span>
                <div className=' bg-yellow-300 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '100px'

                }}>new{updates} </div>
            </button>

            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Promotional</span>
                <div className='bg-blue-300 rounded-2xl px-2 text-white'  style={{display: 'inline',
                    margin: '75px'

                }}>new{promotional} </div>
            </button>
            
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Sent</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '130px'

                }}>new{sent} </div>
            </button>
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
                <span>Drafts</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '120px'

                }}>new{draft} </div>
            </button>
            


        </div>
        </div>
        </>

    )
    
}
export default SideBar;