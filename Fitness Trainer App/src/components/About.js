import React from 'react'
import image1 from '../assets/certificate_one.jpg'
import image2 from '../assets/certificate_two.jpg'
import image3 from '../assets/certificate_three.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const About = () => {

  const {scroll, scrollHandler} = useContext(AppContext);
  return (
    <div>

      <div className=' flex items-center w-full h-screen pt-32 text-white bg-image'>
            <div className=' flex flex-col p-14 max-[600px]:w-full max-[900px]:w-full max-[2000px]:w-1/2'>

                <h1 className=' text-gray-400 text-5xl'>About</h1>
                <h3 className=' text-white text-xl my-4 max-[600px]:text-xs'>
                I CAN RELATE TO YOUR FRUSTRATIONS AS TO WHY YOUR BODY ISN’T CHANGING AND I KNOW HOW TO HELP
                </h3>
        </div>
      </div>

      <div className=' flex w-full p-10 gap-x-10 max-[600px]:flex-col'>

        <div className='flex flex-col w-1/3 max-[600px]:w-full'>
            <h1 className=' text-2xl'>Laxmi Narayan Ojha</h1>
            <h2 className=' text-xl text-gray-500'>Personal Coach</h2>
        </div>

        <div className=' flex flex-col w-4/5 gap-y-4 text-justify max-[600px]:w-full'>

            <h1 className=' text-5xl my-10 max-[600px]:text-center'>Meet Your Coach</h1>
            <p className=' text-gray-500'>I am L.N.Ojha, a dedicated and experienced personal Coach with over five years of transforming lives through fitness. My journey in the fitness industry has been driven by a deep passion for helping others and a desire to witness the incredible power of physical and mental transformation.</p>
            <p className=' text-gray-500'>Throughout my career, I have had the privilege of motivating and guiding hundreds of individuals on their path to a better life. I firmly believe that fitness is not just about achieving a certain physique; it is about embracing a healthier, happier, and more fulfilling existence. My goal is to empower each client to make lasting changes that go beyond the gym and permeate every aspect of their lives.</p>
            <p className=' text-gray-500'>Drawing upon my comprehensive knowledge of exercise science, anatomy, and physiology, I create personalized Coaching programs that cater to the unique goals, preferences, and abilities of each individual I work with. Whether it's weight loss, muscle gain, or overall wellness, I am dedicated to designing workouts that are both effective and enjoyable.</p>
            <p className=' text-gray-500'>But fitness is about more than just the physical aspect. I understand the challenges and mental barriers that can hinder progress. That's why I place a strong emphasis on fostering a positive mindset and providing unwavering support. I am there every step of the way, motivating and encouraging my clients to push beyond their limits and discover their true potential.</p>
            <p className=' text-gray-500'>Seeing my clients experience transformative changes is the most rewarding part of my job. Witnessing individuals break free from sedentary lifestyles, regain their confidence, and embrace a newfound zest for life is truly inspiring. Each success story serves as a reminder of why I do what I do – to help others unleash their inner strength and create lasting change.</p>
            <p className=' text-gray-500'>If you are ready to embark on a transformative fitness journey, I invite you to join me. Together, we will turn your bitter past into a vibrant and thriving future in fitness. With my experience, passion, and unwavering dedication, I will guide and empower you to become the best version of yourself. Let's take this journey together and unlock your true potential.</p>

        </div>

      </div>
      
      <div className=' flex flex-col gap-y-10 items-center text-center w-full px-20 py-20 bg-black max-[600px]:px-10'>
          <quote className=' text-4xl text-gray-500 max-[600px]:text-justify'>
          "Mind over matter – focus your mind, your body will follow and you’ll be amazed at what you actually achieve."
          </quote>
          <author className='text-white font-semibold text-2xl uppercase'>
            very smart person
          </author>
        </div>

        <div className=' flex flex-col my-10'>
          
          <div className=' text-center mx-10'>
            <h1 className=' text-4xl my-4'>Why Choose me as Personal Coach?</h1>
            <p className=' text-gray-500 max-[600px]:text-justify'>I want to help men and women that have felt like they've been spinning their wheels with their fitness and health. I grasp that different diets can seem attractive and trying various solutions to find the style of eating that's right for you seems essential - but it can also slow your progress down while you are spending time on trial and error.</p>
          </div>

          <div className=' flex w-full gap-x-20 my-8 items-center justify-center max-[600px]:flex-col'>
            <div className=' w-1/4 max-[600px]:w-3/4'>
              <img src={image1} className=' w-72'/>
              <p className=' my-3 text-center uppercase font-semibold'>Certifide Coach</p>
            </div>
            <div className=' w-1/4 max-[600px]:w-3/4'>
              <img src={image2} className=' w-96'/>
              <p className=' my-3 text-center uppercase font-semibold'>Certifide Nutritionist</p>
            </div>
            <div className=' w-1/4 max-[600px]:w-3/4'>
              <img src={image3} className=' w-96'/>
              <p className=' my-3 text-center uppercase font-semibold'>Certifide Nursing Officer</p>
            </div>
          </div>

          <div>
            <p className=' text-center mx-10 text-gray-500 max-[600px]:text-justify'>
              I launched THEREALMAN__LIFTS, <Link to='/' onClick={scrollHandler} className=' underline text-gray-700 font-semibold'>Personal Coaching in Jaipur</Link>, so I can help people cut to the chase and find what works for them best as a result of using science-backed methods and individualisation protocols that will bring the results they desire. If you've just started working out, but you'd like to make the best out of your sessions, I am here to help. If you've been Coaching for some time but feel like you're stuck with your progress, I will show you how to overcome the plateau and start seeing results again.
            </p>
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
