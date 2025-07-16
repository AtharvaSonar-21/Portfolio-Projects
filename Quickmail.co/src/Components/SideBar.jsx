import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
function SideBar({isOpen,sentcount = 0 , draftcount = 0}
    ,inboxcount = 0,
  updatescount = 0,
  promotionalcount = 0
) {
    const baseClass = "transition-all duration-300 bg-white shadow-md h-full overflow-y-auto";
    const activeClass = "bg-gray-200";
   
    return(
        <>
        <div className={`${baseClass} ${isOpen ? "w-64" : "w-0"} overflow-hidden`}>
            <div className='flex flex-col justify-between h-screen'>
                <div className='bg-gray-100 h-screen w-2xs '>
                <div className='text-center p-4'>
                    <p className="text-xl font-semibold text-gray-800"> Quickmail.co</p>
                </div>
            

                

                <button className='bg-gray-300 p-4 m-2  rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/'
                className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-black'}
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
                    
                    new{inboxcount} 
                    
                    </div>
                </NavLink>
                </button>
                
                
                
            
            
            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/updates'
                className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-black'}
                                         border-b
                                         border-gray-100 
                                         hover:bg-gray-50 
                                         lg:hover:bg-transparent 
                                         lg:border-0 hover:text-red-700
                                         lg:p-0`
                                    }
                >
                Updates
                <div className=' bg-yellow-300 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '100px'

                }}>new{updatescount} </div>
                </NavLink>
            </button>

            <button className='bg-gray-300 p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/Promotional'
                className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-black'}
                                         border-b
                                         border-gray-100 
                                         hover:bg-gray-50 
                                         lg:hover:bg-transparent 
                                         lg:border-0 hover:text-orange-700
                                         lg:p-0`
                                    }
                >
                <span>Promotional</span>
                <div className='bg-blue-300 rounded-2xl px-2 text-white'  style={{display: 'inline',
                    margin: '75px'

                }}>new{promotionalcount} </div>
                </NavLink>
            </button>
            
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
                <NavLink
                to = '/sent'
                className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-black'}
                                         border-b
                                         border-gray-100 
                                         hover:bg-gray-50 
                                         lg:hover:bg-transparent 
                                         lg:border-0 hover:text-orange-700
                                         lg:p-0`
                                    }
                >
                <span>Sent</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '130px'

                }}>new{sentcount} </div>
                </NavLink>
            </button>
            <button className='bg-gray-300  p-4 m-2 rounded-4xl w-3xs text-left'>
              <NavLink
              to="/drafts"
              className={({isactive}) =>
                                        `block py-2 pr-4 
                                         pl-3 duration-200 ${isactive ? 'text-orange-700':'text-black-700'}
                                         border-b
                                         border-gray-100 
                                         hover:bg-gray-50 
                                         lg:hover:bg-transparent 
                                         lg:border-0 hover:text-orange-700
                                         lg:p-0`
                                    }
              >

                <span>Drafts</span>
                <div className='flex bg-red-600 rounded-2xl px-2 text-white' style={{display: 'inline',
                    margin: '120px'

                }}>new{draftcount} </div>
                </NavLink>
            </button>
           


        </div>
        </div>
        </div>  
        </>

    )
    
}
export default SideBar;