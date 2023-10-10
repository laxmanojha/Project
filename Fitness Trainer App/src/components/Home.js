import React, { useContext } from 'react'
import './Home.css'
import pullups from '../assets/icons8-pullups-100.png'
import dumbell from '../assets/icons8-dumbbell-100.png'
import healthyeating from '../assets/icons8-healthy-eating-100.png'
import personalTraining from '../assets/online-and-in-person-personal-trainer_orig.jpg'
import mission from '../assets/mission_orig.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export const Home = () => {
    
    const {startButtonHandler,aboutButtonHandler,offerButtonHandler,contactButtonHandler,scroll,scrollHandler} = useContext(AppContext);

    
  return (
    <div className=' flex flex-col'>

        {/* first page */}
        <div className=' flex items-start w-full h-screen pt-32 text-white bg-image max-[600px]:pt-96'>
            <div className=' flex flex-col p-14 max-[600px]:w-full max-[900px]:w-full max-[2000px]:w-1/2'>

                <h1 className=' text-gray-400 text-5xl max-[600px]:text-4xl'>Take Your Fitness</h1>
                <h1 className=' text-white text-6xl max-[600px]:text-4xl'>To The Next Level</h1>
                <h3 className=' text-white text-xl uppercase my-4 max-[600px]:text-xs'>
                PREMIUM ONLINE & INDIVIDUAL PERSONAL Coaching IN JAIPUR WITH YOUR PERSONAL Coach
                </h3>

                <button onClick={startButtonHandler} className=' my-8 py-2 px-4 border-2 w-fit border-white bg-white text-black rounded-3xl max-[600px]:text-xs hover:bg-black hover:text-white transition-all duration-500'>
                    Start Here
                </button>
            </div>
            {/* <div className=' w-1/2'>
                <img src={image} 
                className=' h-fit'/>
            </div> */}
        </div>


        {/* Second page */}
        <div className=' flex flex-col'>

            {/* texts */}
            <div className=' flex flex-col gap-y-3 mx-72 mt-10 max-[1000px]:mx-2'>
                <h1 className=' text-center text-gray-400 font-bold text-3xl'>BE A BETTER​ YOU</h1>
                <h1 className=' text-center uppercase font-bold text-xl'>PERSONAL Coaching IN JAIPUR</h1>
                <p className=' text-justify mb-20 text-gray-400 px-5'> Whether you want to lose weight, tone up, gain lean muscle or you are happy as you are but would like a healthier lifestyle, RCotterill PT is the right choice for you. Everyone wants to feel comfortable in their own skin, therefore, even if you are working a busy schedule, finding it hard to meet your fitness goals or would like to get fit, RCotterill PT gives you the flexibility to reach your full potential with a variety of different online and individual personal Coaching plans.</p>
            </div>

            {/* cards */}
            <div className=' flex gap-x-20 mx-20 mb-20 max-[1000px]:flex-col max-[600px]:gap-y-4 max-[600px]:mx-7'>

                <div className=' flex flex-col items-center border shadow-md shadow-slate-500 gap-y-5 py-10 px-10'>
                    <img src={pullups} width='60px'/>
                    <h1 className=' text-xl font-bold uppercase text-center'>Athletic figure</h1>
                    <p className=' text-gray-400 text-justify'>If your busy professional life pushed your physical fitness to the backseat, there is a solution. The RCotterill PT  online plans will help you achieve your desired body image in no time.​</p>
                </div>
                <div className=' flex flex-col items-center border shadow-md shadow-slate-500 gap-y-5 py-10 px-10 text-justify'>
                    <img src={dumbell} width='60px'/>
                    <h1 className=' text-xl font-bold uppercase text-center'>Confidence boost</h1>
                    <p className=' text-gray-400 text-justify'>We don't only focus on the image in the mirror, but also how you feel in your skin. Achieving milestones with your body will transfer into your daily life as increased confidence. </p>
                </div>
                <div className=' flex flex-col items-center border shadow-md shadow-slate-500 gap-y-5 py-10 px-10 text-justify'>
                    <img src={healthyeating} width='60px'/>
                    <h1 className=' text-xl font-bold uppercase  text-center'>quality of life</h1>
                    <p className=' text-gray-400 text-justify'>The ultimate goal is for you to enjoy your life to the fullest, engage in social situations confidently and take up events you always wanted without limitations of your body.​</p>
                </div>

            </div>

        </div>


        {/* Third page */}
        <div className=' flex w-full bg-black text-white py-20 px-10 gap-x-5 max-[600px]:flex-col-reverse max-[600px]:px-2'>

            <div className=' flex flex-col w-1/2 gap-y-3 px-5 max-[600px]:w-full max-[600px]:items-center'>
                <h1 className=' text-[40px] mt-5 max-[600px]:text-2xl max-[600px]:font-semibold max-[600px]:text-center'>Online & Individual Personal Coaching in Jaipur</h1>
                <p className=' text-justify'>Throughout my fitness journey, I’ve helped hundreds of people to improve their relationship with food and their bodies. But more than that, they've extended their lives and put the spark back into their Coaching. While variety is essential to keep you interested - too much variety might inhibit your progress. That's why, as a <span className=' font-bold'>personal Coach in Jaipur</span>, I want to help you stick with a Coaching programme long enough that you see real results.</p>
                <p className=' text-justify'>When my clients start Coaching, they see their time in the gym as something else to juggle. But they soon learn that the flexibility, nutritional coaching and support they receive has a positive knock-on effect into the rest of their lives. They're more productive at work, they're more present for their families and importantly, they start to like themselves again. </p>
                <button onClick={aboutButtonHandler} className=' w-fit uppercase bg-white text-black hover:text-white hover:bg-black transition-all duration-500 border-2 px-6 py-2 rounded-3xl mt-2 max-[600px]:text-xs'
                >About</button>

            </div>

            <div className=' w-1/2 px-5 max-[600px]:w-full'>
                <img src={personalTraining} width="550px" className=' shadow-lg shadow-white'/>
            </div>

        </div>

        {/* fourth page */}
        <div className=' flex py-20 px-10 gap-y-6 max-[600px]:flex-col max-[600px]:px-2'>
            <div className=' w-1/2 px-5 max-[600px]:w-full'>
                <img src={mission} width='500px' className=' shadow-lg shadow-black'
                />
            </div>

            <div className=' w-1/2 flex flex-col gap-y-2 px-5 max-[600px]:w-full max-[600px]:items-center'>
                <h1 className=' text-4xl max-[600px]:font-semibold'>My Mission</h1>
                <p className=' text-gray-400 text-justify'> love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level.</p>
                <button onClick={contactButtonHandler} className=' w-fit uppercase bg-black text-white hover:text-black hover:bg-white transition-all duration-500 border-2 border-black px-6 py-2 rounded-3xl mt-2 max-[600px]:text-xs'
                >Contact an expert</button>
            </div>
        </div>


        {/* fifth page */}
        <div className=' flex flex-col items-center px-20 gap-y-5 py-20 bg-black text-white max-[600px]:px-8'>
            <h1 className=' text-5xl capitalize max-[600px]:text-2xl max-[600px]:font-semibold max-[600px]:text-center'>claim your free strategy call!</h1>
            <p className=' text-justify'>Experience what I can do for you first hand. Get a free strategy call via phone or video chat, learn how to maximise your workouts and get advice specific to you and your fitness goals. If you choose to work with me, that's great. If not, that's cool too. </p>
            <button className=' uppercase py-2 px-4 border-2 w-fit border-white bg-white text-black rounded-3xl hover:bg-black hover:text-white transition-all duration-500 max-[600px]:text-xs'
            onClick={offerButtonHandler}>
                Claim Offer
            </button>
            <div className=' flex justify-end w-full'><img onClick={scrollHandler} src={scroll} width='50px' className=' p-3 rounded-xl bg-gray-400 shadow hover:scale-105'/></div>
            <div className=' flex justify-between mt-10 border-t w-full pt-5 gap-y-2 max-[600px]:flex-col'>
                <p className=' text-gray-400 text-sm max-[600px]:text-[10px]'>© COPYRIGHT 2023. ALL RIGHTS RESERVED.</p>
                <Link to="https://www.linkedin.com/in/laxman-prasad-ojha-b407b3201/" target='_blank' className=' underline text-gray-400 text-sm max-[600px]:text-[10px]'>@website developer</Link>
            </div>
        </div>


    </div>
    
  )
}
