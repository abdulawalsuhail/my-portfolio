
import './App.css';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service/Service';
import Contact from './pages/Home/Contact';

function App() {
  return (
    <div className='px-8'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
