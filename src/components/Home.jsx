import React from 'react'
import About from './About'
import { Link, NavLink } from 'react-router-dom'
import images from '../assets/images/homeImage.jpg'
// import images from '../assets/images/profile.jpg'
import { useEffect } from 'react'

const Home = () => {

  return (
    <>
      <div id='home' className='bg-[#081b29] h-auto overflow-hidden text-white md:flex justify-center'>
        <div className='text-center pt-10 sm:pl-20 sm:text-left md:pt-20 md:pl-0 md:h-[500px] lg:pt-28 lg:pl-0 not-italic lg:h-[600px] ' data-aos="fade-down" data-aos-duration="1500" >{/* h-[620px]home-intro first section....*/}
          <h1 className='text-2xl pt-10 sm:text-3xl md:text-4xl lg:text-6xl  tracking-wider uppercase' ><b>Hello, It's Annanya Agastya</b></h1>
           <h3 className='text-xl pt-3 sm:text-2xl md:text-3xl md:pt-5 lg:text-4xl xl:pt-7 ' >And I'm a <span className='text-[#00ffff]'>Full Stack Web Developer,</span>  </h3>
          <p className='text-[13px] pt-1 sm:text-[18px] md:text-xl lg:text-2xl lg:pt-3 ' >Specializing in MERN Stack. Expertise is to create
            responsive websites <br />and web designs and many more...... </p>

          <div className='flex justify-center pt-5 sm:justify-normal lg:pt-6 '>{/* home icons....*/}
            <div className=' border-2 border-[#00ffff] rounded-full  hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
              <Link to="https://www.linkedin.com/in/annanya-agastya-87a244271" target="_blank">
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" alt="" />
              </Link>
            </div>
            <div className='border-2 border-[#00ffff] rounded-full ml-3 hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
              <Link to="https://github.com/annanyaAg" target="_blank" >
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="" />
              </Link>
            </div>
            <div className='border-2 border-[#00ffff] rounded-full ml-3 hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
              <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/2099/2099100.png" alt="" />
            </div>
          </div>

          <div className='pt-5 md:pt-6 '>
            <Link to="https://drive.google.com/file/d/1RTkaZX7k2SwfGP_feEYRbwZ9wQLxinhi/view?usp=drivesdk" target='_blank'>
              <button className=' bg-[#00ffff] text-[#081b29] md:text-lg rounded-3xl font-bold pl-4 pr-4 pt-2 pb-2 tracking-wider hover:shadow-[0px_-4px_10px_#02abb0,0px_4px_10px_#02abb0]'>Resume</button>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
