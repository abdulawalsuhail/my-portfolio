import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Banner from './pages/Home/Banner';
import Service from './pages/Service/Service/Service';

function App() {
  return (
    <div className='px-8 '>
      <Navbar/>
      <Banner/>
      <Service/>
      {/* <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
