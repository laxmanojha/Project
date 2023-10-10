import React from "react";
import claimOffer from '../assets/claimOffer.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Offer = () => {

  const {scroll, scrollHandler} = useContext(AppContext);
  return (
    <div>

      <div className=" flex items-center justify-start w-full h-screen pt-32 text-white bg-image">
          <h1 className=" text-gray-400 text-5xl mx-20">
            Let's <span className="text-white">Start</span>
          </h1>
      </div>

      <div className=" flex gap-x-10 py-10 max-[600px]:flex-col max-[600px]:items-center max-[600px]:text-justify">
        <div>
            <img src={claimOffer} width="400px"/>
        </div>
        <div className=" w-4/5 px-5">
            <div>
                <h1 className=" text-3xl my-2">FREE Consultation!</h1>
                <p className=" my-2 text-gray-400">Enter your details in the form below and you’ll be contacted to arrange the best time to discuss your health and wellbeing goals.  If after your consultation you choose to work with us, that's great. If not, that's cool too.</p>
            </div>
            <form action="mailto:gs0380462@gmail.com?subject=Contact Details to Claim Offer" method="post" enctype="text/plain">
                <p className=" text-lg">My Goals Are:</p>
                <label className="flex items-center"><input type="checkbox" name="Weight-Loss" className=" w-5 h-5 m-2"/>Weight Loss</label>
                <label className="flex items-center"><input type="checkbox" name="Muscle-Tone" className=" w-5 h-5 m-2"/>Muscle Tone</label>
                <label className="flex items-center"><input type="checkbox" name="Muscle-Size" className=" w-5 h-5 m-2"/>Muscle Size</label>
                <label className="flex items-center"><input type="checkbox" name="Fit-For-Life" className=" w-5 h-5 m-2"/>Fit For Life</label>
                <label className="flex items-center"><input type="checkbox" name="Sport-Specific" className=" w-5 h-5 m-2"/>Sport Specific</label>
                <p className=" text-lg">I Prefer to Talk Via:</p>
                <label className="flex items-center"><input type="checkbox" name='Email' className=" w-5 h-5 m-2"/>Email</label>
                <label className="flex items-center"><input type="checkbox" name='Call' className=" w-5 h-5 m-2"/>Phone Call</label>
                <label className="flex items-center"><input type="checkbox" name='Text-MSG' className=" w-5 h-5 m-2"/>Text Message</label>
                <span className=" text-lg">First Name</span><sup className=" text-red-500">*</sup><br/><input type="text" name="First-Name" placeholder="First-Name" required className=" p-1 border border-black h-10 w-1/2 max-[600px]:w-full"/> <br/>
                <span className=" text-lg">Last Name</span><sup className=" text-red-500">*</sup><br/><input type="text" name="Last-Name" placeholder="Last-Name" required className="  p-1 border border-black h-10 w-1/2 max-[600px]:w-full"/> <br/>
                <span className=" text-lg">E-Mail</span><sup className=" text-red-500">*</sup><br/><input type="email" name="Email-id" required className="  p-1 border border-black h-10 w-1/2 max-[600px]:w-full"/><br/>
                <span className=" text-lg">Phone</span><sup className=" text-red-500">*</sup><br/><input type="text" name="Mobile-no." required className=" p-1 border border-black h-10 w-1/2 max-[600px]:w-full"/><br/>
                <span className=" text-lg">Additional Comment:</span><br/><textarea type="text" name="Additional-Comment" className=" p-1 border border-black w-1/2 h-40 max-[600px]:w-full"/><br/><br/>
                <input type="submit" value="Claim Offer"  className=' uppercase py-2 px-4 border-2 w-fit border-black bg-white text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-500'/>
            </form>
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
  );
}
