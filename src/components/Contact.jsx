import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9502b080-c8a9-430e-9ad2-78e35ba5f5a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };


  return (
    <>
      <div id='contact' className='bg-[#081b29] text-white h-auto overflow-hidden'>
        <div className='text-4xl overline pt-32 flex justify-center md:text-5xl md:pt-9 md:pl-0'>
          <h1 data-aos="flip-left" data-aos-duration="1200">Contact<span className='text-[#00ffff]'>Me</span></h1>
        </div>

        <div className='block pt-16 md:flex md:justify-evenly md:pl-0'>
          <div className='' data-aos="fade-down" data-aos-duration="1500" >{/*about contact...pl-40.*/}
            <div className='flex justify-center md:block text-gray-500'>
              <h1 className='text-xl text-white text-bold font-bold'>Let's Work Together</h1>
            </div>
            <div className='flex justify-center md:block text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quo.</p>
            </div>

            <div className='flex justify-center md:justify-normal pt-6'> {/* contact icons....*/}
              <div className='border-2 border-[#00ffff] rounded-full  hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="" />
              </div>
              <div className='border-2 border-[#00ffff] rounded-full ml-3 hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png" alt="" />
              </div>
              <div className='border-2 border-[#00ffff] rounded-full ml-3 hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="" />
              </div>
              <div className='border-2 border-[#00ffff] rounded-full ml-3 hover:shadow-[0px_-4px_10px_#00ffff,0px_4px_10px_#00ffff]'>
                <img className='icons h-10 w-10 p-3' src="https://cdn-icons-png.flaticon.com/128/2099/2099100.png" alt="" />
              </div>
            </div>
          </div><br />

          <div className='flex justify-center pt-5 md:pt-0' data-aos="flip-right" data-aos-duration="1300">
            <div className=' border border-black rounded-3xl bg-[#00ffff] text-black h-[440px] w-[345px] md:w-96 md:h-[450px]'>{/*contact form.....*/}
              <form className='' action="" onSubmit={onSubmit}>
                <div className='pl-7 pt-3 md:pl-12  md:pt-4'>
                  <label className='text-lg'>Full Name :</label><br /><input className='rounded-lg  border-none  text-white h-10 w-72 md:h-10 md:w-72 bg-[#081b29] border' name='name' type="text" placeholder=' Enter your name...' required /><br />
                </div>
                <div className='pl-7 pt-4 md:pl-12 '>
                  <label className='text-lg'>Email : </label> <br /><input className='rounded-lg text-white bg-[#081b29] h-10 w-72 md:h-10 md:w-72' name='email' type="email" placeholder=' Enter your email...' required /><br />
                </div>
                <div className='pl-7  pt-4 md:pl-12'>
                  <label className='text-lg'>Your Message :</label><br /><textarea className='rounded-lg text-white bg-[#081b29] h-32 w-72' name='message' type="text" placeholder=' Enter your message...' required />
                </div>
                <div className='pl-7  pt-7 md:pl-12'>
                  <button type='submit' className='bg-[#081b29] w-72 md:h-10 md:w-72 text-white border-none p-2 rounded-lg hover:bg-black hover:text-white'>Send Message</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact