
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Instruction } from './components/Instruction';
import { Main } from './components/Main';
import { Win } from './components/Win';
import { Error } from './components/Error';
import { Navbar } from './components/Navbar';

function App() {



  return (
    <div className=' h-full w-full'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>} />
          <Route path='/instruction' element={<Instruction/>} />
          <Route path='/game' element = {<Game/>} />
          <Route path='/congratulation' element = {<Win/>} />
          <Route path='*' element = {<Error/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
