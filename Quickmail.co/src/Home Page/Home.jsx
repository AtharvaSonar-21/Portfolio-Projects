import React from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Home(){
    return (
    
        <div className= "w-screen relative">

            <div class="relative h-screen w-full">
                <img src="https://images.pexels.com/photos/4112358/pexels-photo-4112358.jpeg" alt="responsive image" class="w-full h-full object-cover" />
                                
                <div className="absolute inset-0 bg-gray-900/30 z-0"></div>


                <div className="absolute top-0 w-full px-10 py-6 flex items-center justify-between z-10 bg-white/55">
                  <h2 className="text-white text-2xl font-bold">QuickMail.co</h2>
                    <div className="space-x-6">
                      <Link to="/" className="text-white font-medium hover:underline">Home</Link>
                      <Link to="/signup" className="text-white font-medium hover:underline">Sign Up</Link>
                      <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition">
                          Login
                      </Link>
                    </div>
                </div>

                <section class="text-center px-6 py-20  rounded-4xl">
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
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
                <section className="bg-white py-16 px-6 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose QuickMail?</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">📬 Smart Inbox</h3>
                      <p className="text-gray-600 mt-2">Organized view of important emails only.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">⚡ Lightning Fast</h3>
                      <p className="text-gray-600 mt-2">Minimal and optimized for speed and simplicity.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-700">🔐 Secure by Design</h3>
                      <p className="text-gray-600 mt-2">Built on Firebase Auth and Firestore for data safety.</p>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="bg-white/60 text-center py-4 text-sm text-gray-600">
                  © 2025 QuickMail | Built by Atharva Sonar
                </footer>

                
            </div>
            

    )
}
export default Home;
