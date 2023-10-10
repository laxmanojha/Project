import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export const Services = () => {

  const {scrollHandler,scroll} = useContext(AppContext);
  return (
    <div>
      <div className=' flex items-center w-full h-screen pt-32 text-white bg-image max-[600px]:pt-[240px]'>
            <div className=' flex flex-col p-14 max-[600px]:w-full max-[900px]:w-full max-[2000px]:w-1/2'>

                <h1 className=' text-gray-400 text-5xl max-[600px]:text-4xl'>Individual Personal Coaching</h1>
                <h3 className=' text-white uppercase text-xl my-4 max-[600px]:text-xs'>
                  IN-PERSON 1:1 AND SMALL GROUP PERSONAL Coaching SESSIONS FOR PEOPLE IN THE JAIPUR AREA
                </h3>
        </div>
      </div>

      <div className=' flex flex-col gap-y-10 my-20'>

        <div className=' text-center text-4xl uppercase mx-5 max-[600px]:text-xl'>
          <h1>Individual Personal Coaching</h1>
          <h1>for Ultimate Accountability of Your Fitness</h1>
        </div>

        <div className=' flex justify-center gap-x-20 max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-y-10'>

          <div className=' w-2/5 text-justify max-[600px]:w-4/5'>
            <p>Have you tried multiple times to lose excess weight or just even to develop a more active lifestyle for longevity only to fail miserably? The more often you tried, the less confidence you felt that you could do it, right? If that sounds like you, I have news! First, you're not alone. Many of my clients have been there before starting their journey with me. Second, you may just lacked the accountability that an in-person Coaching session can give you to push through the barriers that years or even decades of unhealthy habits built in your lifestyle.</p>
            <p>You can work with me individually or in a small group (up to 4 people per group) with like-minded people. The goal of these services is to help you acquire the knowledge, learn the skills and create habits that will equip you for life.</p>
            <h1 className=' text-xl font-semibold my-5'>Features</h1>
            <ul className=' leading-relaxed list-inside text-gray-500 list-disc '>
              <li>Individually Tailored Workouts</li>
              <li>Accountability Check-Ins</li>
              <li>Home Based PT Option</li>
              <li>Nutritional Coaching</li>
              <li>Macronutrient Guide</li>
              <li>Regular Assessments</li>
            </ul>
          </div>

          <div className=" shadow-lg shadow-gray-500 w-2/5 px-10 flex flex-col max-[600px]:w-4/5">
            <div className=' flex justify-start w-full'>
                <h1 className=" text-4xl my-4">Get In Touch</h1>
            </div>
            <div className=' w-full pb-10'>
              <form action="mailto:gs0380462@gmail.com?subject=Contact Details" method="post" enctype="text/plain" className=' w-full'>
                <span className=" text-lg">Name</span><sup className=" text-red-500">*</sup><br/><input type="text" placeholder="First Name" name="First-Name" required className=" border border-black p-1 h-10 w-1/2 mr-5"/>
                <input type="text" name="Last-Name" required placeholder='Last Name' className=" border border-black h-10 p-1 w-2/5"/> <br/>
                <span className=" text-lg">E-Mail</span><sup className=" text-red-500">*</sup><br/><input type="email" name="Email-id" required className=" p-1 border border-black h-10 w-full"/><br/>
                <span className=" text-lg">Phone</span><sup className=" text-red-500">*</sup><br/><input type="text" name="Mobile-no." required className=" p-1 border border-black h-10 w-full"/><br/>
                <span className=" text-lg">Comment</span><sup className=" text-red-500">*</sup><br/><textarea type="text" name="Additional-Comment" className=" p-1 border border-black h-40 w-full"/><br/><br/>
                <input type="submit" value="submit"  className=' uppercase py-2 px-4 border-2 w-fit border-black bg-white text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-500'/>
            </form>
            </div>
            
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
