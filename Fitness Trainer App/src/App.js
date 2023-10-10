import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { useEffect, useState } from 'react';
import { MobileNavbar } from './components/MobileNavbar';
import { Offer } from './components/Offer';
import { About } from './components/About';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  return (
      <div>

          {
            (width > 600) ? <Navbar/> : <MobileNavbar/> 
          }

          {/* <div className=' mt-44'>{width}</div> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/social' element={<Social/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/offer' element={<Offer/>}/>
          </Routes>

      </div>
  );
}

export default App;
