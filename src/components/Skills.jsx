import React from 'react'

const Skills = () => {
  return (
    <>
      <div id='skills' className='bg-[#081b29] text-white pb-10  h-auto'> {/* h-[643px]*/}
        <div className='text-4xl overline pt-14 flex justify-center md:text-5xl md:pt-6 md:pl-0'>
          <h1 data-aos="flip-left" data-aos-duration="1200">My <span className='text-[#00ffff]'>Skills</span></h1>
        </div>

        <div className='block md:flex md:justify-evenly pt-14 pb-12'>
          <div className='flex justify-center md:block' data-aos="zoom-in" data-aos-duration="1500">
            <div className='p-2 border border-[#00ffff] shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff] h-[250px] w-[300px] md:p-2 md:h-[250px] md:w-[270px] lg:h-[300px] lg:w-[330px] rounded-xl'>
              <div className='p-5'>
                <h1 className='text-xl underline underline-offset-4'>Programming Skills</h1>
              </div>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>HTML 5</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>CSS 3</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>Javascript</button>
            </div>
          </div>

          <div className='flex justify-center mt-9 md:block md:mt-0' data-aos="zoom-in" data-aos-duration="1500">
            <div className='p-1 border border-[#00ffff] shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff] h-[250px] w-[300px] md:p-2 md:h-[250px] md:w-[270px] lg:h-[300px] lg:w-[350px] rounded-xl'>
              <div className='p-5'>
                <h1 className='text-xl underline underline-offset-4'>Frameworks & Libraries</h1>
              </div>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>Bootstrap</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>TAilwind CSS</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>ReactJS</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>React Router</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>Redux</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>NodeJS</button>
              <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>ExpressJS</button>
            </div>
          </div>
 
          <div className='flex justify-center mt-9 md:block md:mt-0' data-aos="zoom-in" data-aos-duration="1500">
            <div className='p-2 border border-[#00ffff] shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]  h-[250px] w-[300px] md:p-2 md:h-[250px] md:w-[270px] lg:h-[300px] lg:w-[350px] rounded-xl'>
              <div className='p-5'>
                <h1 className='text-xl underline underline-offset-4'>Database & Hosting</h1>
              </div>
              <div>
                <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>MongoDB</button>
                <button className='border border-white p-2 hover:bg-[#00ffff] hover:text-[#081b29] rounded-md bg-[#092236eb] ml-3 mt-3'>Netlify</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Skills



















{/* 
  
  
  
   */}
{/* <button className='border border-white p-2 rounded-md bg-[#092236eb] ml-3 mt-3'>Bootstrap</button> */ }
{/* <button className='border border-white p-2 rounded-md bg-[#092236eb] ml-3 mt-3'>ReactJS</button> */ }
{/* <button className='border border-white p-2 rounded-md bg-[#092236eb] ml-3 mt-3'>TAilwind CSS</button> */ }
{/* <button className='border border-white p-2 rounded-md bg-[#092236eb] ml-3 mt-3'>NodeJS</button> */ }
{/* <button className='border border-white p-2 rounded-md bg-[#092236eb] ml-3 mt-3'>MongoDB</button> */ }



{/* <div className='flex justify-evenly'>
              <div className='flex bg-[#092236eb] border border-white w-auto rounded-md p-[6px]'>
                <img className='h-5 w-5 mt-1' src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="" />
                <button className='pl-2 bg-[#092236eb] '>Bootstrap</button>
              </div>
              <div className='flex bg-[#092236eb] border border-white w-auto rounded-md p-[6px]'>
                <img className='h-5 w-5 mt-1' src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" alt="" />
                <button className='pl-2 bg-[#092236eb] '>TAilwind CSS</button>
              </div>
              <div className='flex bg-[#092236eb] border border-white w-auto rounded-md p-[6px]'>
                <img className='react-logo h-5 w-5 ' src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="" />
                <button className='pl-2 bg-[#092236eb] '>ReactJS</button>
              </div>


            </div>*/}

{/* */ }







{/* <div className='flex justify-evenly pt-12'>First Row....
          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>first card....
            <div className='flex justify-evenly pt-6 '>
              <img className='h-10 w-10 md:h-20 md:w-20' src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="" />
            </div>
            <h1 className='md:text-[26px] ml-6 mt-2 md:ml-20 md:mt-8 font-bold'>HTML</h1>
          </div>

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
            <div className='flex justify-evenly pt-6'>
              <img className='h-10 w-10 md:h-20 md:w-20' src="https://cdn-icons-png.flaticon.com/128/16020/16020753.png" alt="" />
            </div>
            <h1 className='md:text-[26px] ml-9 mt-2 md:ml-24 md:mt-8 font-bold'> CSS</h1>
          </div>

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>second card....
            <img className='h-10 w-10 md:h-20 md:w-20 ml-12 mt-8' src="data:image/png;base64,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" alt="" />
            <h1 className='md:text-[26px] ml-12 mt-10 font-bold'>JAVASCRIPT</h1>
          </div>

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>third card....
            <img className='h-10 w-10 md:h-20 md:w-20 ml-10 mt-8' src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="" />
            <h1 className='md:text-[26px] ml-12 mt-10 font-bold'>BOOTSTRAP</h1>
          </div>
        </div>

        <div className='flex justify-evenly pt-14'> Second Row....
          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>fourth card....
            <img className='react-logo h-10 w-10 ml-9 md:h-28 md:w-28 md:ml-16 mt-5' src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="" />
            <h1 className='md:text-[26px] ml-5 md:ml-[65px] mt-6 font-bold'>React JS</h1>
          </div>

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>fifth card....
            <img className='h-12 w-12 ml-9 md:h-28 md:w-28 md:ml-16 mt-4' src="https://cdn-icons-png.flaticon.com/128/15379/15379746.png" alt="" />
            <h1 className='md:text-[26px] ml-6 md:ml-[65px] mt-6 font-bold'>Node JS</h1>
          </div> 

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>sixth card....
            <img className='h-10 w-10 md:h-24 md:w-24 ml-[45px] mt-5' src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" />
            <h1 className='md:text-[26px] ml-7 md:ml-16 mt-8 font-bold'>MongoDB</h1>
          </div>

          <div className='h-28 w-24 md:h-56 md:w-60 border-white border rounded-3xl shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>sixth card....
            <img className='h-11 w-11 md:h-24 md:w-24 ml-10 md:ml-[70px] mt-5' src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" alt="" />
            <h1 className='md:text-[26px] ml-11 mt-8 font-bold'>Tailwind CSS</h1>
          </div>

        </div> */}