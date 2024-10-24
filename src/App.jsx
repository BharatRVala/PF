import { Route, Routes } from 'react-router-dom';
import Home from './pagees/Home';
import About from './pagees/About';
import Contact from './pagees/Contact';
import './App.css'; // Import App.css for styles
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
