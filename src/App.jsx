import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import ScrollToTop from './components/ScrollToTop';
import New from './components/New';

const App = () => {
  return (
    // <>
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Skills />
    //   <Contact />
    // </>

    <Router>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Projects/> */}
      <Contact />

      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

    </Router>

  )
}

export default App;













// const [showOptions, setshowOptions] = useState(false)
//   const handleClick = () => {
//     setshowOptions(!showOptions);
//   }

{/* <div> */ }
{/* <nav className='flex justify-between pr-2 pl-2 text-white  bg-[#081b29]'>
          <div>
            <h1 className='p-3 ml-5 text-2xl'><b>Portfolio</b></h1>
          </div>
          <div className='hidden md:block'>
            <ul className='flex'>
              <li className='p-3 ml-5'> <NavLink to="/home">HOME</NavLink></li>
              <li className='p-3 ml-5'> <NavLink to="/about">ABOUT</NavLink></li>
              <li className='p-3 ml-5'> <NavLink to="/skills">SKILLS</NavLink></li>
              <li className='p-3 ml-5'><NavLink to="/contact"> CONTACT</NavLink></li>
            </ul>
          </div>
          <div className='md:block'>
            <div className="relative inline-block text-left">
              <div>
                <button onClick={handleClick} type="button" className="md:hidden inline-flex w-full justify-center  text-4xl font-semibold text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  &#08801;
                </button>
              </div>
              {showOptions && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md ring-1 shadow-lg ring-white focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a to="#" className="block px-4 py-2 text-white" role="menuitem" tabindex="-1" id="menu-item-0">HOME</a>
                  <a to="#" className="block px-4 py-2 text-white" role="menuitem" tabindex="-1" id="menu-item-1">ABOUT</a>
                  <a to="#" className="block px-4 py-2 text-white" role="menuitem" tabindex="-1" id="menu-item-2">SKILLS</a>
                  <a to="#" className="block px-4 py-2 text-white" role="menuitem" tabindex="-1" id="menu-item-2">CONTACTS</a>
                </div>
              </div>)}
            </div>
          </div>
        </nav> */}