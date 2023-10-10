import './MobileNavbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ig from '../assets/instagram.png'
import wp from '../assets/whatsapp.png'
import yt from '../assets/youtube.png'

export const MobileNavbar = () => {
    const [image, setImage] = useState('≡');
    const [animation, setAnimation] = useState();
    const {home,homeHandler,service,serviceHandler,about,aboutHandler,contact,contactHandler,allHandler} = useContext(AppContext);

    function imageHandler() {
        if(image === '≡')
        {
            setImage('X')
            setAnimation(true);
        }
        else 
        {
            setImage('≡');
            setAnimation(false);
        }
    }
    function imageScreenHandler() {
        if(image === 'X') {
            setImage('≡');
        }
    }
  return (
    <nav className='flex justify-between items-center fixed top-0 w-full h-20 bg-black'>

        <div className=' mx-4' onClick={allHandler}>
            <Link to = '/'><img src={logo} onClick={imageScreenHandler}
            className=' w-[180px] rounded-sm hover:scale-105 transition-all duration-200'/></Link>
        </div>

        <button className=' text-white text-2xl' onClick={imageHandler}>
        {
           image === '≡' ? <div className=' mx-4 text-4xl'>{image}</div> : 
           (<div className=' relative'>
            <div className=' mx-5'>{image}</div>
            <ul 
            className=' absolute text-white w-screen h-screen pt-10 bg-black right-0'>
                <li onClick={homeHandler} className=' py-4 px-2 animate-[ping_.2s_.2s_1_reverse]'>
                    {
                        home ? (<Link to='/' className=' opacity-50'>Home</Link>):(<Link to='/' className=' opacity-100'>Home</Link>)
                    }
                </li>
                <li onClick={serviceHandler} className=' py-4 px-2 animate-[ping_.2s_.4s_1]'>
                    {
                        service ? (<Link to='/services' className=' opacity-50'>Services</Link>):(<Link to='/services' className=' opacity-100'>Services</Link>)
                    }
                </li>
                <li onClick={aboutHandler} className=' py-4 px-2 animate-[ping_.2s_.6s_1]'>
                    {
                        about ? (<Link to='/about' className=' opacity-50'>About</Link>):(<Link to='/about' className=' opacity-100'>About</Link>)
                    }
                </li>
                <li onClick={contactHandler} className=' py-4 px-2 animate-[ping_.2s_.8s_1]'>
                    {
                        contact ? (<Link to='/contact' className=' opacity-50'>Contact</Link>):(<Link to='/contact' className=' opacity-100'>Contact</Link>)
                    }
                </li>
                <div className=' flex items-center justify-evenly mt-5'>
                    <li className=' animate-[ping_.2s_1s_1]'>
                    <Link to='https://www.youtube.com/@therealman__lifts/featured'>
                      <img src={yt} width='40px' className=' mx-auto'/>
                    </Link>
                  
                    </li>
                    <li className=' animate-[ping_.2s_1.2s_1]'>
                        <Link to='https://www.instagram.com/therealman__lifts/'>
                        <img src={ig} width='30px' className=' mx-auto'/>
                        </Link>

                    </li>
                    <li className=' animate-[ping_.2s_1.4s_1]'>
                        <Link to='https://WA.me/919649530482'>
                        <img src={wp} width='30px' className=' mx-auto'/>
                    </Link>
                    </li>
                </div>

            </ul>
           </div>
           )
        }
        </button>
        
    </nav>
  )
}
