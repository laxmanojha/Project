import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import ig from '../assets/instagram.png'
import wp from '../assets/whatsapp.png'
import yt from '../assets/youtube.png'

export const Navbar = () => {

  const {home,homeHandler,service,serviceHandler,about,aboutHandler,contact,contactHandler,allHandler} = useContext(AppContext);

  return (
    <nav className='flex fixed top-0 w-full h-20 bg-black '>

            <ul className='flex justify-between mx-10 items-center w-full'>
              
              <li onClick={allHandler}>
                <Link to = '/'><img src={logo} 
                className=' w-[180px] rounded-sm hover:scale-105 transition-all duration-200'/></Link>
              </li>

              <div className=' flex items-center gap-x-10 mr-10 text-white'>
                <li onClick={homeHandler} className=' hover:scale-110 transition-all duration-100'>
                    <Link to='/'>
                      {
                        home ? (<p className=' opacity-50'>Home</p>) : (<p className=' opacity-100'>Home</p>)
                      }
                    </Link>
                </li>
                <li onClick={serviceHandler} className=' hover:scale-110 transition-all duration-100'>
                    <Link to='/services'>
                      {
                        service ? (<p className=' opacity-50'>Services</p>) : (<p className=' opacity-100'>Services</p>)
                      }
                    </Link>
                </li>
                <li onClick={aboutHandler} className=' hover:scale-110 transition-all duration-100'>
                    <Link to='/about'>
                      {
                        about ? (<p className=' opacity-50'>About</p>) : (<p className=' opacity-100'>About</p>)
                      }
                    </Link>
                </li>
                <li onClick={contactHandler} className=' hover:scale-110 transition-all duration-100'>
                    <Link to='/contact'>
                      {
                        contact ? (<p className=' opacity-50'>Contact</p>) : (<p className=' opacity-100'>Contact</p>)
                      }
                    </Link>
                </li>
                <li>
                    <Link to='https://www.youtube.com/@therealman__lifts/featured' target='_blank'>
                      <img src={yt} width='40px' className=' hover:scale-110 transition-all duration-100'/>
                    </Link>
                  
                </li>
                <li>
                    <Link to='https://www.instagram.com/therealman__lifts/' target='_blank'>
                      <img src={ig} width='30px' className=' hover:scale-110 transition-all duration-100'/>
                    </Link>
                  
                </li>
                <li>
                    <Link to='https://WA.me/919649530482' target='_blank'>
                    <img src={wp} width='30px' className=' hover:scale-110 transition-all duration-100'/>
                  </Link>
                </li>
              </div>
              
            </ul>
    </nav>
  )
}
