import React from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { Navbar } from "react-bootstrap";


function Home(){
    return (
    
        <div className= "h-screen w-screen overflow-hidden">

            <div class="w-full max-w-screen h-screen">
                <img src="https://images.pexels.com/photos/4112358/pexels-photo-4112358.jpeg" alt="responsive image" class="w-full h-full object-cover" />
                                
                <div className="absolute inset-0 bg-gray-900/20 h-screen"></div>

                <div class="flex absolute inset-0 bg-white/60 h-20 rounded-lg">
                  <div class="absolute inset-0 flex items-center justify p-10">
                    <h2 class="text-white text-xl font-bold ">
                        QuickMail.co
                    </h2>
                </div>
                    

                </div>

                    <section class="text-center px-6 py-20  rounded-4xl mt-50 h-100 w-200">
                              <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                                <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                                  Your Inbox, Reimagined.
                                </h1>
                                <p class="mt-4 text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-md">
                                  A smarter, faster, and more secure way to email. Clean interface. Zero clutter. Total control.
                                </p>
                                <div class="mt-8">
                                  <a href="/signup" class="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition">
                                    Get Started – It's Free
                                  </a>
                                  <a href="/learn-more" class="ml-4 text-blue-200 hover:underline">
                                    Learn More
                                  </a>
                                </div>
                              </div>
                    </section>
                    
                </div>
                
            </div>
            

    )
}
export default Home;
