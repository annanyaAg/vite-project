import React from 'react'
import images from '../assets/images/profile.jpg'


const About = () => {
  return (
    <>
      <div id='about' className='bg-[#081b29] pb-14 text-white h-auto overflow-hidden ' > {/*h-[650px] */}

        <div className='text-4xl overline pt-20 flex justify-center md:text-5xl md:pt-8 md:pl-0'>
          <h1 data-aos="flip-left" data-aos-duration="1200">About <span className='text-[#00ffff]'>Me</span></h1>
        </div>
        <div className='flex justify-center text-base pt-3 md:flex-none md:text-lg '>
          <p className='pl-3 text-xs text-center sm:text-sm md:pl-10  md:text-[15px]'>Here you will find more information about me, what i do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className='md:flex md:justify-between block lg:h-[535px]'>
          <div className=''> {/* about-intro first section....*/}
            <div className=' text-center sm:text-left text-[14px] pt-12 pl-0 sm:pl-16 sm:text-lg md:text-[14px] md:pl-12 lg:text-[16px] xl:text-xl xl:pl-44' data-aos="fade-down" data-aos-duration="1500"> 
              <p>Hello! I'm Annanya Agastya, a Full Stack Web Developer <br />
                Specializing in MERN Stack with a passion for building fast, <br />
                scalable, and user-friendly web applications and managing the <br />
                Frontent and backend of Websites with the understanding of <br />
                ReactJS, NodeJS and MongoDB.</p> <br />

              <p className=''>As a Full Stack Web Developer, I'have strong technical ability to <br />
                independently and collaboratively deliver high-quality web <br />
                applications with a clear understanding of web development in <br />
                collaborative team environments. I staying up-to-date with the <br /> latest
                trends and technologies in web development.</p><br />

              <p className=''>I'm passionate about new challenges and opportunities to grow. <br />
                Feel free to explore my portfolio, If you think i might me a goodfit,<br />
                please contact me through my contact page.</p>
            </div>
          </div>

          <div className='flex justify-center pt-16 md:pt-12 md:pr-7 lg:pr-28 lg:pt-12 xl:pr-40' data-aos="flip-right" data-aos-duration="1300">{/* about second section....*/}
            <div className='bg-[#092236eb] h-80 w-72 md:h-96 lg:h-96 lg:w-96 xl:h-[400px] xl:w-[350px] rounded-xl '> <br />
              <div className=''>
                <center><img src={images} alt="" className='rounded-full h-36 w-36' /></center>
              </div>
              <div className='bg-[#081b29] rounded-xl ml-3 mr-3 mt-4 md:mt-10'>
                <center>
                  <h1 className=''>Annanya Agastya</h1>
                  <p className=''>Full Stack Developer</p>
                  <div className='flex justify-center'>
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt="" className='location-icon h-5 w-5 mt-1' />
                    <p className='pl-1 '>Roorkee, Uttarakhand</p>
                  </div>
                </center>
              </div>
              <div className='flex justify-center bg-[#081b29] p-2 rounded-xl  ml-3 mr-3 mt-3 md:mt-7' >
                <img src="https://cdn-icons-png.flaticon.com/128/2099/2099100.png" alt="" className='email-icon h-5 w-5 mt-1' />
                <p className='pl-2 text-[#00ffff]'>annanya200001@gmail.com</p>
              </div>
            </div>
          </div>


        </div>

      </div>


    </>
  )
}

export default About
