import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    useEffect(() => {
        AOS.init({})
    }, [])

    const [showOptions, setshowOptions] = useState(false)
    const handleClick = () => {
        setshowOptions(!showOptions);
    }
    return (
        <>
            <nav className=' sticky top-0 text-white bg-[#081b29]'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h1 className='p-3 ml-5 text-3xl'><NavLink to="/"><b>Portfolio</b></NavLink></h1>
                    </div>
                    <div className='flex justify-between '>

                        <div className='hidden md:block'>
                            <ul className='flex'>
                                <li className='pl-5 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><a href="#home">HOME</a></li>
                                <li className='pl-5 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><a href="#about">ABOUT</a></li>
                                <li className='pl-5 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><a href="#skills">SKILLS</a></li>
                                {/* <li className='pl-5 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><a href="#projects">PROJECTS</a></li> */}
                                <li className='pr-14 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><a href="#contact"> CONTACT</a></li>

                                {/* <li className='pl-4 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'> <NavLink to="/about">ABOUT</NavLink></li>
                                <li className='pl-4 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'> <NavLink to="/">HOME</NavLink></li>
                                <li className='pl-4 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'> <NavLink to="/skills">SKILLS</NavLink></li>
                                <li className='pr-10 p-3 ml-6 hover:text-[#00ffff] hover:underline hover:underline-offset-8'><NavLink to="/contact"> CONTACT</NavLink></li> */}

                            </ul>
                        </div>
                        <div className='md:block'>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={handleClick} type="button" className="md:hidden inline-flex w-full justify-center  text-5xl font-semibold text-white" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        &#08801;
                                    </button>
                                </div>
                                {showOptions && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right shadow-lg ring-white focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div className="py-1 bg-[#081b29]" role="none">
                                        <a href="#home" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-0">HOME</a>
                                        <a href="#about" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-1">ABOUT</a>
                                        <a href="#skills" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-2">SKILLS</a>
                                        {/* <a href="#projects" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-2">PROJECTS</a> */}
                                        <a href="#contact" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-3">CONTACTS</a>

                                        {/* <NavLink to="/" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-0">HOME</NavLink>
                                <NavLink to="/about" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-1">ABOUT</NavLink>
                                <NavLink to="/skills" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-2">SKILLS</NavLink>
                                <NavLink to="/contact" className="block px-32 py-2 text-white underline md:hidden hover:text-[#00ffff]" role="menuitem" tabindex="-1" id="menu-item-3">CONTACTS</NavLink> */}
                                    </div>
                                </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
