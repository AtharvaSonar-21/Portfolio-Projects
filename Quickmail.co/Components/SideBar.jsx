import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
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
            

                

                <button className='bg-gray-300 p-4 m-2  rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/'
                className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-gray-700'}
                                         border-b
                                         border-gray-100 
                                         hover:bg-gray-50 
                                         lg:hover:bg-transparent 
                                         lg:border-0 hover:text-orange-700
                                         lg:p-0`
                                    }
                    >Inbox
                <div className='bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '120px'

                }}>
                    
                    new{inbox} 
                    
                    </div>
                </NavLink>
                </button>
                
                
                
            
            
            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/updates'
                >
                Updates
                <div className=' bg-yellow-300 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '100px'

                }}>new{updates} </div>
                </NavLink>
            </button>

            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/Promotional'
                >
                <span>Promotional</span>
                <div className='bg-blue-300 rounded-2xl px-2 text-white'  style={{display: 'inline',
                    margin: '75px'

                }}>new{promotional} </div>
                </NavLink>
            </button>
            
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/sent'
                >
                <span>Sent</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '130px'

                }}>new{sent} </div>
                </NavLink>
            </button>
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
              <NavLink
              to="/drafts"
              >

                <span>Drafts</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '120px'

                }}>new{draft} </div>
                </NavLink>
            </button>
           


        </div>
        </div>
        </>

    )
    
}
export default SideBar;