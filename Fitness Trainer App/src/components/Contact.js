import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export const Contact = () => {

  const {scroll, scrollHandler} = useContext(AppContext);
  return (
    <div>

      <div className=' flex items-center w-full h-screen pt-32 text-white bg-image'>
            <div className=' flex flex-col p-14 max-[600px]:w-full max-[900px]:w-full max-[2000px]:w-1/2'>

                <h1 className=' text-gray-400 text-5xl'>Contact</h1>
                <h3 className=' text-white text-xl my-4 max-[600px]:text-xs'>
          HAVE QUESTIONS? FEEL FREE TO GET IN TOUCH TO RECEIVE ANSWERS!
                </h3>
        </div>
      </div>

      <div className=" flex justify-center items-center my-10">

        <div className=" shadow-inner shadow-gray-500 w-2/5 px-10 flex flex-col max-[600px]:w-4/5">
            <div className=' flex justify-start w-full'>
                <h1 className=" text-4xl my-4">Contact</h1>
            </div>
            <div className=' w-full pb-10'>
              <form action="mailto:gs0380462@gmail.com?subject=Contact Details" method="post" enctype="text/plain" className=' w-full'>
                <span className=" text-lg">Name</span><sup className=" text-red-500">*</sup><br/><input type="text" placeholder="First Name" name="First-Name" required className=" p-1 border border-black h-10 w-1/2 mr-5"/>
                <input type="text" name="Last-Name" required placeholder='Last Name' className=" p-1 border border-black h-10 w-2/5"/> <br/>
                <span className=" text-lg">E-Mail</span><sup className=" text-red-500">*</sup><br/><input type="email" name="Email-id" required className=" p-1 border border-black h-10 w-full"/><br/>
                <span className=" text-lg">Phone</span><sup className=" text-red-500">*</sup><br/><input type="text" name="Mobile-no." required className=" p-1 border border-black h-10 w-full"/><br/>
                <span className=" text-lg">Comment</span><sup className=" text-red-500">*</sup><br/><textarea type="text" name="Additional-Comment" className=" p-1 border border-black h-40 w-full"/><br/><br/>
                <input type="submit" value="submit"  className=' uppercase py-2 px-4 border-2 w-fit border-black bg-white text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-500'/>
            </form>
            </div>
            
        </div>
      </div>
      <div className=' flex flex-col items-center px-20 pb-20 bg-white max-[600px]:px-8'>
            <div className=' flex justify-end w-full'><img onClick={scrollHandler} src={scroll} width='50px' className=' p-3 rounded-xl bg-gray-400 shadow hover:scale-105'/></div>
            <div className=' flex justify-between mt-10 border-t w-full pt-5 gap-y-2 max-[600px]:flex-col'>
                <p className=' text-gray-400 text-sm max-[600px]:text-[10px]'>© COPYRIGHT 2023. ALL RIGHTS RESERVED.</p>
                <Link to="https://www.linkedin.com/in/laxman-prasad-ojha-b407b3201/" target='_blank' className=' underline text-gray-400 text-sm max-[600px]:text-[10px]'>@website developer</Link>
            </div>
        </div>
    </div>
  )
}
